(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74537ae0"],{"1d13":function(t,e,r){"use strict";r("cfe6")},"2d37":function(t,e,r){},"3f75":function(t,e,r){},"4a26":function(t,e,r){"use strict";r("b768")},"520f":function(t,e,r){"use strict";r("3f75")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),a=r("5899"),o="["+a+"]",s=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),i=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(s,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:i(1),end:i(2),trim:i(3)}},a05b:function(t,e,r){},a9e3:function(t,e,r){"use strict";var n=r("83ab"),a=r("da84"),o=r("94ca"),s=r("6eeb"),c=r("5135"),i=r("c6b6"),u=r("7156"),l=r("c04e"),f=r("d039"),d=r("7c73"),g=r("241c").f,y=r("06cf").f,C=r("9bf2").f,h=r("58a8").trim,m="Number",p=a[m],b=p.prototype,I=i(d(b))==m,v=function(t){var e,r,n,a,o,s,c,i,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=h(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(o=u.slice(2),s=o.length,c=0;c<s;c++)if(i=o.charCodeAt(c),i<48||i>a)return NaN;return parseInt(o,n)}return+u};if(o(m,!p(" 0o1")||!p("0b1")||p("+0x1"))){for(var x,_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(I?f((function(){b.valueOf.call(r)})):i(r)!=m)?u(new p(v(e)),r,_):v(e)},L=n?g(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;L.length>N;N++)c(p,x=L[N])&&!c(_,x)&&C(_,x,y(p,x));_.prototype=b,b.constructor=_,s(a,m,_)}},b768:function(t,e,r){},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.categoryList?r("div",{staticClass:"category"},[t.showBack?r("BackTop"):t._e(),r("CategoryTopBar"),r("Scroll",{staticClass:"ignore scroll-category-list",attrs:{config:t.scrollConfig}},[r("CategoryListContainer",t._l(t.categoryList,(function(e,n){return r("CategoryListItem",{key:e.miniWallkey+1,attrs:{currentCategoryIndex:t.currentCategoryIndex,index:n,categoryItemData:e},on:{"current-category-change":t.currentCategoryChange}})})),1)],1),r("Scroll",{ref:"scrollCPN",staticClass:"scroll-category-list-item ignore",attrs:{config:t.scrollConfig},on:{scroll:t.checkScroll}},[r("CategoryClassContainer",t._l(t.currentCategoryClassList,(function(e){return r("CategoryClassItem",{key:e.link+1,attrs:{item:e},on:{"img-load":t.refresh}})})),1),r("TabControl",{staticClass:"tab-control",attrs:{tabArr:["推荐"]}}),t.nowGoodsList?r("GoodsList",{staticClass:"goods-list",attrs:{goodsList:t.nowGoodsList}}):t._e()],1)],1):t._e()},a=[],o=(r("96cf"),r("1da1")),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category-list-container"},[t._t("default")],2)},c=[],i={name:"CategoryListContainer",created:function(){},data:function(){return{}},props:{},methods:{}},u=i,l=(r("4a26"),r("2877")),f=Object(l["a"])(u,s,c,!1,null,"367e3609",null),d=f.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category-list-item",class:{isActive:t.index===t.currentCategoryIndex,borderRoundBottom:t.index===t.currentCategoryIndex+1,borderRoundTop:t.index===t.currentCategoryIndex-1},on:{click:t.changeCurrentCategory}},[t._v(" "+t._s(t.categoryItemData.title)+" ")])},y=[],C=(r("a9e3"),{name:"CategoryListItem",created:function(){},data:function(){return{}},props:{categoryItemData:{type:Object},index:{type:Number},currentCategoryIndex:{type:Number}},methods:{changeCurrentCategory:function(){this.$emit("current-category-change",this.index)}}}),h=C,m=(r("520f"),Object(l["a"])(h,g,y,!1,null,"11796089",null)),p=m.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NavBar",{staticClass:"nav-bar",scopedSlots:t._u([{key:"center",fn:function(){return[r("div",[t._v("商品分类")])]},proxy:!0}])})},I=[],v=r("a7ac"),x={name:"Test",created:function(){},data:function(){return{}},props:{},methods:{},components:{NavBar:v["a"]}},_=x,L=(r("dd87"),Object(l["a"])(_,b,I,!1,null,"cc1e72ce",null)),N=L.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category-class-container"},[t._t("default")],2)},w=[],E={name:"CategoryClass",created:function(){},data:function(){return{}},methods:{}},O=E,D=(r("c8da"),Object(l["a"])(O,k,w,!1,null,"9073e2cc",null)),T=D.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category-class-item"},[r("a",{attrs:{href:t.item.link}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.image,expression:"item.image"}],attrs:{alt:""},on:{load:function(e){return t.$emit("img-load")}}}),r("p",[t._v(t._s(t.item.title))])])])},$=[],S={name:"CategoryClassItem",created:function(){},data:function(){return{}},props:{item:{type:Object}},methods:{}},A=S,G=(r("d5b5"),Object(l["a"])(A,j,$,!1,null,"163c2502",null)),R=G.exports,B=r("642b"),F=r("9287"),P=r("1bab");function q(){return Object(P["a"])({url:"/category"}).then((function(t){if(t.status>199&&t.status<300)return console.log(t.data.data),t.data.data.category.list}))}function M(t){return Object(P["a"])({url:"/subcategory?maitKey=".concat(t)}).then((function(t){if(t.status>199&&t.status<300)return t.data.data}))}function V(t){return Object(P["a"])({url:"/subcategory/detail",params:{miniWallkey:t}}).then((function(t){if(t.status>199&&t.status<300)return t.data}))}var W=r("783f"),z=r("5d17"),J=(r("e486"),r("dd76")),K={name:"category",mixins:[J["a"]],data:function(){return{scrollConfig:{bounce:{top:!1},click:!0,mouseWheel:!0,probeType:2},categoryList:null,currentCategoryIndex:0,categoryDetailDataList:[],categoryGoodsList:[],nowGoodsList:null}},computed:{currentCategoryClassList:function(){return this.categoryDetailDataList[this.currentCategoryIndex]&&this.categoryDetailDataList[this.currentCategoryIndex].list}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:return t.categoryList=e.sent,t.requesetCurrentGoodsList(),e.next=6,t.requestCategoryCurrentItemData();case 6:case"end":return e.stop()}}),e)})))()},mounted:function t(){var e=this;if(this.$refs.scrollCPN)return this.refresh=Object(W["a"])(this.$refs.scrollCPN.refresh,300,600),this.$bus.$on("img-load",this.refresh),void this.refresh();setTimeout((function(){t.call(e)}),200)},activated:function(){this.refresh()},methods:{currentCategoryChange:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.currentCategoryIndex=t,e.requestCategoryCurrentItemData(),e.$refs.scrollCPN.scrollTo(0,0,0),e.refresh();case 4:case"end":return r.stop()}}),r)})))()},requestCategoryCurrentItemData:function(){var t=this;if(!this.categoryDetailDataList[this.currentCategoryIndex])return M(this.categoryList[this.currentCategoryIndex].maitKey).then((function(e){return t.$set(t.categoryDetailDataList,t.currentCategoryIndex,e),1}))},checkScroll:function(t){var e=t.y;this.checkBackShow(e)},requesetCurrentGoodsList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V(t.categoryList[t.currentCategoryIndex].miniWallkey);case 2:t.nowGoodsList=e.sent;case 3:case"end":return e.stop()}}),e)})))()},refresh:function(){}},components:{CategoryListContainer:d,Scroll:z["a"],CategoryListItem:p,CategoryTopBar:N,CategoryClassContainer:T,CategoryClassItem:R,TabControl:B["a"],GoodsList:F["a"]}},U=K,X=(r("1d13"),Object(l["a"])(U,n,a,!1,null,"23150590",null));e["default"]=X.exports},c85b:function(t,e,r){},c8da:function(t,e,r){"use strict";r("2d37")},cfe6:function(t,e,r){},d5b5:function(t,e,r){"use strict";r("c85b")},dd87:function(t,e,r){"use strict";r("a05b")}}]);
//# sourceMappingURL=chunk-74537ae0.ecb25fcf.js.map