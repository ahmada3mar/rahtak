(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{240:function(t,e,r){"use strict";var n={props:{title:{type:String,required:!0},subtitle:String}},o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"./images/page-header-bg.jpg",expression:"'./images/page-header-bg.jpg'",arg:"background-image"}],staticClass:"page-header text-center"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"page-title"},[t._v("\n            "+t._s(t.title)+"\n            "),t.subtitle?r("span",[t._v(t._s(t.subtitle))]):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},241:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"a",(function(){return h}));r(23),r(11),r(12),r(9),r(14);var n=r(2);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={loop:!0,scrollbar:{draggable:!0},spaceBetween:20,slidesPerView:4},d={loop:!0,scrollbar:{draggable:!1},spaceBetween:0,slidesPerView:1},h=l(l({},c),{},{breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}}})},246:function(t,e,r){"use strict";r(149);var n={props:{perPage:Number,total:Number},computed:{shouldRender:function(){return this.total>this.perPage},currentPage:function(){return parseInt(this.$route.query.page?this.$route.query.page:1)},lastPage:function(){return parseInt(this.total/this.perPage)+(this.total%this.perPage?1:0)},startIndex:function(){return!this.currentPage%this.perPage?this.currentPage:this.perPage*parseInt(this.currentPage/this.perPage)},pagesToBeShown:function(){var t=[];this.pageCount=Math.floor(this.total/this.perPage)+(0<this.total%this.perPage?1:0);for(var i=-1;i<2&&this.pageCount>=3;i++)1<this.currentPage&&this.currentPage<this.pageCount&&t.push(this.currentPage+i),1===this.currentPage&&t.push(this.currentPage+i+1),this.currentPage===this.pageCount&&t.push(this.currentPage+i-1);for(var e=0;e<this.pageCount&&this.pageCount<3;e++)t.push(e+1);return t}},methods:{getPageUrl:function(t){var e={};for(var r in this.$route.query)"page"!==r&&(e[r]=this.$route.query[r]);return t>1&&(e.page=t),{path:this.$route.path,query:e}}}},o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.shouldRender?r("nav",{attrs:{"aria-label":"Page navigation"}},[r("ul",{staticClass:"pagination justify-content-center"},[r("li",{staticClass:"page-item",class:{disabled:t.currentPage<2}},[r("nuxt-link",{staticClass:"page-link page-link-prev",attrs:{to:t.getPageUrl(t.currentPage-1)}},[r("span",{attrs:{"aria-hidden":"true"}},[r("i",{staticClass:"icon-long-arrow-left"})]),t._v("Prev\n            ")])],1),t._v(" "),t.pagesToBeShown.length?t._l(t.pagesToBeShown,(function(e){return r("li",{key:"page-"+e,staticClass:"page-item"},[r("nuxt-link",{staticClass:"page-link",attrs:{"exact-active-class":"active",to:t.getPageUrl(e)}},[t._v(t._s(e))])],1)})):t._e(),t._v(" "),t.lastPage>3?r("li",{staticClass:"page-item-total pl-3"},[t._v("of "+t._s(t.lastPage))]):t._e(),t._v(" "),r("li",{staticClass:"page-item",class:{disabled:t.currentPage===t.lastPage}},[r("nuxt-link",{staticClass:"page-link page-link-next",attrs:{to:t.getPageUrl(t.currentPage+1)}},[t._v("\n                Next\n                "),r("span",{attrs:{"aria-hidden":"true"}},[r("i",{staticClass:"icon-long-arrow-right"})])])],1)],2)]):t._e()}),[],!1,null,null,null);e.a=component.exports},264:function(t,e,r){"use strict";r(23),r(11),r(12),r(9),r(14);var n=r(2),o=r(50),l=r(241);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={props:{blog:Object,isContent:{type:Boolean,default:function(){return!0}},isAuthor:{type:Boolean,default:function(){return!0}}},data:function(){return{baseUrl:o.a,carouselSetting:d(d({},l.c),{},{navigation:{nextEl:".swiper-media-"+this.blog.id+" .swiper-next",prevEl:".swiper-media-"+this.blog.id+" .swiper-prev"},pagination:{el:".swiper-media-"+this.blog.id+" .swiper-dots",clickable:!0}})}},computed:{date:function(){return new Date(this.blog.date).toLocaleString("en-us",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})}}},v=r(4),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"entry entry-mask"},[t.blog.image.length<=1?r("figure",{staticClass:"entry-media",class:"video"===t.blog.type?"entry-video":""},[r("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.blog.image[0].url,expression:"`${baseUrl}${blog.image[0].url}`"}],attrs:{alt:"blog",width:t.blog.image[0].width,height:t.blog.image[0].height}})])],1):t.blog.image.length>1?r("figure",{staticClass:"entry-media entry-gallery"},[r("div",{staticClass:"swiper-carousel",class:"swiper-media-"+t.blog.id},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper1",value:t.carouselSetting,expression:"carouselSetting",arg:"swiper1"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.blog.image,(function(image,e){return r("div",{key:e,staticClass:"swiper-slide"},[r("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+image.url,expression:"`${baseUrl}${image.url}`"}],attrs:{alt:"blog",width:image.width,height:image.height}})])],1)})),0)])])]):t._e(),t._v(" "),r("div",{staticClass:"entry-body"},[r("div",{staticClass:"entry-meta"},[r("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.date))]),t._v(" "),r("span",{staticClass:"meta-separator"},[t._v("|")]),t._v(" "),r("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.blog.comments)+" Comments")])],1),t._v(" "),r("h2",{staticClass:"entry-title"},[r("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.blog.title))])],1),t._v(" "),t.blog.blog_categories?r("div",{staticClass:"entry-cats"},[t._v("\n\t\t\tin \n\t\t\t"),t._l(t.blog.blog_categories,(function(e,n){return r("span",{key:n},[r("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(e.name))]),t._v("\n\t\t\t\t"+t._s(t.blog.blog_categories.length-1>n?", ":"")+"\n\t\t\t")],1)}))],2):t._e()])])}),[],!1,null,null,null);e.a=component.exports},368:function(t,e,r){"use strict";r.r(e);var n,o=r(24),l=(r(29),r(3)),c=(r(25),r(26),r(257)),d=r.n(c),h=r(258),v=r.n(h),f=r(264),m=r(240),y=r(246),_=r(50),C={components:{isotope:d.a,BlogThree:f.a,PageHeader:m.a,Pagination:y.a},directives:{imagesLoaded:v.a},data:function(){return{blogs:[],blogCategories:[],loaded:!1,totalCount:0,page:1,perPage:9,certainTag:null,certainCategory:null,filterCategory:"",isotopeOptions:{itemSelector:".entry-item",layoutMode:"masonry",percentPosition:!1,getFilterData:{filterByClass:function(t){return!!this.$parent&&(""===this.$parent.filterCategory||this.$parent.getCategories(t).includes(this.$parent.filterCategory))}}}}},watch:{$route:function(){this.getBlogs()}},created:function(){this.getBlogs()},methods:{getBlogs:(n=Object(l.a)(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loaded=!1,e={page:this.$route.query.page?this.$route.query.page:this.page,perPage:this.perPage},t.next=4,_.b.get("".concat(_.a,"/blogs/mask-masonry"),{params:e}).then((function(t){r.blogs=t.data.blogs,r.blogCategories=t.data.categories,r.totalCount=t.data.totalCount,r.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),getCategories:function(t){return t.blog_categories.reduce((function(t,e){return[].concat(Object(o.a)(t),[e.slug])}),[])},addClass:function(t){return this.getCategories(t).join(" ")},handleIsotope:function(){this.$refs.isotope&&this.$refs.isotope.layout("masonry")},isotopeFilter:function(t,e){this.filterCategory=t,this.$refs.isotope.filter("filterByClass");var r=e.currentTarget.parentElement.parentElement.querySelector(".active");r&&r.classList.remove("active"),e.currentTarget.parentElement.classList.add("active")}}},P=r(4),component=Object(P.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("page-header",{attrs:{title:"Blog Mask Masonry",subtitle:"Blog"}}),t._v(" "),r("nav",{staticClass:"breadcrumb-nav"},[r("div",{staticClass:"container"},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v("Home")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/blog/classic")}},[t._v("Blog")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("Mask Masonry")])])])]),t._v(" "),r("div",{staticClass:"page-content"},[r("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded.on",value:t.handleIsotope,expression:"handleIsotope",modifiers:{on:!0}}],staticClass:"container skeleton-body",class:{loaded:t.loaded}},[r("nav",{staticClass:"blog-nav"},[r("ul",{staticClass:"menu-cat entry-filter justify-content-center"},[r("li",{staticClass:"active"},[r("a",{attrs:{href:"#1"},on:{click:function(e){return e.preventDefault(),t.isotopeFilter("",e)}}},[t._v("\n\t\t\t\t\t\t\tAll Blog Posts\n\t\t\t\t\t\t\t"),r("span",[t._v(t._s(t.totalCount))])])]),t._v(" "),t._l(t.blogCategories,(function(e,n){return r("li",{key:n},[r("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.isotopeFilter(e.slug,r)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t"),r("span",[t._v(t._s(e.count))])])])}))],2)]),t._v(" "),r("div",{staticClass:"row"},t._l([1,2,3,4,5,6],(function(i,t){return r("div",{key:"skel"+t,staticClass:"skel-mask-post col-sm-6 col-lg-4"})})),0),t._v(" "),t.loaded&&0===t.blogs.length?r("p",{staticClass:"blogs-info"},[t._v("No posts were found matching your selection.")]):t._e(),t._v(" "),r("isotope",{ref:"isotope",staticClass:"entry-container max-col-3",attrs:{list:t.blogs,options:t.isotopeOptions}},t._l(t.blogs,(function(e,n){return r("div",{key:n,staticClass:"entry-item col-sm-6 col-lg-4",class:t.addClass(e)},[r("blog-three",{staticClass:"text-center",attrs:{blog:e}})],1)})),0),t._v(" "),r("pagination",{attrs:{"per-page":t.perPage,total:t.totalCount}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);