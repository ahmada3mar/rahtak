(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{251:function(t,e,r){"use strict";var c={props:{title:{type:String,required:!0},subtitle:String}},n=r(4),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"./images/page-header-bg.jpg",expression:"'./images/page-header-bg.jpg'",arg:"background-image"}],staticClass:"page-header text-center"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"page-title"},[t._v("\n            "+t._s(t.title)+"\n            "),t.subtitle?r("span",[t._v(t._s(t.subtitle))]):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},258:function(t,e,r){"use strict";var c={props:{product:{type:Object}},data:function(){return{current:this.product.qty?this.product.qty:1}},watch:{product:function(){this.current=this.product.qty?this.product.qty:1}},methods:{increment:function(){this.product.stock&&this.current>=this.product.stock||(this.current++,this.$emit("change-qty",this.current,this.product))},decrement:function(){this.current>1&&(this.current--,this.$emit("change-qty",this.current,this.product))},setCurrent:function(t){this.current=parseInt(t.currentTarget.value),this.$emit("change-qty",this.current,this.product)}}},n=r(4),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-details-quantity"},[r("div",{staticClass:"input-group input-spinner"},[r("div",{staticClass:"input-group-prepend"},[r("button",{staticClass:"btn btn-decrement btn-spinner",staticStyle:{"min-width":"26px"},attrs:{type:"button"},on:{click:t.decrement}},[r("i",{staticClass:"icon-minus"})])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.current,expression:"current"}],staticClass:"form-control text-center",attrs:{type:"text",required:"",placeholder:""},domProps:{value:t.current},on:{change:function(e){return t.setCurrent(e)},input:function(e){e.target.composing||(t.current=e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-increment btn-spinner",staticStyle:{"min-width":"26px"},attrs:{type:"button"},on:{click:t.increment}},[r("i",{staticClass:"icon-plus"})])])])])}),[],!1,null,null,null);e.a=component.exports},372:function(t,e,r){"use strict";r.r(e);r(23),r(11),r(12),r(9),r(14),r(20);var c=r(24),n=r(2),o=r(19),l=r(251),d=r(258),v=r(50);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{PageHeader:l.a,QuantityInput:d.a},data:function(){return{cartItems:[],baseUrl:v.a,shipping:0}},computed:h({},Object(o.c)("cart",["cartList","priceTotal","qtyTotal"])),watch:{cartList:function(){this.cartItems=Object(c.a)(this.cartList)}},created:function(){this.cartItems=Object(c.a)(this.cartList)},methods:h(h(h({},Object(o.b)("cart",["removeFromCart"])),Object(o.b)("cart",["updateCart"])),{},{changeQty:function(t,e){this.cartItems=this.cartItems.reduce((function(r,n){return n.name==e.name?[].concat(Object(c.a)(r),[h(h({},n),{},{qty:t,sum:(e.sale_price?e.sale_price:e.price)*t})]):[].concat(Object(c.a)(r),[n])}),[])}})},C=r(4),component=Object(C.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("page-header",{attrs:{title:"Shopping Cart",subtitle:"Shop"}}),t._v(" "),r("nav",{staticClass:"breadcrumb-nav"},[r("div",{staticClass:"container"},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v("Home")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/shop/sidebar/list")}},[t._v("Shop")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("Shopping Cart")])])])]),t._v(" "),r("div",{staticClass:"page-content"},[r("div",{staticClass:"cart"},[r("div",{staticClass:"container"},[t.cartList.length>0?r("div",{key:"hasCart",staticClass:"row"},[r("div",{staticClass:"col-lg-9"},[r("table",{staticClass:"table table-cart table-mobile"},[t._m(0),t._v(" "),r("tbody",t._l(t.cartItems,(function(e,c){return r("tr",{key:c},[r("td",{staticClass:"product-col"},[r("div",{staticClass:"product"},[r("figure",{staticClass:"product-media"},[r("nuxt-link",{attrs:{to:"/product/default/"+e.slug}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+e.sm_pictures[0].url,expression:"`${baseUrl}${product.sm_pictures[0].url}`"}],attrs:{alt:"Product",width:e.sm_pictures[0].width,height:e.sm_pictures[0].height}})])],1),t._v(" "),r("h3",{staticClass:"product-title"},[r("nuxt-link",{attrs:{to:"/product/default/"+e.slug}},[t._v(t._s(e.name))])],1)])]),t._v(" "),r("td",{staticClass:"price-col"},[t._v("$"+t._s(e.price.toFixed(2)))]),t._v(" "),r("td",{staticClass:"quantity-col"},[r("quantity-input",{staticClass:"cart-product-quantity",attrs:{product:e},on:{"change-qty":t.changeQty}})],1),t._v(" "),r("td",{staticClass:"total-col"},[t._v("$"+t._s(e.sum.toFixed(2)))]),t._v(" "),r("td",{staticClass:"remove-col"},[r("button",{staticClass:"btn-remove",on:{click:function(r){return r.preventDefault(),t.removeFromCart({product:e})}}},[r("i",{staticClass:"icon-close"})])])])})),0)]),t._v(" "),r("div",{staticClass:"cart-bottom"},[t._m(1),t._v(" "),r("a",{staticClass:"btn btn-outline-dark-2",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updateCart({cartItems:t.cartItems})}}},[r("span",[t._v("UPDATE CART")]),t._v(" "),r("i",{staticClass:"icon-refresh"})])])]),t._v(" "),r("aside",{staticClass:"col-lg-3"},[r("div",{staticClass:"summary summary-cart"},[r("h3",{staticClass:"summary-title"},[t._v("Cart Total")]),t._v(" "),r("table",{staticClass:"table table-summary"},[r("tbody",[r("tr",{staticClass:"summary-subtotal"},[r("td",[t._v("Subtotal:")]),t._v(" "),r("td",[t._v("$"+t._s(t.priceTotal.toFixed(2)))])]),t._v(" "),t._m(2),t._v(" "),r("tr",{staticClass:"summary-shipping-row"},[r("td",[r("div",{staticClass:"custom-control custom-radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.shipping,expression:"shipping"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"free-shipping",name:"shipping"},domProps:{value:0,checked:t._q(t.shipping,0)},on:{change:function(e){t.shipping=0}}}),t._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"free-shipping"}},[t._v("Free Shipping")])])]),t._v(" "),r("td",[t._v("$0.00")])]),t._v(" "),r("tr",{staticClass:"summary-shipping-row"},[r("td",[r("div",{staticClass:"custom-control custom-radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.shipping,expression:"shipping"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"standart-shipping",name:"shipping"},domProps:{value:10,checked:t._q(t.shipping,10)},on:{change:function(e){t.shipping=10}}}),t._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"standart-shipping"}},[t._v("Standard:")])])]),t._v(" "),r("td",[t._v("$10.00")])]),t._v(" "),r("tr",{staticClass:"summary-shipping-row"},[r("td",[r("div",{staticClass:"custom-control custom-radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.shipping,expression:"shipping"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"express-shipping",name:"shipping"},domProps:{value:20,checked:t._q(t.shipping,20)},on:{change:function(e){t.shipping=20}}}),t._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"express-shipping"}},[t._v("Express:")])])]),t._v(" "),r("td",[t._v("$20.00")])]),t._v(" "),r("tr",{staticClass:"summary-shipping-estimate"},[r("td",[t._v("\n                                            Estimate for Your Country\n                                            "),r("br"),t._v(" "),r("nuxt-link",{attrs:{to:t.localePath("/shop/dashboard")}},[t._v("Change address")])],1),t._v(" "),r("td",[t._v(" ")])]),t._v(" "),r("tr",{staticClass:"summary-total"},[r("td",[t._v("Total:")]),t._v(" "),r("td",[t._v("$"+t._s((t.priceTotal+t.shipping).toFixed(2)))])])])]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-outline-primary-2 btn-order btn-block",attrs:{to:"/shop/checkout"}},[t._v("PROCEED TO CHECKOUT")])],1),t._v(" "),r("nuxt-link",{staticClass:"btn btn-outline-dark-2 btn-block mb-3",attrs:{to:"/shop/sidebar/list"}},[r("span",[t._v("CONTINUE SHOPPING")]),t._v(" "),r("i",{staticClass:"icon-refresh"})])],1)]):r("div",{key:"noCart",staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"cart-empty-page text-center"},[r("i",{staticClass:"cart-empty icon-shopping-cart"}),t._v(" "),r("p",{staticClass:"px-3 py-2 cart-empty mb-3"},[t._v("No products added to the cart")]),t._v(" "),r("p",{staticClass:"return-to-shop mb-0"},[r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/shop/sidebar/list"}},[t._v("RETURN TO SHOP")])],1)])])])])])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Product")]),t._v(" "),r("th",[t._v("Price")]),t._v(" "),r("th",[t._v("Quantity")]),t._v(" "),r("th",[t._v("Total")]),t._v(" "),r("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cart-discount"},[e("form",{attrs:{action:"#"}},[e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",required:"",placeholder:"coupon code"}}),this._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-primary-2",attrs:{type:"submit"}},[e("i",{staticClass:"icon-long-arrow-right"})])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"summary-shipping"},[e("td",[this._v("Shipping:")]),this._v(" "),e("td",[this._v(" ")])])}],!1,null,null,null);e.default=component.exports}}]);