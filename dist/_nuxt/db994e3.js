(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{277:function(t,e,l){"use strict";l(12),l(10),l(9),l(18),l(19);var o=l(2),r=l(20);function n(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,o)}return l}function c(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?n(Object(l),!0).forEach((function(e){Object(o.a)(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}var v={props:{id:String,data:Array},data:function(){return{tabs:Object(r.a)(this.data)}},computed:{},methods:{getUrl:function(t){return this.id?"#"+this.id+"-"+t.id:"#"+t.id},tabClick:function(t){if(!t.active){this.tabs=this.tabs.reduce((function(e,l){return l.id==t.id?[].concat(Object(r.a)(e),[c(c({},l),{},{active:!0})]):[].concat(Object(r.a)(e),[c(c({},l),{},{active:!1})])}),[]);var e=document.querySelector(this.getUrl(t));if(e){var l=e.parentElement.querySelector(".tab-pane.active");l&&(l.classList.remove("show"),setTimeout((function(){l.classList.remove("active")}),150)),e.classList.add("show"),setTimeout((function(){e.classList.add("active")}),150)}}}}},h=l(5),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"nav"},t._l(t.tabs,(function(l,o){return e("li",{key:o,staticClass:"nav-item"},[e("a",{staticClass:"nav-link",class:{"active bg-white":l.active},attrs:{href:t.getUrl(l)},on:{click:function(e){return e.preventDefault(),t.tabClick(l)}}},[t._v(t._s(l.title))])])})),0)}),[],!1,null,null,null);e.a=component.exports},408:function(t,e,l){"use strict";l.r(e);l(277);var o=l(92),r={data:function(){return{searchTerm:""}},mounted:function(){Object(o.f)()},methods:{hideMobileMenu:function(){document.querySelector("body").classList.remove("mmenu-active")},submitSearchForm:function(){this.hideMobileMenu(),this.$router.push({path:"/shop/sidebar/3cols",query:{searchTerm:this.searchTerm}})}}},n=l(5),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mobile-menu-container"},[e("div",{staticClass:"mobile-menu-wrapper"},[e("span",{staticClass:"mobile-menu-close",on:{click:t.hideMobileMenu}},[e("i",{staticClass:"icon-close"})]),t._v(" "),e("form",{staticClass:"mobile-search",attrs:{action:"#",method:"get"},on:{submit:function(e){return e.preventDefault(),t.submitSearchForm.apply(null,arguments)}}},[e("label",{staticClass:"sr-only",attrs:{for:"mobile-search"}},[t._v("Search")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control",attrs:{type:"search",name:"mobile-search",id:"mobile-search",placeholder:"Search product ...",required:""},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),e("nav",{staticClass:"mobile-nav"},[e("ul",{staticClass:"mobile-menu"},[e("li",[e("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:t.localePath("/")}},[t._v("Home")]),t._v(" "),t._m(1)],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/shop/sidebar/list")}},[t._v("Shop")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:t.localePath("/shop/sidebar/list")}},[t._v("Shop List")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/shop/sidebar/2cols")}},[t._v("Shop Grid 2 Columns")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/shop/sidebar/3cols")}},[t._v("Shop Grid 3 Columns")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/shop/sidebar/4cols")}},[t._v("Shop Grid 4 Columns")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/shop/nosidebar/boxed")}},[e("span",[t._v("\n                                    Shop Boxed No Sidebar\n                                    "),e("span",{staticClass:"tip tip-hot"},[t._v("Hot")])])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/shop/nosidebar/fullwidth")}},[t._v("Shop Fullwidth No Sidebar")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/shop/category/boxed")}},[t._v("Product Category Boxed")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/shop/category/fullwidth")}},[e("span",[t._v("\n                                    Product Category Fullwidth\n                                    "),e("span",{staticClass:"tip tip-new"},[t._v("New")])])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/shop/cart")}},[t._v("Cart")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/shop/checkout")}},[t._v("Checkout")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/shop/wishlist")}},[t._v("Wishlist")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/shop/dashboard")}},[t._v("My Account")])],1)])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:"/product/default/dark-yellow-lace-cut-out-swing-dress"}},[t._v("Product")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/product/default/dark-yellow-lace-cut-out-swing-dress"}},[t._v("Default")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/product/centered/beige-ring-handle-circle-cross-body-bag"}},[t._v("Centered")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/product/extended/yellow-tie-strap-block-heel-sandals"}},[e("span",[t._v("\n                                    Extended Info\n                                    "),e("span",{staticClass:"tip tip-new"},[t._v("New")])])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/product/gallery/beige-metal-hoop-tote-bag")}},[t._v("Gallery")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/product/sticky/brown-faux-fur-longline-coat"}},[t._v("Sticky Info")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/product/sidebar/beige-v-neck-button-cardigan"}},[t._v("Boxed With Sidebar")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/product/fullwidth/black-faux-leather-chain-trim-sandals"}},[t._v("Full Width")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/product/masonry/black-denim-dungaree-dress"}},[t._v("Masonry Sticky Info")])],1)])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/pages/about")}},[t._v("Pages")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:t.localePath("/pages/about")}},[t._v("About")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:t.localePath("/pages/about")}},[t._v("About 01")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/pages/about-2")}},[t._v("About 02")])],1)])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:t.localePath("/pages/contact")}},[t._v("Contact")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:t.localePath("/pages/contact")}},[t._v("Contact 01")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/pages/contact-2")}},[t._v("Contact 02")])],1)])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/pages/login")}},[t._v("Login")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/pages/faq")}},[t._v("FAQs")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/pages/404")}},[t._v("Error 404")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/pages/coming-soon")}},[t._v("Coming Soon")])],1)])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:t.localePath("/blog/classic")}},[t._v("Blog")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/classic")}},[t._v("Classic")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/listing")}},[t._v("Listing")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/grid/grid-2")}},[t._v("Grid")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/grid/grid-2")}},[t._v("Grid 2 columns")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/grid/grid-3")}},[t._v("Grid 3 columns")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/grid/grid-4")}},[t._v("Grid 4 columns")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/grid-sidebar")}},[t._v("Grid sidebar")])],1)])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/masonry/masonry-2")}},[t._v("Masonry")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/masonry/masonry-2")}},[t._v("Masonry 2 columns")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/masonry/masonry-3")}},[t._v("Masonry 3 columns")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/masonry/masonry-4")}},[t._v("Masonry 4 columns")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/masonry-sidebar")}},[t._v("Masonry sidebar")])],1)])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/mask/grid")}},[t._v("Mask")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/mask/grid")}},[t._v("Blog mask grid")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/blog/mask/masonry")}},[t._v("Blog mask masonry")])],1)])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/blog/single/default/cras-ornare-tristique-elit."}},[t._v("Single Post")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/blog/single/default/cras-ornare-tristique-elit."}},[t._v("Default with sidebar")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/blog/single/fullwidth/fusce-pellentesque-suscipit."}},[t._v("Fullwidth no sidebar")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/blog/single/sidebar/utaliquam-sollicitzdvudin-leo."}},[t._v("Fullwidth with sidebar")])],1)])],1)])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:t.localePath("/elements")}},[t._v("Elements")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:t.localePath("/elements/products")}},[t._v("Products")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/elements/typography")}},[t._v("Typography")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/elements/titles")}},[t._v("Titles")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/elements/banners")}},[t._v("Banners")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/elements/categories")}},[t._v("Product Category")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/elements/video-banners")}},[t._v("Video Banners")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/elements/buttons")}},[t._v("Buttons")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/elements/accordions")}},[t._v("Accordions")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/elements/tabs")}},[t._v("Tabs")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/elements/testimonials")}},[t._v("Testimonials")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/elements/blog-posts")}},[t._v("Blog Posts")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/elements/portfolio")}},[t._v("Portfolio")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/elements/cta")}},[t._v("Call to Action")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/elements/icon-boxes")}},[t._v("Icon Boxes")])],1)])],1)])]),t._v(" "),t._m(2)])])}),[function(){var t=this._self._c;return t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t("i",{staticClass:"icon-search"})])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-1"}},[t._v("01 - furniture store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-2"}},[t._v("02 - furniture store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-3"}},[t._v("03 - electronic store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-4"}},[t._v("04 - electronic store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-5"}},[t._v("05 - fashion store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-6"}},[t._v("06 - fashion store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-7"}},[t._v("07 - fashion store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-8"}},[t._v("08 - fashion store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-9"}},[t._v("09 - fashion store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-10"}},[t._v("10 - shoes store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-11"}},[t._v("11 - furniture simple store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-12"}},[t._v("12 - fashion simple store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-13"}},[t._v("13 - market")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-14"}},[t._v("14 - market fullwidth")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-15"}},[t._v("15 - lookbook 1")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-16"}},[t._v("16 - lookbook 2")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-17"}},[t._v("17 - fashion store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-18"}},[t._v("18 - fashion store (with sidebar)")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-19"}},[t._v("19 - games store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-20"}},[t._v("20 - book store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-21"}},[t._v("21 - sport store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-22"}},[t._v("22 - tools store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-23"}},[t._v("23 - fashion left navigation store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-24"}},[t._v("24 - extreme sport store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-25"}},[t._v("25 - jewelry store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-26"}},[t._v("26 - market store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-28"}},[t._v("27 - fashion store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-29"}},[t._v("28 - food market store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-30"}},[t._v("29 - t-shirts store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-31"}},[t._v("30 - headphones store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-32"}},[t._v("31 - yoga store")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"social-icons"},[e("a",{staticClass:"social-icon",attrs:{target:"_blank",title:"Facebook",href:"#"}},[e("i",{staticClass:"icon-facebook-f"})]),t._v(" "),e("a",{staticClass:"social-icon",attrs:{target:"_blank",title:"Twitter",href:"#"}},[e("i",{staticClass:"icon-twitter"})]),t._v(" "),e("a",{staticClass:"social-icon",attrs:{target:"_blank",title:"Instagram",href:"#"}},[e("i",{staticClass:"icon-instagram"})]),t._v(" "),e("a",{staticClass:"social-icon",attrs:{target:"_blank",title:"Youtube",href:"#"}},[e("i",{staticClass:"icon-youtube"})])])}],!1,null,null,null);e.default=component.exports}}]);