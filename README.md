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

![Screenshot of card](screenshot.png)

<details>
  <summary><b>Example lovelace yaml:</b></summary>

```yaml
views:
- title: "Sonos"
    icon: mdi:speaker
    id: music
    panel: true
    cards:
      - type: "custom:sonos-card"
        name: "Sonos"
        background: cover
        entities:
          - media_player.player1
          - media_player.player2
```

## Installation
Use HACS.

</details>

