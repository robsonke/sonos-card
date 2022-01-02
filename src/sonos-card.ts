import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { styles } from './styles';
import { CARD_VERSION } from './const';

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

interface Config {
  entities: string[];
}

/**
 * TODO:
 * - responsive grid
 * - cover as player background
 * - song progress
 */
@customElement('sonos-card')
class SonosCard extends LitElement {

  @property({ type: Object })
  public config!: Config;

  @property()
  private _hass!: HomeAssistant;

  @property({ type: Object })
  public active: string;

  constructor() {
    super();
    this.active = '';
  }

  public set hass(hass: HomeAssistant) {
    this._hass = hass;
  }

  render(): TemplateResult | void {
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
      } else if (stateObj.attributes['sonos_group'].length == 1) {
        if (stateObj.state == 'playing' && this.active == '') {
          this.active = entity;
        }
      }
    }

    return html`
      <ha-card>
        <div class="center">
          <div class="groups">
            ${this.config.entities.map((entity) => {
              const stateObj = this._hass.states[entity];
              if (stateObj.attributes['sonos_group'].length == 1 || (stateObj.attributes['sonos_group'].length > 1 && stateObj.attributes['sonos_group'][0] == entity)) {
                return html`
                  <div class="group" data-entity="${entity}">
                    <div class="wrap ${this.active == entity ? 'active' : ''}">
                      <div class="inner-wrap">
                        <span class="icon" style="">
                          <div class="player ${stateObj.state == 'playing' ? 'active' : ''}">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                          </div>
                        </span>
                        ${stateObj.attributes['sonos_group'].map((speaker) => {
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

          <div class="players">
            ${this.active != ''
              ? html`
                  <div class="player__container">
                    <div class="player__body">
                      <div class="body__cover"></div>
                      <div class="body__info">
                        <div class="info__album">${this._hass.states[this.active].attributes.media_album_name}</div>
                        <div class="info__song">${this._hass.states[this.active].attributes.media_title}</div>
                        <div class="info__artist">${this._hass.states[this.active].attributes.media_artist}</div>
                      </div>
                      <div class="body__buttons">
                        <ul class="list list--buttons">
                          <li class="middle">
                            <a class="list__link">
                              ${this._hass.states[this.active].state != 'playing'
                                ? html`<ha-icon @click="${() => this._play(this.active)}" .icon=${'mdi:play'}></ha-icon>`
                                : html`<ha-icon @click="${() => this._pause(this.active)}" .icon=${'mdi:stop'}></ha-icon>`}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="player__footer">
                      <ul class="list list--footer">
                        <li>
                          <ha-icon @click="${() => this._volumeDown(this.active)}" .icon=${'mdi:volume-minus'}></ha-icon
                          ><input
                            type="range"
                            .value="${100 * this._hass.states[this.active].attributes.volume_level}"
                            @change=${(e) => this._volumeSet(this.active, e.target.value)}
                            min="0"
                            max="100"
                            id="volumeRange"
                            class="volumeRange"
                            style="background: linear-gradient(to right, var(--sns-button-icon-color) 0%, var(--sns-button-icon-color) ${100 * this._hass.states[this.active].attributes.volume_level}%, rgb(211, 211, 211) ${100 *
                            this._hass.states[this.active].attributes.volume_level}%, rgb(211, 211, 211) 100%);"
                          /><ha-icon @click="${() => this._volumeUp(this.active)}" .icon=${'mdi:volume-plus'}></ha-icon>
                        </li>
                      </ul>
                    </div>
                  </div>
              `
            : html``}
          </div>

          <div class="sidebar">
            <ul class="members">
              ${this.active != ''
                ? html`${this._hass.states[this.active].attributes['sonos_group'].map((entity: string) => {
                    if (entity != this.active) {
                      return html`
                        <li>
                          <div class="member unjoin-member" data-member="${entity}" @click="${(e) => this._unjoin(e)}">
                            <div class="member-inner">
                              <ha-icon .icon=${'mdi:minus'}></ha-icon>
                              <span>${speakerNames[entity]} </span>
                            </div>
                          </div>
                        </li>
                      `;
                    } else {
                      return html``;
                    }
                  })}
                  ${this.config.entities.map((entity) => {
                    if (entity != this.active && !this._hass.states[this.active].attributes['sonos_group'].includes(entity)) {
                      return html`
                        <li>
                          <div class="member join-member" data-member="${entity}" @click="${(e) => this._join(e)}">
                            <div class="member-inner">
                              <ha-icon .icon=${'mdi:plus'}></ha-icon>
                              <span>${speakerNames[entity]} </span>
                            </div>
                          </div>
                        </li>
                      `;
                    } else {
                      return html``;
                    }
                  })}`
                : html``}
            </ul>
          </div>
        </div>
        <div class="center">
          <ul class="favorites">
            ${favorites.map((favorite) => {
              return html`
                <li>
                  <div class="favorite" data-favorite="${favorite}" @click="${(e) => this._sourceSet(e)}">
                    <div class="favorite-inner">
                      <span class="icon" style="">
                        <ha-icon .icon=${'mdi:play'}></ha-icon>
                      </span>
                      <span class="name">${favorite}</span>
                    </div>
                  </div>
                </li>
              `;
            })}
          </ul>
        </div>
      </ha-card>
    `;
  }

  updated(): void {
    //Set active player
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.shadowRoot?.querySelectorAll('.group').forEach((group: any) => {
      group.addEventListener('click', () => {
        this.active = group.dataset.entity || '';
      });
    });
  }

  _pause(entity: string): void {
    this._hass.callService('media_player', 'media_pause', {
      entity_id: entity,
    });
  }

  _play(entity: string): void {
    this._hass.callService('media_player', 'media_play', {
      entity_id: entity,
    });
  }

  _volumeDown(entity: string): void {
    this._hass.callService('media_player', 'volume_down', {
      entity_id: entity,
    });

    for (const member in this._hass.states[entity].attributes['sonos_group']) {
      if (member != entity) {
        this._hass.callService('media_player', 'volume_down', {
          entity_id: member,
        });
      }
    }
  }

  _volumeUp(entity: string): void {
    this._hass.callService('media_player', 'volume_up', {
      entity_id: entity,
    });

    for (const member in this._hass.states[entity].attributes['sonos_group']) {
      if (member != entity) {
        this._hass.callService('media_player', 'volume_up', {
          entity_id: member,
        });
      }
    }
  }

  _volumeSet(entity: string, volume: number): void {
    const volumeFloat = volume / 100;
    this._hass.callService('media_player', 'volume_set', {
      entity_id: entity,
      volume_level: volumeFloat,
    });

    for (const member in this._hass.states[entity].attributes['sonos_group']) {
      if (member != entity) {
        this._hass.callService('media_player', 'volume_set', {
          entity_id: member,
          volume_level: volumeFloat,
        });
      }
    }
  }

  _sourceSet(e): void {
    if (e.target.dataset && e.target.dataset.favorite) {
      this._hass.callService('media_player', 'select_source', {
        source: e.target.dataset.favorite,
        entity_id: this.active,
      });
    }
  }
  _join(e): void {
    if (e.target.dataset && e.target.dataset.member) {
      this._hass.callService('sonos', 'join', {
        master: this.active,
        entity_id: e.target.dataset.member,
      });
    }
  }
  _unjoin(e): void {
    if (e.target.dataset && e.target.dataset.member) {
      this._hass.callService('sonos', 'unjoin', {
        master: this.active,
        entity_id: e.target.dataset.member,
      });
    }
  }

  setConfig(config: Config): void {
    if (!config.entities) {
      throw new Error('You need to define entities');
    }
    this.config = config;
  }

  getCardSize(): number {
    return 1;
  }

  static get styles(): CSSResult {
    return styles;
  }
}