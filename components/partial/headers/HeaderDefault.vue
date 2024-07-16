<template>
    <header class="header">
        <sticky-header>
            <div class="header-bottom sticky-header">
                <div class="container">
                    <div class="header-left">
                        <button class="mobile-menu-toggler" @click="openMobileMenu">
                            <span class="sr-only">Toggle mobile menu</span>
                            <i class="icon-bars"></i>
                        </button>

                        <nuxt-link :to='localePath("/")' class="logo mx-4">
                            <img v-lazy="'./images/home/logo.png'" alt="rahtak Logo" height="45"
                                style="height: 45px; border-radius: 5px !important;" />
                        </nuxt-link>
                    </div>

                    <div class="header-center">
                        <main-menu></main-menu>
                    </div>

                    <div class="header-right">
                        <header-search></header-search>
                        <wishlist-menu></wishlist-menu>
                        <cart-menu></cart-menu>
                        <ul class="menu ar-bar">
                            <li class="">
                                <nuxt-link :to="switchLocalePath($i18n.locale == 'ar' ? 'en' : 'ar')"
                                    class="sf-with-ul link-active">
                                    <div :class="`d-flex align-items-center`">
                                        <strong class="sf-with-ul text-primary link-active">{{ $i18n.locale == 'ar' ?
                                            'English' :'عربي' }}</strong>
                                        <img height="20" class="mx-3"
                                            v-lazy="$i18n.locale == 'ar' ? './images/uk.png' : './images/ar.png'"
                                            alt="">
                                    </div>
                                </nuxt-link>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>
        </sticky-header>
    </header>
</template>

<script>
import CartMenu from '~/components/partial/headers/shared/CartMenu';
import WishlistMenu from '~/components/partial/headers/shared/WishlistMenu';
import MainMenu from '~/components/partial/headers/shared/MainMenu';
import HeaderSearch from '~/components/partial/headers/shared/HeaderSearch';
import StickyHeader from '~/components/elements/StickyHeader';

export default {
    components: {
        CartMenu,
        WishlistMenu,
        MainMenu,
        HeaderSearch,
        StickyHeader
    },
    computed: {
        isFullwidth: function () {
            return this.$route.path.includes('fullwidth');
        }
    },
    methods: {
        openSignInModal: function () {
            this.$modal.show(
                () => import('~/components/elements/modals/SignInModal'),
                {},
                { width: '575', height: 'auto', adaptive: true }
            );
        },
        openMobileMenu: function () {
            document.querySelector('body').classList.add('mmenu-active');
        }
    }
};
</script>