(this.webpackJsonp=this.webpackJsonp||[]).push([["chunk-ba0a5f26"],{2015:function(e,t,c){"use strict";c.r(t);var n=c("28b6"),a=(c("d59a"),c("727b")),o=(c("0211"),c("b2df"),c("7e5a"),c("882b"),c("d994"),c("289a")),s=c.n(o),l=c("2e36"),i={name:"dragChooseAllPage",components:Object(n.a)({draggable:s.a},a.a.name,a.a),setup:function(){var e=Object(l.f)(!1),t=Object(l.f)("#4994df"),c=Object(l.e)({value:[{id:1,checked:!0,content:"1"},{id:2,checked:!0,content:"2"},{id:3,checked:!1,content:"3"},{id:4,checked:!0,content:"4"},{id:5,checked:!0,content:"5"}]}),n=Object(l.a)({get:function(){return c.value.filter((function(e){return e.checked})).length===c.value.length},set:function(e){c.value.forEach((function(t){return t.checked=e}))}}),o=Object(l.a)((function(){return c.value.filter((function(e){return e.checked})).length}));return{drag:e,themeColor:t,selectList:c,allChecked:n,checkedLength:o,checkthis:function(e){e.checked=!e.checked},checkAll:function(){n.value=!n.value},onStart:function(){e.value=!0},onEnd:function(){e.value=!1},getList:function(){var e="",t=[];c.value.forEach((function(e){t.push(e.id)})),e=n.value?"你已经全部勾选了，\n排序：".concat(t):"你已经勾选了".concat(o.value,"条，还有").concat(c.value.length-o.value,"条没有勾选，\n排序：").concat(t),Object(a.a)({message:e})}}}},u=(c("a874"),c("cba8")),r=Object(u.a)(i,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("LayOutIndex",{attrs:{titleShow:"",back:""}},[c("div",{staticClass:"listStauts"},[c("span",[e._v("状态显示： "+e._s(e.drag?"拖拽中":"拖拽停止"))])]),c("draggable",{staticClass:"chooseListWarp",attrs:{chosenClass:"chosen",forceFallback:"true",animation:"1000"},on:{start:e.onStart,end:e.onEnd},model:{value:e.selectList.value,callback:function(t){e.$set(e.selectList,"value",t)},expression:"selectList.value"}},e._l(e.selectList.value,(function(t){return c("div",{key:t.id,staticClass:"chooseList"},[c("div",{staticClass:"chooseListIcon",on:{click:function(c){return e.checkthis(t)}}},[c("van-checkbox",{attrs:{value:t.checked,"checked-color":e.themeColor}})],1),c("div",{staticClass:"chooseListContent"},[e._v(" "+e._s(t.content)+" ")])])})),0),c("div",{staticClass:"chooseAllBtnWarp"},[c("div",{staticClass:"chooseAllBtnWarpIcon"},[c("van-checkbox",{attrs:{value:e.allChecked,"checked-color":e.themeColor},on:{click:function(t){return e.checkAll()}}},[e._v("全选")])],1),c("div",{staticClass:"chooseAllBtnWarpContent"},[c("span",{style:{color:e.checkedLength===e.selectList.value.length?e.themeColor:""}},[e._v("勾选："+e._s(e.checkedLength)+" / "+e._s(e.selectList.value.length)+"条")]),c("van-button",{attrs:{type:"info",round:""},on:{click:e.getList}},[e._v("结果和排序")])],1)])],1)}),[],!1,null,"304a3c00",null);t.default=r.exports},"25bb":function(e,t,c){},"28b6":function(e,t,c){"use strict";function n(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}c.d(t,"a",(function(){return n}))},a874:function(e,t,c){"use strict";c("25bb")}}]);