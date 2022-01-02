# JZZ-gui-Player

MIDI Player GUI for browsers

![Firefox](https://jazz-soft.github.io/img/firefox.jpg)
![Chrome](https://jazz-soft.github.io/img/chrome.jpg)
![Opera](https://jazz-soft.github.io/img/opera.jpg)
![Safari](https://jazz-soft.github.io/img/safari.jpg)
![Internet Explorer](https://jazz-soft.github.io/img/msie.jpg)
![Edge](https://jazz-soft.github.io/img/edgc.jpg)  
[![npm](https://img.shields.io/npm/v/jzz-gui-player.svg)](https://www.npmjs.com/package/jzz-gui-player)
[![npm](https://img.shields.io/npm/dt/jzz-gui-player.svg)](https://www.npmjs.com/package/jzz-gui-player)
[![build](https://github.com/jazz-soft/JZZ-gui-Player/actions/workflows/build.yml/badge.svg)](https://github.com/jazz-soft/JZZ-gui-Player/actions)
[![Coverage Status](https://coveralls.io/repos/github/jazz-soft/JZZ-gui-Player/badge.svg?branch=master)](https://coveralls.io/github/jazz-soft/JZZ-gui-Player?branch=master)
[![Try jzz-gui-player on RunKit](https://badge.runkitcdn.com/jzz-gui-player.svg)](https://npm.runkit.com/jzz-gui-player)

[![MIDI Player](https://jazz-soft.github.io/img/midi-player.png)](https://jazz-soft.net/doc/JZZ/midiplayer.html)

See the [**demo**](https://jazz-soft.github.io/modules/smf/index.html)...

## Install

`npm install jzz-gui-player --save`  
or `yarn add jzz-gui-player`  
or get the full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-gui-Player)

## Usage

##### Polymer
https://github.com/jazz-soft/polymer-midi-player

##### React
https://github.com/jazz-soft/react-midi-player

##### Plain HTML

```html
<script src="JZZ.js"></script>
<script src="JZZ.midi.SMF.js"></script>
<script src="JZZ.gui.Player.js"></script>
//...
```

##### CDN (jsdelivr)

```html
<script src="https://cdn.jsdelivr.net/npm/jzz"></script>
<script src="https://cdn.jsdelivr.net/npm/jzz-midi-smf"></script>
<script src="https://cdn.jsdelivr.net/npm/jzz-gui-player"></script>
//...
```

##### CDN (unpkg)

```html
<script src="https://unpkg.com/jzz"></script>
<script src="https://unpkg.com/jzz-midi-smf"></script>
<script src="https://unpkg.com/jzz-gui-player"></script>
//...
```

##### CommonJS

```js
var JZZ = require('jzz');
require('jzz-midi-smf')(JZZ);
require('jzz-gui-player')(JZZ);
//...
```

##### AMD

```js
require(['JZZ', 'JZZ.midi.SMF', 'JZZ.gui.Player'], function(JZZ, smf, player) {
  // ...
});
```

## Playing MIDI file

Please check the [**API Reference**](https://jazz-soft.net/doc/JZZ/midiplayer.html) !

```html
<div id=player></div>

<script>
  var player = new JZZ.gui.Player('player');
  var data = ... // load MIDI file as string
  player.load(new JZZ.MIDI.SMF(data));
  player.play();
</script>
```

## More information

Please visit [**https://jazz-soft.net**](https://jazz-soft.net) for more information.  
