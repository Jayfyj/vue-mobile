(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{376:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indexPage"},[n("title-nav",{attrs:{title:t.$route.meta.title,back:""}}),n("div",[n("van-cell",{staticStyle:{"border-bottom":"1px solid silver"},attrs:{"is-link":""},on:{click:t.showPopup}},[0==t.pickerBox.value.length?n("span",[t._v(t._s(t.message))]):t._e(),t.pickerBox.value.length>0?n("span",{staticStyle:{color:"red"}},[t._v("红球"+t._s(t.pickerBox.value[0])+"个")]):t._e(),t.pickerBox.value.length>0?n("span",{staticStyle:{color:"blue","margin-left":"10px"}},[t._v("蓝球"+t._s(t.pickerBox.value[1])+"个")]):t._e()]),n("van-popup",{style:{height:"50%"},attrs:{position:"bottom"},model:{value:t.popupShow,callback:function(e){t.popupShow=e},expression:"popupShow"}},[n("van-picker",{ref:"boxPicker",attrs:{"show-toolbar":"",title:"左红右蓝",columns:t.columns.value},on:{confirm:t.onConfirm,cancel:t.onCancel,change:t.onChange}})],1)],1),n("div",{staticClass:"doubleBoxPage"},[n("van-divider",{staticStyle:{color:"red"}},[t._v("红区")]),n("div",{staticClass:"doubleBoxRedNum"},t._l(t.redBox.value,(function(e,i){return n("div",{key:i,staticClass:"boxNum",style:{background:e.ischecked?"red":"white"},on:{click:function(n){return t.pickBox(t.redBox.value,e.value)}}},[n("span",{style:{color:e.ischecked?"white":"black"}},[t._v(t._s(e.value))])])})),0),n("van-divider",{staticStyle:{color:"blue"}},[t._v("蓝区")]),n("div",{staticClass:"doubleBoxBlueNum"},t._l(t.blueBox.value,(function(e,i){return n("div",{key:i,staticClass:"boxNum",style:{background:e.ischecked?"blue":"white"},on:{click:function(n){return t.pickBox(t.blueBox.value,e.value)}}},[n("span",{style:{color:e.ischecked?"white":"black"}},[t._v(t._s(e.value))])])})),0)],1),n("van-button",{staticClass:"reset",attrs:{type:"primary"},on:{click:t.getDoubleBoxList}},[t._v("随机")])],1)};i._withStripped=!0;var s,o=n(381),a=(n(385),n(387)),r=(n(390),n(393)),u=(n(200),n(8),n(203),n(206),n(209),n(392)),c=n(39),l={name:"doubleBox",components:(s={},Object(o.a)(s,r.a.name,r.a),Object(o.a)(s,a.a.name,a.a),s),setup:function(){var t=Object(c.e)({value:[]}),e=Object(c.e)({value:[]}),n=Object(c.f)(!1),i=Object(c.f)("请选择红球和篮球(默认红6蓝1)"),s=Object(c.e)({value:[]}),o=Object(c.e)({value:[{values:["6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33"],defaultIndex:0},{values:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],defaultIndex:0}]});function a(n,i){n.forEach((function(e){var n={};n.value=e,n.ischecked=!1,t.value.push(n)})),i.forEach((function(t){var n={};n.value=t,n.ischecked=!1,e.value.push(n)}))}function r(t,e){for(var n,i,s=t.slice(0),o=t.length,a=o-e;o-- >a;)n=s[i=Math.floor((o+1)*Math.random())],s[i]=s[o],s[o]=n;return s.slice(a)}function l(t,e){t[e-1].ischecked=!t[e-1].ischecked}return Object(c.c)((function(){a(u.a.red,u.a.blue)})),{redBox:t,blueBox:e,popupShow:n,message:i,pickerBox:s,columns:o,initBox:a,getDoubleBoxList:function(){var n=Number(s.value[0])||6,i=Number(s.value[1])||1;t.value.forEach((function(t){t.ischecked=!1})),e.value.forEach((function(t){t.ischecked=!1})),r(t.value,n).forEach((function(e){l(t.value,e.value)})),r(e.value,i).forEach((function(t){l(e.value,t.value)}))},randomBox:r,pickBox:l,showPopup:function(){n.value=!0},onConfirm:function(t){s.value=t,n.value=!1},onCancel:function(){n.value=!1},onChange:function(t,e,n){}}}},h=(n(486),n(47)),f=Object(h.a)(l,i,[],!1,null,"94433108",null);f.options.__file="src/views/demo/welfareLotteryPage/doubleBox/index.vue",e.default=f.exports},381:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}))},385:function(t,e,n){"use strict";n(26),n(386)},386:function(t,e,n){},387:function(t,e,n){"use strict";var i=n(17),s=n.n(i),o=n(24),a=n(19),r=Object(o.a)("divider"),u=r[0],c=r[1];function l(t,e,n,i){var o;return t("div",s()([{attrs:{role:"separator"},style:{borderColor:e.borderColor},class:c((o={dashed:e.dashed,hairline:e.hairline},o["content-"+e.contentPosition]=n.default,o))},Object(a.b)(i,!0)]),[n.default&&n.default()])}l.props={dashed:Boolean,hairline:{type:Boolean,default:!0},contentPosition:{type:String,default:"center"}},e.a=u(l)},388:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(1);function s(t){if(!Object(i.c)(t))return t;if(Array.isArray(t))return t.map((function(t){return s(t)}));if("object"==typeof t){var e={};return Object.keys(t).forEach((function(n){e[n]=s(t[n])})),e}return t}},390:function(t,e,n){"use strict";n(26),n(112),n(391)},391:function(t,e,n){},392:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return o}));var i=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80"],s={red:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33"],blue:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16"]},o=["10","1","2","3","4","5","6","7","8","9"]},393:function(t,e,n){"use strict";var i=n(5),s=n(24),o=n(11),a=n(46),r={title:String,loading:Boolean,readonly:Boolean,itemHeight:[Number,String],showToolbar:Boolean,cancelButtonText:String,confirmButtonText:String,allowHtml:{type:Boolean,default:!0},visibleItemCount:{type:[Number,String],default:6},swipeDuration:{type:[Number,String],default:1e3}},u=n(65),c=n(90),l=n(17),h=n.n(l),f=n(388),d=n(1),m=n(144),v=n(142),p=Object(s.a)("picker-column"),g=p[0],b=p[1];function x(t){var e=window.getComputedStyle(t),n=e.transform||e.webkitTransform,i=n.slice(7,n.length-1).split(", ")[5];return Number(i)}function y(t){return Object(d.e)(t)&&t.disabled}var C=d.b&&"onwheel"in window,O=null,I=g({mixins:[v.a],props:{valueKey:String,readonly:Boolean,allowHtml:Boolean,className:String,itemHeight:Number,defaultIndex:Number,swipeDuration:[Number,String],visibleItemCount:[Number,String],initialOptions:{type:Array,default:function(){return[]}}},data:function(){return{offset:0,duration:0,options:Object(f.a)(this.initialOptions),currentIndex:this.defaultIndex}},created:function(){this.$parent.children&&this.$parent.children.push(this),this.setIndex(this.currentIndex)},mounted:function(){this.bindTouchEvent(this.$el),C&&Object(o.b)(this.$el,"wheel",this.onMouseWheel,!1)},destroyed:function(){var t=this.$parent.children;t&&t.splice(t.indexOf(this),1),C&&Object(o.a)(this.$el,"wheel")},watch:{initialOptions:"setOptions",defaultIndex:function(t){this.setIndex(t)}},computed:{count:function(){return this.options.length},baseOffset:function(){return this.itemHeight*(this.visibleItemCount-1)/2}},methods:{setOptions:function(t){JSON.stringify(t)!==JSON.stringify(this.options)&&(this.options=Object(f.a)(t),this.setIndex(this.defaultIndex))},onTouchStart:function(t){if(!this.readonly){if(this.touchStart(t),this.moving){var e=x(this.$refs.wrapper);this.offset=Math.min(0,e-this.baseOffset),this.startOffset=this.offset}else this.startOffset=this.offset;this.duration=0,this.transitionEndTrigger=null,this.touchStartTime=Date.now(),this.momentumOffset=this.startOffset}},onTouchMove:function(t){if(!this.readonly){this.touchMove(t),"vertical"===this.direction&&(this.moving=!0,Object(o.c)(t,!0)),this.offset=Object(m.c)(this.startOffset+this.deltaY,-this.count*this.itemHeight,this.itemHeight);var e=Date.now();e-this.touchStartTime>300&&(this.touchStartTime=e,this.momentumOffset=this.offset)}},onTouchEnd:function(){var t=this;if(!this.readonly){var e=this.offset-this.momentumOffset,n=Date.now()-this.touchStartTime;if(n<300&&Math.abs(e)>15)this.momentum(e,n);else{var i=this.getIndexByOffset(this.offset);this.duration=200,this.setIndex(i,!0),setTimeout((function(){t.moving=!1}),0)}}},onMouseWheel:function(t){var e=this;if(!this.readonly){Object(o.c)(t,!0);var n=x(this.$refs.wrapper);this.startOffset=Math.min(0,n-this.baseOffset),this.momentumOffset=this.startOffset,this.transitionEndTrigger=null;var i=t.deltaY;if(!(0===this.startOffset&&i<0)){var s=-i;this.offset=Object(m.c)(this.startOffset+s,-this.count*this.itemHeight,this.itemHeight),O&&clearTimeout(O),O=setTimeout((function(){e.onTouchEnd(),e.touchStartTime=0}),300)}}},onTransitionEnd:function(){this.stopMomentum()},onClickItem:function(t){this.moving||this.readonly||(this.transitionEndTrigger=null,this.duration=200,this.setIndex(t,!0))},adjustIndex:function(t){for(var e=t=Object(m.c)(t,0,this.count);e<this.count;e++)if(!y(this.options[e]))return e;for(var n=t-1;n>=0;n--)if(!y(this.options[n]))return n},getOptionText:function(t){return Object(d.e)(t)&&this.valueKey in t?t[this.valueKey]:t},setIndex:function(t,e){var n=this,i=-(t=this.adjustIndex(t)||0)*this.itemHeight,s=function(){t!==n.currentIndex&&(n.currentIndex=t,e&&n.$emit("change",t))};this.moving&&i!==this.offset?this.transitionEndTrigger=s:s(),this.offset=i},setValue:function(t){for(var e=this.options,n=0;n<e.length;n++)if(this.getOptionText(e[n])===t)return this.setIndex(n)},getValue:function(){return this.options[this.currentIndex]},getIndexByOffset:function(t){return Object(m.c)(Math.round(-t/this.itemHeight),0,this.count-1)},momentum:function(t,e){var n=Math.abs(t/e);t=this.offset+n/.003*(t<0?-1:1);var i=this.getIndexByOffset(t);this.duration=+this.swipeDuration,this.setIndex(i,!0)},stopMomentum:function(){this.moving=!1,this.duration=0,this.transitionEndTrigger&&(this.transitionEndTrigger(),this.transitionEndTrigger=null)},genOptions:function(){var t=this,e=this.$createElement,n={height:this.itemHeight+"px"};return this.options.map((function(i,s){var o,a=t.getOptionText(i),r=y(i),u={style:n,attrs:{role:"button",tabindex:r?-1:0},class:[b("item",{disabled:r,selected:s===t.currentIndex})],on:{click:function(){t.onClickItem(s)}}},c={class:"van-ellipsis",domProps:(o={},o[t.allowHtml?"innerHTML":"textContent"]=a,o)};return e("li",h()([{},u]),[t.slots("option",i)||e("div",h()([{},c]))])}))}},render:function(){var t=arguments[0],e={transform:"translate3d(0, "+(this.offset+this.baseOffset)+"px, 0)",transitionDuration:this.duration+"ms",transitionProperty:this.duration?"all":"none"};return t("div",{class:[b(),this.className]},[t("ul",{ref:"wrapper",style:e,class:b("wrapper"),on:{transitionend:this.onTransitionEnd}},[this.genOptions()])])}}),w=Object(s.a)("picker"),k=w[0],T=w[1],B=w[2];e.a=k({props:Object(i.a)({},r,{defaultIndex:{type:[Number,String],default:0},columns:{type:Array,default:function(){return[]}},toolbarPosition:{type:String,default:"top"},valueKey:{type:String,default:"text"}}),data:function(){return{children:[],formattedColumns:[]}},computed:{itemPxHeight:function(){return this.itemHeight?Object(u.b)(this.itemHeight):44},dataType:function(){var t=this.columns[0]||{};return t.children?"cascade":t.values?"object":"text"}},watch:{columns:{handler:"format",immediate:!0}},methods:{format:function(){var t=this.columns,e=this.dataType;"text"===e?this.formattedColumns=[{values:t}]:"cascade"===e?this.formatCascade():this.formattedColumns=t},formatCascade:function(){for(var t=[],e={children:this.columns};e&&e.children;){for(var n,i=e.children,s=null!=(n=e.defaultIndex)?n:+this.defaultIndex;i[s]&&i[s].disabled;){if(!(s<i.length-1)){s=0;break}s++}t.push({values:e.children,className:e.className,defaultIndex:s}),e=i[s]}this.formattedColumns=t},emit:function(t){var e=this;if("text"===this.dataType)this.$emit(t,this.getColumnValue(0),this.getColumnIndex(0));else{var n=this.getValues();"cascade"===this.dataType&&(n=n.map((function(t){return t[e.valueKey]}))),this.$emit(t,n,this.getIndexes())}},onCascadeChange:function(t){for(var e={children:this.columns},n=this.getIndexes(),i=0;i<=t;i++)e=e.children[n[i]];for(;e&&e.children;)t++,this.setColumnValues(t,e.children),e=e.children[e.defaultIndex||0]},onChange:function(t){var e=this;if("cascade"===this.dataType&&this.onCascadeChange(t),"text"===this.dataType)this.$emit("change",this,this.getColumnValue(0),this.getColumnIndex(0));else{var n=this.getValues();"cascade"===this.dataType&&(n=n.map((function(t){return t[e.valueKey]}))),this.$emit("change",this,n,t)}},getColumn:function(t){return this.children[t]},getColumnValue:function(t){var e=this.getColumn(t);return e&&e.getValue()},setColumnValue:function(t,e){var n=this.getColumn(t);n&&(n.setValue(e),"cascade"===this.dataType&&this.onCascadeChange(t))},getColumnIndex:function(t){return(this.getColumn(t)||{}).currentIndex},setColumnIndex:function(t,e){var n=this.getColumn(t);n&&(n.setIndex(e),"cascade"===this.dataType&&this.onCascadeChange(t))},getColumnValues:function(t){return(this.children[t]||{}).options},setColumnValues:function(t,e){var n=this.children[t];n&&n.setOptions(e)},getValues:function(){return this.children.map((function(t){return t.getValue()}))},setValues:function(t){var e=this;t.forEach((function(t,n){e.setColumnValue(n,t)}))},getIndexes:function(){return this.children.map((function(t){return t.currentIndex}))},setIndexes:function(t){var e=this;t.forEach((function(t,n){e.setColumnIndex(n,t)}))},confirm:function(){this.children.forEach((function(t){return t.stopMomentum()})),this.emit("confirm")},cancel:function(){this.emit("cancel")},genTitle:function(){var t=this.$createElement,e=this.slots("title");return e||(this.title?t("div",{class:["van-ellipsis",T("title")]},[this.title]):void 0)},genCancel:function(){return(0,this.$createElement)("button",{attrs:{type:"button"},class:T("cancel"),on:{click:this.cancel}},[this.slots("cancel")||this.cancelButtonText||B("cancel")])},genConfirm:function(){return(0,this.$createElement)("button",{attrs:{type:"button"},class:T("confirm"),on:{click:this.confirm}},[this.slots("confirm")||this.confirmButtonText||B("confirm")])},genToolbar:function(){var t=this.$createElement;if(this.showToolbar)return t("div",{class:T("toolbar")},[this.slots()||[this.genCancel(),this.genTitle(),this.genConfirm()]])},genColumns:function(){var t=this.$createElement,e=this.itemPxHeight,n=e*this.visibleItemCount,i={height:e+"px"},s={height:n+"px"},r={backgroundSize:"100% "+(n-e)/2+"px"};return t("div",{class:T("columns"),style:s,on:{touchmove:o.c}},[this.genColumnItems(),t("div",{class:T("mask"),style:r}),t("div",{class:[a.e,T("frame")],style:i})])},genColumnItems:function(){var t=this,e=this.$createElement;return this.formattedColumns.map((function(n,i){var s;return e(I,{attrs:{readonly:t.readonly,valueKey:t.valueKey,allowHtml:t.allowHtml,className:n.className,itemHeight:t.itemPxHeight,defaultIndex:null!=(s=n.defaultIndex)?s:+t.defaultIndex,swipeDuration:t.swipeDuration,visibleItemCount:t.visibleItemCount,initialOptions:n.values},scopedSlots:{option:t.$scopedSlots.option},on:{change:function(){t.onChange(i)}}})}))}},render:function(t){return t("div",{class:T()},["top"===this.toolbarPosition?this.genToolbar():t(),this.loading?t(c.a,{class:T("loading")}):t(),this.slots("columns-top"),this.genColumns(),this.slots("columns-bottom"),"bottom"===this.toolbarPosition?this.genToolbar():t()])}})},428:function(t,e,n){},486:function(t,e,n){"use strict";n(428)}}]);