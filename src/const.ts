export const CARD_VERSION = '2.0.1';

export const STATE_PROPERTIES = [ 'entities', 'active' ];

export const ICONS = {
  MUTE: {
    true: 'mdi:volume-off',
    false: 'mdi:volume-high',
  },
  NEXT: 'mdi:skip-next',
  PLAY: {
    playing: 'mdi:pause',
    paused: 'mdi:play',
  },
  PREV: 'mdi:skip-previous',
  STOP: {
    true: 'mdi:stop',
    false: 'mdi:play',
  },
  VOL_DOWN: 'mdi:volume-minus',
  VOL_UP: 'mdi:volume-plus',
};