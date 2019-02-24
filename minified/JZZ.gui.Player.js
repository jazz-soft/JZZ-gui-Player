!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i:"function"==typeof define&&define.amd?define("JZZ.gui.Player",["JZZ","JZZ.midi.SMF"],i):i(JZZ)}(0,function(p){if(p.gui||(p.gui={}),!p.gui.Player){var s={on:t,off:t,disable:t,div:{}};v.prototype.on=function(){this.div.style.backgroundColor="#ddd",this.div.style.borderColor="#ccc",this.div.firstChild.style.fill="#000"},v.prototype.off=function(){this.div.style.backgroundColor="#aaa",this.div.style.borderColor="#ccc",this.div.firstChild.style.fill="#000"},v.prototype.disable=function(){this.div.style.backgroundColor="#888",this.div.style.borderColor="#aaa",this.div.firstChild.style.fill="#555"};var l='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',a='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',r='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 6h12v12H6z"/></svg>',h='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>',d='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/></svg>',c='<svg fill="#555" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M10 4H2v16h20V6H12l-2-2z"/></svg>',u='<svg fill="#555" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/><path fill="none" d="M0 0h24v24H0z"/></svg>',y='<svg stroke="#ff8" xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7"><line x1="1" y1="1" x2="6" y2="6"/><line x1="1" y1="6" x2="6" y2="1"/></svg>',f=0;((g.prototype=new p.Widget).constructor=g).prototype.disable=function(){this.playBtn.disable(),this.pauseBtn.disable(),this.stopBtn.disable(),this.loopBtn.disable(),this.midiBtn.disable(),this.fileBtn.off(),this.rail.style.borderColor="#aaa",this.rail.style.backgroundColor="#888",this.caret.style.borderColor="#aaa",this.caret.style.backgroundColor="#888"},g.prototype.enable=function(){this.playBtn.off(),this.pauseBtn.off(),this.stopBtn.off(),this.loopBtn.off(),this._conn&&this.midiBtn.off(),this.rail.style.borderColor="#ccc",this.caret.style.backgroundColor="#aaa",this.caret.style.borderColor="#ccc"},g.prototype.load=function(t){var i=this;this._player=t.player(),this._player.connect(this),this._player.onEnd=function(){i._onEnd()},this.enable(),this.onLoad(t)},g.prototype.onEnd=function(){},g.prototype.onLoad=function(){},g.prototype._onEnd=function(){this.onEnd(),this._loop&&-1!=this._loop&&this._loop--,this._loop?1==this._loop?(this._loop=0,this.loopBtn.off(),this.loopBtn.div.title="loop"):this.loopBtn.div.title="loop: "+(-1==this._loop?"∞":this._loop):(this._moving&&clearInterval(this._moving),this._move(),this._playing=!1,this.playBtn.off())},g.prototype._move=function(){var t=Math.round(this._player.positionMS()*this.rlen/this._player.durationMS())-5;this.caret.style.left=t+"px"},g.prototype.onPlay=function(){},g.prototype.onResume=function(){},g.prototype.play=function(){if(this._player){var t=this;if(this.playBtn.on(),this.pauseBtn.off(),this._playing)return;this._paused?this.onResume():this.onPlay(),this._playing=!0,this._paused=!1,this._out||!this._conn?(this._player.resume(),this._moving=setInterval(function(){t._move()},100)):this._waiting||(this._waiting=!0,p().openMidiOut(void 0,/MIDI Through/i).and(function(){t._out=this,t._outname=this.name(),t._connect(this),t._waiting=!1,t._playing&&(t._player.resume(),t._moving=setInterval(function(){t._move()},100))}))}},g.prototype.onStop=function(){},g.prototype.stop=function(){if(this._player){var t=this;this._player.stop(),p.lib.schedule(function(){t.onStop()}),this._moving&&clearInterval(this._moving),this._playing=!1,this._paused=!1,this.playBtn.off(),this.pauseBtn.off(),this._move()}},g.prototype.onPause=function(){},g.prototype.pause=function(t){if(this._player){var i=this;this._paused?(void 0===t||t)&&(this._out?(this._player.resume(),this.onResume(),this._moving=setInterval(function(){i._move()},100),this._playing=!0,this._paused=!1,this.playBtn.on(),this.pauseBtn.off()):this.play()):this._playing&&(void 0!==t&&t||(this._player.pause(),p.lib.schedule(function(){i.onPause()}),this._moving&&clearInterval(this._moving),this._playing=!1,this._paused=!0,this.playBtn.off(),this.pauseBtn.on()))}},g.prototype.loop=function(t){this._player&&(void 0===t&&(t=!this._loop),t==parseInt(t)&&0<t?this._loop=t:this._loop=t?-1:0,1==this._loop&&(this._loop=0),this._player.loop(this._loop),this._loop?(this.loopBtn.on(),this.loopBtn.div.title="loop: "+(-1==this._loop?"∞":this._loop)):(this.loopBtn.off(),this.loopBtn.div.title="loop"))},g.prototype.onClose=function(){},g.prototype.destroy=function(){if(this.stop(),this._out){var t=this._out;p.lib.schedule(function(){t.close()})}this.gui.parentNode.removeChild(this.gui),this.onClose()},g.prototype.setUrl=function(t,i){this.linkBtn&&(this._url&&(this.linkBtn.div.appendChild(this._url.firstChild),this.linkBtn.div.removeChild(this._url),this._url=void 0),void 0===t?this.linkBtn.disable():(this.linkBtn.off(),this._url=document.createElement("a"),this._url.target="_blank",this._url.appendChild(this.linkBtn.div.firstChild),this.linkBtn.div.appendChild(this._url),this._url.href=t,this._url.dataset||(this._url.dataset={}),this._url.dataset.jzzGuiPlayer=!0,void 0!==i&&(this._url.download=i)))},g.prototype.readFile=function(s){var l=this,t=new FileReader;t.onload=function(t){for(var i="",e=new Uint8Array(t.target.result),o=0;o<e.length;o++)i+=String.fromCharCode(e[o]);try{var n=new p.MIDI.SMF(i);l.stop(),p.lib.schedule(function(){l.load(n)}),l.linkBtn&&l.setUrl("data:audio/midi;base64,"+p.lib.toBase64(i),s.name)}catch(t){}},t.readAsArrayBuffer(s)},g.prototype._closeselect=function(){this.midiBtn.off(),this.select.style.display="none",this._more=!1},g.prototype.settings=function(){if(this._player&&!this._more&&this._conn){var e=this;this._more=!0,this.midiBtn.on(),this.select.style.display="inline-block",p().refresh().and(function(){var t,i=this.info().outputs;for(t=0;t<e.select.options.length;t++)e.select.remove(t);for(t=0;t<i.length;t++)e.select[t]=new Option(i[t].name,i[t].name,i[t].name==e._outname,i[t].name==e._outname);e.select.size=i.length<2?2:i.length,e.select.focus()})}},g.prototype._selectMidi=function(){var i=this;p().openMidiOut(this._newname).or(function(){i._newname=void 0,i._closeselect()}).and(function(){if(i._outname=i._newname,i._out){if(i._playing)for(var t=0;t<16;t++)i._out._receive(p.MIDI.allSoundOff(t));i._disconnect(i._out),i._out.close()}i._out=this,i._connect(this),i._newname=void 0,i._closeselect()})},g.prototype._selected=function(){var t=this;this._newname=this.select.options[this.select.selectedIndex].value,this._newname==this._outname?(this._newname=void 0,t._closeselect()):setTimeout(function(){t._selectMidi()},0)},g.prototype._keydown=function(t){13!=t.keyCode&&32!=t.keyCode||this._selected()},g.prototype.type=function(){return this._player?this._player.type():0},g.prototype.tracks=function(){return this._player?this._player.tracks():0},g.prototype.duration=function(){return this._player?this._player.duration():0},g.prototype.durationMS=function(){return this._player?this._player.durationMS():0},g.prototype.position=function(){return this._player?this._player.position():0},g.prototype.positionMS=function(){return this._player?this._player.positionMS():0},g.prototype.tick2ms=function(){return this._player?this._player.tick2ms():0},g.prototype.ms2tick=function(){return this._player?this._player.ms2tick():0},g.prototype.onJump=function(){},g.prototype.jump=function(t){this._player&&(this._player.jump(t),this._move(),this._playing||(t?(this._paused=!0,this.playBtn.off(),this.pauseBtn.on()):(this._paused=!1,this.playBtn.off(),this.pauseBtn.off())),this.onJump(this._player.position()))},g.prototype.jumpMS=function(t){this._player&&(this._player.jumpMS(t),this._move(),this._playing||(t?(this._paused=!0,this.playBtn.off(),this.pauseBtn.on()):(this._paused=!1,this.playBtn.off(),this.pauseBtn.off())),this.onJump(this._player.position()))},g.prototype._mousedown=function(t){i(t)&&this._player&&(t.preventDefault(),this.caret.style.backgroundColor="#ddd",this._wasPlaying=this._playing,this._player.pause(),this._caretX=t.clientX,this._caretPos=parseInt(this.caret.style.left)+5)},g.prototype._startmove=function(t){i(t)&&(t.preventDefault(),this._startX=parseInt(this.gui.style.left),this._startY=parseInt(this.gui.style.top),this._clickX=t.clientX,this._clickY=t.clientY)},g.prototype._mouseup=function(t){this._player&&void 0!==this._caretX&&(this._wasPlaying&&(this._wasPlaying=void 0,this._player.resume()),this.caret.style.backgroundColor="#aaa",this._caretX=void 0),void 0!==this._startX&&(this._startX=void 0,this._startY=void 0,this._clickX=void 0,this._clickY=void 0)},g.prototype._mousemove=function(t){if(this._player&&void 0!==this._caretX){t.preventDefault();var i=this._caretPos+t.clientX-this._caretX;i<0&&(i=0),i>this.rlen&&(i=this.rlen),this.jumpMS(this.durationMS()*i*1/this.rlen)}else void 0!==this._startX&&(t.preventDefault(),this.gui.style.left=this._startX-this._clickX+t.clientX+"px",this.gui.style.top=this._startY-this._clickY+t.clientY+"px")},g.prototype._connect=g.prototype.connect,g.prototype._disconnect=g.prototype.disconnect,g.prototype.connect=function(t){t==this?(this._conn=!0,this._player&&this.midiBtn.off()):this._connect(t)},g.prototype.disconnect=function(t){t==this?(this._conn=!1,this._out&&this._disconnect(this._out),this._player&&this.midiBtn.disable()):this._disconnect(t)},p.gui.Player=g}function t(){}function v(t){this.div=document.createElement("div"),this.div.style.display="inline-block",this.div.style.position="absolute",this.div.style.top="8px",this.div.style.margin="0",this.div.style.padding="2px",this.div.style.borderStyle="solid",this.div.style.borderWidth="1px",this.div.style.borderColor="#aaa",this.div.style.backgroundColor="#888",this.div.style.lineHeight="0",this.div.style.lineSpasing="0",this.div.style.width="18px",this.div.style.height="18px",this.div.innerHTML=t}function _(t){t.stopPropagation(),t.preventDefault()}function g(t,i){if(!(this instanceof g))return new g(t,i);var e={at:void 0,x:void 0,y:void 0,play:!0,record:!1,pause:!0,stop:!0,loop:!0,file:!1,link:!1,midi:!0,close:!1,connect:!0};for(var o in e)e.hasOwnProperty(o)&&void 0!==t[o]&&(e[o]=t[o]);if(void 0===e.at&&(e.at=t),void 0===e.x&&(e.x=t),void 0===e.y&&(e.y=i),function(i,t){i.gui=document.createElement("div"),i.gui.style.display="inline-block",i.gui.style.position="relative",i.gui.style.margin="0px",i.gui.style.padding="0px",i.gui.style.borderStyle="none",i.gui.style.backgroundColor="#888",i.gui.style.width="270px",i.gui.style.height="40px";var e=8,o=238,n=28;t.play?(i.playBtn=new v(l),i.playBtn.div.style.left=e+"px",e+=n,i.playBtn.div.title="play",i.playBtn.div.addEventListener("click",function(){i.play()}),i.gui.appendChild(i.playBtn.div)):i.playBtn=s,t.pause?(i.pauseBtn=new v(a),i.pauseBtn.div.style.left=e+"px",e+=n,i.pauseBtn.div.title="pause",i.pauseBtn.div.addEventListener("click",function(){i.pause()}),i.gui.appendChild(i.pauseBtn.div)):i.pauseBtn=s,t.stop?(i.stopBtn=new v(r),i.stopBtn.div.style.left=e+"px",e+=n,i.stopBtn.div.title="stop",i.stopBtn.div.addEventListener("click",function(){i.stop()}),i.gui.appendChild(i.stopBtn.div)):i.stopBtn=s,t.loop?(i.loopBtn=new v(h),i.loopBtn.div.style.left=e+"px",e+=n,i.loopBtn.div.title="loop",i.loopBtn.div.addEventListener("click",function(){i.loop()}),i.gui.appendChild(i.loopBtn.div)):i.loopBtn=s,t.midi?(i.midiBtn=new v(d),i.midiBtn.div.style.left=o+"px",o-=n,i.midiBtn.div.title="midi",i.midiBtn.div.addEventListener("click",function(){i.settings()}),i.gui.appendChild(i.midiBtn.div),i.select=document.createElement("select"),i.select.style.position="absolute",i.select.style.top="30px",i.select.style.left="40px",i.select.style.width="230px",i.select.style.display="none",i.select.style.zIndex=1,i.select.addEventListener("click",function(){i._selected()}),i.select.addEventListener("keydown",function(t){i._keydown(t)}),i.select.addEventListener("focusout",function(){i._closeselect()}),i.gui.appendChild(i.select)):i.midiBtn=s,t.link&&(i.linkBtn=new v(u),i.linkBtn.div.style.left=o+"px",o-=n,i.linkBtn.div.title="link",i.gui.appendChild(i.linkBtn.div)),t.file?(i.fileBtn=new v(c),i.fileBtn.div.style.left=o+"px",o-=n,i.fileBtn.div.title="file",i.gui.appendChild(i.fileBtn.div),i.fileInput=document.createElement("input"),i.fileInput.type="file",i.fileInput.style.position="fixed",i.fileInput.style.top="-1000px",i.fileInput.accept=".mid, .midi, .kar, .rmi",i.gui.appendChild(i.fileInput),window.FileReader&&(i.fileBtn.off(),i.fileBtn.div.addEventListener("click",function(){i.fileInput.click()}),i.fileInput.addEventListener("change",function(t){_(t),i.readFile(t.target.files[0])}),i.gui.addEventListener("drop",function(t){_(t),i.fileBtn.off(),i.readFile(t.dataTransfer.files[0])}),i.gui.addEventListener("dragover",function(t){_(t),i.fileBtn.on(),t.dataTransfer.dropEffect="copy"}),i.gui.addEventListener("dragexit",function(t){_(t),i.fileBtn.off()}))):i.fileBtn=s,t.close&&(i.closeBtn=document.createElement("div"),i.closeBtn.style.display="inline-block",i.closeBtn.style.position="absolute",i.closeBtn.style.top="1px",i.closeBtn.style.left="262px",i.closeBtn.style.margin="0",i.closeBtn.style.padding="0",i.closeBtn.style.backgroundColor="#f44",i.closeBtn.style.width="7px",i.closeBtn.style.height="7px",i.closeBtn.style.lineHeight="0",i.closeBtn.style.lineSpasing="0",i.closeBtn.innerHTML=y,i.closeBtn.title="close",i.closeBtn.addEventListener("click",function(){i.destroy()}),i.gui.appendChild(i.closeBtn)),i.rlen=o-e+10,i.rail=document.createElement("div"),i.rail.style.display="inline-block",i.rail.style.position="absolute",i.rail.style.top="19px",i.rail.style.left=e+5+"px",i.rail.style.width=i.rlen+"px",i.rail.style.height="0",i.rail.style.padding="1px",i.rail.style.borderStyle="solid",i.rail.style.borderWidth="1px",i.rail.style.borderRadius="2px",i.rail.style.borderColor="#aaa",i.rail.style.backgroundColor="#888",i.gui.appendChild(i.rail),i.caret=document.createElement("div"),i.caret.style.display="inline-block",i.caret.style.position="absolute",i.caret.style.width="2px",i.caret.style.height="2px",i.caret.style.top="-5px",i.caret.style.left="-5px",i.caret.style.padding="4px",i.caret.style.borderStyle="solid",i.caret.style.borderWidth="1px",i.caret.style.borderRadius="6px",i.caret.style.borderColor="#aaa",i.caret.style.backgroundColor="#888",i.caret.addEventListener("mousedown",function(t){i._mousedown(t)}),i.rail.appendChild(i.caret),window.addEventListener("mousemove",function(t){i._mousemove(t)}),window.addEventListener("mouseup",function(t){i._mouseup(t)})}(this,e),this._conn=e.connect,"string"==typeof e.at)try{return document.getElementById(e.at).appendChild(this.gui),this}catch(t){}try{return e.at.appendChild(this.gui),this}catch(t){}e.x==parseInt(e.x)&&e.y==parseInt(e.y)||(e.x=15*f+5,e.y=45*f+5,f++),this.gui.style.position="fixed",this.gui.style.top=e.y+"px",this.gui.style.left=e.x+"px",this.gui.style.opacity=.9;var n=this;this.gui.addEventListener("mousedown",function(t){n._startmove(t)}),document.body.appendChild(this.gui)}function i(t){return void 0===t.buttons?!t.button:1&t.buttons}});