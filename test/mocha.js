var JSDOM = require('jsdom').JSDOM;
var WMT =  require('web-midi-test');
var assert = require('assert');

var midi_out = new WMT.MidiDst('VIRTUAL MIDI-Out');
midi_out.connect();

global.__coverage__ = {};

describe('functions', function() {
  before(function() {
    return new Promise(function(resolve) {
      JSDOM.fromFile('test/test.html', {
        resources: 'usable',
        runScripts: 'dangerously',
        beforeParse: function(window) {
          window.__coverage__ = global.__coverage__;
          window.navigator.requestMIDIAccess = WMT.requestMIDIAccess;
        }
      }).then(function(dom) {

        global.window = dom.window;

        setTimeout(resolve, 500);
      });

    });
  });
  it('seems to work...', function() {
    assert.equal(0, 0);
  });
});
