// runkit-midi internally uses jzz-gui-player
const rkmidi = require('runkit-midi');
const download = require('download');
const midi = await download('https://github.com/jazz-soft/JZZ-gui-Karaoke/raw/master/mary.mid');
rkmidi(midi);
// click the [▶run] button... ↓