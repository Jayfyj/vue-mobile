(this.webpackJsonp=this.webpackJsonp||[]).push([["chunk-24bcb9ae"],{"0ff2":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return a}));var i=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80"],s={red:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33"],blue:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16"]},o=["1","2","3","4","5","6","7","8","9","10"],a={red:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"],blue:["01","02","03","04","05","06","07","08","09","10","11","12"]}},"262b":function(t,e,n){"use strict";var i=n("3aef"),s=n("aa8f"),o=n("1be2"),a=n("21e1"),r={title:String,loading:Boolean,readonly:Boolean,itemHeight:[Number,String],showToolbar:Boolean,cancelButtonText:String,confirmButtonText:String,allowHtml:{type:Boolean,default:!0},visibleItemCount:{type:[Number,String],default:6},swipeDuration:{type:[Number,String],default:1e3}},u=n("82dc"),c=n("88d1"),l=n("4c02"),h=n.n(l),f=n("c919"),d=n("d71c"),m=n("5513"),p=n("5a87"),v=Object(s.a)("picker-column"),g=v[0],b=v[1];function x(t){var e=window.getComputedStyle(t),n=e.transform||e.webkitTransform,i=n.slice(7,n.length-1).split(", ")[5];return Number(i)}function y(t){return Object(d.e)(t)&&t.disabled}var C=d.b&&"onwheel"in window,O=null,I=g({mixins:[p.a],props:{valueKey:String,readonly:Boolean,allowHtml:Boolean,className:String,itemHeight:Number,defaultIndex:Number,swipeDuration:[Number,String],visibleItemCount:[Number,String],initialOptions:{type:Array,default:function(){return[]}}},data:function(){return{offset:0,duration:0,options:Object(f.a)(this.initialOptions),currentIndex:this.defaultIndex}},created:function(){this.$parent.children&&this.$parent.children.push(this),this.setIndex(this.currentIndex)},mounted:function(){this.bindTouchEvent(this.$el),C&&Object(o.b)(this.$el,"wheel",this.onMouseWheel,!1)},destroyed:function(){var t=this.$parent.children;t&&t.splice(t.indexOf(this),1),C&&Object(o.a)(this.$el,"wheel")},watch:{initialOptions:"setOptions",defaultIndex:function(t){this.setIndex(t)}},computed:{count:function(){return this.options.length},baseOffset:function(){return this.itemHeight*(this.visibleItemCount-1)/2}},methods:{setOptions:function(t){JSON.stringify(t)!==JSON.stringify(this.options)&&(this.options=Object(f.a)(t),this.setIndex(this.defaultIndex))},onTouchStart:function(t){if(!this.readonly){if(this.touchStart(t),this.moving){var e=x(this.$refs.wrapper);this.offset=Math.min(0,e-this.baseOffset),this.startOffset=this.offset}else this.startOffset=this.offset;this.duration=0,this.transitionEndTrigger=null,this.touchStartTime=Date.now(),this.momentumOffset=this.startOffset}},onTouchMove:function(t){if(!this.readonly){this.touchMove(t),"vertical"===this.direction&&(this.moving=!0,Object(o.c)(t,!0)),this.offset=Object(m.c)(this.startOffset+this.deltaY,-this.count*this.itemHeight,this.itemHeight);var e=Date.now();e-this.touchStartTime>300&&(this.touchStartTime=e,this.momentumOffset=this.offset)}},onTouchEnd:function(){var t=this;if(!this.readonly){var e=this.offset-this.momentumOffset,n=Date.now()-this.touchStartTime;if(n<300&&Math.abs(e)>15)this.momentum(e,n);else{var i=this.getIndexByOffset(this.offset);this.duration=200,this.setIndex(i,!0),setTimeout((function(){t.moving=!1}),0)}}},onMouseWheel:function(t){var e=this;if(!this.readonly){Object(o.c)(t,!0);var n=x(this.$refs.wrapper);this.startOffset=Math.min(0,n-this.baseOffset),this.momentumOffset=this.startOffset,this.transitionEndTrigger=null;var i=t.deltaY;if(!(0===this.startOffset&&i<0)){var s=-i;this.offset=Object(m.c)(this.startOffset+s,-this.count*this.itemHeight,this.itemHeight),O&&clearTimeout(O),O=setTimeout((function(){e.onTouchEnd(),e.touchStartTime=0}),300)}}},onTransitionEnd:function(){this.stopMomentum()},onClickItem:function(t){this.moving||this.readonly||(this.transitionEndTrigger=null,this.duration=200,this.setIndex(t,!0))},adjustIndex:function(t){for(var e=t=Object(m.c)(t,0,this.count);e<this.count;e++)if(!y(this.options[e]))return e;for(var n=t-1;n>=0;n--)if(!y(this.options[n]))return n},getOptionText:function(t){return Object(d.e)(t)&&this.valueKey in t?t[this.valueKey]:t},setIndex:function(t,e){var n=this,i=-(t=this.adjustIndex(t)||0)*this.itemHeight,s=function(){t!==n.currentIndex&&(n.currentIndex=t,e&&n.$emit("change",t))};this.moving&&i!==this.offset?this.transitionEndTrigger=s:s(),this.offset=i},setValue:function(t){for(var e=this.options,n=0;n<e.length;n++)if(this.getOptionText(e[n])===t)return this.setIndex(n)},getValue:function(){return this.options[this.currentIndex]},getIndexByOffset:function(t){return Object(m.c)(Math.round(-t/this.itemHeight),0,this.count-1)},momentum:function(t,e){var n=Math.abs(t/e);t=this.offset+n/.003*(t<0?-1:1);var i=this.getIndexByOffset(t);this.duration=+this.swipeDuration,this.setIndex(i,!0)},stopMomentum:function(){this.moving=!1,this.duration=0,this.transitionEndTrigger&&(this.transitionEndTrigger(),this.transitionEndTrigger=null)},genOptions:function(){var t=this,e=this.$createElement,n={height:this.itemHeight+"px"};return this.options.map((function(i,s){var o,a=t.getOptionText(i),r=y(i),u={style:n,attrs:{role:"button",tabindex:r?-1:0},class:[b("item",{disabled:r,selected:s===t.currentIndex})],on:{click:function(){t.onClickItem(s)}}},c={class:"van-ellipsis",domProps:(o={},o[t.allowHtml?"innerHTML":"textContent"]=a,o)};return e("li",h()([{},u]),[t.slots("option",i)||e("div",h()([{},c]))])}))}},render:function(){var t=arguments[0],e={transform:"translate3d(0, "+(this.offset+this.baseOffset)+"px, 0)",transitionDuration:this.duration+"ms",transitionProperty:this.duration?"all":"none"};return t("div",{class:[b(),this.className]},[t("ul",{ref:"wrapper",style:e,class:b("wrapper"),on:{transitionend:this.onTransitionEnd}},[this.genOptions()])])}}),T=Object(s.a)("picker"),w=T[0],k=T[1],S=T[2];e.a=w({props:Object(i.a)({},r,{defaultIndex:{type:[Number,String],default:0},columns:{type:Array,default:function(){return[]}},toolbarPosition:{type:String,default:"top"},valueKey:{type:String,default:"text"}}),data:function(){return{children:[],formattedColumns:[]}},computed:{itemPxHeight:function(){return this.itemHeight?Object(u.b)(this.itemHeight):44},dataType:function(){var t=this.columns[0]||{};return t.children?"cascade":t.values?"object":"text"}},watch:{columns:{handler:"format",immediate:!0}},methods:{format:function(){var t=this.columns,e=this.dataType;"text"===e?this.formattedColumns=[{values:t}]:"cascade"===e?this.formatCascade():this.formattedColumns=t},formatCascade:function(){for(var t=[],e={children:this.columns};e&&e.children;){for(var n,i=e.children,s=null!=(n=e.defaultIndex)?n:+this.defaultIndex;i[s]&&i[s].disabled;){if(!(s<i.length-1)){s=0;break}s++}t.push({values:e.children,className:e.className,defaultIndex:s}),e=i[s]}this.formattedColumns=t},emit:function(t){var e=this;if("text"===this.dataType)this.$emit(t,this.getColumnValue(0),this.getColumnIndex(0));else{var n=this.getValues();"cascade"===this.dataType&&(n=n.map((function(t){return t[e.valueKey]}))),this.$emit(t,n,this.getIndexes())}},onCascadeChange:function(t){for(var e={children:this.columns},n=this.getIndexes(),i=0;i<=t;i++)e=e.children[n[i]];for(;e&&e.children;)t++,this.setColumnValues(t,e.children),e=e.children[e.defaultIndex||0]},onChange:function(t){var e=this;if("cascade"===this.dataType&&this.onCascadeChange(t),"text"===this.dataType)this.$emit("change",this,this.getColumnValue(0),this.getColumnIndex(0));else{var n=this.getValues();"cascade"===this.dataType&&(n=n.map((function(t){return t[e.valueKey]}))),this.$emit("change",this,n,t)}},getColumn:function(t){return this.children[t]},getColumnValue:function(t){var e=this.getColumn(t);return e&&e.getValue()},setColumnValue:function(t,e){var n=this.getColumn(t);n&&(n.setValue(e),"cascade"===this.dataType&&this.onCascadeChange(t))},getColumnIndex:function(t){return(this.getColumn(t)||{}).currentIndex},setColumnIndex:function(t,e){var n=this.getColumn(t);n&&(n.setIndex(e),"cascade"===this.dataType&&this.onCascadeChange(t))},getColumnValues:function(t){return(this.children[t]||{}).options},setColumnValues:function(t,e){var n=this.children[t];n&&n.setOptions(e)},getValues:function(){return this.children.map((function(t){return t.getValue()}))},setValues:function(t){var e=this;t.forEach((function(t,n){e.setColumnValue(n,t)}))},getIndexes:function(){return this.children.map((function(t){return t.currentIndex}))},setIndexes:function(t){var e=this;t.forEach((function(t,n){e.setColumnIndex(n,t)}))},confirm:function(){this.children.forEach((function(t){return t.stopMomentum()})),this.emit("confirm")},cancel:function(){this.emit("cancel")},genTitle:function(){var t=this.$createElement,e=this.slots("title");return e||(this.title?t("div",{class:["van-ellipsis",k("title")]},[this.title]):void 0)},genCancel:function(){return(0,this.$createElement)("button",{attrs:{type:"button"},class:k("cancel"),on:{click:this.cancel}},[this.slots("cancel")||this.cancelButtonText||S("cancel")])},genConfirm:function(){return(0,this.$createElement)("button",{attrs:{type:"button"},class:k("confirm"),on:{click:this.confirm}},[this.slots("confirm")||this.confirmButtonText||S("confirm")])},genToolbar:function(){var t=this.$createElement;if(this.showToolbar)return t("div",{class:k("toolbar")},[this.slots()||[this.genCancel(),this.genTitle(),this.genConfirm()]])},genColumns:function(){var t=this.$createElement,e=this.itemPxHeight,n=e*this.visibleItemCount,i={height:e+"px"},s={height:n+"px"},r={backgroundSize:"100% "+(n-e)/2+"px"};return t("div",{class:k("columns"),style:s,on:{touchmove:o.c}},[this.genColumnItems(),t("div",{class:k("mask"),style:r}),t("div",{class:[a.e,k("frame")],style:i})])},genColumnItems:function(){var t=this,e=this.$createElement;return this.formattedColumns.map((function(n,i){var s;return e(I,{attrs:{readonly:t.readonly,valueKey:t.valueKey,allowHtml:t.allowHtml,className:n.className,itemHeight:t.itemPxHeight,defaultIndex:null!=(s=n.defaultIndex)?s:+t.defaultIndex,swipeDuration:t.swipeDuration,visibleItemCount:t.visibleItemCount,initialOptions:n.values},scopedSlots:{option:t.$scopedSlots.option},on:{change:function(){t.onChange(i)}}})}))}},render:function(t){return t("div",{class:k()},["top"===this.toolbarPosition?this.genToolbar():t(),this.loading?t(c.a,{class:k("loading")}):t(),this.slots("columns-top"),this.genColumns(),this.slots("columns-bottom"),"bottom"===this.toolbarPosition?this.genToolbar():t()])}})},"28b6":function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}))},4140:function(t,e,n){},"4c7a":function(t,e,n){},"4d42":function(t,e,n){"use strict";n("4140")},5988:function(t,e,n){"use strict";n("7c01"),n("b637"),n("4c7a")},"68e1":function(t,e,n){"use strict";var i=n("4c02"),s=n.n(i),o=n("aa8f"),a=n("920d"),r=Object(o.a)("divider"),u=r[0],c=r[1];function l(t,e,n,i){var o;return t("div",s()([{attrs:{role:"separator"},style:{borderColor:e.borderColor},class:c((o={dashed:e.dashed,hairline:e.hairline},o["content-"+e.contentPosition]=n.default,o))},Object(a.b)(i,!0)]),[n.default&&n.default()])}l.props={dashed:Boolean,hairline:{type:Boolean,default:!0},contentPosition:{type:String,default:"center"}},e.a=u(l)},"6a95":function(t,e,n){"use strict";n("7c01"),n("ba91")},7810:function(t,e,n){"use strict";n.r(e);var i,s=n("28b6"),o=(n("d59a"),n("727b")),a=(n("afaf"),n("89e3")),r=(n("6a95"),n("68e1")),u=(n("5988"),n("262b")),c=(n("0211"),n("7e5a"),n("882b"),n("0b9a"),n("9787"),n("0ff2")),l=n("2e36"),h={name:"threeDBoxs",components:(i={},Object(s.a)(i,u.a.name,u.a),Object(s.a)(i,r.a.name,r.a),Object(s.a)(i,a.a.name,a.a),Object(s.a)(i,o.a.name,o.a),i),setup:function(){var t=Object(l.e)({value:[]}),e=Object(l.e)({value:[]}),n=Object(l.f)(""),i=Object(l.f)("请选择3D个数"),s=Object(l.f)(!1),r=Object(l.e)({value:{text:"单选",value:1}}),u=Object(l.f)(!1),h=Object(l.e)({value:[{value:1,text:"单选"},{value:2,text:"组合三"},{value:3,text:"组合六"}]});function f(e){e.forEach((function(e){var n={};n.value=e,n.ischecked=!1,t.value.push(n)}))}function d(t,e){for(var n,i,s=t.slice(0),o=t.length,a=o-e;o-- >a;)n=s[i=Math.floor((o+1)*Math.random())],s[i]=s[o],s[o]=n;return s.slice(a)}function m(t,e){t[e-1].ischecked=!t[e-1].ischecked}return Object(l.c)((function(){Object(o.a)({message:"现在只有包串的玩法，不知道的话百度去"}),f(c.d)})),{threeDBox:t,popupShow:u,message:i,pickerBox:n,columns:e,playingPopupShow:s,playingBox:r,playingColumns:h,initBox:f,getThreeDBoxList:function(){if(n.value){var e=Number(n.value);t.value.forEach((function(t){t.ischecked=!1})),d(t.value,e).forEach((function(e){m(t.value,e.value)}))}else a.a.fail("请选择个数")},randomBox:d,pickBox:m,showPopup:function(){u.value=!0,n.value||setTimeout((function(){var t=[];1===r.value.value?t=[3,4,5,6,7,8,9,10]:2===r.value.value?t=[2,3,4,5,6,7,8,9,10]:3===r.value.value&&(t=[4,5,6,7,8,9,10]),e.value=t}),0)},onConfirm:function(t){n.value=t,u.value=!1},onCancel:function(){u.value=!1},onChange:function(t,e,n){},numberShowPopup:function(){s.value=!0},onPlayingConfirm:function(i){r.value.text=i.text,r.value.value=i.value,s.value=!1,e.value=[],n.value="",t.value.forEach((function(t){t.ischecked=!1}))},onPlayingCancel:function(){s.value=!1},onPlayingChange:function(t,e,n){}}}},f=(n("4d42"),n("cba8")),d=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("LayOutIndex",{attrs:{titleShow:"",back:""}},[n("div",{staticClass:"chooseContent"},[n("div",[n("van-cell",{staticStyle:{"border-bottom":"1px solid silver"},attrs:{"is-link":""},on:{click:t.numberShowPopup}},[n("span",{staticStyle:{color:"red"}},[t._v("选"+t._s(t.playingBox.value.text))])]),n("van-popup",{style:{height:"50%"},attrs:{position:"bottom"},model:{value:t.playingPopupShow,callback:function(e){t.playingPopupShow=e},expression:"playingPopupShow"}},[n("van-picker",{ref:"boxNumberPicker",attrs:{"show-toolbar":"",columns:t.playingColumns.value},on:{confirm:t.onPlayingConfirm,cancel:t.onPlayingCancel,change:t.onPlayingChange}})],1)],1),n("div",[n("van-cell",{staticStyle:{"border-bottom":"1px solid silver"},attrs:{"is-link":""},on:{click:t.showPopup}},[t.pickerBox?t._e():n("span",[t._v(t._s(t.message))]),t.pickerBox?n("span",{staticStyle:{color:"red"}},[t._v("选球"+t._s(t.pickerBox)+"个")]):t._e()]),n("van-popup",{style:{height:"50%"},attrs:{position:"bottom"},model:{value:t.popupShow,callback:function(e){t.popupShow=e},expression:"popupShow"}},[n("van-picker",{ref:"boxPicker",attrs:{"show-toolbar":"",columns:t.columns.value},on:{confirm:t.onConfirm,cancel:t.onCancel,change:t.onChange}})],1)],1),n("div",{staticClass:"threeDBoxPage"},[n("van-divider",{staticStyle:{color:"red"}},[t._v("选码区")]),n("div",{staticClass:"threeDBoxNum"},t._l(t.threeDBox.value,(function(e,i){return n("div",{key:i,staticClass:"boxNum",style:{background:e.ischecked?"red":"white"},on:{click:function(n){return t.pickBox(t.threeDBox.value,e.value)}}},[n("span",{style:{color:e.ischecked?"white":"black"}},[t._v(t._s(e.value-1))])])})),0)],1),n("div",{staticClass:"btnWrap"},[n("van-button",{staticClass:"reset",attrs:{type:"primary"},on:{click:t.getThreeDBoxList}},[t._v("随机")])],1)])])}),[],!1,null,"c18e69e4",null);e.default=d.exports},ba91:function(t,e,n){},c919:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("d71c");function s(t){if(!Object(i.c)(t))return t;if(Array.isArray(t))return t.map((function(t){return s(t)}));if("object"==typeof t){var e={};return Object.keys(t).forEach((function(n){e[n]=s(t[n])})),e}return t}}}]);