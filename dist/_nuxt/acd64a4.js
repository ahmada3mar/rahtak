(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{272:function(t,e,r){"use strict";var n={props:{title:{type:String,required:!0},subtitle:String}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"./images/page-header-bg.jpg",expression:"'./images/page-header-bg.jpg'",arg:"background-image"}],staticClass:"page-header text-center"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"page-title"},[t._v("\n            "+t._s(t.title)+"\n            "),t.subtitle?e("span",[t._v(t._s(t.subtitle))]):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},273:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"a",(function(){return h}));r(12),r(10),r(9),r(18),r(19);var n=r(2);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c={loop:!0,scrollbar:{draggable:!0},spaceBetween:20,slidesPerView:4},d={loop:!0,scrollbar:{draggable:!1},spaceBetween:0,slidesPerView:1},h=l(l({},c),{},{breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}}})},276:function(t,e,r){"use strict";r(122);var n={props:{perPage:Number,total:Number},computed:{shouldRender:function(){return this.total>this.perPage},currentPage:function(){return parseInt(this.$route.query.page?this.$route.query.page:1)},lastPage:function(){return parseInt(this.total/this.perPage)+(this.total%this.perPage?1:0)},startIndex:function(){return!this.currentPage%this.perPage?this.currentPage:this.perPage*parseInt(this.currentPage/this.perPage)},pagesToBeShown:function(){var t=[];this.pageCount=Math.floor(this.total/this.perPage)+(0<this.total%this.perPage?1:0);for(var i=-1;i<2&&this.pageCount>=3;i++)1<this.currentPage&&this.currentPage<this.pageCount&&t.push(this.currentPage+i),1===this.currentPage&&t.push(this.currentPage+i+1),this.currentPage===this.pageCount&&t.push(this.currentPage+i-1);for(var e=0;e<this.pageCount&&this.pageCount<3;e++)t.push(e+1);return t}},methods:{getPageUrl:function(t){var e={};for(var r in this.$route.query)"page"!==r&&(e[r]=this.$route.query[r]);return t>1&&(e.page=t),{path:this.$route.path,query:e}}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.shouldRender?e("nav",{attrs:{"aria-label":"Page navigation"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:t.currentPage<2}},[e("nuxt-link",{staticClass:"page-link page-link-prev",attrs:{to:t.getPageUrl(t.currentPage-1)}},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"icon-long-arrow-left"})]),t._v("Prev\n            ")])],1),t._v(" "),t.pagesToBeShown.length?t._l(t.pagesToBeShown,(function(r){return e("li",{key:"page-".concat(r),staticClass:"page-item"},[e("nuxt-link",{staticClass:"page-link",attrs:{"exact-active-class":"active",to:t.getPageUrl(r)}},[t._v(t._s(r))])],1)})):t._e(),t._v(" "),t.lastPage>3?e("li",{staticClass:"page-item-total pl-3"},[t._v("of "+t._s(t.lastPage))]):t._e(),t._v(" "),e("li",{staticClass:"page-item",class:{disabled:t.currentPage===t.lastPage}},[e("nuxt-link",{staticClass:"page-link page-link-next",attrs:{to:t.getPageUrl(t.currentPage+1)}},[t._v("\n                Next\n                "),e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"icon-long-arrow-right"})])])],1)],2)]):t._e()}),[],!1,null,null,null);e.a=component.exports},278:function(t,e,r){"use strict";r(13),r(12),r(10),r(9),r(18),r(19);var n=r(2),o=r(54),l=r(273);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={props:{blog:Object,isContent:{type:Boolean,default:function(){return!0}},isAuthor:{type:Boolean,default:function(){return!0}}},data:function(){return{baseUrl:o.a,carouselSetting:d(d({},l.c),{},{navigation:{nextEl:".swiper-media-"+this.blog.id+" .swiper-next",prevEl:".swiper-media-"+this.blog.id+" .swiper-prev"},pagination:{el:".swiper-media-"+this.blog.id+" .swiper-dots",clickable:!0}})}},computed:{date:function(){return new Date(this.blog.date).toLocaleString("en-us",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})}},methods:{openVideoModal:function(){this.$modal.show((function(){return r.e(3).then(r.bind(null,411))}),{},{width:"1060",height:"596",adaptive:!0})}}},v=r(5),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"entry"},[t.blog.image.length<=1?e("figure",{staticClass:"entry-media",class:"video"===t.blog.type?"entry-video":""},["video"!==t.blog.type?e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(t.blog.image[0].url),expression:"`${baseUrl}${blog.image[0].url}`"}],attrs:{alt:"blog",width:t.blog.image[0].width,height:t.blog.image[0].height}})]):[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(t.blog.image[0].url),expression:"`${baseUrl}${blog.image[0].url}`"}],attrs:{alt:"blog",width:t.blog.image[0].width,height:t.blog.image[0].height}}),t._v(" "),"video"===t.blog.type?e("a",{staticClass:"btn-video btn-iframe",attrs:{href:"https://www.youtube.com/watch?v=vBPgmASQ1A0"},on:{click:function(e){return e.preventDefault(),t.openVideoModal.apply(null,arguments)}}},[e("i",{staticClass:"icon-play"})]):t._e()]],2):t.blog.image.length>1?e("figure",{staticClass:"entry-media"},[e("div",{staticClass:"swiper-carousel",class:"swiper-media-"+t.blog.id},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper1",value:t.carouselSetting,expression:"carouselSetting",arg:"swiper1"}]},[e("div",{staticClass:"swiper-wrapper"},t._l(t.blog.image,(function(image,r){return e("div",{key:r,staticClass:"swiper-slide"},[e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(image.url),expression:"`${baseUrl}${image.url}`"}],attrs:{alt:"blog",width:image.width,height:image.height}})])],1)})),0)]),t._v(" "),t._m(0)])]):t._e(),t._v(" "),e("div",{staticClass:"entry-body"},[e("div",{staticClass:"entry-meta"},[t.isAuthor?e("span",{staticClass:"entry-author"},[t._v("\n\t\t\t\tby\n\t\t\t\t"),e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.blog.author))])],1):t._e(),t._v(" "),t.isAuthor?e("span",{staticClass:"meta-separator"},[t._v("|")]):t._e(),t._v(" "),e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.date))]),t._v(" "),e("span",{staticClass:"meta-separator"},[t._v("|")]),t._v(" "),e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.blog.comments)+" Comments")])],1),t._v(" "),e("h2",{staticClass:"entry-title"},[e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.blog.title))])],1),t._v(" "),t.blog.blog_categories?e("div",{staticClass:"entry-cats"},[t._v("\n\t\t\tin \n\t\t\t"),t._l(t.blog.blog_categories,(function(r,n){return e("span",{key:n},[e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(r.name))]),t._v("\n\t\t\t\t"+t._s(t.blog.blog_categories.length-1>n?", ":"")+"\n\t\t\t")],1)}))],2):t._e(),t._v(" "),t.isContent?e("div",{staticClass:"entry-content"},[e("p",[t._v(t._s(t.blog.content))]),t._v(" "),e("nuxt-link",{staticClass:"read-more",attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v("Continue Reading")])],1):t._e()])])}),[function(){var t=this._self._c;return t("div",{staticClass:"swiper-nav entry-nav"},[t("div",{staticClass:"swiper-prev"},[t("i",{staticClass:"icon-angle-left"})]),this._v(" "),t("div",{staticClass:"swiper-next"},[t("i",{staticClass:"icon-angle-right"})])])}],!1,null,null,null);e.a=component.exports},404:function(t,e,r){"use strict";r.r(e);r(13);var n,o=r(20),l=r(3),c=(r(34),r(32),r(30),r(9),r(287)),d=r.n(c),h=r(288),v=r.n(h),m=r(278),f=r(272),y=r(276),_=r(54),C={components:{isotope:d.a,BlogOne:m.a,PageHeader:f.a,Pagination:y.a},directives:{imagesLoaded:v.a},data:function(){return{blogs:[],blogCategories:[],loaded:!1,totalCount:0,page:1,perPage:6,containerClass:"max-col-2",addBlogClass:"col-sm-6",pageHeader:"Masonry 2 Columns",isAuthor:!0,filterCategory:"",isotopeOptions:{itemSelector:".entry-item",layoutMode:"masonry",percentPosition:!1,getFilterData:{filterByClass:function(t){return!!this.$parent&&(""===this.$parent.filterCategory||this.$parent.getCategories(t).includes(this.$parent.filterCategory))}}}}},watch:{$route:function(){this.getBlogs(),this.handleIsotope()}},created:function(){switch(this.$route.params.type){case"masonry-2":this.containerClass="max-col-2",this.addBlogClass="col-sm-6",this.pageHeader="Masonry 2 Columns";break;case"masonry-3":this.containerClass="max-col-3",this.addBlogClass="col-sm-6 col-md-4",this.pageHeader="Masonry 3 Columns",this.perPage=9;break;case"masonry-4":this.containerClass="max-col-4",this.addBlogClass="col-sm-6 col-md-4 col-lg-3",this.pageHeader="Masonry 4 Columns",this.perPage=12}this.getBlogs()},methods:{getBlogs:(n=Object(l.a)(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loaded=!1,e={page:this.$route.query.page?this.$route.query.page:this.page,perPage:this.perPage},t.next=4,_.b.get("".concat(_.a,"/blogs/").concat(this.$route.params.type),{params:e}).then((function(t){r.blogs=t.data.blogs,r.blogCategories=t.data.categories,r.totalCount=t.data.totalCount,r.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),getCategories:function(t){return t.blog_categories.reduce((function(t,e){return[].concat(Object(o.a)(t),[e.slug])}),[])},handleIsotope:function(){this.$refs.isotope&&this.$refs.isotope.layout("masonry")},isotopeFilter:function(t,e){this.filterCategory=t,this.$refs.isotope.filter("filterByClass");var r=e.currentTarget.parentElement.parentElement.querySelector(".active");r&&r.classList.remove("active"),e.currentTarget.parentElement.classList.add("active")}}},w=C,P=r(5),component=Object(P.a)(w,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main"},[e("page-header",{attrs:{title:"Blog ".concat(t.pageHeader),subtitle:"Blog"}}),t._v(" "),e("nav",{staticClass:"breadcrumb-nav"},[e("div",{staticClass:"container"},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:t.localePath("/blog/classic")}},[t._v("Blog")])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageHeader))])])])]),t._v(" "),e("div",{staticClass:"page-content"},[e("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded.on",value:t.handleIsotope,expression:"handleIsotope",modifiers:{on:!0}}],staticClass:"container skeleton-body",class:{loaded:t.loaded}},[e("nav",{staticClass:"blog-nav"},[e("ul",{staticClass:"menu-cat entry-filter justify-content-center"},[e("li",{staticClass:"active"},[e("a",{attrs:{href:"#1"},on:{click:function(e){return e.preventDefault(),t.isotopeFilter("",e)}}},[t._v("\n\t\t\t\t\t\t\tAll Blog Posts\n\t\t\t\t\t\t\t"),e("span",[t._v(t._s(t.totalCount))])])]),t._v(" "),t._l(t.blogCategories,(function(r,n){return e("li",{key:n},[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.isotopeFilter(r.slug,e)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(r.name)+"\n\t\t\t\t\t\t\t"),e("span",[t._v(t._s(r.count))])])])}))],2)]),t._v(" "),e("div",{staticClass:"row"},t._l([1,2,3,4,5,6],(function(i,t){return e("div",{key:"skel"+t,staticClass:"skel-single-post col-sm-6"})})),0),t._v(" "),t.loaded&&0===t.blogs.length?e("p",{staticClass:"blogs-info"},[t._v("No posts were found matching your selection.")]):t._e(),t._v(" "),e("isotope",{ref:"isotope",staticClass:"entry-container",class:t.containerClass,attrs:{list:t.blogs,options:t.isotopeOptions}},t._l(t.blogs,(function(r,n){return e("div",{key:n,staticClass:"entry-item",class:t.addBlogClass},[e("blog-one",{staticClass:"text-center",attrs:{blog:r,isContent:!1}})],1)})),0),t._v(" "),e("pagination",{attrs:{"per-page":t.perPage,total:t.totalCount}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);