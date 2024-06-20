(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{251:function(t,e,r){"use strict";var n={props:{title:{type:String,required:!0},subtitle:String}},l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"./images/page-header-bg.jpg",expression:"'./images/page-header-bg.jpg'",arg:"background-image"}],staticClass:"page-header text-center"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"page-title"},[t._v("\n            "+t._s(t.title)+"\n            "),t.subtitle?r("span",[t._v(t._s(t.subtitle))]):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},252:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"a",(function(){return v}));r(23),r(11),r(12),r(9),r(14);var n=r(2);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={loop:!0,scrollbar:{draggable:!0},spaceBetween:20,slidesPerView:4},d={loop:!0,scrollbar:{draggable:!1},spaceBetween:0,slidesPerView:1},v=o(o({},c),{},{breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}}})},255:function(t,e,r){"use strict";r(160);var n={props:{perPage:Number,total:Number},computed:{shouldRender:function(){return this.total>this.perPage},currentPage:function(){return parseInt(this.$route.query.page?this.$route.query.page:1)},lastPage:function(){return parseInt(this.total/this.perPage)+(this.total%this.perPage?1:0)},startIndex:function(){return!this.currentPage%this.perPage?this.currentPage:this.perPage*parseInt(this.currentPage/this.perPage)},pagesToBeShown:function(){var t=[];this.pageCount=Math.floor(this.total/this.perPage)+(0<this.total%this.perPage?1:0);for(var i=-1;i<2&&this.pageCount>=3;i++)1<this.currentPage&&this.currentPage<this.pageCount&&t.push(this.currentPage+i),1===this.currentPage&&t.push(this.currentPage+i+1),this.currentPage===this.pageCount&&t.push(this.currentPage+i-1);for(var e=0;e<this.pageCount&&this.pageCount<3;e++)t.push(e+1);return t}},methods:{getPageUrl:function(t){var e={};for(var r in this.$route.query)"page"!==r&&(e[r]=this.$route.query[r]);return t>1&&(e.page=t),{path:this.$route.path,query:e}}}},l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.shouldRender?r("nav",{attrs:{"aria-label":"Page navigation"}},[r("ul",{staticClass:"pagination justify-content-center"},[r("li",{staticClass:"page-item",class:{disabled:t.currentPage<2}},[r("nuxt-link",{staticClass:"page-link page-link-prev",attrs:{to:t.getPageUrl(t.currentPage-1)}},[r("span",{attrs:{"aria-hidden":"true"}},[r("i",{staticClass:"icon-long-arrow-left"})]),t._v("Prev\n            ")])],1),t._v(" "),t.pagesToBeShown.length?t._l(t.pagesToBeShown,(function(e){return r("li",{key:"page-"+e,staticClass:"page-item"},[r("nuxt-link",{staticClass:"page-link",attrs:{"exact-active-class":"active",to:t.getPageUrl(e)}},[t._v(t._s(e))])],1)})):t._e(),t._v(" "),t.lastPage>3?r("li",{staticClass:"page-item-total pl-3"},[t._v("of "+t._s(t.lastPage))]):t._e(),t._v(" "),r("li",{staticClass:"page-item",class:{disabled:t.currentPage===t.lastPage}},[r("nuxt-link",{staticClass:"page-link page-link-next",attrs:{to:t.getPageUrl(t.currentPage+1)}},[t._v("\n                Next\n                "),r("span",{attrs:{"aria-hidden":"true"}},[r("i",{staticClass:"icon-long-arrow-right"})])])],1)],2)]):t._e()}),[],!1,null,null,null);e.a=component.exports},257:function(t,e,r){"use strict";r(23),r(11),r(12),r(9),r(14);var n=r(2),l=r(50),o=r(252);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:{blog:Object,isContent:{type:Boolean,default:function(){return!0}},isAuthor:{type:Boolean,default:function(){return!0}}},data:function(){return{baseUrl:l.a,carouselSetting:d(d({},o.c),{},{navigation:{nextEl:".swiper-media-"+this.blog.id+" .swiper-next",prevEl:".swiper-media-"+this.blog.id+" .swiper-prev"},pagination:{el:".swiper-media-"+this.blog.id+" .swiper-dots",clickable:!0}})}},computed:{date:function(){return new Date(this.blog.date).toLocaleString("en-us",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})}},methods:{openVideoModal:function(){this.$modal.show((function(){return r.e(3).then(r.bind(null,390))}),{},{width:"1060",height:"596",adaptive:!0})}}},h=r(4),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"entry"},[t.blog.image.length<=1?r("figure",{staticClass:"entry-media",class:"video"===t.blog.type?"entry-video":""},["video"!==t.blog.type?r("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.blog.image[0].url,expression:"`${baseUrl}${blog.image[0].url}`"}],attrs:{alt:"blog",width:t.blog.image[0].width,height:t.blog.image[0].height}})]):[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.blog.image[0].url,expression:"`${baseUrl}${blog.image[0].url}`"}],attrs:{alt:"blog",width:t.blog.image[0].width,height:t.blog.image[0].height}}),t._v(" "),"video"===t.blog.type?r("a",{staticClass:"btn-video btn-iframe",attrs:{href:"https://www.youtube.com/watch?v=vBPgmASQ1A0"},on:{click:function(e){return e.preventDefault(),t.openVideoModal(e)}}},[r("i",{staticClass:"icon-play"})]):t._e()]],2):t.blog.image.length>1?r("figure",{staticClass:"entry-media"},[r("div",{staticClass:"swiper-carousel",class:"swiper-media-"+t.blog.id},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper1",value:t.carouselSetting,expression:"carouselSetting",arg:"swiper1"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.blog.image,(function(image,e){return r("div",{key:e,staticClass:"swiper-slide"},[r("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+image.url,expression:"`${baseUrl}${image.url}`"}],attrs:{alt:"blog",width:image.width,height:image.height}})])],1)})),0)]),t._v(" "),t._m(0)])]):t._e(),t._v(" "),r("div",{staticClass:"entry-body"},[r("div",{staticClass:"entry-meta"},[t.isAuthor?r("span",{staticClass:"entry-author"},[t._v("\n\t\t\t\tby\n\t\t\t\t"),r("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.blog.author))])],1):t._e(),t._v(" "),t.isAuthor?r("span",{staticClass:"meta-separator"},[t._v("|")]):t._e(),t._v(" "),r("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.date))]),t._v(" "),r("span",{staticClass:"meta-separator"},[t._v("|")]),t._v(" "),r("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.blog.comments)+" Comments")])],1),t._v(" "),r("h2",{staticClass:"entry-title"},[r("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.blog.title))])],1),t._v(" "),t.blog.blog_categories?r("div",{staticClass:"entry-cats"},[t._v("\n\t\t\tin \n\t\t\t"),t._l(t.blog.blog_categories,(function(e,n){return r("span",{key:n},[r("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(e.name))]),t._v("\n\t\t\t\t"+t._s(t.blog.blog_categories.length-1>n?", ":"")+"\n\t\t\t")],1)}))],2):t._e(),t._v(" "),t.isContent?r("div",{staticClass:"entry-content"},[r("p",[t._v(t._s(t.blog.content))]),t._v(" "),r("nuxt-link",{staticClass:"read-more",attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v("Continue Reading")])],1):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-nav entry-nav"},[e("div",{staticClass:"swiper-prev"},[e("i",{staticClass:"icon-angle-left"})]),this._v(" "),e("div",{staticClass:"swiper-next"},[e("i",{staticClass:"icon-angle-right"})])])}],!1,null,null,null);e.a=component.exports},260:function(t,e,r){"use strict";var n={data:function(){return{category:this.$route.query.category}},props:{type:String,blogCategories:{type:Array,default:function(){return[]}}}},l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar sidebar-blog"},[t._m(0),t._v(" "),r("div",{staticClass:"widget widget-cats"},[r("h3",{staticClass:"widget-title"},[t._v("Categories")]),t._v(" "),0===t.blogCategories.length?r("div",{staticClass:"skel-post-sidebar-category"}):t._e(),t._v(" "),r("ul",t._l(t.blogCategories,(function(e,n){return r("li",{key:n},[r("nuxt-link",{attrs:{to:{path:"/blog/"+t.type,query:{category:e.slug}}}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t"),r("span",[t._v(t._s(e.count))])])],1)})),0)]),t._v(" "),r("div",{staticClass:"widget"},[r("h3",{staticClass:"widget-title"},[t._v("Popular Posts")]),t._v(" "),r("ul",{staticClass:"posts-list"},[r("li",[r("figure",[r("nuxt-link",{attrs:{to:t.localePath("/blog/single/default/cras-ornare-tristique-elit.")}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/blog/sidebar/post-1.jpg",expression:"`./images/blog/sidebar/post-1.jpg`"}],attrs:{alt:"post",width:"80",height:"80"}})])],1),t._v(" "),r("div",[r("span",[t._v("Nov 22, 2018")]),t._v(" "),r("h4",[r("nuxt-link",{attrs:{to:t.localePath("/blog/single/default/cras-ornare-tristique-elit.")}},[t._v("Aliquam tincidunt mauris eurisus.")])],1)])]),t._v(" "),r("li",[r("figure",[r("nuxt-link",{attrs:{to:t.localePath("/blog/single/default/cras-ornare-tristique-elit.")}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/blog/sidebar/post-2.jpg",expression:"`./images/blog/sidebar/post-2.jpg`"}],attrs:{alt:"post",width:"80",height:"80"}})])],1),t._v(" "),r("div",[r("span",[t._v("Nov 19, 2018")]),t._v(" "),r("h4",[r("nuxt-link",{attrs:{to:t.localePath("/blog/single/default/cras-ornare-tristique-elit.")}},[t._v("Cras ornare tristique elit.")])],1)])]),t._v(" "),r("li",[r("figure",[r("nuxt-link",{attrs:{to:t.localePath("/blog/single/default/cras-ornare-tristique-elit.")}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/blog/sidebar/post-3.jpg",expression:"`./images/blog/sidebar/post-3.jpg`"}],attrs:{alt:"post",width:"80",height:"80"}})])],1),t._v(" "),r("div",[r("span",[t._v("Nov 12, 2018")]),t._v(" "),r("h4",[r("nuxt-link",{attrs:{to:t.localePath("/blog/single/default/cras-ornare-tristique-elit.")}},[t._v("Vivamus vestibulum ntulla nec ante.")])],1)])]),t._v(" "),r("li",[r("figure",[r("nuxt-link",{attrs:{to:t.localePath("/blog/single/default/cras-ornare-tristique-elit.")}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/blog/sidebar/post-4.jpg",expression:"`./images/blog/sidebar/post-4.jpg`"}],attrs:{alt:"post",width:"80",height:"80"}})])],1),t._v(" "),r("div",[r("span",[t._v("Nov 25, 2018")]),t._v(" "),r("h4",[r("nuxt-link",{attrs:{to:t.localePath("/blog/single/default/cras-ornare-tristique-elit.")}},[t._v("Donec quis dui at dolor tempor interdum.")])],1)])])])]),t._v(" "),r("div",{staticClass:"widget widget-banner-sidebar"},[r("div",{staticClass:"banner-sidebar-title"},[t._v("ad box 280 x 280")]),t._v(" "),r("div",{staticClass:"banner-sidebar banner-overlay"},[r("nuxt-link",{attrs:{to:t.localePath("/shop/sidebar/list")}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/blog/sidebar/banner.jpg",expression:"`./images/blog/sidebar/banner.jpg`"}],attrs:{alt:"banner",width:"280",height:"280"}})])],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget widget-search"},[e("h3",{staticClass:"widget-title"},[this._v("Search")]),this._v(" "),e("form",{attrs:{action:"#"}},[e("label",{staticClass:"sr-only",attrs:{for:"ws"}},[this._v("Search in blog")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"search",name:"ws",id:"ws",placeholder:"Search in blog",required:""}}),this._v(" "),e("button",{staticClass:"btn",attrs:{type:"submit"}},[e("i",{staticClass:"icon-search"}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Search")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"widget"},[r("h3",{staticClass:"widget-title"},[t._v("Browse Tags")]),t._v(" "),r("div",{staticClass:"tagcloud"},[r("a",{attrs:{href:"#"}},[t._v("fashion")]),t._v(" "),r("a",{attrs:{href:"#"}},[t._v("style")]),t._v(" "),r("a",{attrs:{href:"#"}},[t._v("women")]),t._v(" "),r("a",{attrs:{href:"#"}},[t._v("photography")]),t._v(" "),r("a",{attrs:{href:"#"}},[t._v("travel")]),t._v(" "),r("a",{attrs:{href:"#"}},[t._v("shopping")]),t._v(" "),r("a",{attrs:{href:"#"}},[t._v("hobbies")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget widget-text"},[e("h3",{staticClass:"widget-title"},[this._v("About Blog")]),this._v(" "),e("div",{staticClass:"widget-text-content"},[e("p",[this._v("Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, pulvinar nunc sapien ornare nisl.")])])])}],!1,null,null,null);e.a=component.exports},350:function(t,e,r){"use strict";r.r(e);r(23),r(11),r(12),r(9),r(14);var n=r(2),l=(r(29),r(3)),o=r(113),c=r(257),d=r(251),v=r(260),h=r(255),_=r(50);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y,w={components:{BlogOne:c.a,PageHeader:d.a,BlogSidebar:v.a,Pagination:h.a},directives:{Sticky:o.a},data:function(){return{blogs:[],blogCategories:[],page:1,perPage:5,totalCount:0,loaded:!1,isSidebar:!1,shouldSticky:!1}},watch:{$route:function(){this.getBlogs()}},created:function(){this.getBlogs()},mounted:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler,{passive:!0}),this.stickyHandle(),window.addEventListener("resize",this.stickyHandle,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.resizeHandler),window.removeEventListener("resize",this.stickyHandle)},methods:{getBlogs:(y=Object(l.a)(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loaded=!1,e={page:this.$route.query.page?this.$route.query.page:this.page,perPage:this.perPage},this.$route.query.category&&(e=m(m({},e),{},{category:this.$route.query.category})),t.next=5,_.b.get("".concat(_.a,"/blogs/classic"),{params:e}).then((function(t){r.blogs=t.data.blogs,r.blogCategories=t.data.categories,r.totalCount=t.data.totalCount,r.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}));case 5:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)}),toggleSidebar:function(){document.querySelector("body").classList.contains("sidebar-filter-active")?document.querySelector("body").classList.remove("sidebar-filter-active"):document.querySelector("body").classList.add("sidebar-filter-active")},hideSidebar:function(){document.querySelector("body").classList.remove("sidebar-filter-active")},resizeHandler:function(){window.innerWidth>992?this.isSidebar=!1:this.isSidebar=!0},stickyHandle:function(){window.innerWidth>991?this.shouldSticky=!0:this.shouldSticky=!1}}},C=r(4),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("page-header",{attrs:{title:"Blog Classic",subtitle:"Blog"}}),t._v(" "),r("nav",{staticClass:"breadcrumb-nav"},[r("div",{staticClass:"container"},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v("Home")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/blog/classic")}},[t._v("Blog")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("Classic")])])])]),t._v(" "),r("div",{staticClass:"page-content"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row skeleton-body",class:{loaded:t.loaded}},[r("div",{staticClass:"col-lg-9"},[t.loaded?[0===t.blogs.length?r("p",{staticClass:"blogs-info"},[t._v("No posts were found matching your selection.")]):t._e(),t._v(" "),t._l(t.blogs,(function(t,e){return r("div",{key:e},[r("blog-one",{attrs:{blog:t}})],1)})),t._v(" "),r("pagination",{attrs:{"per-page":t.perPage,total:t.totalCount}})]:t._l([1,2,3,4,5,6],(function(i,t){return r("div",{key:"skel"+t,staticClass:"skel-single-post"})}))],2),t._v(" "),r("aside",{staticClass:"col-lg-3",attrs:{"sticky-container":""}},[r("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.shouldSticky,expression:"shouldSticky"}],staticClass:"sticky-content",attrs:{"sticky-offset":"{top: 69}"}},[t.isSidebar?r("button",{staticClass:"sidebar-fixed-toggler right",on:{click:t.toggleSidebar}},[r("i",{staticClass:"icon-cog"})]):t._e(),t._v(" "),r("div",{staticClass:"sidebar-filter-overlay",on:{click:t.hideSidebar}}),t._v(" "),r("blog-sidebar",{class:t.isSidebar?"sidebar-filter right":"",attrs:{"blog-categories":t.blogCategories,type:"classic"}})],1)])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);