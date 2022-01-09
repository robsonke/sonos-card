import { CSSResult, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StyleInfo, styleMap } from 'lit/directives/style-map.js';
import { until } from 'lit/directives/until.js';
import { HomeAssistant, LovelaceCardConfig } from 'custom-card-helpers';
import { styles } from './styles';
import { CARD_VERSION, ICONS, STATE_PROPERTIES } from './const';
import { HassEntity } from 'home-assistant-js-websocket';
import { arrayBufferToBase64 } from './utils';

console.info(
  `%c SONOS-CARD \n%c Version: ${CARD_VERSION}    `,
  'color: red; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray'
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).customCards = (window as any).customCards || [];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).customCards.push({
  type: 'sonos-card',
  name: 'Sonos-Card',
  preview: false,
  description: 'A responsive Sonos card with support for groups and playlists',
});

interface Config extends LovelaceCardConfig {
  entities: string[];
  background: string;
}

type EntityMap = {
  [entityId: string]: HassEntity;
}

/**
 * TODO:
 * - responsive grid
 * -- button sizes
 * - cover as player background
 * -- fix when no cover
 * - song progress
 * - bigger buttons on player
 */
@customElement('sonos-card')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class SonosCard extends LitElement {

  @property()
  public config!: Config;

  @property()
  private entities: EntityMap = {} as EntityMap;

  @property()
  private _hass!: HomeAssistant;

  @property()
  public active: string;

  constructor() {
    super();
    this.active = '';
  }

  public setConfig(config: Config): void {
    if (!config.entities) {
      throw new Error('You need to define entities');
    }

    this.config = {
      name: 'Sonos',
      ...config,
    };
  }

  public set hass(hass: HomeAssistant) {
    if (!hass) return;
    this._hass = hass;

    let changed = false;

    // populate entities map
    for (const entityId of this.config.entities) {
      const entity: HassEntity = this._hass.states[entityId];
      const cachedEntity = this.entities[entityId];
      if (cachedEntity) {
        if (entity && JSON.stringify(cachedEntity) !== JSON.stringify(entity)) {
          console.log("entity changed!");
          this.entities[entityId] = entity;
          changed = true;
        }
      }
      else {
        this.entities[entityId] = entity;
        changed = true;
      }
    }
    if (changed) {
      this.requestUpdate("entities");
    }
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    // only re-render when we want this
    const changed: boolean = STATE_PROPERTIES.some(prop => changedProps.has(prop));
    return changed;
  }

  protected render(): TemplateResult | void {
    console.log("RERENDER!!!!!!!");

    const speakerNames: string[] = [];
    const favorites: string[] = [];
    let first = true;
    for (const entity of this.config.entities) {
      const stateObj = this._hass.states[entity];
      //Get favorites list
      if (first) {
        first = false;
        for (const favorite of stateObj.attributes.source_list) {
          favorites.push(favorite);
        }
      }
      //Get speakerNames
      speakerNames[entity] = stateObj.attributes.friendly_name;

      if (stateObj.attributes['sonos_group'].length > 1 && stateObj.attributes['sonos_group'][0] == entity) {
        if (stateObj.state == 'playing' && this.active == '') {
          this.active = entity;
        }
      }
      else if (stateObj.attributes['sonos_group'].length == 1) {
        if (stateObj.state == 'playing' && this.active == '') {
          this.active = entity;
        }
      }
    }
    if (this.active === '' && this.config.entities.length > 0) {
      // no player is playing currently, lets set the first one
      this.active = this.config.entities[0];
    }

    return html`
      <ha-card
        .header="sonos-card">
        <div class="container">
          <div class="players">
            ${this.config.entities.map((entity) => {
              const stateObj = this._hass.states[entity];
              if (stateObj.attributes['sonos_group'].length == 1 || (stateObj.attributes['sonos_group'].length > 1 && stateObj.attributes['sonos_group'][0] == entity)) {
                return html`
                  <div class="group" data-entity="${entity}" @click="${(e: Event) => this.switchGroup(e)}">
                    <div class="wrap ${this.active == entity ? 'active' : ''}" data-entity="${entity}">
                      <div class="inner-wrap">
                        <span class="icon">
                          <div class="player ${stateObj.state == 'playing' ? 'active' : ''}">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                          </div>
                        </span>
                        <span class="cover-icon">${until(this.renderIcon(stateObj))}</span>
                        ${stateObj.attributes['sonos_group'].map((speaker: string) => {
                          return html`<span class="name">${speakerNames[speaker]}</span>`;
                        })}
                        <span class="state">${stateObj.attributes.media_artist} - ${stateObj.attributes.media_title}</span>
                      </div>
                    </div>
                  </div>
                `;
              } else {
                return html``;
              }
            })}
          </div>

          <div class="player-main">
            ${this.active != ''
              ? html`
                  <div class="player">
                    <div class="body__cover">${until(this.renderCover(this._hass.states[this.active]))}</div>
                    <div class="player__body">
                      <div class="body__info">
                        <div class="info__album">${this._hass.states[this.active].attributes.media_album_name}</div>
                        <div class="info__song">${this._hass.states[this.active].attributes.media_title}</div>
                        <div class="info__artist">${this._hass.states[this.active].attributes.media_artist}</div>
                      </div>
                      <div class="body__buttons">
                        <ul class="list list--buttons">
                          <li>
                            <ha-icon-button class="previous-button" @click="${(e: Event) => this._previousTrack(e, this.active)}" .icon=${ICONS.PREV}>
                              <ha-icon .icon=${ICONS.PREV}></ha-icon>
                            </ha-icon-button>
                          </li>
                          <li class="middle">
                            <a class="list__link">
                              ${this._hass.states[this.active].state !== 'playing'
                                ? html`
                                  <ha-icon-button class="play-button" @click="${(e: Event) => this._play(e, this.active)}" .icon=${ICONS.PLAY[this._hass.states[this.active].state]}>
                                    <ha-icon .icon=${ICONS.PLAY[this._hass.states[this.active].state]}></ha-icon>
                                  </ha-icon-button>`
                                : html`
                                  <ha-icon-button class="pause-button" @click="${(e: Event) => this._pause(e, this.active)}" .icon=${ICONS.PLAY[this._hass.states[this.active].state]}>
                                    <ha-icon .icon=${ICONS.PLAY[this._hass.states[this.active].state]}></ha-icon>
                                  </ha-icon-button>`}
                            </a>
                          </li>
                          <li>
                            <ha-icon-button class="next-button" @click="${(e: Event) => this._nextTrack(e, this.active)}" .icon=${ICONS.NEXT}>
                              <ha-icon .icon=${ICONS.NEXT}></ha-icon>
                            </ha-icon-button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="player__footer">
                      <ul class="list list--footer">
                        <li>
                          <ha-icon @click="${(e: Event) => this._volumeDown(e, this.active)}" .icon=${'mdi:volume-minus'}></ha-icon
                          ><input
                            type="range"
                            .value="${100 * this._hass.states[this.active].attributes.volume_level}"
                            @change=${(e: Event) => this._volumeSet(e, this.active)}
                            min="0"
                            max="100"
                            id="volumeRange"
                            class="volumeRange"
                            style="background: linear-gradient(to right, var(--sns-button-icon-color) 0%, var(--sns-button-icon-color) ${100 * this._hass.states[this.active].attributes.volume_level}%, rgb(211, 211, 211) ${100 *
                            this._hass.states[this.active].attributes.volume_level}%, rgb(211, 211, 211) 100%);"
                          /><ha-icon @click="${(e: Event) => this._volumeUp(e, this.active)}" .icon=${'mdi:volume-plus'}></ha-icon>
                        </li>
                      </ul>
                    </div>
                  </div>
              `
            : html``}

            <div class="extra-players">
              <div class="members">
                ${this.active != ''
                  ? html`${this._hass.states[this.active].attributes['sonos_group'].map((entity: string) => {
                      if (entity != this.active) {
                        return html`
                          <div class="member unjoin-member" data-member="${entity}" @click="${(e: Event) => this._unjoin(e)}">
                            <div class="member-inner" data-member="${entity}">
                              <ha-icon .icon=${'mdi:minus'}></ha-icon>
                              <span>${speakerNames[entity]} </span>
                            </div>
                          </div>
                        `;
                      } else {
                        return html``;
                      }
                    })}
                    ${this.config.entities.map((entity) => {
                      if (entity != this.active && !this._hass.states[this.active].attributes['sonos_group'].includes(entity)) {
                        return html`
                          <div class="member join-member" data-member="${entity}" @click="${(e: Event) => this._join(e)}">
                            <div class="member-inner" data-member="${entity}">
                              <ha-icon .icon=${'mdi:plus'}></ha-icon>
                              <span>${speakerNames[entity]} </span>
                            </div>
                          </div>
                        `;
                      } else {
                        return html``;
                      }
                    })}`
                  : html``}
              </div>
            </div>
          </div>

          <div class="playlists">
            ${favorites.map((favorite) => {
              return html`
                <div class="favorite" data-favorite="${favorite}" @click="${(e: Event) => this._sourceSet(e)}">
                  <div class="favorite-inner">
                    <span class="icon" style="">
                      <ha-icon .icon=${'mdi:play'}></ha-icon>
                    </span>
                    <span class="name">${favorite}</span>
                  </div>
                </div>
              `;
            })}
          </div>
        </div>
      </ha-card>
    `;
  }


  private switchGroup(e: Event) {
    const dataset = (e.target as HTMLElement).dataset;
    if (dataset?.entity) {
      this.active = dataset?.entity;
    }
  }

  private _pause(e: Event, entity: string): void {
    this.callService(e, 'media_player', 'media_pause', entity);
  }

  private _play(e: Event, entity: string): void {
    this.callService(e, 'media_player', 'media_play', entity);
  }

  private _nextTrack(e: Event, entity: string): void {
    this.callService(e, 'media_player', 'media_next_track', entity);
  }

  private _previousTrack(e: Event, entity: string): void {
    this.callService(e, 'media_player', 'media_previous_track', entity);
  }
  private _volumeDown(e: Event, entity: string): void {
    this.callService(e, 'media_player', 'volume_down', entity, { }, this._hass.states[entity].attributes['sonos_group']);
  }

  private _volumeUp(e: Event, entity: string): void {
    this.callService(e, 'media_player', 'volume_up', entity, { }, this._hass.states[entity].attributes['sonos_group']);
  }

  private _volumeSet(e: Event, entity: string): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const volumeFloat = (e.target as any).value / 100;
    this.callService(e, 'media_player', 'volume_set', entity, { volume_level: volumeFloat }, this._hass.states[entity].attributes['sonos_group']);
  }

  private _sourceSet(e: Event): void {
    const dataset = (e.target as HTMLElement).dataset;
    if (dataset?.favorite) {
      this.callService(e, 'media_player', 'select_source', this.active, { source: dataset.favorite });
    }
  }

  private _join(e: Event): void {
    const dataset = (e.target as HTMLElement).dataset;
    if (dataset?.member) {
      this.callService(e, 'sonos', 'join', dataset.member, { master: this.active });
    }
  }

  private _unjoin(e: Event): void {
    const dataset = (e.target as HTMLElement).dataset;
    if (dataset?.member) {
      this.callService(e, 'sonos', 'unjoin', dataset.member);
    }
  }

  private callService(e: Event, domain: string, service: string, entityId: string, options: {} = {}, members: string[] = []) {
    e.stopPropagation();
    this._hass.callService(domain, service, {
      ...(entityId && { entity_id: entityId }),
      ...options,
    });

    // and for all possible group members
    for (const member in members) {
      if (member !== entityId && this._hass.states[member]) {
        this._hass.callService(domain, service, {
          entity_id: member,
          ...options,
        });
      }
    }
  }

  public getCardSize(): number {
    return 1;
  }

  private async fetchCover(entity: HassEntity): Promise<string | null> {
    if (entity.attributes.entity_picture) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const url: string = entity.attributes.entity_picture_local ? (this._hass as any)._hassUrl(entity.attributes.entity_picture) : entity.attributes.entity_picture;
        const res = await fetch(new Request(url));
        const buffer: ArrayBuffer = await res.arrayBuffer();
        const image64 = arrayBufferToBase64(buffer);
        const imageType = res.headers.get('Content-Type') || 'image/jpeg';
        return `url(data:${imageType};base64,${image64})`;
      } catch (error) {
        console.debug("Fetch covers failed: " + error);
      }
    }
    return null;
  }

  private async renderCover(entity: HassEntity): Promise<TemplateResult<1 | 2>> {
    const cover: string | null = await this.fetchCover(entity);
    let style: StyleInfo;
    if (this.config.background === 'cover' && cover && cover.length > 0) {
      style = {
        backgroundImage: cover,
        width: '100%'
      };
    }
    else {
      // fallback to background color
      style = {
        background: 'var(--sns-player-background, #fff)',
        width: '100%'
      }
    }
    return html`<div class='entity__cover' style=${styleMap(style)}></div>`;
  }

  private async renderIcon(entity: HassEntity) {
    const cover: string | null = await this.fetchCover(entity);
    if (cover) {
      return html`
        <div class='entity__icon' style='background-image: ${cover};'></div>`;
    }
    return html``;
  }

  static get styles(): CSSResult {
    return styles;
  }
}