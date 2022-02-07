# Sonos custom card
Customize media player for sonos speakers!<br>
Heavily based on https://github.com/DBuit/sonos-card<br>
But with some extras:
* responsive design
* using covers as background and icons
* stylable with css variables

## Features:
* Group/Ungroup speakers
* Control multiple speaker
* Play favorites from list

![Screenshot of card](screenshot.jpg)


## Example

```yaml
type: "custom:sonos-card"
name: "Sonos"
background: cover
entities:
  - media_player.player1
  - media_player.player2
```

## Custom Styling
You can override several css variables with the [Card Mod](https://github.com/thomasloven/lovelace-card-mod) plugin.

For example:
```yaml
card_mod:
  style: |
    ha-card.type-custom-sonos-card {
      --sns-button-icon-color: var(--primary-color);
      --sns-player-background: transparant;
      --sns-card-primary-text-color: #fff;
    }
```

## Installation
Use HACS.

## To do
* Improve css, it's messy now but it works
* Show song progress with option to skip/scan
* Make mobile view more compact
