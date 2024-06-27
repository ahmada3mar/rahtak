/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{251:function(t,e,o){"use strict";var n={props:{title:{type:String,required:!0},subtitle:String}},r=o(4),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"./images/page-header-bg.jpg",expression:"'./images/page-header-bg.jpg'",arg:"background-image"}],staticClass:"page-header text-center"},[o("div",{staticClass:"container"},[o("h1",{staticClass:"page-title"},[t._v("\n            "+t._s(t.title)+"\n            "),t.subtitle?o("span",[t._v(t._s(t.subtitle))]):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},254:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var n={name:"VueSlideToggle",props:{open:Boolean,duration:{type:Number,default:300},tag:{type:String,default:"div"}},data:function(){return{scrollHeight:0,doneOpenTransition:!1,innerOpen:this.open}},mounted:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},updated:function(){this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},watch:{open:function(t){var e=this;t?this.innerOpen=!0:(this.getHeight(),this.doneOpenTransition=!1,this.$nextTick().then((function(){e.innerOpen=!1})))}},computed:{style:function(){if(this.innerOpen&&this.doneOpenTransition)return null;var t=this.innerOpen?this.scrollHeight:0;return{overflow:"hidden",transitionProperty:"height",height:"".concat(t,"px"),transitionDuration:"".concat(this.duration,"ms")}}},methods:{getHeight:function(){var t=this.$refs.container;this.scrollHeight=t.scrollHeight},handleTransition:function(){this.innerOpen&&(this.doneOpenTransition=!0)}},render:function(t){return t(this.tag,{style:this.style,ref:"container",on:{transitionend:this.handleTransition}},this.$slots.default)}};var r={install:function t(e){t.installed||(t.installed=!0,e.component("VueSlideToggle",n))}},c=n,l=null;"undefined"!=typeof window&&(l=window.Vue),l&&l.use(r)},371:function(t,e,o){"use strict";o.r(e);var n=o(24),r=o(254),c=o(251),l={components:{VueSlideToggle:r.a,PageHeader:c.a},data:function(){return{toggleState:[[!1,!1,!1,!1],[!1,!1,!1],[!1,!1,!1,!1]]}},methods:{changeToggle:function(t,e){this.toggleState=this.toggleState.reduce((function(o,r,c){if(c==t){var l=r.reduce((function(t,o,r){return[].concat(Object(n.a)(t),r==e?[!o]:[!1])}),[]);return[].concat(Object(n.a)(o),[l])}return[].concat(Object(n.a)(o),[r])}),[])}}},d=o(4),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"main"},[o("page-header",{attrs:{title:"F.A.Q",subtitle:"Pages"}}),t._v(" "),o("nav",{staticClass:"breadcrumb-nav"},[o("div",{staticClass:"container"},[o("ol",{staticClass:"breadcrumb"},[o("li",{staticClass:"breadcrumb-item"},[o("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v("Home")])],1),t._v(" "),t._m(0),t._v(" "),o("li",{staticClass:"breadcrumb-item active"},[t._v("FAQ")])])])]),t._v(" "),o("div",{staticClass:"page-content"},[o("div",{staticClass:"container"},[o("h2",{staticClass:"title text-center mb-3"},[t._v("Shipping Information")]),t._v(" "),o("div",{staticClass:"accordion accordion-rounded",attrs:{id:"accordion-1"}},[o("div",{staticClass:"card card-box card-sm bg-light"},[o("div",{staticClass:"card-header",attrs:{id:"heading-1"}},[o("h2",{staticClass:"card-title"},[o("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[0][0],collapsed:!t.toggleState[0][0]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(0,0)}}},[t._v("How will my parcel be delivered?")])])]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.toggleState[0][0]}},[o("div",{staticClass:"card-body"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")])])],1),t._v(" "),o("div",{staticClass:"card card-box card-sm bg-light"},[o("div",{staticClass:"card-header",attrs:{id:"heading-2"}},[o("h2",{staticClass:"card-title"},[o("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[0][1],collapsed:!t.toggleState[0][1]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(0,1)}}},[t._v("Do I pay for delivery?")])])]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.toggleState[0][1]}},[o("div",{staticClass:"card-body"},[t._v("Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.")])])],1),t._v(" "),o("div",{staticClass:"card card-box card-sm bg-light"},[o("div",{staticClass:"card-header",attrs:{id:"heading-3"}},[o("h2",{staticClass:"card-title"},[o("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[0][2],collapsed:!t.toggleState[0][2]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(0,2)}}},[t._v("Will I be charged customs fees?")])])]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.toggleState[0][2]}},[o("div",{staticClass:"card-body"},[t._v("Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.")])])],1),t._v(" "),o("div",{staticClass:"card card-box card-sm bg-light"},[o("div",{staticClass:"card-header",attrs:{id:"heading-4"}},[o("h2",{staticClass:"card-title"},[o("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[0][3],collapsed:!t.toggleState[0][3]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(0,3)}}},[t._v("My item has become faulty")])])]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.toggleState[0][3]}},[o("div",{staticClass:"card-body"},[t._v("Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.")])])],1)]),t._v(" "),o("h2",{staticClass:"title text-center mb-3"},[t._v("Orders and Returns")]),t._v(" "),o("div",{staticClass:"accordion accordion-rounded",attrs:{id:"accordion-2"}},[o("div",{staticClass:"card card-box card-sm bg-light"},[o("div",{staticClass:"card-header",attrs:{id:"heading2-1"}},[o("h2",{staticClass:"card-title"},[o("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[1][0],collapsed:!t.toggleState[1][0]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(1,0)}}},[t._v("Tracking my order")])])]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.toggleState[1][0]}},[o("div",{staticClass:"card-body"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")])])],1),t._v(" "),o("div",{staticClass:"card card-box card-sm bg-light"},[o("div",{staticClass:"card-header",attrs:{id:"heading2-2"}},[o("h2",{staticClass:"card-title"},[o("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[1][1],collapsed:!t.toggleState[1][1]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(1,1)}}},[t._v("I haven’t received my order")])])]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.toggleState[1][1]}},[o("div",{staticClass:"card-body"},[t._v("Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.")])])],1),t._v(" "),o("div",{staticClass:"card card-box card-sm bg-light"},[o("div",{staticClass:"card-header",attrs:{id:"heading2-3"}},[o("h2",{staticClass:"card-title"},[o("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[1][2],collapsed:!t.toggleState[1][2]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(1,2)}}},[t._v("How can I return an item?")])])]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.toggleState[1][2]}},[o("div",{staticClass:"card-body"},[t._v("Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.")])])],1)]),t._v(" "),o("h2",{staticClass:"title text-center mb-3"},[t._v("Payments")]),t._v(" "),o("div",{staticClass:"accordion accordion-rounded",attrs:{id:"accordion-3"}},[o("div",{staticClass:"card card-box card-sm bg-light"},[o("div",{staticClass:"card-header",attrs:{id:"heading3-1"}},[o("h2",{staticClass:"card-title"},[o("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[2][0],collapsed:!t.toggleState[2][0]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(2,0)}}},[t._v("What payment types can I use?")])])]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.toggleState[2][0]}},[o("div",{staticClass:"card-body"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")])])],1),t._v(" "),o("div",{staticClass:"card card-box card-sm bg-light"},[o("div",{staticClass:"card-header",attrs:{id:"heading3-2"}},[o("h2",{staticClass:"card-title"},[o("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[2][1],collapsed:!t.toggleState[2][1]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(2,1)}}},[t._v("Can I pay by Gift Card?")])])]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.toggleState[2][1]}},[o("div",{staticClass:"card-body"},[t._v("Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.")])])],1),t._v(" "),o("div",{staticClass:"card card-box card-sm bg-light"},[o("div",{staticClass:"card-header",attrs:{id:"heading3-3"}},[o("h2",{staticClass:"card-title"},[o("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[2][2],collapsed:!t.toggleState[2][2]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(2,2)}}},[t._v("I can't make a payment")])])]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.toggleState[2][2]}},[o("div",{staticClass:"card-body"},[t._v("Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.")])])],1),t._v(" "),o("div",{staticClass:"card card-box card-sm bg-light"},[o("div",{staticClass:"card-header",attrs:{id:"heading3-4"}},[o("h2",{staticClass:"card-title"},[o("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[2][3],collapsed:!t.toggleState[2][3]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(2,3)}}},[t._v("Has my payment gone through?")])])]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.toggleState[2][3]}},[o("div",{staticClass:"card-body"},[t._v("Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.")])])],1)])])]),t._v(" "),o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"./images/backgrounds/cta/bg-7.jpg",expression:"'./images/backgrounds/cta/bg-7.jpg'",arg:"background-image"}],staticClass:"cta cta-display bg-image pt-4 pb-4"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-md-10 col-lg-9 col-xl-7"},[o("div",{staticClass:"row no-gutters flex-column flex-sm-row align-items-sm-center"},[t._m(1),t._v(" "),o("div",{staticClass:"col-auto"},[o("nuxt-link",{staticClass:"btn btn-outline-white",attrs:{to:t.localePath("/pages/contact")}},[o("span",[t._v("CONTACT US")]),t._v(" "),o("i",{staticClass:"icon-long-arrow-right"})])],1)])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"javascript:;"}},[this._v("Pages")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col"},[e("h3",{staticClass:"cta-title text-white"},[this._v("If You Have More Questions")]),this._v(" "),e("p",{staticClass:"cta-desc text-white"},[this._v("Quisque volutpat mattis eros")])])}],!1,null,null,null);e.default=component.exports}}]);