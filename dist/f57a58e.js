(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{266:function(t,e,r){"use strict";r(20);var c=r(24),o=r(259),l=r.n(o),n=(r(105),r(260),r(50)),d={components:{LightBox:l.a},props:{product:{type:Object,default:function(){return{sm_pictures:[],pictures:[]}}}},data:function(){return{baseUrl:n.a,currentIndex:0}},computed:{lightBoxMedia:function(){var t=this;return this.product.pictures.reduce((function(e,r){return[].concat(Object(c.a)(e),[{thumb:"".concat(n.a).concat(r.url),src:"".concat(n.a).concat(r.url),caption:t.product.name}])}),[])}},methods:{changePicture:function(t){this.currentIndex=t},openLightBox:function(){this.$refs.lightbox.showImage(this.currentIndex)}}},v=r(4),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{staticClass:"product-gallery"},[r("div",{staticClass:"row m-0"},[r("figure",{staticClass:"product-main-image"},[t.product.new?r("span",{staticClass:"product-label label-new"},[t._v("New")]):t._e(),t._v(" "),t.product.sale_price?r("span",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e(),t._v(" "),t.product.top?r("span",{staticClass:"product-label label-top"},[t._v("Top")]):t._e(),t._v(" "),0===t.product.stock?r("span",{staticClass:"product-label label-out"},[t._v("Out Of Stock")]):t._e(),t._v(" "),r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.product.pictures[t.currentIndex].url,expression:"`${baseUrl}${product.pictures[currentIndex].url}`"}],attrs:{id:"product-zoom",alt:"product",width:t.product.pictures[t.currentIndex].width,height:t.product.pictures[t.currentIndex].height}}),t._v(" "),r("a",{staticClass:"btn-product-gallery",attrs:{href:"#",id:"btn-product-gallery"},on:{click:function(e){return e.preventDefault(),t.openLightBox(e)}}},[r("i",{staticClass:"icon-arrows"})])]),t._v(" "),r("div",{staticClass:"product-image-gallery flex-grow-1",attrs:{id:"product-zoom-gallery"}},t._l(t.product.sm_pictures,(function(e,c){return r("a",{key:c,staticClass:"product-gallery-item h-100 carousel-dot",class:{active:t.currentIndex==c},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePicture(c)}}},[r("img",{attrs:{src:""+t.baseUrl+e.url,width:e.width,height:e.height,alt:"product side"}})])})),0),t._v(" "),r("light-box",{ref:"lightbox",staticClass:"light-box",attrs:{media:t.lightBoxMedia,"show-caption":!0,"show-light-box":!1}})],1)]):t._e()}),[],!1,null,null,null);e.a=component.exports},276:function(t,e,r){"use strict";var c=r(50),o={props:{product:Object},data:function(){return{baseUrl:c.a,maxPrice:0,minPrice:99999}},created:function(){var t=this.minPrice,e=this.maxPrice;this.product.variants.map((function(r){t>r.price&&(t=r.price),e<r.price&&(e=r.price)}),[]),0==this.product.variants.length&&(t=this.product.sale_price?this.product.sale_price:this.product.price,e=this.product.price),this.minPrice=t,this.maxPrice=e}},l=r(4),n=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product product-sm align-items-center"},[r("figure",{staticClass:"product-media"},[r("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.product.sm_pictures[0].url,expression:"`${baseUrl}${product.sm_pictures[0].url}`"}],staticClass:"product-image",attrs:{alt:"Product",width:t.product.sm_pictures[0].width,height:t.product.sm_pictures[0].height}}),t._v(" "),t.product.sm_pictures[1]?r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.product.sm_pictures[1].url,expression:"`${baseUrl}${product.sm_pictures[1].url}`"}],staticClass:"product-image-hover",attrs:{alt:"Product",width:t.product.sm_pictures[1].width,height:t.product.sm_pictures[1].height}}):t._e()])],1),t._v(" "),r("div",{staticClass:"product-body py-0 pl-4"},[r("h3",{staticClass:"product-title"},[r("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[t._v(t._s(t.product.name))])],1),t._v(" "),0==t.product.stock?r("div",{key:"outPrice",staticClass:"product-price"},[r("span",{staticClass:"out-price"},[t._v("$"+t._s(t.product.price.toFixed(2)))])]):[t.minPrice==t.maxPrice?r("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]):[0==t.product.variants.length?r("div",{staticClass:"product-price"},[r("span",{staticClass:"new-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]),t._v(" "),r("span",{staticClass:"old-price"},[t._v("$"+t._s(t.maxPrice.toFixed(2)))])]):r("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2))+"–$"+t._s(t.maxPrice.toFixed(2)))])]]],2)])}),[],!1,null,null,null).exports,d={props:{products:Array},components:{ProductEleven:n}},v={components:{RelatedProductsTwo:Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"widget widget-products"},[r("h4",{staticClass:"widget-title"},[t._v("Related Product")]),t._v(" "),r("div",{staticClass:"products"},t._l(t.products,(function(t,e){return r("product-eleven",{key:e,attrs:{product:t}})})),1),t._v(" "),r("nuxt-link",{staticClass:"btn btn-outline-dark-3 text-truncate",attrs:{to:t.localePath("/shop/sidebar/4cols")}},[r("span",[t._v("View More Products")]),t._v(" "),r("i",{staticClass:"icon-long-arrow-right"})])],1)}),[],!1,null,null,null).exports},props:{products:Array,loaded:Boolean},computed:{relatedProducts:function(){return this.products.slice(0,4)}},data:function(){return{toggleState:!1}},mounted:function(){this.stickyHandle(),window.addEventListener("resize",this.stickyHandle,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.stickyHandle)},methods:{stickyHandle:function(){window.outerWidth<992?this.toggleState=!0:this.toggleState=!1},toggleSidebar:function(){document.querySelector("body").classList.toggle("sidebar-filter-active")},hideSidebar:function(){document.querySelector("body").classList.remove("sidebar-filter-active")}}},h=Object(l.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"skeleton-body"},[r("div",{staticClass:"skel-pro-single",class:{loaded:t.loaded}},[r("div",{staticClass:"skel-widget"}),t._v(" "),r("div",{staticClass:"skel-widget"}),t._v(" "),r("div",{class:t.toggleState?"sidebar-filter right sidebar-product":"sidebar sidebar-product"},[r("button",{staticClass:"mfp-close",attrs:{title:"Close (Esc)",type:"button"},on:{click:t.toggleSidebar}},[r("span",[t._v("×")])]),t._v(" "),r("related-products-two",{attrs:{products:t.relatedProducts}}),t._v(" "),r("div",{staticClass:"widget widget-banner-sidebar"},[r("div",{staticClass:"banner-sidebar-title"},[t._v("ad box 280 x 280")]),t._v(" "),r("div",{staticClass:"banner-sidebar banner-overlay"},[r("nuxt-link",{attrs:{to:t.localePath("/shop/sidebar/4cols")}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/blog/sidebar/banner.jpg",expression:"'./images/blog/sidebar/banner.jpg'"}],attrs:{alt:"banner"}})])],1)])],1),t._v(" "),t.toggleState?r("button",{staticClass:"sidebar-fixed-toggler right",on:{click:t.toggleSidebar}},[r("i",{staticClass:"icon-cog"})]):t._e(),t._v(" "),r("div",{staticClass:"sidebar-filter-overlay",on:{click:t.hideSidebar}})])])}),[],!1,null,null,null);e.a=h.exports},376:function(t,e,r){"use strict";r.r(e);r(23),r(11),r(12),r(9),r(14);var c=r(24),o=(r(29),r(3)),l=r(2),n=r(19),d=r(266),v=r(250),h=r(280),m=r(254),_=r(276),f=r(50);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w,x={components:{DetailOne:v.a,InfoThree:h.a,Sidebar:_.a,Breadcrumb:m.a,GalleryHorizontal:d.a},data:function(){return{product:null,prevProduct:null,nextProduct:null,relatedProducts:[],loaded:!1}},computed:C({},Object(n.c)("demo",["currentDemo"])),created:function(){this.getProduct()},methods:{getProduct:(w=Object(o.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loaded=!1,t.next=3,f.b.get("".concat(f.a,"/products/").concat(this.$route.params.slug),{params:{demo:this.currentDemo}}).then((function(t){e.product=C({},t.data.product),e.relatedProducts=Object(c.a)(t.data.relatedProducts),e.prevProduct=t.data.prevProduct,e.nextProduct=t.data.nextProduct,e.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return w.apply(this,arguments)})}},P=r(4),component=Object(P.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("breadcrumb",{attrs:{"prev-product":t.prevProduct,"next-product":t.nextProduct,current:"Full Width","full-width":!0}}),t._v(" "),r("div",{staticClass:"page-content"},[r("div",{staticClass:"container-fluid skeleton-body horizontal"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-10 col-lg-9"},[r("div",{staticClass:"product-details-top detail-fullwidth"},[r("div",{staticClass:"row skel-pro-single",class:{loaded:t.loaded}},[r("div",{staticClass:"col-md-6 col-lg-7"},[r("div",{staticClass:"skel-product-gallery"}),t._v(" "),r("gallery-horizontal",{attrs:{product:t.product}})],1),t._v(" "),r("div",{staticClass:"col-md-6 col-lg-5"},[t._m(0),t._v(" "),t._v('\' class="mb-0">'),t._v(" "),t.loaded?r("info-three"):t._e()],1)])])]),t._v(" "),r("div",{staticClass:"col-xl-2 col-lg-3"},[r("sidebar",{attrs:{products:t.relatedProducts,loaded:t.loaded}})],1)])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"entry-summary row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"entry-summary1"})]),this._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"entry-summary2"})]),this._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"entry-summary3"})])])}],!1,null,null,null);e.default=component.exports}}]);