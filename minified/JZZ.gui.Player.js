!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e:"function"==typeof define&&define.amd?define("JZZ.midi.SMF",["JZZ","JZZ.midi.SMF"],e):e(JZZ)}(0,function(e){if(e.gui||(e.gui={}),!e.gui.Player){p.prototype.on=function(){this.div.style.backgroundColor="#ddd",this.div.style.borderColor="#ccc",this.div.firstChild.style.fill="#000"},p.prototype.off=function(){this.div.style.backgroundColor="#aaa",this.div.style.borderColor="#ccc",this.div.firstChild.style.fill="#000"},p.prototype.disable=function(){this.div.style.backgroundColor="#888",this.div.style.borderColor="#aaa",this.div.firstChild.style.fill="#555"};var s='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',o='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',n='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 6h12v12H6z"/></svg>',l='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>',a='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/></svg>';r.prototype.disable=function(){this.playBtn.disable(),this.pauseBtn.disable(),this.stopBtn.disable(),this.loopBtn.disable(),this.rail.style.borderColor="#aaa",this.rail.style.backgroundColor="#888",this.caret.style.borderColor="#aaa",this.caret.style.backgroundColor="#888"},r.prototype.enable=function(){this.playBtn.off(),this.pauseBtn.off(),this.stopBtn.off(),this.loopBtn.off(),this.rail.style.borderColor="#ccc",this.caret.style.backgroundColor="#aaa",this.caret.style.borderColor="#ccc"},r.prototype.load=function(t){var e=this;this._player=t.player(),this._out&&this._player.connect(this._out),this._player.onEnd=function(){e._onEnd()},this.enable()},r.prototype._onEnd=function(){this._loop||(this._moving&&clearInterval(this._moving),this._move(),this._playing=!1,this.playBtn.off())},r.prototype._move=function(){var t=Math.round(100*this._player.position()/this._player.duration())-5;this.caret.style.left=t+"px"},r.prototype.play=function(){if(this._player){var t=this;if(this.playBtn.on(),this.pauseBtn.off(),this._out){if(this._playing)return;this._waiting=!1,this._player.connect(this._out),this._paused?this._player.resume():this._player.play(),this._moving=setInterval(function(){t._move()},100),this._playing=!0,this._paused=!1}else this._waiting||(this._waiting=!0,e().openMidiOut().and(function(){t._out=this,t._outname=this.name(),t.play()}))}},r.prototype.stop=function(){this._player&&(this._player.stop(),this._moving&&clearInterval(this._moving),this._playing=!1,this._paused=!1,this.playBtn.off(),this.pauseBtn.off(),this._move())},r.prototype.pause=function(){if(this._player){var t=this;this._paused?(this._player.resume(),this._moving=setInterval(function(){t._move()},100),this._playing=!0,this._paused=!1,this.playBtn.on(),this.pauseBtn.off()):this._playing&&(this._player.pause(),this._moving&&clearInterval(this._moving),this._playing=!1,this._paused=!0,this.playBtn.off(),this.pauseBtn.on())}},r.prototype.loop=function(){this._player&&(this._loop=!this._loop,this._player.loop(this._loop),this._loop?this.loopBtn.on():this.loopBtn.off())},r.prototype._closeselect=function(){this.moreBtn.off(),this.select.style.display="none",this._more=!1},r.prototype.settings=function(){if(!this._more){var i=this;this._more=!0,this.moreBtn.on(),this.select.style.display="inline-block",e().refresh().and(function(){var t,e=this.info().outputs;for(t=0;t<i.select.options.length;t++)i.select.remove(t);for(t=0;t<e.length;t++)i.select[t]=new Option(e[t].name,e[t].name,e[t].name==i._outname,e[t].name==i._outname);i.select.size=e.length<2?2:e.length,i.select.focus()})}},r.prototype._selectMidi=function(){var t=this;e().openMidiOut(this._newname).or(function(){t._newname=void 0,t._closeselect()}).and(function(){t._outname=t._newname,t._player&&(t._player.sndOff(),t._player.disconnect(t._out)),t._out=this,t._player&&t._player.connect(t._out),t._newname=void 0,t._closeselect()})},r.prototype._selected=function(){var t=this;this._newname=this.select.options[this.select.selectedIndex].value,this._newname==this._outname?(this._newname=void 0,t._closeselect()):setTimeout(function(){t._selectMidi()},0)},r.prototype._keydown=function(t){13!=t.keyCode&&32!=t.keyCode||this._selected()},r.prototype.duration=function(){return this._player?this._player.duration():0},r.prototype.position=function(){return this._player?this._player.position():0},r.prototype.jump=function(t){this._player&&(this._player.jump(t),this._move(),this._playing||(t?(this._paused=!0,this.playBtn.off(),this.pauseBtn.on()):(this._paused=!1,this.playBtn.off(),this.pauseBtn.off())))},r.prototype._mousedown=function(t){this._player&&(this.caret.style.backgroundColor="#ddd",this._wasPlaying=this._playing,this._player.pause(),this._caretX=t.clientX,this._caretPos=parseInt(this.caret.style.left)+5)},r.prototype._mouseup=function(t){this._player&&void 0!==this._caretX&&(this._wasPlaying&&(this._wasPlaying=void 0,this._player.resume()),this.caret.style.backgroundColor="#aaa",this._caretX=void 0)},r.prototype._mousemove=function(t){if(this._player&&void 0!==this._caretX){var e=this._caretPos+t.clientX-this._caretX;e<0&&(e=0),100<e&&(e=100),this.jump(this.duration()*e/100)}},e.gui.Player=r}function p(t){this.div=document.createElement("div"),this.div.style.display="inline-block",this.div.style.position="absolute",this.div.style.top="8px",this.div.style.margin="0",this.div.style.padding="2px",this.div.style.borderStyle="solid",this.div.style.borderWidth="1px",this.div.style.borderColor="#aaa",this.div.style.backgroundColor="#888",this.div.style.width="18px",this.div.style.height="18px",this.div.innerHTML=t}function r(t){if(!(this instanceof r))return new r(t);var e;(e=this).gui=document.createElement("div"),e.gui.style.display="inline-block",e.gui.style.position="relative",e.gui.style.margin="0px",e.gui.style.padding="0px",e.gui.style.borderStyle="none",e.gui.style.backgroundColor="#888",e.gui.style.width="270px",e.gui.style.height="40px",e.playBtn=new p(s),e.playBtn.div.style.left="8px",e.playBtn.div.title="play",e.playBtn.div.addEventListener("click",function(){e.play()}),e.gui.appendChild(e.playBtn.div),e.pauseBtn=new p(o),e.pauseBtn.div.style.left="36px",e.pauseBtn.div.title="pause",e.pauseBtn.div.addEventListener("click",function(){e.pause()}),e.gui.appendChild(e.pauseBtn.div),e.stopBtn=new p(n),e.stopBtn.div.style.left="64px",e.stopBtn.div.title="stop",e.stopBtn.div.addEventListener("click",function(){e.stop()}),e.gui.appendChild(e.stopBtn.div),e.loopBtn=new p(l),e.loopBtn.div.style.left="92px",e.loopBtn.div.title="loop",e.loopBtn.div.addEventListener("click",function(){e.loop()}),e.gui.appendChild(e.loopBtn.div),e.moreBtn=new p(a),e.moreBtn.div.style.left="238px",e.moreBtn.div.title="midi",e.moreBtn.div.addEventListener("click",function(){e.settings()}),e.moreBtn.off(),e.gui.appendChild(e.moreBtn.div),e.select=document.createElement("select"),e.select.style.position="absolute",e.select.style.top="30px",e.select.style.left="40px",e.select.style.width="230px",e.select.style.display="none",e.select.addEventListener("click",function(){e._selected()}),e.select.addEventListener("keydown",function(t){e._keydown(t)}),e.select.addEventListener("focusout",function(){e._closeselect()}),e.gui.appendChild(e.select),e.rail=document.createElement("div"),e.rail.style.display="inline-block",e.rail.style.position="absolute",e.rail.style.top="19px",e.rail.style.left="125px",e.rail.style.width="100px",e.rail.style.height="0",e.rail.style.padding="1px",e.rail.style.borderStyle="solid",e.rail.style.borderWidth="1px",e.rail.style.borderRadius="2px",e.rail.style.borderColor="#aaa",e.rail.style.backgroundColor="#888",e.gui.appendChild(e.rail),e.caret=document.createElement("div"),e.caret.style.display="inline-block",e.caret.style.position="absolute",e.caret.style.width="2px",e.caret.style.height="2px",e.caret.style.top="-5px",e.caret.style.left="-5px",e.caret.style.padding="4px",e.caret.style.borderStyle="solid",e.caret.style.borderWidth="1px",e.caret.style.borderRadius="6px",e.caret.style.borderColor="#aaa",e.caret.style.backgroundColor="#888",e.caret.addEventListener("mousedown",function(t){e._mousedown(t)}),e.rail.appendChild(e.caret),window.addEventListener("mousemove",function(t){e._mousemove(t)}),window.addEventListener("mouseup",function(t){e._mouseup(t)}),"string"==typeof t&&(t=document.getElementById(t));try{t.appendChild(this.gui)}catch(t){var i=document.createElement("div");i.appendChild(this.gui),document.body.appendChild(i)}}});