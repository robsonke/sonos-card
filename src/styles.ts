import { css } from "lit";

export const styles = css`
  ha-card {
    --sns-card-background: var(--ha-card-background, var(--paper-card-background-color, white));
    --sns-card-border-radius: var(--ha-card-border-radius, 2px);
    --sns-card-box-shadow: var(--ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2));
    --sns-card-primary-text-color: var(--primary-text-color);
    --sns-card-header-color: var(--ha-card-header-color, --primary-text-color);
    --sns-card-header-font-family: var(--ha-card-header-font-family, inherit);
    --sns-card-header-font-size: var(--ha-card-header-font-size, 24px);

    --sns-group-button-size-width: 150px;
    --sns-artwork-opacity: 1;
    --sns-button-icon-color: var(--paper-item-icon-color, var(--primary-color, rgba(211, 3, 32, 0.95)));

    --sns-player-background: #fff;
    --sns-player-button-size: 60px;

    background: var(--sns-card-background);
    border-radius: var(--sns-card-border-radius);
    box-shadow: var(--sns-card-box-shadow);
    color: var(--sns-card-primary-text-color);
    display: block;
    transition: all 0.3s ease-out;
    padding: 16px;
  }

  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1.5fr 0.5fr;
    gap: 1em 1em;
    grid-auto-flow: row;
    grid-template-areas:
      "players player-main"
      "playlists playlists";
  }

  div.container div.players {
    grid-area: players;
    display: flex;
    row-gap: 1rem;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .player-main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.6fr 0.4fr;
    gap: 1em 2em;
    grid-auto-flow: row;
    grid-template-areas:
      "player"
      "extra-players";
    grid-area: player-main;
  }

  div.container .player-main .player {
    grid-area: player;
    position: relative;
  }

  .extra-players {
    grid-area: extra-players;
  }

  div.playlists {
    grid-area: playlists;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: 800px) {
    .container {
      grid-template-areas:
        "players"
        "player-main"
        "playlists";
      grid-template-columns: 1fr;
      grid-template-rows: minmax(300px, auto);
    }
  }

  .header {
    color: var(--sns-card-header-color);
    font-family: var(--sns-card-header-font-family);
    font-size: var(--sns-card-header-font-size);
    letter-spacing: -0.012em;
    line-height: 32px;
    padding: 4px 0 12px;
    display: block;
  }
  .header .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .player__body {
    position: relative;
  }

  .body__cover {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .entity__cover {
    display: block;
    max-width: 100%;
    width: 100%;
    opacity: 0.4;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: var(--ha-card-border-radius, 0);
    overflow: hidden;
  }

  .list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .body__buttons,
  .body__info,
  .player__footer {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .list--footer {
    justify-content: space-between;
  }
  .list--footer li:last-child {
    flex: 1;
    display: flex;
    flex-direction: row;
    margin-left: 15px;
  }
  .list--footer li:last-child input {
    flex: 1;
  }
  .list--footer li:last-child ha-icon {
    margin: 0 5px;
    color: #888;
    font-size: 16px;
  }

  .volumeRange {
    -webkit-appearance: none;
    height: 5px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    margin: auto;
  }

  .list--cover {
    justify-content: flex-end;
  }

  .list--header .list__link,
  .list--footer .list__link {
    color: #888;
  }

  .list--cover {
    position: absolute;
    top: 0.5rem;
    width: 100%;
  }
  .list--cover li:first-of-type {
    margin-left: 0.75rem;
  }
  .list--cover li:last-of-type {
    margin-right: 0.75rem;
  }
  .list--cover a {
    font-size: 1.15rem;
    color: #fff;
  }

  .range {
    position: relative;
    top: -1.5rem;
    right: 0;
    left: 0;
    margin: auto;
    background: rgba(255, 255, 255, 0.95);
    width: 80%;
    height: 0.125rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  .range:before,
  .range:after {
    content: '';
    position: absolute;
    cursor: pointer;
  }
  .range:before {
    width: 3rem;
    height: 100%;
    background: -webkit-linear-gradient(left, rgba(211, 3, 32, 0.5), rgba(211, 3, 32, 0.85));
    background: linear-gradient(to right, rgba(211, 3, 32, 0.5), rgba(211, 3, 32, 0.85));
    border-radius: 0.25rem;
    overflow: hidden;
  }
  .range:after {
    top: -0.375rem;
    left: 3rem;
    z-index: 3;
    width: 0.875rem;
    height: 0.875rem;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.15);
    -webkit-transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
    transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  }
  .range:focus:after,
  .range:hover:after {
    background: var(--sns-button-icon-color);
  }

  .body__info {
    padding-top: 1.5rem;
    padding-bottom: 1.25rem;
    text-align: center;
    display: flex;
    min-width: 0;
  }

  .info__album,
  .info__song {
    flex: 1 1 auto;
    margin-bottom: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .info__artist,
  .info__album {
    font-size: 0.75rem;
    font-weight: 300;
    color: #666;
  }

  .info__artist {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1 1 auto;
  }

  .info__song {
    font-size: 1.15rem;
    font-weight: 400;
    color: var(--sns-button-icon-color);
  }

  .body__buttons {
    padding-bottom: 2rem;
  }

  .body__buttons {
    padding-top: 1rem;
  }

  .list--buttons {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .list--buttons li:nth-of-type(n + 2) {
    margin-left: 1.25rem;
  }

  .list--buttons a {
    padding-top: 0.45rem;
    padding-right: 0.75rem;
    padding-bottom: 0.45rem;
    padding-left: 0.75rem;
    font-size: 1rem;
    border-radius: 50%;
    //box-shadow: 0 3px 6px rgba(33, 33, 33, 0.1), 0 3px 12px rgba(33, 33, 33, 0.15);
  }
  .list--buttons a:focus,
  .list--buttons a:hover {
    color: var(--sns-button-icon-color);
    opacity: 1;
    //box-shadow: 0 6px 9px rgba(33, 33, 33, 0.1), 0 6px 16px rgba(33, 33, 33, 0.15);
  }

  .list--buttons li.middle a {
    padding: 0.82rem;
    margin-left: 0.5rem;
    font-size: 1.25rem !important;
    color: var(--sns-button-icon-color);
    opacity: 1 !important;
  }

  .list--buttons li:first-of-type a,
  .list--buttons li:last-of-type a {
    font-size: 0.95rem;
    color: var(--sns-button-icon-color);
    opacity: 0.5;
  }
  .list--buttons li:first-of-type a:focus,
  .list--buttons li:first-of-type a:hover,
  .list--buttons li:last-of-type a:focus,
  .list--buttons li:last-of-type a:hover {
    color: var(--sns-button-icon-color);
    opacity: 0.75;
  }

  div.player-main div.player ha-icon {
    --mdc-icon-size: var(--sns-player-button-size, 50px);
  }


  .list__link {
    -webkit-transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
    transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  }
  .list__link:focus,
  .list__link:hover {
    color: var(--sns-button-icon-color);
  }

  .player__footer {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }

  .list--footer a {
    opacity: 0.5;
  }
  .list--footer a:focus,
  .list--footer a:hover {
    opacity: 0.9;
  }

  .players > .group {
    display: flex;
    flex-grow: 1;
    max-height: 100px;
    min-width: 0;
    max-width: calc(var(--sns-group-button-size-width) * 2);
    flex-basis: calc(var(--sns-group-button-size-width) * 1.5);
    padding: 0;
    margin: 0;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
    position: relative;
    font-weight: 300;
    touch-action: auto !important;
    padding: 10px;
    border-radius: 12px;
    overflow: hidden;
    flex-direction: column;
    height: 100%;
  }

  @media ( max-width: 800px) {
    .players > .group {
      max-width: 100%;
    }
  }

  .group.active {
    background-color: rgba(255, 255, 255, 1);
  }

  .group span.icon {
    display: block;
    position: relative;
    height: 40px;
    width: 40px;
    color: var(--sns-button-icon-color);
    font-size: 30px;
    transform-origin: 50% 50%;
    line-height: 40px;
    text-align: center;
    pointer-events: none;
  }
  .group span.icon ha-icon {
    width: 30px;
    height: 30px;
    pointer-events: none;
  }
  .group span.name {
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.4);
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    white-space: normal;
    pointer-events: none;
    overflow: hidden;
  }
  .group span:nth-child(2) {
    margin-top: auto;
  }

  .group span.state {
    position: relative;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
    text-transform: capitalize;
    float: left;
    pointer-events: none;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div.group span.cover-icon {
    position: absolute;
    right: 4px;
    top: 4px;
    width: 40px;
    height: 40px;
  }

  .entity__icon {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    position: relative;
  }

  .group .player .bar {
    background: var(--sns-button-icon-color);
    bottom: 1px;
    height: 3px;
    position: absolute;
    width: 4px;
    animation: sound 0ms -800ms linear infinite alternate;
    display: block;
  }

  .group .player .bar:nth-child(1) {
    left: 1px;
  }
  .group .player .bar:nth-child(2) {
    left: 6px;
  }
  .group .player .bar:nth-child(3) {
    left: 11px;
  }

  .group .player.active .bar:nth-child(1) {
    animation-duration: 474ms;
  }
  .group .player.active .bar:nth-child(2) {
    animation-duration: 433ms;
  }
  .group .player.active .bar:nth-child(3) {
    animation-duration: 407ms;
  }

  .group .wrap .inner-wrap span.name,
  .group .wrap .inner-wrap span.state {
    color: rgb(0, 0, 0);
  }

  div.members {
    display: flex;
    height: 100%;
    column-gap: 1rem;
    row-gap: 1rem;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  div.members > .member {
    cursor: pointer;
    display: inline-block;
    flex-grow: 1;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
    position: relative;
    font-weight: 300;
    touch-action: auto !important;
    padding: 10px;
    border-radius: 12px;
    overflow: hidden;
  }

  .member .member-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    pointer-events: none;
  }

  div.members > .member span {
    font-size: 14px;
    font-weight: 500;
    color: #000;
    width: 100%;
    margin-top: auto;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    white-space: normal;
    pointer-events: none;
    overflow: hidden;
  }

  div.members > .member ha-icon {
    display: block;
    height: 30px;
    width: 30px;
    color: #888;
    font-size: 30px;
    transform-origin: 50% 50%;
    line-height: 40px;
    text-align: center;
    pointer-events: none;
  }

  .member:hover ha-icon {
    color: var(--sns-button-icon-color);
  }

  div.playlists > .favorite {
    cursor: pointer;
    display: inline-block;
    min-width: 60px;
    flex: 1 1 0;
    height: 6rem;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
    position: relative;
    font-weight: 300;
    touch-action: auto !important;
    padding: 10px;
    border-radius: 12px;
    overflow: hidden;
  }
  div.playlists > .favorite .favorite-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    pointer-events: none;
  }
  div.playlists > .favorite span.icon {
    display: block;
    height: 40px;
    width: 40px;
    color: var(--sns-button-icon-color);
    font-size: 30px;
    transform-origin: 50% 50%;
    line-height: 40px;
    text-align: center;
    pointer-events: none;
  }
  div.playlists > .favorite span.icon ha-icon {
    width: 30px;
    height: 30px;
    pointer-events: none;
  }
  div.playlists > .favorite span.name {
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.4);
    width: 100%;
    margin-top: auto;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    white-space: normal;
    pointer-events: none;
    overflow: hidden;
  }

  @keyframes sound {
    0% {
      opacity: 0.35;
      height: 3px;
    }
    100% {
      opacity: 1;
      height: 20px;
    }
  }

`;