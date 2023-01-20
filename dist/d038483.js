(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{249:function(t,e,r){"use strict";var c={props:{product:{type:Object}},data:function(){return{current:this.product.qty?this.product.qty:1}},watch:{product:function(){this.current=this.product.qty?this.product.qty:1}},methods:{increment:function(){this.product.stock&&this.current>=this.product.stock||(this.current++,this.$emit("change-qty",this.current,this.product))},decrement:function(){this.current>1&&(this.current--,this.$emit("change-qty",this.current,this.product))},setCurrent:function(t){this.current=parseInt(t.currentTarget.value),this.$emit("change-qty",this.current,this.product)}}},o=r(4),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-details-quantity"},[r("div",{staticClass:"input-group input-spinner"},[r("div",{staticClass:"input-group-prepend"},[r("button",{staticClass:"btn btn-decrement btn-spinner",staticStyle:{"min-width":"26px"},attrs:{type:"button"},on:{click:t.decrement}},[r("i",{staticClass:"icon-minus"})])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.current,expression:"current"}],staticClass:"form-control text-center",attrs:{type:"text",required:"",placeholder:""},domProps:{value:t.current},on:{change:function(e){return t.setCurrent(e)},input:function(e){e.target.composing||(t.current=e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-increment btn-spinner",staticStyle:{"min-width":"26px"},attrs:{type:"button"},on:{click:t.increment}},[r("i",{staticClass:"icon-plus"})])])])])}),[],!1,null,null,null);e.a=component.exports},250:function(t,e,r){"use strict";r(23),r(11),r(12),r(9),r(14),r(104);var c=r(24),o=(r(20),r(25),r(26),r(2)),n=r(19),l=r(243),d=r(249),v=r(50);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{VueSlideToggle:l.a,QuantityInput:d.a},props:{product:{type:Object}},data:function(){return{baseUrl:v.a,variationGroup:[],selectableGroup:[],sizeArray:[],colorArray:[],selectedVariant:{color:null,colorName:null,price:null,size:null},maxPrice:0,minPrice:99999,qty:1,qty2:1}},computed:_(_(_(_({},Object(n.c)("cart",["canAddToCart"])),Object(n.c)("wishlist",["isInWishlist"])),Object(n.c)("compare",["isInCompare"])),{},{showClear:function(){return!(!this.selectedVariant.color&&!this.selectedVariant.size)},showVariationPrice:function(){return!(!this.selectedVariant.color||!this.selectedVariant.size)},isCartSticy:function(){return this.$route.path.includes("/product/default")}}),created:function(){var t=this.minPrice,e=this.maxPrice;this.variationGroup=this.product.variants.reduce((function(r,c){return c.size.map((function(t){r.push({color:c.color,colorName:c.color_name,size:t.name,price:c.price})})),t>c.price&&(t=c.price),e<c.price&&(e=c.price),r}),[]),0==this.product.variants.length&&(t=this.product.sale_price?this.product.sale_price:this.product.price,e=this.product.price),this.minPrice=t,this.maxPrice=e,this.refreshSelectableGroup()},methods:_(_(_(_({},Object(n.b)("cart",["addToCart"])),Object(n.b)("wishlist",["addToWishlist"])),Object(n.b)("compare",["addToCompare"])),{},{refreshSelectableGroup:function(){var t=this,e=Object(c.a)(this.variationGroup);this.selectedVariant.color&&(e=this.variationGroup.reduce((function(e,r){return t.selectedVariant.color!==r.color?e:[].concat(Object(c.a)(e),[r])}),[])),this.sizeArray=e.reduce((function(t,e){return-1!==t.findIndex((function(t){return t.size==e.size}))?t:[].concat(Object(c.a)(t),[e])}),[]),e=Object(c.a)(this.variationGroup),this.selectedVariant.size&&(e=this.variationGroup.reduce((function(e,r){return t.selectedVariant.size!==r.size?e:[].concat(Object(c.a)(e),[r])}),[])),this.colorArray=this.product.variants.reduce((function(t,r){return-1==e.findIndex((function(t){return t.color==r.color}))?[].concat(Object(c.a)(t),[{color:r.color,colorName:r.color_name,price:r.price,disabled:!0}]):[].concat(Object(c.a)(t),[{color:r.color,colorName:r.color_name,price:r.price,disabled:!1}])}),[])},selectColor:function(t){t.color==this.selectedVariant.color?this.selectedVariant=_(_({},this.selectedVariant),{},{color:null,colorName:null,price:t.price}):this.selectedVariant=_(_({},this.selectedVariant),{},{color:t.color,colorName:t.colorName,price:t.price}),this.refreshSelectableGroup()},selectSize:function(){"null"==this.selectedVariant.size&&(this.selectedVariant=_(_({},this.selectedVariant),{},{size:null})),this.refreshSelectableGroup()},changeQty:function(t){this.qty=t},changeQty2:function(t){this.qty2=t},clearSelection:function(){this.selectedVariant=_(_({},this.selectedVariant),{},{color:null,colorName:null,size:null}),this.refreshSelectableGroup()},addCart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=_({},this.product);this.product.variants.length>0&&(e=_(_({},this.product),{},{name:this.product.name+" - "+this.selectedVariant.colorName+", "+this.selectedVariant.size,price:this.selectedVariant.price})),this.addToCart({product:e,qty:0==t?this.qty:this.qty2})}})},f=r(4),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{staticClass:"product-details"},[r("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),r("div",{staticClass:"ratings-container"},[r("div",{staticClass:"ratings"},[r("div",{staticClass:"ratings-val",style:{width:20*t.product.ratings+"%"}}),t._v(" "),r("span",{staticClass:"tooltip-text"},[t._v(t._s(t.product.ratings.toFixed(2)))])]),t._v(" "),r("span",{staticClass:"ratings-text mt-0"},[t._v("( "+t._s(t.product.review)+" Reviews )")])]),t._v(" "),0==t.product.stock?r("div",{key:"outPrice",staticClass:"product-price"},[r("span",{staticClass:"out-price"},[t._v("$"+t._s(t.product.price.toFixed(2)))])]):[t.minPrice==t.maxPrice?r("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]):[0==t.product.variants.length?r("div",{staticClass:"product-price"},[r("span",{staticClass:"new-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]),t._v(" "),r("span",{staticClass:"old-price"},[t._v("$"+t._s(t.maxPrice.toFixed(2)))])]):r("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2))+" - $"+t._s(t.maxPrice.toFixed(2)))])]],t._v(" "),r("div",{staticClass:"product-content"},[r("p",[t._v(t._s(t.product.short_desc))])]),t._v(" "),t.product.variants.length>0?[r("div",{staticClass:"details-filter-row details-row-size"},[r("label",[t._v("Color:")]),t._v(" "),r("div",{staticClass:"product-nav product-nav-dots"},t._l(t.colorArray,(function(e,c){return r("a",{key:c,class:{active:e.color==t.selectedVariant.color,disabled:e.disabled},style:{"background-color":e.color},attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.selectColor(e)}}})})),0)]),t._v(" "),r("div",{staticClass:"details-filter-row details-row-size"},[r("label",{attrs:{for:"size"}},[t._v("Size:")]),t._v(" "),r("div",{staticClass:"select-custom"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedVariant.size,expression:"selectedVariant.size"}],staticClass:"form-control",attrs:{name:"size",id:"size"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.selectedVariant,"size",e.target.multiple?r:r[0])},t.selectSize]}},[r("option",{attrs:{value:"null"}},[t._v("Select a size")]),t._v(" "),t._l(t.sizeArray,(function(e,c){return r("option",{key:c,domProps:{value:e.size}},[t._v(t._s(e.size))])}))],2)]),t._v(" "),t._m(0),t._v(" "),t.showClear?r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearSelection(e)}}},[t._v("clear")]):t._e()]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.showVariationPrice}},[r("div",{staticClass:"product-price"},[t._v("$"+t._s(t.selectedVariant.price?t.selectedVariant.price.toFixed(2):0))])])]:t._e(),t._v(" "),r("div",{staticClass:"details-filter-row details-row-size"},[r("label",{attrs:{for:"qty"}},[t._v("Qty:")]),t._v(" "),r("quantity-input",{attrs:{product:t.product},on:{"change-qty":t.changeQty}})],1),t._v(" "),r("div",{staticClass:"product-details-action"},[r("a",{staticClass:"btn-product btn-cart",class:{"btn-disabled":!t.canAddToCart(t.product,t.qty)||t.product.variants.length>0&&!t.showVariationPrice},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addCart(0)}}},[r("span",[t._v("add to cart")])]),t._v(" "),r("div",{staticClass:"details-action-wrapper"},[t.isInWishlist(t.product)?r("nuxt-link",{key:"inWishlist",staticClass:"btn-product btn-wishlist added-to-wishlist",attrs:{to:"/shop/wishlist",title:"Wishlist"}},[r("span",[t._v("Go to Wishlist")])]):r("a",{key:"notInWishlist",staticClass:"btn-product btn-wishlist",attrs:{href:"#",title:"Wishlist"},on:{click:function(e){return e.preventDefault(),t.addToWishlist({product:t.product})}}},[r("span",[t._v("Add to Wishlist")])])],1)]),t._v(" "),r("div",{staticClass:"product-details-footer"},[r("div",{staticClass:"product-cat w-100 text-truncate"},[r("span",[t._v("Category:")]),t._v(" "),t._l(t.product.category,(function(e,c){return r("span",{key:c},[r("nuxt-link",{attrs:{to:{path:"/shop/sidebar/list",query:{category:e.slug}}}},[t._v(t._s(e.name))]),t._v("\n                "+t._s(c<t.product.category.length-1?",":"")+"\n            ")],1)}))],2),t._v(" "),t._m(1)]),t._v(" "),t.isCartSticy?r("div",{staticClass:"sticky-bar"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("figure",{staticClass:"product-media"},[r("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.product.sm_pictures[0].url,expression:"`${baseUrl}${product.sm_pictures[0].url}`"}],attrs:{alt:"Product",width:t.product.sm_pictures[0].width,height:t.product.sm_pictures[0].height}})])],1),t._v(" "),r("h3",{staticClass:"product-title"},[r("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[t._v(t._s(t.product.name))])],1)]),t._v(" "),r("div",{staticClass:"col-6 justify-content-end"},[0==t.product.stock?r("div",{key:"outPrice",staticClass:"product-price"},[r("span",{staticClass:"out-price"},[t._v("$"+t._s(t.product.price.toFixed(2)))])]):[t.minPrice==t.maxPrice?r("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]):[0==t.product.variants.length?r("div",{staticClass:"product-price"},[r("span",{staticClass:"new-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]),t._v(" "),r("span",{staticClass:"old-price"},[t._v("$"+t._s(t.maxPrice.toFixed(2)))])]):r("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2))+" - $"+t._s(t.maxPrice.toFixed(2)))])]],t._v(" "),r("quantity-input",{attrs:{product:t.product},on:{"change-qty":t.changeQty2}}),t._v(" "),r("div",{staticClass:"product-details-action"},[r("a",{staticClass:"btn-product btn-cart",class:{"btn-disabled":!t.canAddToCart(t.product,t.qty)||t.product.variants.length>0&&!t.showVariationPrice},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addCart(1)}}},[r("span",[t._v("add to cart")])]),t._v(" "),t.isInWishlist(t.product)?r("nuxt-link",{key:"inWishlist",staticClass:"btn-product btn-wishlist added-to-wishlist",attrs:{to:"/shop/wishlist",title:"Wishlist"}},[r("span",[t._v("Go to Wishlist")])]):r("a",{key:"notInWishlist",staticClass:"btn-product btn-wishlist",attrs:{href:"#",title:"Wishlist"},on:{click:function(e){return e.preventDefault(),t.addToWishlist({product:t.product})}}},[r("span",[t._v("Add to Wishlist")])])],1)],2)])])]):t._e()],2):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"size-guide mr-4",attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-th-list"}),this._v("size guide\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social-icons social-icons-sm"},[e("span",{staticClass:"social-label"},[this._v("Share:")]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Facebook",target:"_blank"}},[e("i",{staticClass:"icon-facebook-f"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Twitter",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Instagram",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Pinterest",target:"_blank"}},[e("i",{staticClass:"icon-pinterest"})])])}],!1,null,null,null);e.a=component.exports},254:function(t,e,r){"use strict";var c=r(50),o={props:{prevProduct:null,nextProduct:null,current:String,fullWidth:{type:Boolean,default:function(){return!1}}},data:function(){return{baseUrl:c.a}}},n=r(4),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"breadcrumb-nav border-0 mb-0",attrs:{"aria-label":"breadcrumb"}},[r("div",{class:"d-flex align-items-center "+(t.fullWidth?"container-fluid":"container")},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v("Home")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/product/default/dark-yellow-lace-cut-out-swing-dress")}},[t._v("Product")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.current))])]),t._v(" "),r("nav",{staticClass:"product-pager ml-auto",attrs:{"aria-label":"Product"}},[t.prevProduct?r("nuxt-link",{staticClass:"product-pager-link product-pager-prev",class:{"prev-only":!t.nextProduct},attrs:{to:t.prevProduct.slug}},[r("i",{staticClass:"icon-angle-left"}),t._v(" "),r("span",[t._v("Prev")]),t._v(" "),r("div",{staticClass:"product-detail"},[r("figure",[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.prevProduct.sm_pictures[0].url,expression:"`${baseUrl}${prevProduct.sm_pictures[0].url}`"}],attrs:{alt:"product",width:t.prevProduct.sm_pictures[0].width,height:t.prevProduct.sm_pictures[0].height}})]),t._v(" "),r("h3",{staticClass:"product-name"},[t._v(t._s(t.prevProduct.name))])])]):t._e(),t._v(" "),t.nextProduct?r("nuxt-link",{staticClass:"product-pager-link product-pager-next",attrs:{to:t.nextProduct.slug}},[r("span",[t._v("Next")]),t._v(" "),r("i",{staticClass:"icon-angle-right"}),t._v(" "),r("div",{staticClass:"product-detail"},[r("figure",[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.nextProduct.sm_pictures[0].url,expression:"`${baseUrl}${nextProduct.sm_pictures[0].url}`"}],attrs:{alt:"product",width:t.nextProduct.sm_pictures[0].width,height:t.nextProduct.sm_pictures[0].height}})]),t._v(" "),r("h3",{staticClass:"product-name"},[t._v(t._s(t.nextProduct.name))])])]):t._e()],1)])])}),[],!1,null,null,null);e.a=component.exports},280:function(t,e,r){"use strict";var c=r(24),o={components:{VueSlideToggle:r(243).a},data:function(){return{toggleState:[!1,!1,!1,!1]}},methods:{changeToggle:function(t){this.toggleState=this.toggleState.reduce((function(e,r,o){return[].concat(Object(c.a)(e),o==t?[!r]:[!1])}),[])}}},n=r(4),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion accordion-plus product-details-accordion mb-2"},[r("div",{staticClass:"card card-box card-sm"},[r("div",{staticClass:"card-header"},[r("h2",{staticClass:"card-title"},[r("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[0],collapsed:!t.toggleState[0]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(0)}}},[t._v("Description")])])]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.toggleState[0]}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"product-desc-content"},[r("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.")]),t._v(" "),r("ul",[r("li",[t._v("Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.")]),t._v(" "),r("li",[t._v("Vivamus finibus vel mauris ut vehicula.")]),t._v(" "),r("li",[t._v("Nullam a magna porttitor, dictum risus nec, faucibus sapien.")])]),t._v(" "),r("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.")])])])])],1),t._v(" "),r("div",{staticClass:"card card-box card-sm"},[r("div",{staticClass:"card-header"},[r("h2",{staticClass:"card-title"},[r("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[1],collapsed:!t.toggleState[1]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(1)}}},[t._v("Additional Information")])])]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.toggleState[1]}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"product-desc-content"},[r("p",{staticClass:"mb-2"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.")]),t._v(" "),r("h3",[t._v("Fabric & care")]),t._v(" "),r("ul",[r("li",[t._v("Faux suede fabric")]),t._v(" "),r("li",[t._v("Gold tone metal hoop handles.")]),t._v(" "),r("li",[t._v("RI branding")]),t._v(" "),r("li",[t._v("Snake print trim interior")]),t._v(" "),r("li",[t._v("Adjustable cross body strap")]),t._v(" "),r("li",[t._v("Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm")])]),t._v(" "),r("h3",[t._v("Size")]),t._v(" "),r("p",[t._v("one size")])])])])],1),t._v(" "),r("div",{staticClass:"card card-box card-sm"},[r("div",{staticClass:"card-header"},[r("h2",{staticClass:"card-title"},[r("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[2],collapsed:!t.toggleState[2]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(2)}}},[t._v("Shipping & Returns")])])]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.toggleState[2]}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"product-desc-content"},[r("p",[t._v("\n                        We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our\n                        "),r("a",{attrs:{href:"#"}},[t._v("Delivery information")]),t._v(" "),r("br"),t._v("We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our\n                        "),r("a",{attrs:{href:"#"}},[t._v("Returns information")])])])])])],1),t._v(" "),r("div",{staticClass:"card card-box card-sm"},[r("div",{staticClass:"card-header"},[r("h2",{staticClass:"card-title"},[r("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[3],collapsed:!t.toggleState[3]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(3)}}},[t._v("Reviews(2)")])])]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.toggleState[3]}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"reviews"},[r("div",{staticClass:"review"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-auto"},[r("h4",[r("a",{attrs:{href:"#"}},[t._v("Samanta J.")])]),t._v(" "),r("div",{staticClass:"ratings-container"},[r("div",{staticClass:"ratings"},[r("div",{staticClass:"ratings-val",staticStyle:{width:"80%"}}),t._v(" "),r("span",{staticClass:"tooltip-text"},[t._v("4")])])]),t._v(" "),r("span",{staticClass:"review-date"},[t._v("6 days ago")])]),t._v(" "),r("div",{staticClass:"col"},[r("h4",[t._v("Good, perfect size")]),t._v(" "),r("div",{staticClass:"review-content"},[r("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!")])]),t._v(" "),r("div",{staticClass:"review-action"},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"icon-thumbs-up"}),t._v("Helpful (2)\n                                    ")]),t._v(" "),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"icon-thumbs-down"}),t._v("Unhelpful (0)\n                                    ")])])])])]),t._v(" "),r("div",{staticClass:"review border-0"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-auto"},[r("h4",[r("a",{attrs:{href:"#"}},[t._v("John Doe")])]),t._v(" "),r("div",{staticClass:"ratings-container"},[r("div",{staticClass:"ratings"},[r("div",{staticClass:"ratings-val",staticStyle:{width:"100%"}}),t._v(" "),r("span",{staticClass:"tooltip-text"},[t._v("5")])])]),t._v(" "),r("span",{staticClass:"review-date"},[t._v("5 days ago")])]),t._v(" "),r("div",{staticClass:"col"},[r("h4",[t._v("Very good")]),t._v(" "),r("div",{staticClass:"review-content"},[r("p",[t._v("Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!")])]),t._v(" "),r("div",{staticClass:"review-action"},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"icon-thumbs-up"}),t._v("Helpful (0)\n                                    ")]),t._v(" "),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"icon-thumbs-down"}),t._v("Unhelpful (0)\n                                    ")])])])])])])])])],1)])}),[],!1,null,null,null);e.a=component.exports}}]);