# JZZ-gui-Player

MIDI Player GUI for browsers

![](http://jazz-soft.github.io/img/firefox.jpg)
![](http://jazz-soft.github.io/img/chrome.jpg)
![](http://jazz-soft.github.io/img/opera.jpg)
![](http://jazz-soft.github.io/img/safari.jpg)
![](http://jazz-soft.github.io/img/msie.jpg)

![](https://jazz-soft.github.io/img/jzzguiplayer.png)

## Install

[**npm install jzz-gui-player**](https://www.npmjs.com/package/jzz-gui-player)  
or **bower install jzz-gui-player**  
or **yarn add jzz-gui-player**  
or get the full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-gui-Player)

## Usage

##### Plain HTML

    <script src="JZZ.js"></script>
    <script src="JZZ.midi.SMF.js"></script>
    <script src="JZZ.gui.Player.js"></script>
    //...

##### CDN (always the latest version!)

    <script src="https://cdn.jsdelivr.net/npm/jzz"></script>
    <script src="https://cdn.jsdelivr.net/npm/jzz-midi-smf"></script>
    <script src="https://cdn.jsdelivr.net/npm/jzz-gui-player"></script>
    //...

##### CommonJS

    var JZZ = require('jzz');
    require('jzz-midi-smf')(JZZ);
    require('jzz-gui-player')(JZZ);
    //...

##### AMD

    require(['JZZ', 'JZZ.midi.SMF', 'JZZ.gui.Player'], function(JZZ, smf, player) {
      // ...
    });

## Playing MIDI file

    <div id=player></div>

    <script><!--
      var player = new JZZ.gui.Player('player');
      var data = ... // load MIDI file as string
      player.load(new JZZ.MIDI.SMF(data));
      player.play();
    --></script>

## More information

Please visit [**https://jazz-soft.net**](https://jazz-soft.net) for more information.  
Your questions and comments are welcome [**here**](https://jazz-soft.org).

We would really appreciate your [**support**](https://jazz-soft.net/donate)!
