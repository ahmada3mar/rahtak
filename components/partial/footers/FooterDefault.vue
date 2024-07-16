<template>
    <footer class="footer footer-2">
        <div class="footer-middle" :class="{'border-0': $route.path=='/'}">
            <div style="text-align: start;" :class="isFullwidth ? 'container-fluid' : 'container'">
                <div class="row">
                    <div class="col-sm-12 col-lg-6">
                        <div class="widget widget-about">
                            <img
                                v-lazy="'./images/logo-footer.png'"
                                class="footer-logo bg-transparent"
                                alt="Footer Logo"
                                width="104"
                                height="50"
                            />
                            <p>{{ $t("about_us_footer") }}</p>
                            <div class="widget-about-info">
                                <div class="row">
                                    <div class="col-sm-6 col-md-4">
                                        <span class="widget-about-title">{{ $t("question_footer") }}</span>
                                        <a href="tel:123456789"><bdi>079 999 1230</bdi></a>
                                    </div>

                                    <div class="col-sm-6 col-md-8">
                                        <span class="widget-about-title">{{ $t("payment_methods") }}</span>
                                        <figure class="footer-payments">
                                            <img
                                                v-lazy="'./images/payments.png'"
                                                alt="Payment methods"
                                                class="bg-transparent"
                                                width="280"
                                                height="25"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-2">
                        <div class="widget">
                            <h4 class="widget-title">{{ $t("info") }}</h4>

                            <ul class="widget-list">
                                <li>
                                    <nuxt-link :to='localePath("/pages/about")'>{{ $t("about_rahtak") }}</nuxt-link>
                                </li>
                                <li>
                                    <a href="#">{{ $t("how_to_shop") }}</a>
                                </li>
                                <li>
                                    <a href="#">{{ $t("faq") }}</a>
                                </li>
                                <li>
                                    <nuxt-link :to='localePath("/pages/contact")'>{{ $t("contact_us") }}</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to='localePath("/pages/login")'>{{ $t("login") }}</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-2">
                        <div class="widget">
                            <h4 class="widget-title">{{ $t("customer_service") }}</h4>

                            <ul class="widget-list">
                                <li>
                                    <a href="#">{{ $t("payment_methods") }}</a>
                                </li>
                                <li>
                                    <a href="#">{{ $t("redeem") }}</a>
                                </li>
                                <li>
                                    <a href="#">{{ $t("loyalty_point") }}</a>
                                </li>
                                <li>
                                    <a href="#">{{ $t("terms") }}</a>
                                </li>
                                <li>
                                    <a href="#">{{ $t("privacy") }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-2">
                        <div class="widget">
                            <h4 class="widget-title">{{ $t("my_account") }}</h4>

                            <ul class="widget-list">
                                <li>
                                    <a href="#">{{ $t("login") }}</a>
                                </li>
                                <li>
                                    <nuxt-link :to='localePath("/shop/cart")'>{{ $t("view_cart") }}</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to='localePath("/shop/wishlist")'>{{ $t("my_whitelist") }}</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to='localePath("/shop/dashboard")'>{{ $t("track_order") }}</nuxt-link>
                                </li>
                                <li>
                                    <a href="#">{{ $t("help") }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div :class="isFullwidth ? 'container-fluid' : 'container'" class="pb-2 pt-2">
                <p
                    class="footer-copyright"
                >Copyright © {{ new Date().getFullYear() }} Molla Store. All Rights Reserved.</p>


                <div class="social-icons social-icons-color">
                    <span class="social-label">{{ $t("social_media") }}</span>
                    <a
                        href="#"
                        class="social-icon social-facebook"
                        title="Facebook"
                        target="_blank"
                    >
                        <i class="icon-facebook-f"></i>
                    </a>
                    <a href="#" class="social-icon social-twitter" title="Twitter" target="_blank">
                        <i class="icon-twitter"></i>
                    </a>
                    <a
                        href="#"
                        class="social-icon social-instagram"
                        title="Instagram"
                        target="_blank"
                    >
                        <i class="icon-instagram"></i>
                    </a>
                    <a href="#" class="social-icon social-youtube" title="Youtube" target="_blank">
                        <i class="icon-youtube"></i>
                    </a>
                    <a
                        href="#"
                        class="social-icon social-pinterest"
                        title="Pinterest"
                        target="_blank"
                    >
                        <i class="icon-pinterest"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="mb-10" v-if="bottomSticky"></div>
	</footer>
</template>

<script>
export default {
    data: function () {
        return {
            bottomSticky: false
        }
    },
    computed: {
        isFullwidth: function() {
            return this.$route.path.includes('fullwidth');
        }
    },
    watch: {
        $route: function () {
            this.handleBottomSticky();
        }
    },
    mounted: function() {
        this.handleBottomSticky();
        window.addEventListener('resize', this.handleBottomSticky, {passive: true});
    },
    destroyed: function () {
        window.removeEventListener('resize', this.handleBottomSticky);
    },
    methods: {
        handleBottomSticky: function () {
            this.bottomSticky = this.$route.path.includes('/product/default') && (window.innerWidth > 991);
        }
    }
};
</script>