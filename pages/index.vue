<template>
    <div class="main home-page">
        <div class="intro-slider-container">
            <div class="swiper-carousel intro-slider">
                <div v-swiper:swiper="carouselSetting1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div
                                class="intro-slide"
                                :style="{ backgroundImage: `url(./images/home/banners/home-card.webp)`,
                                    backgroundPosition: 'right',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    backgroundColor:'#e1e1e1'
                                    
                                }
                                "
                            >
                                <div class="container container intro-content">
                                    <h1 class="intro-title">
                                        {{ $t("rahtak") }}
                                        <br/>
                                        <strong>{{ $t("for_cards") }}</strong>
                                    </h1>

                                    <h3 class="intro-subtitle">{{ $t("first_store") }}</h3>

                                    <nuxt-link :to='localePath("/shop/sidebar/list")' class="btn">
                                        <span> {{ $t("shop_now") }}</span>
                                        <i class="icon-long-arrow-right"></i>
                                    </nuxt-link>

                                </div>

                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div
                                class="intro-slide"
                                :style="{ backgroundImage: `url(./images/image.png)`}"
                            >
                            <!--
                                 <div class="container intro-content text-right">
                                    <h3 class="intro-subtitle text-white">Transportation</h3>

                                    <h1 style="color: #ed008c;"class="intro-title">
                                        Jenny
                                        <span   class="text-dark">&</span>
                                        <br />
                                        <span style="color: darkblue">Petra ride</span>
                                    </h1>

                                    <nuxt-link :to='localePath("/shop/sidebar/list")' class="btn">
                                        <span> {{ $t("shop_now") }}</span>
                                        <i class="icon-long-arrow-right"></i>
                                    </nuxt-link> 
                                </div>
                                -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-nav nav-rounded">
                    <div class="swiper-prev">
                        <i class="icon-angle-left"></i>
                    </div>
                    <div class="swiper-next">
                        <i class="icon-angle-right"></i>
                    </div>
                </div>
                <div class="swiper-dots swiper-dots-inner"></div>
            </div>
        </div>

        <div class="pt-2 pb-2">
            <div class="container brands mt-5 ">
                <div class="banner-group">
                    <div class="row">
                        <div class="col-sm-6 col-lg-4 px-4">
                            <div class="banner banner-overlay">
                                <nuxt-link :to='localePath("/shop/sidebar/3cols")'>
                                    <img
                                        v-lazy="'./images/category/sim2.webp'"
                                        alt="Banner"
                                        width="376"
                                        height="470"
                                    />
                                </nuxt-link>

                                <div class="banner-content">
                                    <h3 class="banner-title">
                                        <a href="javascript:;">
                                            <strong>
                                                {{$t("telecom")}}
                                            </strong>
                                            <br />
                                            <small style="color: white ;">{{$t("lowest_price")}}</small>
                                        </a>
                                    </h3>

                                    <nuxt-link
                                        to="/shop/sidebar/list"
                                        class="btn btn-outline-white banner-link"
                                    >
                                    {{$t("shop_now")}}
                                        <i class="icon-long-arrow-right"></i>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4 px-4">
                            <div class="banner banner-overlay">
                                <nuxt-link :to='localePath("/shop/sidebar/3cols")'>
                                    <img
                                         v-lazy="'./images/category/games.webp'"
                                        alt="Banner"
                                        width="376"
                                        height="470"
                                    />
                                </nuxt-link>

                                <div class="banner-content">
                                    <h3 class="banner-title">
                                        <a  href="javascript:;">
                                            <strong>
                                                {{ $t("game_cards") }}
                                                
                                                </strong>
                                                <br />
                                                <small style="color: white ;"> {{ $t("all_platforms") }}</small>

                                                
                                        </a>
                                    </h3>

                                    <nuxt-link
                                        to="/shop/sidebar/list"
                                        class="btn btn-outline-white banner-link"
                                    >
                                    {{ $t("shop_now") }}
                                        <i class="icon-long-arrow-right"></i>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4 px-4 d-none d-lg-block">
                            <div class="banner banner-overlay">
                                <nuxt-link :to='localePath("/shop/sidebar/3cols")'>
                                    <img
                                         v-lazy="'./images/category/stores.webp'"
                                        alt="Banner"
                                        width="376"
                                        height="470"
                                    />
                                </nuxt-link>

                                <div class="banner-content">
                                    <h3 class="banner-title">
                                        <a href="javascript:;">
                                            <strong>
                                                {{ $t("stores") }}
                                            </strong>
                                            <br />
                                            <small style="color: white ;"> {{ $t("pc_mobile") }}</small>
                                            
                                        </a>
                                    </h3>

                                    <nuxt-link
                                        to="/shop/sidebar/list"
                                        class="btn btn-outline-white banner-link"
                                    >
                                    {{ $t("shop_now") }}
                                        <i class="icon-long-arrow-right"></i>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="swiper-carousel brands-border brands-swiper swiper-2">
                    <div v-swiper:swiper2="carouselSetting2">
                        <div class="swiper-wrapper">
                            <div
                                class="swiper-slide"
                                v-for="(brand, index) in homeData.brands"
                                :key="index"
                            >
                                <a href="javascript:;" class="brand">
                                    <img
                                        :src="brand.image"
                                        class="bg-white"
                                        alt="Brand"
                                        :width="brand.width"
                                        :height="brand.height"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-nav nav-rounded">
                    <div class="swiper-prev brand-prev">
                        <i class="icon-angle-left"></i>
                    </div>
                    <div class="swiper-next brand-next">
                        <i class="icon-angle-right"></i>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div class="mb-2"></div>

        <special-collection :products="products" v-if="loaded"></special-collection>

        <div class="mb-3 mb-xl-2"></div>

        <div class="trending">
            <div style="opacity: 0.3;" class="sponsor"></div>
            <a href="javascript:;">
                <img
                    :src="'./images/banners/maps.jpg'"
                    width="1920"
                    height="420"
                    alt="Banner"
                />
            </a>
            <div class="banner banner-big d-md-block">
                <div style="max-width: 505px;" class="banner-content text-center">

                <h3 class="banner-title text-white"> {{ $t("transportation_app") }}</h3>

                 <h5 class="my-5 text-white"> {{ $t("recharge_balance") }}</h5>

                    <nuxt-link :to='localePath("/shop/sidebar/4cols")' class="btn btn-primary-white">
                        <span>{{ $t("shop_now") }}</span>
                        <i class="icon-long-arrow-right"></i>
                    </nuxt-link>
                </div>
            </div>
        </div>

        <div class="container new-arrivals">
            <div class="row">

                <div class="col-md-6">
                    <div class="banner banner-overlay">
                        <nuxt-link :to='localePath("/shop/sidebar/3cols?category=men")'>
                            <img
                                v-lazy="'./images/banners/jenny.jpg'"
                                width="575"
                                height="300"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content">
                            <h4 class="banner-subtitle text-white">
                                <a href="javascript:;"> {{ $t("dont_miss_shift") }}</a>
                            </h4>

                            <h3 class="banner-title text-primary">
                                <a href="javascript:;">{{ $t("jenny") }}</a>
                            </h3>

                            <nuxt-link
                                to="/shop/sidebar/3cols?category=men"
                                class="btn btn-outline-white banner-link"
                            >
                                 {{ $t("shop_now") }}
                                <i class="icon-long-arrow-right"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="banner banner-overlay">
                        <nuxt-link :to='localePath("/shop/sidebar/3cols?category=women")'>
                            <img
                            v-lazy="'./images/banners/petra.jpg'"
                            width="575"
                                height="300"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content">
                            <h4 class="banner-subtitle text-white">
                                <a href="javascript:;"> {{ $t("dont_miss_shift") }}</a>
                            </h4>

                            <h3 class="banner-title text-primary">
                                <a href="javascript:;">{{ $t("petra_ride") }}</a>
                            </h3>

                            <nuxt-link
                                to="/shop/sidebar/3cols?category=women"
                                class="btn btn-outline-white banner-link"
                            >
                                 {{ $t("shop_now") }}
                                <i class="icon-long-arrow-right"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <div class="trending">
            <div class="sponsor"></div>
            <a href="javascript:;">
                <img
                    :src="'./images/banners/freefirebanner.jpg'"
                    width="1920"
                    height="420"
                    alt="Banner"
                />
            </a>
            <div class="banner banner-big d-md-block">
                <div class="banner-content text-center">
                    <h4 class="banner-subtitle text-white"> {{ $t("best_selling") }}</h4>

                    <h3 class="banner-title text-white"> {{ $t("free_fire") }}</h3>

                 <h5 class="my-5 text-white"> {{ $t("best_free") }}</h5>

                    <nuxt-link :to='localePath("/shop/sidebar/4cols")' class="btn btn-primary-white">
                        <span>{{ $t("shop_now") }}</span>
                        <i class="icon-long-arrow-right"></i>
                    </nuxt-link>
                </div>
            </div>
        </div>

        <div class="container new-arrivals">
            <div class="row">
                <div class="col-md-6">
                    <div class="banner banner-overlay">
                        <nuxt-link :to='localePath("/shop/sidebar/3cols?category=women")'>
                            <img
                                v-lazy="'./images/banners/steam.jpg'"
                                width="575"
                                height="300"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content">
                            <h4 class="banner-subtitle text-white">
                                <a href="javascript:;"> {{ $t("dont_miss") }}</a>
                            </h4>

                            <h3 class="banner-title text-primary"">
                                <a href="javascript:;"> {{ $t("steam_store") }}</a>
                            </h3>

                            <nuxt-link
                                to="/shop/sidebar/3cols?category=women"
                                class="btn btn-outline-white banner-link"
                            >
                                 {{ $t("shop_now") }}
                                <i class="icon-long-arrow-right"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="banner banner-overlay">
                        <nuxt-link :to='localePath("/shop/sidebar/3cols?category=men")'>
                            <img
                                v-lazy="'./images/banners/banner-2 (1).jpg'"
                                width="575"
                                height="300"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content">
                            <h4 class="banner-subtitle text-white">
                                <a href="javascript:;"> {{ $t("dont_miss") }}</a>
                            </h4>

                            <h3 class="banner-title text-primary">
                                <a href="javascript:;">{{ $t("playstation_store") }}</a>
                            </h3>

                            <nuxt-link
                                to="/shop/sidebar/3cols?category=men"
                                class="btn btn-outline-white banner-link"
                            >
                                 {{ $t("shop_now") }}
                                <i class="icon-long-arrow-right"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="banner banner-overlay">
                        <nuxt-link :to='localePath("/shop/sidebar/3cols?category=women")'>
                            <img
                            v-lazy="'./images/banners/osn.jpg'"
                            width="575"
                                height="300"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content">
                            <h4 class="banner-subtitle text-white">
                                <a href="javascript:;"> {{ $t("dont_miss") }}</a>
                            </h4>

                            <h3 class="banner-title text-primary">
                                <a href="javascript:;">{{ $t("osn_plus") }}</a>
                            </h3>

                            <nuxt-link
                                to="/shop/sidebar/3cols?category=women"
                                class="btn btn-outline-white banner-link"
                            >
                                 {{ $t("shop_now") }}
                                <i class="icon-long-arrow-right"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="banner banner-overlay">
                        <nuxt-link :to='localePath("/shop/sidebar/3cols?category=men")'>
                            <img
                                v-lazy="'./images/banners/jawwy.jpg'"
                                width="575"
                                height="300"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content">
                            <h4 class="banner-subtitle text-white">
                                <a href="javascript:;"> {{ $t("dont_miss") }}</a>
                            </h4>

                            <h3 class="banner-title text-primary">
                                <a href="javascript:;">{{ $t("jawwy_tv") }}</a>
                            </h3>

                            <nuxt-link
                                to="/shop/sidebar/3cols?category=men"
                                class="btn btn-outline-white banner-link"
                            >
                                 {{ $t("shop_now") }}
                                <i class="icon-long-arrow-right"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-5"></div>

        <new-collection :products="products" v-if="loaded"></new-collection>

        <div class="mb-7"></div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-6">
                    <div class="icon-box icon-box-card text-center">
                        <span class="icon-box-icon">
                            <i class="icon-rocket"></i>
                        </span>
                        <div class="icon-box-content">
                            <h3 class="icon-box-title">{{ $t("secure_payment") }}</h3>

                            <p class="my-3">{{ $t("transaction_secure") }}</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="icon-box icon-box-card text-center">
                        <span class="icon-box-icon">
                            <i class="icon-rotate-left"></i>
                        </span>
                        <div class="icon-box-content">
                            <h3 class="icon-box-title">{{ $t("instant") }}</h3>

                            <p class="my-3">{{ $t("instant_card") }}</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="icon-box icon-box-card text-center">
                        <span class="icon-box-icon">
                            <i class="icon-life-ring"></i>
                        </span>
                        <div class="icon-box-content">
                            <h3 class="icon-box-title">{{ $t("qa") }}</h3>

                            <p class="my-3">{{ $t("qa_time") }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { mapGetters } from 'vuex';

import SpecialCollection from '~/components/partial/home/SpecialCollection';
import NewCollection from '~/components/partial/home/NewCollection';
import BlogSection from '~/components/partial/home/BlogSection';
import NewsletterModal from '~/components/elements/modals/NewsletterModal';

import Repository, { baseUrl } from '~/repositories/repository.js';
import { attrFilter } from '~/utilities/common';
import {
    carouselSettingSingle,
    carouselSettingDefault
} from '~/utilities/carousel';
import { homeData } from '~/utilities/data';

export default {
    name:"HomeIndex",
    components: {
        BlogSection,
        NewCollection,
        SpecialCollection
    },
    data: function() {
        return {
            loaded: false,
            products: [],
            topProducts: [],
            blogs: [],
            carouselSetting1: {
                ...carouselSettingSingle,
                autoplay:{ delay: 4000, disableOnInteraction: true },
                pagination: {
                    el: '.intro-slider .swiper-dots',
                    clickable: true
                },
                navigation: {
                    nextEl: '.intro-slider .swiper-next',
                    prevEl: '.intro-slider .swiper-prev'
                }
            },
            carouselSetting2: {
                ...carouselSettingDefault,
                loop: true,
                autoplay:{ delay: 1000, disableOnInteraction: true },
                slidesPerView: 5,
                spaceBetween: 10,
                breakpoints: {
                    992: {
                        slidesPerView: 6
                    },
                    768: {
                        slidesPerView: 5
                    },
                    576: {
                        slidesPerView: 3
                    },
                    480: {
                        slidesPerView: 2
                    }
                },
                navigation: {
                    nextEl: '.brand-next',
                    prevEl: '.brand-prev'
                }
            },
            carouselSetting3: {
                ...carouselSettingDefault,
                slidesPerView: 6,
                spaceBetween: 0,
                breakpoints: {
                    992: {
                        slidesPerView: 5
                    },
                    768: {
                        slidesPerView: 4
                    },
                    576: {
                        slidesPerView: 3
                    },
                    480: {
                        slidesPerView: 2
                    }
                }
            },
            homeData: homeData
        };
    },
    computed: {
        ...mapGetters('demo', ['newsletterShow'])
    },
    created: function() {
        this.getProducts();
    },
    mounted: function() {
        if (this.newsletterShow) {
            setTimeout(() => {
                if (this.$route.path == '/' && this.newsletterShow) {
                    this.$modal.show(
                        NewsletterModal,
                        {},
                        { width: '970', height: 'auto', adaptive: true }
                    );
                }
            }, 8000);
        }
    },
    methods: {
        getProducts: async function() {
            this.loaded = false;
            await Repository.get(`/demo8`)
                .then(response => {
                    this.products = response.data.products;
                    this.topProducts = attrFilter(this.products, 'top');
                    this.blogs = response.data.blogs;
                    this.loaded = true;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
        }
    }
};
</script>