(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{256:function(t,e,l){"use strict";l(23),l(11),l(12),l(9),l(14);var o=l(2),r=l(24);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:{id:String,data:Array},data:function(){return{tabs:Object(r.a)(this.data)}},computed:{},methods:{getUrl:function(t){return this.id?"#"+this.id+"-"+t.id:"#"+t.id},tabClick:function(t){if(!t.active){this.tabs=this.tabs.reduce((function(e,l){return l.id==t.id?[].concat(Object(r.a)(e),[c(c({},l),{},{active:!0})]):[].concat(Object(r.a)(e),[c(c({},l),{},{active:!1})])}),[]);var e=document.querySelector(this.getUrl(t));if(e){var l=e.parentElement.querySelector(".tab-pane.active");l&&(l.classList.remove("show"),setTimeout((function(){l.classList.remove("active")}),150)),e.classList.add("show"),setTimeout((function(){e.classList.add("active")}),150)}}}}},h=l(4),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"nav"},t._l(t.tabs,(function(e,o){return l("li",{key:o,staticClass:"nav-item"},[l("a",{staticClass:"nav-link",class:{"active bg-white":e.active},attrs:{href:t.getUrl(e)},on:{click:function(l){return l.preventDefault(),t.tabClick(e)}}},[t._v(t._s(e.title))])])})),0)}),[],!1,null,null,null);e.a=component.exports},388:function(t,e,l){"use strict";l.r(e);l(256);var o=l(81),r={data:function(){return{searchTerm:""}},mounted:function(){Object(o.f)()},methods:{hideMobileMenu:function(){document.querySelector("body").classList.remove("mmenu-active")},submitSearchForm:function(){this.hideMobileMenu(),this.$router.push({path:"/shop/sidebar/3cols",query:{searchTerm:this.searchTerm}})}}},n=l(4),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mobile-menu-container"},[l("div",{staticClass:"mobile-menu-wrapper"},[l("span",{staticClass:"mobile-menu-close",on:{click:t.hideMobileMenu}},[l("i",{staticClass:"icon-close"})]),t._v(" "),l("div",{staticClass:"d-flex justify-content-between mb-2",staticStyle:{"padding-left":"2rem","padding-right":"2rem"}},[l("p",{staticClass:"text-white"},[t._v(t._s(t.$t("change_lang")))]),t._v(" "),l("nuxt-link",{staticClass:"sf-with-ul link-active",attrs:{to:t.switchLocalePath("ar"==t.$i18n.locale?"en":"ar")}},[l("div",{class:"d-flex align-items-center"},[l("strong",{staticClass:"sf-with-ul text-primary link-active mx-3"},[t._v(t._s("ar"==t.$i18n.locale?"English":"عربي"))]),t._v(" "),l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"ar"==t.$i18n.locale?"./images/uk.png":"./images/ar.png",expression:"$i18n.locale == 'ar' ? './images/uk.png' : './images/ar.png'"}],attrs:{height:"20",alt:""}})])])],1),t._v(" "),l("form",{staticClass:"mobile-search",attrs:{action:"#",method:"get"},on:{submit:function(e){return e.preventDefault(),t.submitSearchForm(e)}}},[l("label",{staticClass:"sr-only",attrs:{for:"mobile-search"}},[t._v("Search")]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control",attrs:{type:"search",name:"mobile-search",id:"mobile-search",placeholder:"Search product ...",required:""},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),l("nav",{staticClass:"mobile-nav"},[l("ul",{staticClass:"mobile-menu"},[l("li",[l("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:t.localePath("/")}},[t._v("Home")]),t._v(" "),t._m(1)],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/shop/sidebar/list")}},[t._v("Shop")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:t.localePath("/shop/sidebar/list")}},[t._v("Shop List")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/shop/sidebar/2cols")}},[t._v("Shop Grid 2 Columns")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/shop/sidebar/3cols")}},[t._v("Shop Grid 3 Columns")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/shop/sidebar/4cols")}},[t._v("Shop Grid 4 Columns")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/shop/nosidebar/boxed")}},[l("span",[t._v("\n                                    Shop Boxed No Sidebar\n                                    "),l("span",{staticClass:"tip tip-hot"},[t._v("Hot")])])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/shop/nosidebar/fullwidth")}},[t._v("Shop Fullwidth No\n                                Sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/shop/category/boxed")}},[t._v("Product Category Boxed")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/shop/category/fullwidth")}},[l("span",[t._v("\n                                    Product Category Fullwidth\n                                    "),l("span",{staticClass:"tip tip-new"},[t._v("New")])])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/shop/cart")}},[t._v("Cart")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/shop/checkout")}},[t._v("Checkout")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/shop/wishlist")}},[t._v("Wishlist")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/shop/dashboard")}},[t._v("My Account")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:"/product/default/dark-yellow-lace-cut-out-swing-dress"}},[t._v("Product")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/product/default/dark-yellow-lace-cut-out-swing-dress"}},[t._v("Default")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/product/centered/beige-ring-handle-circle-cross-body-bag"}},[t._v("Centered")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/product/extended/yellow-tie-strap-block-heel-sandals"}},[l("span",[t._v("\n                                    Extended Info\n                                    "),l("span",{staticClass:"tip tip-new"},[t._v("New")])])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/product/gallery/beige-metal-hoop-tote-bag")}},[t._v("Gallery")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/product/sticky/brown-faux-fur-longline-coat"}},[t._v("Sticky Info")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/product/sidebar/beige-v-neck-button-cardigan"}},[t._v("Boxed With\n                                Sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/product/fullwidth/black-faux-leather-chain-trim-sandals"}},[t._v("Full\n                                Width")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/product/masonry/black-denim-dungaree-dress"}},[t._v("Masonry Sticky\n                                Info")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/pages/about")}},[t._v("Pages")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:t.localePath("/pages/about")}},[t._v("About")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:t.localePath("/pages/about")}},[t._v("About 01")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/pages/about-2")}},[t._v("About 02")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:t.localePath("/pages/contact")}},[t._v("Contact")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:t.localePath("/pages/contact")}},[t._v("Contact 01")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/pages/contact-2")}},[t._v("Contact 02")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/pages/login")}},[t._v("Login")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/pages/faq")}},[t._v("FAQs")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/pages/404")}},[t._v("Error 404")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/pages/coming-soon")}},[t._v("Coming Soon")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:t.localePath("/blog/classic")}},[t._v("Blog")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/classic")}},[t._v("Classic")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/listing")}},[t._v("Listing")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/grid/grid-2")}},[t._v("Grid")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/grid/grid-2")}},[t._v("Grid 2 columns")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/grid/grid-3")}},[t._v("Grid 3 columns")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/grid/grid-4")}},[t._v("Grid 4 columns")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/grid-sidebar")}},[t._v("Grid sidebar")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/masonry/masonry-2")}},[t._v("Masonry")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/masonry/masonry-2")}},[t._v("Masonry 2\n                                        columns")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/masonry/masonry-3")}},[t._v("Masonry 3\n                                        columns")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/masonry/masonry-4")}},[t._v("Masonry 4\n                                        columns")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/masonry-sidebar")}},[t._v("Masonry sidebar")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/mask/grid")}},[t._v("Mask")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/mask/grid")}},[t._v("Blog mask grid")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/blog/mask/masonry")}},[t._v("Blog mask masonry")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/single/default/cras-ornare-tristique-elit."}},[t._v("Single Post")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/blog/single/default/cras-ornare-tristique-elit."}},[t._v("Default with\n                                        sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/single/fullwidth/fusce-pellentesque-suscipit."}},[t._v("Fullwidth no\n                                        sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/single/sidebar/utaliquam-sollicitzdvudin-leo."}},[t._v("Fullwidth\n                                        with sidebar")])],1)])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:t.localePath("/elements")}},[t._v("Elements")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:t.localePath("/elements/products")}},[t._v("Products")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/elements/typography")}},[t._v("Typography")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/elements/titles")}},[t._v("Titles")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/elements/banners")}},[t._v("Banners")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/elements/categories")}},[t._v("Product Category")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/elements/video-banners")}},[t._v("Video Banners")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/elements/buttons")}},[t._v("Buttons")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/elements/accordions")}},[t._v("Accordions")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/elements/tabs")}},[t._v("Tabs")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/elements/testimonials")}},[t._v("Testimonials")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/elements/blog-posts")}},[t._v("Blog Posts")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/elements/portfolio")}},[t._v("Portfolio")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/elements/cta")}},[t._v("Call to Action")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:t.localePath("/elements/icon-boxes")}},[t._v("Icon Boxes")])],1)])],1)])]),t._v(" "),t._m(2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e("i",{staticClass:"icon-search"})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",[l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-1"}},[t._v("01 - furniture store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-2"}},[t._v("02 - furniture store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-3"}},[t._v("03 - electronic store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-4"}},[t._v("04 - electronic store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-5"}},[t._v("05 - fashion store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-6"}},[t._v("06 - fashion store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-7"}},[t._v("07 - fashion store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-8"}},[t._v("08 - fashion store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-9"}},[t._v("09 - fashion store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-10"}},[t._v("10 - shoes store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-11"}},[t._v("11 - furniture simple store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-12"}},[t._v("12 - fashion simple store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-13"}},[t._v("13 - market")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-14"}},[t._v("14 - market fullwidth")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-15"}},[t._v("15 - lookbook 1")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-16"}},[t._v("16 - lookbook 2")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-17"}},[t._v("17 - fashion store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-18"}},[t._v("18 - fashion store (with sidebar)")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-19"}},[t._v("19 - games store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-20"}},[t._v("20 - book store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-21"}},[t._v("21 - sport store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-22"}},[t._v("22 - tools store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-23"}},[t._v("23 - fashion left navigation store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-24"}},[t._v("24 - extreme sport store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-25"}},[t._v("25 - jewelry store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-26"}},[t._v("26 - market store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-28"}},[t._v("27 - fashion store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-29"}},[t._v("28 - food market store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-30"}},[t._v("29 - t-shirts store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-31"}},[t._v("30 - headphones store")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-32"}},[t._v("31 - yoga store")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social-icons"},[e("a",{staticClass:"social-icon",attrs:{target:"_blank",title:"Facebook",href:"#"}},[e("i",{staticClass:"icon-facebook-f"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{target:"_blank",title:"Twitter",href:"#"}},[e("i",{staticClass:"icon-twitter"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{target:"_blank",title:"Instagram",href:"#"}},[e("i",{staticClass:"icon-instagram"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{target:"_blank",title:"Youtube",href:"#"}},[e("i",{staticClass:"icon-youtube"})])])}],!1,null,null,null);e.default=component.exports}}]);