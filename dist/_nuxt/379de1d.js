(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{273:function(t,e,l){"use strict";l.d(e,"b",(function(){return c})),l.d(e,"c",(function(){return d})),l.d(e,"a",(function(){return v}));l(12),l(10),l(9),l(18),l(19);var r=l(2);function n(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,r)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?n(Object(l),!0).forEach((function(e){Object(r.a)(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}var c={loop:!0,scrollbar:{draggable:!0},spaceBetween:20,slidesPerView:4},d={loop:!0,scrollbar:{draggable:!1},spaceBetween:0,slidesPerView:1},v=o(o({},c),{},{breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}}})},278:function(t,e,l){"use strict";l(13),l(12),l(10),l(9),l(18),l(19);var r=l(2),n=l(54),o=l(273);function c(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,r)}return l}function d(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?c(Object(l),!0).forEach((function(e){Object(r.a)(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}var v={props:{blog:Object,isContent:{type:Boolean,default:function(){return!0}},isAuthor:{type:Boolean,default:function(){return!0}}},data:function(){return{baseUrl:n.a,carouselSetting:d(d({},o.c),{},{navigation:{nextEl:".swiper-media-"+this.blog.id+" .swiper-next",prevEl:".swiper-media-"+this.blog.id+" .swiper-prev"},pagination:{el:".swiper-media-"+this.blog.id+" .swiper-dots",clickable:!0}})}},computed:{date:function(){return new Date(this.blog.date).toLocaleString("en-us",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})}},methods:{openVideoModal:function(){this.$modal.show((function(){return l.e(3).then(l.bind(null,411))}),{},{width:"1060",height:"596",adaptive:!0})}}},m=l(5),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"entry"},[t.blog.image.length<=1?e("figure",{staticClass:"entry-media",class:"video"===t.blog.type?"entry-video":""},["video"!==t.blog.type?e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(t.blog.image[0].url),expression:"`${baseUrl}${blog.image[0].url}`"}],attrs:{alt:"blog",width:t.blog.image[0].width,height:t.blog.image[0].height}})]):[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(t.blog.image[0].url),expression:"`${baseUrl}${blog.image[0].url}`"}],attrs:{alt:"blog",width:t.blog.image[0].width,height:t.blog.image[0].height}}),t._v(" "),"video"===t.blog.type?e("a",{staticClass:"btn-video btn-iframe",attrs:{href:"https://www.youtube.com/watch?v=vBPgmASQ1A0"},on:{click:function(e){return e.preventDefault(),t.openVideoModal.apply(null,arguments)}}},[e("i",{staticClass:"icon-play"})]):t._e()]],2):t.blog.image.length>1?e("figure",{staticClass:"entry-media"},[e("div",{staticClass:"swiper-carousel",class:"swiper-media-"+t.blog.id},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper1",value:t.carouselSetting,expression:"carouselSetting",arg:"swiper1"}]},[e("div",{staticClass:"swiper-wrapper"},t._l(t.blog.image,(function(image,l){return e("div",{key:l,staticClass:"swiper-slide"},[e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(image.url),expression:"`${baseUrl}${image.url}`"}],attrs:{alt:"blog",width:image.width,height:image.height}})])],1)})),0)]),t._v(" "),t._m(0)])]):t._e(),t._v(" "),e("div",{staticClass:"entry-body"},[e("div",{staticClass:"entry-meta"},[t.isAuthor?e("span",{staticClass:"entry-author"},[t._v("\n\t\t\t\tby\n\t\t\t\t"),e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.blog.author))])],1):t._e(),t._v(" "),t.isAuthor?e("span",{staticClass:"meta-separator"},[t._v("|")]):t._e(),t._v(" "),e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.date))]),t._v(" "),e("span",{staticClass:"meta-separator"},[t._v("|")]),t._v(" "),e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.blog.comments)+" Comments")])],1),t._v(" "),e("h2",{staticClass:"entry-title"},[e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.blog.title))])],1),t._v(" "),t.blog.blog_categories?e("div",{staticClass:"entry-cats"},[t._v("\n\t\t\tin \n\t\t\t"),t._l(t.blog.blog_categories,(function(l,r){return e("span",{key:r},[e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(l.name))]),t._v("\n\t\t\t\t"+t._s(t.blog.blog_categories.length-1>r?", ":"")+"\n\t\t\t")],1)}))],2):t._e(),t._v(" "),t.isContent?e("div",{staticClass:"entry-content"},[e("p",[t._v(t._s(t.blog.content))]),t._v(" "),e("nuxt-link",{staticClass:"read-more",attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v("Continue Reading")])],1):t._e()])])}),[function(){var t=this._self._c;return t("div",{staticClass:"swiper-nav entry-nav"},[t("div",{staticClass:"swiper-prev"},[t("i",{staticClass:"icon-angle-left"})]),this._v(" "),t("div",{staticClass:"swiper-next"},[t("i",{staticClass:"icon-angle-right"})])])}],!1,null,null,null);e.a=component.exports},401:function(t,e,l){"use strict";l.r(e);l(13),l(12),l(10),l(9),l(18),l(19);var r=l(20),n=l(3),o=l(2),c=(l(34),l(124)),d=l(278),v=l(54),m=l(273);function _(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,r)}return l}function h(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?_(Object(l),!0).forEach((function(e){Object(o.a)(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):_(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}var f,y={components:{BlogOne:d.a},data:function(){return{blog:null,prevBlog:null,nextBlog:null,relatedBlogs:[],blogCategories:[],loaded:!1,baseUrl:v.a,shouldSticky:!1,carouselSettingSingle:m.c,carouselSetting:h(h({},m.a),{},{breakpoints:{400:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:3}},navigation:{nextEl:".swiper-related .swiper-next",prevEl:".swiper-related .swiper-prev"},pagination:{el:".swiper-related .swiper-dots",clickable:!0}})}},directives:{Sticky:c.a},computed:{date:function(){return new Date(this.blog.date).toLocaleString("en-us",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})}},created:function(){this.getBlog()},mounted:function(){this.stickyHandle(),window.addEventListener("resize",this.stickyHandle,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.stickyHandle)},methods:{getBlog:(f=Object(n.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loaded=!1,t.next=3,v.b.get("".concat(v.a,"/single/").concat(this.$route.params.slug)).then((function(t){e.blog=h({},t.data.blog),e.relatedBlogs=Object(r.a)(t.data.relatedBlogs),e.prevBlog=t.data.prevBlog,e.nextBlog=t.data.nextBlog,e.blogCategories=t.data.categories,e.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)}),stickyHandle:function(){window.innerWidth>991?this.shouldSticky=!0:this.shouldSticky=!1}}},w=y,C=l(5),component=Object(C.a)(w,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main"},[e("nav",{staticClass:"breadcrumb-nav mb-0"},[e("div",{staticClass:"container-fluid"},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:t.localePath("/blog/classic")}},[t._v("Blog")])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active"},[t._v("Fullwidth")])])])]),t._v(" "),e("div",{staticClass:"page-content"},[t.blog?[t.blog.image.length<=1?e("figure",{staticClass:"entry-media entry-media-fullwidth",class:"video"===t.blog.type?"entry-video":""},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(t.blog.image[0].url),expression:"`${baseUrl}${blog.image[0].url}`"}],attrs:{alt:"blog",width:t.blog.image[0].width,height:t.blog.image[0].height}}),t._v(" "),"video"===t.blog.type?e("a",{staticClass:"btn-video btn-iframe",attrs:{href:"https://www.youtube.com/watch?v=vBPgmASQ1A0"},on:{click:function(e){return e.preventDefault(),t.openVideoModal.apply(null,arguments)}}},[e("i",{staticClass:"icon-play"})]):t._e()]):t.blog.image.length>1?e("figure",{staticClass:"entry-media entry-gallery"},[e("div",{staticClass:"swiper-carousel",class:"swiper-single-media-"+t.blog.id},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper2",value:t.carouselSettingSingle,expression:"carouselSettingSingle",arg:"swiper2"}]},[e("div",{staticClass:"swiper-wrapper"},t._l(t.blog.image,(function(image,l){return e("div",{key:l,staticClass:"swiper-slide"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(image.url),expression:"`${baseUrl}${image.url}`"}],attrs:{alt:"blog",width:image.width,height:image.height}})])})),0)])])]):t._e()]:t._e(),t._v(" "),e("div",{staticClass:"container skeleton-body",class:{loaded:t.loaded}},[e("div",{staticClass:"skel-single-post"}),t._v(" "),t.blog?[e("article",{staticClass:"entry single-entry entry-fullwidth"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-11"},[e("div",{staticClass:"entry-body"},[e("div",{staticClass:"entry-meta"},[e("span",{staticClass:"entry-author"},[t._v("\n                                        by\n                                        "),e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.blog.author))])],1),t._v(" "),e("span",{staticClass:"meta-separator"},[t._v("|")]),t._v(" "),e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.date))]),t._v(" "),e("span",{staticClass:"meta-separator"},[t._v("|")]),t._v(" "),e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.blog.comments)+" Comments")])],1),t._v(" "),e("h2",{staticClass:"entry-title"},[e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(t.blog.title))])],1),t._v(" "),t.blog.blog_categories?e("div",{staticClass:"entry-cats"},[t._v("\n                                    in \n                                    "),t._l(t.blog.blog_categories,(function(l,r){return e("span",{key:r},[e("nuxt-link",{attrs:{to:"/blog/single/default/"+t.blog.slug}},[t._v(t._s(l.name))]),t._v("\n                                        "+t._s(t.blog.blog_categories.length-1>r?", ":"")+"\n                                    ")],1)}))],2):t._e(),t._v(" "),e("div",{staticClass:"entry-content editor-content"},[e("p",[t._v(t._s(t.blog.content))]),t._v(" "),e("div",{staticClass:"pb-1"}),t._v(" "),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/blog/single/fullwidth/2.jpg",expression:"'./images/blog/single/fullwidth/2.jpg'"}],attrs:{alt:"image"}}),t._v(" "),e("div",{staticClass:"pb-1"}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("h3",[t._v("Donec nec justo eget felis facilisis fermentum.")]),t._v(" "),e("p",[t._v("Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus.")]),t._v(" "),e("p",[t._v("Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.")]),t._v(" "),e("div",{staticClass:"pb-1"}),t._v(" "),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/blog/single/fullwidth/3.jpg",expression:"'./images/blog/single/fullwidth/3.jpg'"}],attrs:{alt:"image"}}),t._v(" "),e("div",{staticClass:"pb-1"}),t._v(" "),e("p",[t._v("Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.")])]),t._v(" "),t._m(2)])]),t._v(" "),e("div",{staticClass:"col-lg-1 order-lg-first mb-2 mb-lg-0",attrs:{"sticky-container":""}},[e("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.shouldSticky,expression:"shouldSticky"}],staticClass:"sticky-content",attrs:{"sticky-offset":"{ top: 69 }"}},[t._m(3)])])]),t._v(" "),e("div",{staticClass:"entry-author-details"},[e("figure",{staticClass:"author-media"},[e("a",{attrs:{href:"#"}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/blog/single/author.jpg",expression:"'./images/blog/single/author.jpg'"}],attrs:{alt:"User name"}})])]),t._v(" "),t._m(4)])]),t._v(" "),e("nav",{staticClass:"pager-nav"},[t.prevBlog?e("nuxt-link",{staticClass:"pager-link pager-link-prev",attrs:{to:"/blog/single/fullwidth/"+t.prevBlog.slug}},[t._v("\n                        Previous Post\n                        "),e("span",{staticClass:"pager-link-title"},[t._v(t._s(t.prevBlog.title))])]):t.prevBlog?t._e():e("nuxt-link",{staticClass:"pager-link",attrs:{to:t.localePath("#")}},[e("span",{staticClass:"page-link-title ml-4"},[t._v("This is the first blog.")])]),t._v(" "),t.nextBlog?e("nuxt-link",{staticClass:"pager-link pager-link-next",attrs:{to:"/blog/single/fullwidth/"+t.nextBlog.slug}},[t._v("\n                        Next Post\n                        "),e("span",{staticClass:"pager-link-title"},[t._v(t._s(t.nextBlog.title))])]):t.nextBlog?t._e():e("nuxt-link",{staticClass:"pager-link",attrs:{to:t.localePath("#")}},[e("span",{staticClass:"page-link-title mr-4"},[t._v("This is the last blog.")])])],1),t._v(" "),e("div",{staticClass:"related-posts"},[e("h3",{staticClass:"title"},[t._v("Related Posts")]),t._v(" "),0===t.relatedBlogs.length?e("p",{staticClass:"blogs-info"},[t._v("No related posts were found.")]):t._e(),t._v(" "),e("div",{staticClass:"swiper-carousel swiper-related"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper1",value:t.carouselSetting,expression:"carouselSetting",arg:"swiper1"}]},[e("div",{staticClass:"swiper-wrapper"},t._l(t.relatedBlogs,(function(t,l){return e("div",{key:l,staticClass:"swiper-slide"},[e("blog-one",{staticClass:"entry-grid",attrs:{blog:t,isContent:!1,isAuthor:!1}})],1)})),0)]),t._v(" "),e("div",{staticClass:"swiper-dots d-md-none"})])]),t._v(" "),t._m(5),t._v(" "),t._m(6)]:t._e()],2)],2)])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("\n                                        Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent\n                                        "),e("a",{attrs:{href:"#"}},[t._v("elementum hendrerit")]),t._v(" tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.\n                                    ")])},function(){var t=this._self._c;return t("blockquote",[t("p",[this._v("“ Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Vivamus vestibulum ntulla nec ante. ”")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"entry-footer row no-gutters"},[e("div",{staticClass:"col"},[e("div",{staticClass:"entry-tags"},[e("span",[t._v("Tags:")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("photography")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("style")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"social-icons social-icons-colored social-icons-vertical"},[e("span",{staticClass:"social-label"},[t._v("SHARE:")]),t._v(" "),e("a",{staticClass:"social-icon social-facebook",attrs:{href:"#",title:"Facebook",target:"_blank"}},[e("i",{staticClass:"icon-facebook-f"})]),t._v(" "),e("a",{staticClass:"social-icon social-twitter",attrs:{href:"#",title:"Twitter",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})]),t._v(" "),e("a",{staticClass:"social-icon social-pinterest",attrs:{href:"#",title:"Pinterest",target:"_blank"}},[e("i",{staticClass:"icon-pinterest"})]),t._v(" "),e("a",{staticClass:"social-icon social-linkedin",attrs:{href:"#",title:"Linkedin",target:"_blank"}},[e("i",{staticClass:"icon-linkedin"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"author-body"},[e("div",{staticClass:"author-header row no-gutters flex-column flex-md-row"},[e("div",{staticClass:"col"},[e("h4",[e("a",{attrs:{href:"#"}},[t._v("John Doe")])])]),t._v(" "),e("div",{staticClass:"col-auto mt-1 mt-md-0"},[e("a",{staticClass:"author-link",attrs:{href:"#"}},[t._v("\n                                        View all posts by John Doe\n                                        "),e("i",{staticClass:"icon-long-arrow-right"})])])]),t._v(" "),e("div",{staticClass:"author-content"},[e("p",[t._v("Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.")])])])},function(){var t=this._self._c;return t("div",{staticClass:"comments"},[t("h3",{staticClass:"title"},[this._v("0 Comment")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"reply"},[e("div",{staticClass:"heading"},[e("h3",{staticClass:"title"},[t._v("Leave A Reply")]),t._v(" "),e("p",{staticClass:"title-desc"},[t._v("Your email address will not be published. Required fields are marked *")])]),t._v(" "),e("form",{attrs:{action:"#"}},[e("label",{staticClass:"sr-only",attrs:{for:"reply-message"}},[t._v("Comment")]),t._v(" "),e("textarea",{staticClass:"form-control",attrs:{name:"reply-message",id:"reply-message",cols:"30",rows:"4",required:"",placeholder:"Comment *"}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("label",{staticClass:"sr-only",attrs:{for:"reply-name"}},[t._v("Name")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"reply-name",name:"reply-name",required:"",placeholder:"Name *"}})]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("label",{staticClass:"sr-only",attrs:{for:"reply-email"}},[t._v("Email")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",id:"reply-email",name:"reply-email",required:"",placeholder:"Email *"}})])]),t._v(" "),e("button",{staticClass:"btn btn-outline-primary-2",attrs:{type:"submit"}},[e("span",[t._v("POST COMMENT")]),t._v(" "),e("i",{staticClass:"icon-long-arrow-right"})])])])}],!1,null,null,null);e.default=component.exports}}]);