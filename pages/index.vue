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
                                        <span>Shop Now</span>
                                        <i class="icon-long-arrow-right"></i>
                                    </nuxt-link>

                                </div>

                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div
                                class="intro-slide"
                                :style="{ backgroundImage: `url(./images/home/sliders/slide-2.jpg)`}"
                            >
                                <div class="container intro-content text-right">
                                    <h3 class="intro-subtitle">PREMIUM QUALITY</h3>

                                    <h1 class="intro-title">
                                        coats
                                        <span class="highlight">&</span>
                                        <br />jackets
                                    </h1>

                                    <nuxt-link :to='localePath("/shop/sidebar/list")' class="btn">
                                        <span>Shop Now</span>
                                        <i class="icon-long-arrow-right"></i>
                                    </nuxt-link>
                                </div>
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
                                                Games cards
                                                
                                                </strong>
                                                <br />
                                                <small style="color: white ;">For all platforms</small>

                                                
                                        </a>
                                    </h3>

                                    <nuxt-link
                                        to="/shop/sidebar/list"
                                        class="btn btn-outline-white banner-link"
                                    >
                                        Shop Now
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
                                                Stores
                                            </strong>
                                            <br />
                                            <small style="color: white ;">PC & Mobile</small>
                                            
                                        </a>
                                    </h3>

                                    <nuxt-link
                                        to="/shop/sidebar/list"
                                        class="btn btn-outline-white banner-link"
                                    >
                                        Shop Now
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
                    <h4 class="banner-subtitle text-white">Best Selling</h4>

                    <h3 class="banner-title text-white">Free Fire</h3>

                 <h5 class="text-white">Best Price of free fire diamonds in one place</h5>

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
                                <a href="javascript:;">Don't miss up</a>
                            </h4>

                            <h3 class="banner-title text-primary"">
                                <a href="javascript:;">Steam store</a>
                            </h3>

                            <nuxt-link
                                to="/shop/sidebar/3cols?category=women"
                                class="btn btn-outline-white banner-link"
                            >
                                Shop Now
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
                                <a href="javascript:;">Don't miss up</a>
                            </h4>

                            <h3 class="banner-title text-primary">
                                <a href="javascript:;">PlayStation Store</a>
                            </h3>

                            <nuxt-link
                                to="/shop/sidebar/3cols?category=men"
                                class="btn btn-outline-white banner-link"
                            >
                                Shop Now
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
                                <a href="javascript:;">Don't miss up</a>
                            </h4>

                            <h3 class="banner-title text-primary">
                                <a href="javascript:;">OSN plus</a>
                            </h3>

                            <nuxt-link
                                to="/shop/sidebar/3cols?category=women"
                                class="btn btn-outline-white banner-link"
                            >
                                Shop Now
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
                                <a href="javascript:;">Don't miss up</a>
                            </h4>

                            <h3 class="banner-title text-primary">
                                <a href="javascript:;">Jawwy TV</a>
                            </h3>

                            <nuxt-link
                                to="/shop/sidebar/3cols?category=men"
                                class="btn btn-outline-white banner-link"
                            >
                                Shop Now
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
                            <h3 class="icon-box-title">Payment & Delivery</h3>

                            <p>Free shipping for orders over $50</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="icon-box icon-box-card text-center">
                        <span class="icon-box-icon">
                            <i class="icon-rotate-left"></i>
                        </span>
                        <div class="icon-box-content">
                            <h3 class="icon-box-title">Return & Refund</h3>

                            <p>Free 100% money back guarantee</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="icon-box icon-box-card text-center">
                        <span class="icon-box-icon">
                            <i class="icon-life-ring"></i>
                        </span>
                        <div class="icon-box-content">
                            <h3 class="icon-box-title">Quality Support</h3>

                            <p>Alway online feedback 24/7</p>
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