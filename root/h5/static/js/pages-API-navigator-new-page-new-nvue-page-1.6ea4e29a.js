(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-nvue-page-1"],{"0b2e":function(t,e,n){"use strict";var i=n("175b"),a=n.n(i);a.a},"175b":function(t,e,n){var i=n("3f6d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("11d7a6d1",i,!0,{sourceMap:!1,shadowMode:!1})},"3f6d":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".new-page__text[data-v-96417b38]{font-size:14px;color:#666}.root[data-v-96417b38]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-body[data-v-96417b38]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:50px}.new-page__text-box[data-v-96417b38]{padding:20px}.new-page__color[data-v-96417b38]{width:200px;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-page__color-text[data-v-96417b38]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-96417b38]{margin-top:15px;width:300px}",""]),t.exports=e},"61dd":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("f3f3")),o=n("2f62"),c={data:function(){return{}},computed:(0,a.default)({},(0,o.mapState)(["colorIndex","colorList"]),{},(0,o.mapGetters)(["currentColor"])),methods:(0,a.default)({},(0,o.mapMutations)(["setColorIndex"]),{navToNvue:function(){uni.navigateTo({url:"new-nvue-page-2"})},navToVue:function(){uni.navigateTo({url:"new-vue-page-2"})}})};e.default=c},7617:function(t,e,n){"use strict";n.r(e);var i=n("61dd"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},8897:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"root"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:t.currentColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setColorIndex(t.colorIndex>1?0:t.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[t._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[t._v("点击上方色块使用vuex在页面之间进行通讯")])],1),n("v-uni-view",{staticClass:"new-page__button"},[n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToNvue.apply(void 0,arguments)}}},[t._v("跳转NVUE页面")]),n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToVue.apply(void 0,arguments)}}},[t._v("跳转VUE页面")])],1)],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},e52c:function(t,e,n){"use strict";n.r(e);var i=n("8897"),a=n("7617");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("0b2e");var c,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"96417b38",null,!1,i["a"],c);e["default"]=u.exports}}]);