/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{275:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var c={name:"VueSlideToggle",props:{open:Boolean,duration:{type:Number,default:300},tag:{type:String,default:"div"}},data:function(){return{scrollHeight:0,doneOpenTransition:!1,innerOpen:this.open}},mounted:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},updated:function(){this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},watch:{open:function(t){var e=this;t?this.innerOpen=!0:(this.getHeight(),this.doneOpenTransition=!1,this.$nextTick().then((function(){e.innerOpen=!1})))}},computed:{style:function(){if(this.innerOpen&&this.doneOpenTransition)return null;var t=this.innerOpen?this.scrollHeight:0;return{overflow:"hidden",transitionProperty:"height",height:"".concat(t,"px"),transitionDuration:"".concat(this.duration,"ms")}}},methods:{getHeight:function(){var t=this.$refs.container;this.scrollHeight=t.scrollHeight},handleTransition:function(){this.innerOpen&&(this.doneOpenTransition=!0)}},render:function(t){return t(this.tag,{style:this.style,ref:"container",on:{transitionend:this.handleTransition}},this.$slots.default)}};var n={install:function t(e){t.installed||(t.installed=!0,e.component("VueSlideToggle",c))}},o=c,l=null;"undefined"!=typeof window&&(l=window.Vue),l&&l.use(n)},360:function(t,e,r){"use strict";r.r(e);r(12),r(10),r(9),r(18),r(19);var c=r(20),n=r(3),o=r(2),l=(r(34),r(24)),d=(r(13),r(125),r(273)),h=r(54);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m={components:{},props:{product:{type:Object,default:function(){return{pictures:[]}}}},data:function(){return{baseUrl:h.a,currentIndex:0,carouselSetting:f(f({},d.b),{},{spaceBetween:10,slidesPerView:3,navigation:{nextEl:".swiper-1 .swiper-next",prevEl:".swiper-1 .swiper-prev"},breakpoints:{768:{slidesPerView:2},576:{slidesPerView:1}}})}},computed:{lightBoxMedia:function(){var t=this;return this.product.pictures.reduce((function(e,r){return[].concat(Object(c.a)(e),[{thumb:"".concat(h.a).concat(r.url),src:"".concat(h.a).concat(r.url),caption:t.product.name}])}),[])}},methods:{}},_=r(5),y=Object(_.a)(m,(function(){var t=this,e=t._self._c;return t.product?e("div",{staticClass:"swiper-carousel product-gallery-carousel swiper-1"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper1",value:t.carouselSetting,expression:"carouselSetting",arg:"swiper1"}]},[e("div",{staticClass:"swiper-wrapper"},t._l(t.product.pictures,(function(picture,r){return e("div",{key:r,staticClass:"swiper-slide"},[e("figure",{staticClass:"product-gallery-image p-0"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(picture.url),expression:"`${baseUrl}${picture.url}`"}],attrs:{alt:"product",width:picture.width,height:picture.height}})])])})),0)]),t._v(" "),t._m(0)]):t._e()}),[function(){var t=this._self._c;return t("div",{staticClass:"swiper-nav nav-side"},[t("div",{staticClass:"swiper-prev"},[t("i",{staticClass:"icon-angle-left"})]),this._v(" "),t("div",{staticClass:"swiper-next"},[t("i",{staticClass:"icon-angle-right"})])])}],!1,null,null,null).exports,O=(r(29),r(123),r(275)),w=r(279);function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var P={components:{VueSlideToggle:O.a,QuantityInput:w.a},props:{product:{type:Object}},data:function(){return{baseUrl:h.a,variationGroup:[],selectableGroup:[],sizeArray:[],colorArray:[],selectedVariant:{color:null,colorName:null,price:null,size:null},maxPrice:0,minPrice:99999,qty:1}},computed:j(j(j(j({},Object(l.c)("cart",["canAddToCart"])),Object(l.c)("wishlist",["isInWishlist"])),Object(l.c)("compare",["isInCompare"])),{},{showClear:function(){return!(!this.selectedVariant.color&&!this.selectedVariant.size)},showVariationPrice:function(){return!(!this.selectedVariant.color||!this.selectedVariant.size)}}),created:function(){var t=this.minPrice,e=this.maxPrice;this.variationGroup=this.product.variants.reduce((function(r,c){return c.size.map((function(t){r.push({color:c.color,colorName:c.color_name,size:t.name,price:c.price})})),t>c.price&&(t=c.price),e<c.price&&(e=c.price),r}),[]),0==this.product.variants.length&&(t=this.product.sale_price?this.product.sale_price:this.product.price,e=this.product.price),this.minPrice=t,this.maxPrice=e,this.refreshSelectableGroup()},methods:j(j(j(j({},Object(l.b)("cart",["addToCart"])),Object(l.b)("wishlist",["addToWishlist"])),Object(l.b)("compare",["addToCompare"])),{},{refreshSelectableGroup:function(){var t=this,e=Object(c.a)(this.variationGroup);this.selectedVariant.color&&(e=this.variationGroup.reduce((function(e,r){return t.selectedVariant.color!==r.color?e:[].concat(Object(c.a)(e),[r])}),[])),this.sizeArray=e.reduce((function(t,e){return-1!==t.findIndex((function(t){return t.size==e.size}))?t:[].concat(Object(c.a)(t),[e])}),[]),e=Object(c.a)(this.variationGroup),this.selectedVariant.size&&(e=this.variationGroup.reduce((function(e,r){return t.selectedVariant.size!==r.size?e:[].concat(Object(c.a)(e),[r])}),[])),this.colorArray=this.product.variants.reduce((function(t,r){return-1==e.findIndex((function(t){return t.color==r.color}))?[].concat(Object(c.a)(t),[{color:r.color,colorName:r.color_name,price:r.price,disabled:!0}]):[].concat(Object(c.a)(t),[{color:r.color,colorName:r.color_name,price:r.price,disabled:!1}])}),[])},selectColor:function(t){t.color==this.selectedVariant.color?this.selectedVariant=j(j({},this.selectedVariant),{},{color:null,colorName:null,price:t.price}):this.selectedVariant=j(j({},this.selectedVariant),{},{color:t.color,colorName:t.colorName,price:t.price}),this.refreshSelectableGroup()},selectSize:function(){"null"==this.selectedVariant.size&&(this.selectedVariant=j(j({},this.selectedVariant),{},{size:null})),this.refreshSelectableGroup()},changeQty:function(t){this.qty=t},clearSelection:function(){this.selectedVariant=j(j({},this.selectedVariant),{},{color:null,colorName:null,size:null}),this.refreshSelectableGroup()},addCart:function(){var t=j({},this.product);this.product.variants.length>0&&(t=j(j({},this.product),{},{name:this.product.name+" - "+this.selectedVariant.colorName+", "+this.selectedVariant.size,price:this.selectedVariant.price})),this.addToCart({product:t,qty:this.qty})}})},x=Object(_.a)(P,(function(){var t=this,e=t._self._c;return t.product?e("div",{staticClass:"product-details product-details-centered product-details-separator"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),e("div",{staticClass:"ratings-container"},[e("div",{staticClass:"ratings"},[e("div",{staticClass:"ratings-val",style:{width:20*t.product.ratings+"%"}}),t._v(" "),e("span",{staticClass:"tooltip-text"},[t._v(t._s(t.product.ratings.toFixed(2)))])]),t._v(" "),e("span",{staticClass:"ratings-text mt-0"},[t._v("( "+t._s(t.product.review)+" Reviews )")])]),t._v(" "),0==t.product.stock?e("div",{key:"outPrice",staticClass:"product-price"},[e("span",{staticClass:"out-price"},[t._v("$"+t._s(t.product.price.toFixed(2)))])]):[t.minPrice==t.maxPrice?e("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]):[0==t.product.variants.length?e("div",{staticClass:"product-price"},[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]),t._v(" "),e("span",{staticClass:"old-price"},[t._v("$"+t._s(t.maxPrice.toFixed(2)))])]):e("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2))+" - $"+t._s(t.maxPrice.toFixed(2)))])]],t._v(" "),e("div",{staticClass:"product-content"},[e("p",[t._v(t._s(t.product.short_desc))])]),t._v(" "),t.product.variants.length>0?[e("div",{staticClass:"details-filter-row details-row-size"},[e("label",[t._v("Color:")]),t._v(" "),e("div",{staticClass:"product-nav product-nav-dots"},t._l(t.colorArray,(function(r,c){return e("a",{key:c,class:{active:r.color==t.selectedVariant.color,disabled:r.disabled},style:{"background-color":r.color},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.selectColor(r)}}})})),0)]),t._v(" "),e("div",{staticClass:"details-filter-row details-row-size"},[e("label",{attrs:{for:"size"}},[t._v("Size:")]),t._v(" "),e("div",{staticClass:"select-custom"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedVariant.size,expression:"selectedVariant.size"}],staticClass:"form-control",attrs:{name:"size",id:"size"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.selectedVariant,"size",e.target.multiple?r:r[0])},t.selectSize]}},[e("option",{attrs:{value:"null"}},[t._v("Select a size")]),t._v(" "),t._l(t.sizeArray,(function(r,c){return e("option",{key:c,domProps:{value:r.size}},[t._v(t._s(r.size))])}))],2)]),t._v(" "),t._m(0),t._v(" "),t.showClear?e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearSelection.apply(null,arguments)}}},[t._v("clear")]):t._e()]),t._v(" "),e("vue-slide-toggle",{attrs:{open:t.showVariationPrice}},[e("div",{staticClass:"product-price"},[t._v("$"+t._s(t.selectedVariant.price?t.selectedVariant.price.toFixed(2):0))])])]:t._e()],2),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"product-details-action mb-1"},[e("div",{staticClass:"details-action-col"},[e("quantity-input",{staticClass:"mr-3 mr-sm-4",attrs:{product:t.product},on:{"change-qty":t.changeQty}}),t._v(" "),e("a",{staticClass:"btn-product btn-cart ml-sm-2",class:{"btn-disabled":!t.canAddToCart(t.product,t.qty)||t.product.variants.length>0&&!t.showVariationPrice},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addCart.apply(null,arguments)}}},[e("span",[t._v("add to cart")])])],1),t._v(" "),e("div",{staticClass:"details-action-wrapper"},[t.isInWishlist(t.product)?e("nuxt-link",{key:"inWishlist",staticClass:"btn-product btn-wishlist added-to-wishlist",attrs:{to:"/shop/wishlist",title:"Wishlist"}},[e("span",[t._v("Go to Wishlist")])]):e("a",{key:"notInWishlist",staticClass:"btn-product btn-wishlist",attrs:{href:"#",title:"Wishlist"},on:{click:function(e){return e.preventDefault(),t.addToWishlist({product:t.product})}}},[e("span",[t._v("Add to Wishlist")])])],1)]),t._v(" "),e("div",{staticClass:"product-details-footer details-footer-col"},[e("div",{staticClass:"product-cat"},[e("span",[t._v("Category:")]),t._v(" "),t._l(t.product.category,(function(r,c){return e("span",{key:c},[e("nuxt-link",{attrs:{to:{path:"/shop/sidebar/list",query:{category:r.slug}}}},[t._v(t._s(r.name))]),t._v("\n                            "+t._s(c<t.product.category.length-1?",":"")+"\n                        ")],1)}))],2),t._v(" "),t._m(1)])])])])]):t._e()}),[function(){var t=this._self._c;return t("a",{staticClass:"size-guide mr-4",attrs:{href:"javascript:;"}},[t("i",{staticClass:"icon-th-list"}),this._v("size guide\n                        ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"social-icons social-icons-sm"},[e("span",{staticClass:"social-label"},[t._v("Share:")]),t._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Facebook",target:"_blank"}},[e("i",{staticClass:"icon-facebook-f"})]),t._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Twitter",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})]),t._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Instagram",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})]),t._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Pinterest",target:"_blank"}},[e("i",{staticClass:"icon-pinterest"})])])}],!1,null,null,null),V=x.exports,z=r(300),k=r(284),S=r(285);function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var G,N={components:{DetailThree:V,InfoOne:z.a,Breadcrumb:k.a,GalleryExtended:y,RelatedProductsOne:S.a},data:function(){return{product:null,prevProduct:null,nextProduct:null,relatedProducts:[],loaded:!1}},computed:T({},Object(l.c)("demo",["currentDemo"])),created:function(){this.getProduct()},methods:{getProduct:(G=Object(n.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loaded=!1,t.next=3,h.b.get("".concat(h.a,"/products/").concat(this.$route.params.slug),{params:{demo:this.currentDemo}}).then((function(t){e.product=T({},t.data.product),e.relatedProducts=Object(c.a)(t.data.relatedProducts),e.prevProduct=t.data.prevProduct,e.nextProduct=t.data.nextProduct,e.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return G.apply(this,arguments)})}},$=N,E=Object(_.a)($,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main"},[e("breadcrumb",{attrs:{"prev-product":t.prevProduct,"next-product":t.nextProduct,current:"Extended"}}),t._v(" "),e("div",{staticClass:"page-content"},[e("div",{staticClass:"container skeleton-body"},[e("div",{staticClass:"product-details-top"},[e("div",{staticClass:"skel-pro-single gallery mb-4",class:{loaded:t.loaded}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"skel-product-gallery"}),t._v(" "),e("gallery-extended",{attrs:{product:t.product}})],1),t._v(" "),t._m(0)])]),t._v(" "),t.product?e("detail-three",{attrs:{product:t.product}}):t._e()],1),t._v(" "),e("info-one"),t._v(" "),e("related-products-one",{attrs:{products:t.relatedProducts}})],1)])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"col-12"},[t("div",{staticClass:"entry-summary row mt-5"},[t("div",{staticClass:"col-6"},[t("div",{staticClass:"entry-summary1"})]),this._v(" "),t("div",{staticClass:"col-6"},[t("div",{staticClass:"entry-summary2"})])])])}],!1,null,null,null);e.default=E.exports}}]);