/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{275:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var c={name:"VueSlideToggle",props:{open:Boolean,duration:{type:Number,default:300},tag:{type:String,default:"div"}},data:function(){return{scrollHeight:0,doneOpenTransition:!1,innerOpen:this.open}},mounted:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},updated:function(){this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},watch:{open:function(t){var e=this;t?this.innerOpen=!0:(this.getHeight(),this.doneOpenTransition=!1,this.$nextTick().then((function(){e.innerOpen=!1})))}},computed:{style:function(){if(this.innerOpen&&this.doneOpenTransition)return null;var t=this.innerOpen?this.scrollHeight:0;return{overflow:"hidden",transitionProperty:"height",height:"".concat(t,"px"),transitionDuration:"".concat(this.duration,"ms")}}},methods:{getHeight:function(){var t=this.$refs.container;this.scrollHeight=t.scrollHeight},handleTransition:function(){this.innerOpen&&(this.doneOpenTransition=!0)}},render:function(t){return t(this.tag,{style:this.style,ref:"container",on:{transitionend:this.handleTransition}},this.$slots.default)}};var n={install:function t(e){t.installed||(t.installed=!0,e.component("VueSlideToggle",c))}},o=c,l=null;"undefined"!=typeof window&&(l=window.Vue),l&&l.use(n)},279:function(t,e,r){"use strict";var c={props:{product:{type:Object}},data:function(){return{current:this.product.qty?this.product.qty:1}},watch:{product:function(){this.current=this.product.qty?this.product.qty:1}},methods:{increment:function(){this.product.stock&&this.current>=this.product.stock||(this.current++,this.$emit("change-qty",this.current,this.product))},decrement:function(){this.current>1&&(this.current--,this.$emit("change-qty",this.current,this.product))},setCurrent:function(t){this.current=parseInt(t.currentTarget.value),this.$emit("change-qty",this.current,this.product)}}},n=r(5),component=Object(n.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-details-quantity"},[e("div",{staticClass:"input-group input-spinner"},[e("div",{staticClass:"input-group-prepend"},[e("button",{staticClass:"btn btn-decrement btn-spinner",staticStyle:{"min-width":"26px"},attrs:{type:"button"},on:{click:t.decrement}},[e("i",{staticClass:"icon-minus"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.current,expression:"current"}],staticClass:"form-control text-center",attrs:{type:"text",required:"",placeholder:""},domProps:{value:t.current},on:{change:function(e){return t.setCurrent(e)},input:function(e){e.target.composing||(t.current=e.target.value)}}}),t._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-increment btn-spinner",staticStyle:{"min-width":"26px"},attrs:{type:"button"},on:{click:t.increment}},[e("i",{staticClass:"icon-plus"})])])])])}),[],!1,null,null,null);e.a=component.exports},280:function(t,e,r){"use strict";r(13),r(29),r(9),r(12),r(10),r(18),r(19);var c=r(20),n=r(2),o=(r(32),r(30),r(123),r(24)),l=r(275),d=r(279),h=r(54);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={components:{VueSlideToggle:l.a,QuantityInput:d.a},props:{product:{type:Object}},data:function(){return{baseUrl:h.a,variationGroup:[],selectableGroup:[],sizeArray:[],colorArray:[],selectedVariant:{color:null,colorName:null,price:null,size:null},maxPrice:0,minPrice:99999,qty:1,qty2:1}},computed:f(f(f(f({},Object(o.c)("cart",["canAddToCart"])),Object(o.c)("wishlist",["isInWishlist"])),Object(o.c)("compare",["isInCompare"])),{},{showClear:function(){return!(!this.selectedVariant.color&&!this.selectedVariant.size)},showVariationPrice:function(){return!(!this.selectedVariant.color||!this.selectedVariant.size)},isCartSticy:function(){return this.$route.path.includes("/product/default")}}),created:function(){var t=this.minPrice,e=this.maxPrice;this.variationGroup=this.product.variants.reduce((function(r,c){return c.size.map((function(t){r.push({color:c.color,colorName:c.color_name,size:t.name,price:c.price})})),t>c.price&&(t=c.price),e<c.price&&(e=c.price),r}),[]),0==this.product.variants.length&&(t=this.product.sale_price?this.product.sale_price:this.product.price,e=this.product.price),this.minPrice=t,this.maxPrice=e,this.refreshSelectableGroup()},methods:f(f(f(f({},Object(o.b)("cart",["addToCart"])),Object(o.b)("wishlist",["addToWishlist"])),Object(o.b)("compare",["addToCompare"])),{},{refreshSelectableGroup:function(){var t=this,e=Object(c.a)(this.variationGroup);this.selectedVariant.color&&(e=this.variationGroup.reduce((function(e,r){return t.selectedVariant.color!==r.color?e:[].concat(Object(c.a)(e),[r])}),[])),this.sizeArray=e.reduce((function(t,e){return-1!==t.findIndex((function(t){return t.size==e.size}))?t:[].concat(Object(c.a)(t),[e])}),[]),e=Object(c.a)(this.variationGroup),this.selectedVariant.size&&(e=this.variationGroup.reduce((function(e,r){return t.selectedVariant.size!==r.size?e:[].concat(Object(c.a)(e),[r])}),[])),this.colorArray=this.product.variants.reduce((function(t,r){return-1==e.findIndex((function(t){return t.color==r.color}))?[].concat(Object(c.a)(t),[{color:r.color,colorName:r.color_name,price:r.price,disabled:!0}]):[].concat(Object(c.a)(t),[{color:r.color,colorName:r.color_name,price:r.price,disabled:!1}])}),[])},selectColor:function(t){t.color==this.selectedVariant.color?this.selectedVariant=f(f({},this.selectedVariant),{},{color:null,colorName:null,price:t.price}):this.selectedVariant=f(f({},this.selectedVariant),{},{color:t.color,colorName:t.colorName,price:t.price}),this.refreshSelectableGroup()},selectSize:function(){"null"==this.selectedVariant.size&&(this.selectedVariant=f(f({},this.selectedVariant),{},{size:null})),this.refreshSelectableGroup()},changeQty:function(t){this.qty=t},changeQty2:function(t){this.qty2=t},clearSelection:function(){this.selectedVariant=f(f({},this.selectedVariant),{},{color:null,colorName:null,size:null}),this.refreshSelectableGroup()},addCart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=f({},this.product);this.product.variants.length>0&&(e=f(f({},this.product),{},{name:this.product.name+" - "+this.selectedVariant.colorName+", "+this.selectedVariant.size,price:this.selectedVariant.price})),this.addToCart({product:e,qty:0==t?this.qty:this.qty2})}})},m=_,C=r(5),component=Object(C.a)(m,(function(){var t=this,e=t._self._c;return t.product?e("div",{staticClass:"product-details"},[e("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),e("div",{staticClass:"ratings-container"},[e("div",{staticClass:"ratings"},[e("div",{staticClass:"ratings-val",style:{width:20*t.product.ratings+"%"}}),t._v(" "),e("span",{staticClass:"tooltip-text"},[t._v(t._s(t.product.ratings.toFixed(2)))])]),t._v(" "),e("span",{staticClass:"ratings-text mt-0"},[t._v("( "+t._s(t.product.review)+" Reviews )")])]),t._v(" "),0==t.product.stock?e("div",{key:"outPrice",staticClass:"product-price"},[e("span",{staticClass:"out-price"},[t._v("$"+t._s(t.product.price.toFixed(2)))])]):[t.minPrice==t.maxPrice?e("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]):[0==t.product.variants.length?e("div",{staticClass:"product-price"},[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]),t._v(" "),e("span",{staticClass:"old-price"},[t._v("$"+t._s(t.maxPrice.toFixed(2)))])]):e("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2))+" - $"+t._s(t.maxPrice.toFixed(2)))])]],t._v(" "),e("div",{staticClass:"product-content"},[e("p",[t._v(t._s(t.product.short_desc))])]),t._v(" "),t.product.variants.length>0?[e("div",{staticClass:"details-filter-row details-row-size"},[e("label",[t._v("Color:")]),t._v(" "),e("div",{staticClass:"product-nav product-nav-dots"},t._l(t.colorArray,(function(r,c){return e("a",{key:c,class:{active:r.color==t.selectedVariant.color,disabled:r.disabled},style:{"background-color":r.color},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.selectColor(r)}}})})),0)]),t._v(" "),e("div",{staticClass:"details-filter-row details-row-size"},[e("label",{attrs:{for:"size"}},[t._v("Size:")]),t._v(" "),e("div",{staticClass:"select-custom"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedVariant.size,expression:"selectedVariant.size"}],staticClass:"form-control",attrs:{name:"size",id:"size"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.selectedVariant,"size",e.target.multiple?r:r[0])},t.selectSize]}},[e("option",{attrs:{value:"null"}},[t._v("Select a size")]),t._v(" "),t._l(t.sizeArray,(function(r,c){return e("option",{key:c,domProps:{value:r.size}},[t._v(t._s(r.size))])}))],2)]),t._v(" "),t._m(0),t._v(" "),t.showClear?e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearSelection.apply(null,arguments)}}},[t._v("clear")]):t._e()]),t._v(" "),e("vue-slide-toggle",{attrs:{open:t.showVariationPrice}},[e("div",{staticClass:"product-price"},[t._v("$"+t._s(t.selectedVariant.price?t.selectedVariant.price.toFixed(2):0))])])]:t._e(),t._v(" "),e("div",{staticClass:"details-filter-row details-row-size"},[e("label",{attrs:{for:"qty"}},[t._v("Qty:")]),t._v(" "),e("quantity-input",{attrs:{product:t.product},on:{"change-qty":t.changeQty}})],1),t._v(" "),e("div",{staticClass:"product-details-action"},[e("a",{staticClass:"btn-product btn-cart",class:{"btn-disabled":!t.canAddToCart(t.product,t.qty)||t.product.variants.length>0&&!t.showVariationPrice},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addCart(0)}}},[e("span",[t._v("add to cart")])]),t._v(" "),e("div",{staticClass:"details-action-wrapper"},[t.isInWishlist(t.product)?e("nuxt-link",{key:"inWishlist",staticClass:"btn-product btn-wishlist added-to-wishlist",attrs:{to:"/shop/wishlist",title:"Wishlist"}},[e("span",[t._v("Go to Wishlist")])]):e("a",{key:"notInWishlist",staticClass:"btn-product btn-wishlist",attrs:{href:"#",title:"Wishlist"},on:{click:function(e){return e.preventDefault(),t.addToWishlist({product:t.product})}}},[e("span",[t._v("Add to Wishlist")])])],1)]),t._v(" "),e("div",{staticClass:"product-details-footer"},[e("div",{staticClass:"product-cat w-100 text-truncate"},[e("span",[t._v("Category:")]),t._v(" "),t._l(t.product.category,(function(r,c){return e("span",{key:c},[e("nuxt-link",{attrs:{to:{path:"/shop/sidebar/list",query:{category:r.slug}}}},[t._v(t._s(r.name))]),t._v("\n                "+t._s(c<t.product.category.length-1?",":"")+"\n            ")],1)}))],2),t._v(" "),t._m(1)]),t._v(" "),t.isCartSticy?e("div",{staticClass:"sticky-bar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("figure",{staticClass:"product-media"},[e("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(t.product.sm_pictures[0].url),expression:"`${baseUrl}${product.sm_pictures[0].url}`"}],attrs:{alt:"Product",width:t.product.sm_pictures[0].width,height:t.product.sm_pictures[0].height}})])],1),t._v(" "),e("h3",{staticClass:"product-title"},[e("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[t._v(t._s(t.product.name))])],1)]),t._v(" "),e("div",{staticClass:"col-6 justify-content-end"},[0==t.product.stock?e("div",{key:"outPrice",staticClass:"product-price"},[e("span",{staticClass:"out-price"},[t._v("$"+t._s(t.product.price.toFixed(2)))])]):[t.minPrice==t.maxPrice?e("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]):[0==t.product.variants.length?e("div",{staticClass:"product-price"},[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]),t._v(" "),e("span",{staticClass:"old-price"},[t._v("$"+t._s(t.maxPrice.toFixed(2)))])]):e("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2))+" - $"+t._s(t.maxPrice.toFixed(2)))])]],t._v(" "),e("quantity-input",{attrs:{product:t.product},on:{"change-qty":t.changeQty2}}),t._v(" "),e("div",{staticClass:"product-details-action"},[e("a",{staticClass:"btn-product btn-cart",class:{"btn-disabled":!t.canAddToCart(t.product,t.qty)||t.product.variants.length>0&&!t.showVariationPrice},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addCart(1)}}},[e("span",[t._v("add to cart")])]),t._v(" "),t.isInWishlist(t.product)?e("nuxt-link",{key:"inWishlist",staticClass:"btn-product btn-wishlist added-to-wishlist",attrs:{to:"/shop/wishlist",title:"Wishlist"}},[e("span",[t._v("Go to Wishlist")])]):e("a",{key:"notInWishlist",staticClass:"btn-product btn-wishlist",attrs:{href:"#",title:"Wishlist"},on:{click:function(e){return e.preventDefault(),t.addToWishlist({product:t.product})}}},[e("span",[t._v("Add to Wishlist")])])],1)],2)])])]):t._e()],2):t._e()}),[function(){var t=this._self._c;return t("a",{staticClass:"size-guide mr-4",attrs:{href:"javascript:;"}},[t("i",{staticClass:"icon-th-list"}),this._v("size guide\n            ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"social-icons social-icons-sm"},[e("span",{staticClass:"social-label"},[t._v("Share:")]),t._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Facebook",target:"_blank"}},[e("i",{staticClass:"icon-facebook-f"})]),t._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Twitter",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})]),t._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Instagram",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})]),t._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Pinterest",target:"_blank"}},[e("i",{staticClass:"icon-pinterest"})])])}],!1,null,null,null);e.a=component.exports},353:function(t,e,r){"use strict";r.r(e);r(12),r(10),r(9),r(18),r(19);var c=r(2),n=r(280),o=r(273),l=r(54),d=r(92);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={components:{DetailOne:n.a},props:{product:Object},data:function(){return{baseUrl:l.a,carouselSetting:v(v({},o.c),{},{loop:!1}),loaded:!1,currentIndex:0}},watch:{$route:function(){this.$modal.hideAll()}},mounted:function(){var t=this;setTimeout((function(){t.loaded=!0}),300)},methods:{changePicture:function(t){this.currentIndex=t,this.swiper1.slideTo(this.currentIndex,1e3,!1)},slideChange:function(){var t=document.querySelector(".quickView-content .swiper-slide-active");this.currentIndex=Object(d.c)(t)}}},_=r(5),component=Object(_.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"quickView-container m-4"},[e("div",{staticClass:"quickView-content horizontal skeleton-body"},[e("div",{staticClass:"row skel-pro-single skel-quickview m-0",class:{loaded:t.loaded}},[e("div",{staticClass:"col-lg-6 p-0 pr-2"},[e("div",{staticClass:"skel-product-gallery"}),t._v(" "),e("div",{staticClass:"product-lg mb-1 position-relative"},[t.product.new?e("span",{staticClass:"product-label label-new"},[t._v("New")]):t._e(),t._v(" "),t.product.sale_price?e("span",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e(),t._v(" "),t.product.top?e("span",{staticClass:"product-label label-top"},[t._v("Top")]):t._e(),t._v(" "),0===t.product.stock?e("span",{staticClass:"product-label label-out"},[t._v("Out Of Stock")]):t._e(),t._v(" "),e("div",{staticClass:"swiper-carousel swiper-1"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper1",value:t.carouselSetting,expression:"carouselSetting",arg:"swiper1"}],on:{slideChangeTransitionEnd:t.slideChange}},[e("div",{staticClass:"swiper-wrapper"},t._l(t.product.pictures,(function(picture,r){return e("div",{key:r,staticClass:"swiper-slide"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(picture.url),expression:"`${baseUrl}${picture.url}`"}],attrs:{alt:"product",width:picture.width,height:picture.height}})])})),0)])])]),t._v(" "),e("div",{staticClass:"product-sm row px-2"},t._l(t.product.sm_pictures,(function(picture,r){return e("div",{key:r,staticClass:"col-3 px-2"},[e("a",{staticClass:"carousel-dot h-100 d-block",class:{active:r==t.currentIndex},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePicture(r)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(picture.url),expression:"`${baseUrl}${picture.url}`"}],attrs:{alt:"dot",width:picture.width,height:picture.height}})])])})),0)]),t._v(" "),e("div",{staticClass:"col-lg-6 quickview-desc pl-0 pl-lg-4 pr-0 mt-3 mt-lg-0"},[t._m(0),t._v(" "),e("div",{staticClass:"product-summary pr-4"},[e("detail-one",{staticClass:"mb-0",attrs:{product:t.product}})],1)])])]),t._v(" "),e("button",{staticClass:"mfp-close",attrs:{title:"Close (Esc)",type:"button"},on:{click:function(e){return t.$emit("close")}}},[e("span",[t._v("×")])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"entry-summary row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"entry-summary1"})]),this._v(" "),t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"entry-summary2"})])])}],!1,null,null,null);e.default=component.exports}}]);