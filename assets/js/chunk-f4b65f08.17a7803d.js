/*! For license information please see chunk-f4b65f08.17a7803d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f4b65f08"],{"16d8":function(t,e,n){"use strict";n.r(e),n("b3d9"),n("10dd"),n("4c1e"),n("fee8"),n("87d5"),n("6df5");var i=n("3e91"),r=n.n(i),o=new r.a({sampleBits:16,sampleRate:16e3,numChannels:1});o.onprogress=function(t){};var a={data:function(){return{flag:!1,viodeText:"长按说话",search:"",yingPingDisPlay:!1,buttonImg:n("8f4f"),searchValve:""}},mounted:function(){r.a.getPermission().then((function(){}),(function(t){alert("".concat(t.name," : ").concat(t.message))}))},methods:{gtouchstart:function(){this.buttonImg=n("7ec4"),this.startRecorder(),this.yingPingDisPlay=!0},gtouchend:function(t){this.yingPingDisPlay=!1,this.buttonImg=n("8f4f"),this.stopRecorder(),this.getRecorder()},startRecorder:function(){o.start().then((function(){}),(function(t){alert("".concat(t.name," : ").concat(t.message))}))},stopRecorder:function(){o.stop()},getRecordInfo:function(t){var e=this,n={ProjectId:0,SubServiceType:2,SourceType:1,EngSerViceType:"16k_zh",VoiceFormat:"wav",Data:t.split("base64,")[1],UsrAudioKey:"snimay",FilterDirty:1,FilterPunc:2,FilterModal:2};e.$axios.post("/common.do",e.$qs.stringify({method:this.$method.METHOD_API_CATEGORYMODULE,data:JSON.stringify(n)})).then((function(t){if(setTimeout((function(){}),10),""==t.data.data.Result||null==t.data.data.Result)e.$vux.toast.text("抱歉，没有听清楚！","middle");else{var n=t.data.data.Result;e.$emit("abc",n)}}))},getRecorder:function(){var t=this,e=(o.duration,o.fileSize,o.getWAVBlob()),n=new FileReader;n.readAsDataURL(e),this.search="",n.onload=function(){t.search=n.result,t.$emit("getSearch","输出语音啦")}}}},s=(n("2c80"),n("cba8")),u={components:{Yuyin:Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.flag?n("div",{staticClass:"recordPlagin"},[t.yingPingDisPlay?n("div",{staticClass:"mask"},[n("span",[t._v("正在听，松开进行搜索!")])]):t._e(),n("div",{staticClass:"buttonWrap"},[n("div",{staticClass:"buttonImg",style:{background:"pink"},on:{click:function(e){t.flag=!1}}}),n("div",{staticClass:"buttonImg",style:{backgroundImage:"url("+t.buttonImg+")"},on:{touchstart:function(e){return t.gtouchstart()},touchend:function(e){return t.gtouchend()}}}),n("div",{staticClass:"buttonImg"})])]):[n("div",{staticClass:"inputSearchWrap"},[n("div",{staticClass:"inputSearch"},[n("div",{staticClass:"icon",on:{click:function(e){t.flag=!0}}}),n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValve,expression:"searchValve"}],domProps:{value:t.searchValve},on:{input:function(e){e.target.composing||(t.searchValve=e.target.value)}}})]),n("div",{staticClass:"send",on:{click:function(e){return t.$emit("getSearch",t.searchValve)}}})])])]],2)}),[],!1,null,"64b877b1",null).exports},data:function(){return{searchValue:""}},methods:{getSearch:function(t){this.searchValue=t}}},c=(n("702b"),Object(s.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageIndex"},[n("strong",{staticClass:"closeIcon",on:{click:function(e){return t.$router.back()}}},[t._v("x")]),n("div",{staticClass:"content"},[n("div",{staticClass:"hua"},[t._v(t._s(t.searchValue))]),n("div",{staticClass:"choose"})]),n("Yuyin",{on:{getSearch:t.getSearch}})],1)}),[],!1,null,"5a19bafa",null));e.default=c.exports},"29d7":function(t,e,n){},"2c80":function(t,e,n){"use strict";n("6591")},"3e91":function(t,e,n){t.exports=n("b757")},6591:function(t,e,n){},"66e9":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},"6df5":function(t,e,n){"use strict";var i=n("e3f7"),r=n("9dd2"),o=n("25ef"),a=n("8e74"),s=n("66e9"),u=n("3ffc"),c=n("ecf4"),l=n("bacb");r("search",(function(t,e,n){return[function(e){var n=a(this),r=null==e?void 0:c(e,t);return r?i(r,e,n):new RegExp(e)[t](u(n))},function(t){var i=o(this),r=u(t),a=n(e,i,r);if(a.done)return a.value;var c=i.lastIndex;s(c,0)||(i.lastIndex=0);var f=l(i,r);return s(i.lastIndex,c)||(i.lastIndex=c),null===f?-1:f.index}]}))},"702b":function(t,e,n){"use strict";n("29d7")},"7ec4":function(t,e,n){t.exports=n.p+"assets/img/yuyin_sh.eedfacf2.gif"},"87d5":function(t,e,n){var i=n("88d4"),r=n("8735"),o=n("da77"),a=n("e7c5"),s=n("ce5b"),u=n("9ad2"),c=r.Array,l=o("JSON","stringify"),f=s(/./.exec),d=s("".charAt),p=s("".charCodeAt),h=s("".replace),A=s(1..toString),y=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,m=/^[\uDC00-\uDFFF]$/,v=function(t,e,n){var i=d(n,e-1),r=d(n,e+1);return f(g,t)&&!f(m,r)||f(m,t)&&!f(g,i)?"\\u"+A(p(t,0),16):t},b=u((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&i({target:"JSON",stat:!0,forced:b},{stringify:function(t,e,n){for(var i=0,r=arguments.length,o=c(r);i<r;i++)o[i]=arguments[i];var s=a(l,null,o);return"string"==typeof s?h(s,y,v):s}})},"8f4f":function(t,e){t.exports="data:image/png;base64,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"},b757:function(t,e,n){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";function i(t,e,n){for(var i=0;i<n.length;i++)t.setUint8(e+i,n.charCodeAt(i))}Object.defineProperty(e,"__esModule",{value:!0}),e.compress=function(t,e,n){for(var i=e/n,r=Math.max(i,1),o=t.left,a=t.right,s=Math.floor((o.length+a.length)/i),u=new Float32Array(s),c=0,l=0;c<s;){var f=Math.floor(l);u[c]=o[f],c++,a.length&&(u[c]=a[f],c++),l+=r}return u},e.encodePCM=function(t,e,n){void 0===n&&(n=!0);var i=0,r=t.length*(e/8),o=new ArrayBuffer(r),a=new DataView(o);if(8===e)for(var s=0;s<t.length;s++,i++){var u=(c=Math.max(-1,Math.min(1,t[s])))<0?128*c:127*c;u=+u+128,a.setInt8(i,u)}else for(s=0;s<t.length;s++,i+=2){var c=Math.max(-1,Math.min(1,t[s]));a.setInt16(i,c<0?32768*c:32767*c,n)}return a},e.encodeWAV=function(t,e,n,r,o,a){void 0===a&&(a=!0);var s=n>e?e:n,u=o,c=new ArrayBuffer(44+t.byteLength),l=new DataView(c),f=r,d=0;i(l,d,"RIFF"),d+=4,l.setUint32(d,36+t.byteLength,a),i(l,d+=4,"WAVE"),i(l,d+=4,"fmt "),d+=4,l.setUint32(d,16,a),d+=4,l.setUint16(d,1,a),d+=2,l.setUint16(d,f,a),d+=2,l.setUint32(d,s,a),d+=4,l.setUint32(d,f*s*(u/8),a),d+=4,l.setUint16(d,f*(u/8),a),d+=2,l.setUint16(d,u,a),i(l,d+=2,"data"),d+=4,l.setUint32(d,t.byteLength,a),d+=4;for(var p=0;p<t.byteLength;)l.setUint8(d,t.getUint8(p)),d++,p++;return l}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=n(0),s=n(3),u=function(t){function e(e){void 0===e&&(e={});var n=t.call(this,e)||this;return n.isrecording=!1,n.ispause=!1,n.isplaying=!1,n}return r(e,t),e.prototype.setOption=function(t){void 0===t&&(t={}),this.setNewOption(t)},e.prototype.start=function(){return this.isrecording?Promise.reject():(this.isrecording=!0,this.startRecord())},e.prototype.pause=function(){this.isrecording&&!this.ispause&&(this.ispause=!0,this.pauseRecord())},e.prototype.resume=function(){this.isrecording&&this.ispause&&(this.ispause=!1,this.resumeRecord())},e.prototype.stop=function(){this.isrecording&&(this.isrecording=!1,this.ispause=!1,this.stopRecord())},e.prototype.play=function(){this.stop(),this.isplaying=!0,this.onplay&&this.onplay(),s.default.addPlayEnd(this.onplayend);var t=this.getWAV();t.byteLength>44&&s.default.play(t.buffer)},e.prototype.getPlayTime=function(){return s.default.getPlayTime()},e.prototype.pausePlay=function(){!this.isrecording&&this.isplaying&&(this.isplaying=!1,this.onpauseplay&&this.onpauseplay(),s.default.pausePlay())},e.prototype.resumePlay=function(){this.isrecording||this.isplaying||(this.isplaying=!0,this.onresumeplay&&this.onresumeplay(),s.default.resumePlay())},e.prototype.stopPlay=function(){this.isrecording||(this.isplaying=!1,this.onstopplay&&this.onstopplay(),s.default.stopPlay())},e.prototype.destroy=function(){return s.default.destroyPlay(),this.destroyRecord()},e.prototype.getRecordAnalyseData=function(){return this.getAnalyseData()},e.prototype.getPlayAnalyseData=function(){return s.default.getAnalyseData()},e.prototype.getPCM=function(){this.stop();var t=this.getData();return t=a.compress(t,this.inputSampleRate,this.outputSampleRate),a.encodePCM(t,this.oututSampleBits,this.littleEdian)},e.prototype.getPCMBlob=function(){return new Blob([this.getPCM()])},e.prototype.downloadPCM=function(t){void 0===t&&(t="recorder");var e=this.getPCMBlob();o.downloadPCM(e,t)},e.prototype.getWAV=function(){var t=this.getPCM();return a.encodeWAV(t,this.inputSampleRate,this.outputSampleRate,this.config.numChannels,this.oututSampleBits,this.littleEdian)},e.prototype.getWAVBlob=function(){return new Blob([this.getWAV()],{type:"audio/wav"})},e.prototype.downloadWAV=function(t){void 0===t&&(t="recorder");var e=this.getWAVBlob();o.downloadWAV(e,t)},e.prototype.download=function(t,e,n){o.download(t,e,n)},e.prototype.getChannelData=function(){var t=this.getPCM(),e=t.byteLength,n=this.littleEdian,i={left:null,right:null};if(2===this.config.numChannels){var r=new DataView(new ArrayBuffer(e/2)),o=new DataView(new ArrayBuffer(e/2));if(16===this.config.sampleBits)for(var a=0;a<e/2;a+=2)r.setInt16(a,t.getInt16(2*a,n),n),o.setInt16(a,t.getInt16(2*a+2,n),n);else for(a=0;a<e/2;a+=2)r.setInt8(a,t.getInt8(2*a)),o.setInt8(a,t.getInt8(2*a+1));i.left=r,i.right=o}else i.left=t;return i},e}(n(5).default);e.default=u},function(t,e,n){"use strict";function i(t,e,n){var i=document.createElement("a");i.href=window.URL.createObjectURL(t),i.download=e+"."+n,i.click()}Object.defineProperty(e,"__esModule",{value:!0}),e.downloadWAV=function(t,e){void 0===e&&(e="recorder"),i(t,e,"wav")},e.downloadPCM=function(t,e){void 0===e&&(e="recorder"),i(t,e,"pcm")},e.download=function(t,e,n){return i(t,e,n)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),r=null,o=0,a=0,s=null,u=null,c=null,l=!1,f=0,d=function(){};function p(){return l=!1,s.decodeAudioData(c.slice(0),(function(t){(r=s.createBufferSource()).onended=function(){l||(f=s.currentTime-a+o,d())},r.buffer=t,r.connect(u),u.connect(s.destination),r.start(0,o),a=s.currentTime}),(function(t){i.throwError(t)}))}function h(){r&&(r.stop(),r=null)}var A=function(){function t(){}return t.play=function(t){return s||(s=new(window.AudioContext||window.webkitAudioContext),(u=s.createAnalyser()).fftSize=2048),this.stopPlay(),c=t,f=0,p()},t.pausePlay=function(){h(),o+=s.currentTime-a,l=!0},t.resumePlay=function(){return p()},t.stopPlay=function(){o=0,c=null,h()},t.destroyPlay=function(){this.stopPlay()},t.getAnalyseData=function(){var t=new Uint8Array(u.frequencyBinCount);return u.getByteTimeDomainData(t),t},t.addPlayEnd=function(t){void 0===t&&(t=function(){}),d=t},t.getPlayTime=function(){var t=l?o:s.currentTime-a+o;return f||t},t}();e.default=A},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.throwError=function(t){throw new Error(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=function(){function t(e){void 0===e&&(e={}),this.size=0,this.lBuffer=[],this.rBuffer=[],this.tempPCM=[],this.inputSampleBits=16,this.fileSize=0,this.duration=0,this.needRecord=!0;var n,i=new(window.AudioContext||window.webkitAudioContext);this.inputSampleRate=i.sampleRate,this.setNewOption(e),this.littleEdian=(n=new ArrayBuffer(2),new DataView(n).setInt16(0,256,!0),256===new Int16Array(n)[0]),t.initUserMedia()}return t.prototype.setNewOption=function(t){void 0===t&&(t={}),this.config={sampleBits:~[8,16].indexOf(t.sampleBits)?t.sampleBits:16,sampleRate:~[8e3,11025,16e3,22050,24e3,44100,48e3].indexOf(t.sampleRate)?t.sampleRate:this.inputSampleRate,numChannels:~[1,2].indexOf(t.numChannels)?t.numChannels:1},this.outputSampleRate=this.config.sampleRate,this.oututSampleBits=this.config.sampleBits},t.prototype.startRecord=function(){var t=this;return this.context&&this.destroyRecord(),this.initRecorder(),navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){t.audioInput=t.context.createMediaStreamSource(e),t.stream=e})).then((function(){t.audioInput.connect(t.analyser),t.analyser.connect(t.recorder),t.recorder.connect(t.context.destination)}))},t.prototype.pauseRecord=function(){this.needRecord=!1},t.prototype.resumeRecord=function(){this.needRecord=!0},t.prototype.stopRecord=function(){this.audioInput&&this.audioInput.disconnect(),this.source&&this.source.stop(),this.recorder.disconnect(),this.analyser.disconnect(),this.needRecord=!0},t.prototype.destroyRecord=function(){return this.clearRecordStatus(),this.stopStream(),this.closeAudioContext()},t.prototype.getAnalyseData=function(){var t=new Uint8Array(this.analyser.frequencyBinCount);return this.analyser.getByteTimeDomainData(t),t},t.prototype.getData=function(){return this.flat()},t.prototype.clearRecordStatus=function(){this.lBuffer.length=0,this.rBuffer.length=0,this.size=0,this.fileSize=0,this.PCM=null,this.audioInput=null,this.duration=0},t.prototype.flat=function(){var t=null,e=new Float32Array(0);1===this.config.numChannels?t=new Float32Array(this.size):(t=new Float32Array(this.size/2),e=new Float32Array(this.size/2));for(var n=0,i=0;i<this.lBuffer.length;i++)t.set(this.lBuffer[i],n),n+=this.lBuffer[i].length;for(n=0,i=0;i<this.rBuffer.length;i++)e.set(this.rBuffer[i],n),n+=this.rBuffer[i].length;return{left:t,right:e}},t.prototype.initRecorder=function(){var t=this;this.clearRecordStatus(),this.context=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048;var e=this.context.createScriptProcessor||this.context.createJavaScriptNode;this.recorder=e.apply(this.context,[4096,this.config.numChannels,this.config.numChannels]),this.recorder.onaudioprocess=function(e){if(t.needRecord){var n,i=e.inputBuffer.getChannelData(0),r=null;t.lBuffer.push(new Float32Array(i)),t.size+=i.length,2===t.config.numChannels&&(r=e.inputBuffer.getChannelData(1),t.rBuffer.push(new Float32Array(r)),t.size+=r.length),t.fileSize=Math.floor(t.size/Math.max(t.inputSampleRate/t.outputSampleRate,1))*(t.oututSampleBits/8),n=100*Math.max.apply(Math,i),t.duration+=4096/t.inputSampleRate,t.onprocess&&t.onprocess(t.duration),t.onprogress&&t.onprogress({duration:t.duration,fileSize:t.fileSize,vol:n})}}},t.prototype.stopStream=function(){this.stream&&this.stream.getTracks&&(this.stream.getTracks().forEach((function(t){return t.stop()})),this.stream=null)},t.prototype.closeAudioContext=function(){return this.context&&this.context.close&&"closed"!==this.context.state?this.context.close():new Promise((function(t){t()}))},t.initUserMedia=function(){void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(t){var e=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return e?new Promise((function(n,i){e.call(navigator,t,n,i)})):Promise.reject(new Error("浏览器不支持 getUserMedia !"))})},t.prototype.transformIntoPCM=function(t,e){var n=new Float32Array(t),r=new Float32Array(e),o=i.compress({left:n,right:r},this.inputSampleRate,this.outputSampleRate);return i.encodePCM(o,this.oututSampleBits,this.littleEdian)},t.getPermission=function(){return this.initUserMedia(),navigator.mediaDevices.getUserMedia({audio:!0}).then((function(t){t&&t.getTracks().forEach((function(t){return t.stop()}))}))},t}();e.default=r}]).default}}]);