<template>
    <div>
        <!-- site branding -->
        <div class="site-branding">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <!--<IconsWrapper :icons="this.$store.getters['links/getSocialLinks']"/>-->
                    </div>
                    <!-- .col-md-3 -->
                    <div class="col-md-6">
                        <g-link to="/" rel="home">
                            <img src="/logo2.svg" alt="home" class="title-image">
                        </g-link>
                    </div>
                    <!-- .col-md-6 -->
                    <div class="col-md-3">
                        <form class="search-form">
                            <div class="form-group">
                                <label for="search" class="sr-only">Search</label>
                                <input type="text" class="form-control search-field" placeholder="Search...">
                            </div>
                            <!-- .form-group -->
                            <button type="submit" class="btn btn-default search-submit">
                                <i class="fa fa-search"></i>
                            </button>
                        </form>
                        <!-- .search-form -->
                    </div>
                    <!-- .col-md-3 -->
                </div>
                <!-- .row -->
            </div>
            <!-- .container -->
        </div>
        <!-- .site-branding -->
        <div class="site-navigation-sticky-wrapper">
            <header id="masthead" class="site-header" role="banner">
                <nav id="site-navigation" class="main-navigation" role="navigation">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                                    <i class="fa fa-bars"></i>
                                    <span class="sr-only">Primary Menu</span>
                                </button>
                                <div class="menu-container">
                                    <ul id="primary-menu" class="menu nav-menu" aria-expanded="false">
                                        <li v-for="link in header_links" :key="link.name" class="menu-item">
                                            <g-link :to="link.url">
                                                <img v-if="link.url === '/'" src="/favicon.svg" class="ico">
                                                {{ link.name }}
                                            </g-link>
                                        </li>
                                        <!--<li class="menu-item menu-item-has-children" aria-haspopup="true"><a>{{`Language: (${currentLang})`}}</a>-->
                                            <!--<ul class="sub-menu">-->
                                                <!--<li v-for="(language, code) in languages" class="menu-item" :key="code">-->
                                                    <!--<a @click="assignLanguage(code)" :class="{ active: code===currentLang }"> {{ language }} </a>-->
                                                <!--</li>-->
                                            <!--</ul>-->
                                        <!--</li>-->
                                    </ul>
                                </div>
                                <!-- .menu-container -->
                            </div>
                            <!-- .col-md-12 -->
                        </div>
                        <!-- .row -->
                    </div>
                    <!-- .container -->
                </nav>
                <!-- #site-navigation -->
            </header>
            <!-- #masthead -->
        </div>
        <!-- .site-header-affix-wrapper -->
    </div>
</template>

<script>
    import IconsWrapper from '~/components/IconsWrapper.vue';
    export default {
        name: "Header",
        components: { IconsWrapper },
        data() {
            return {
                header_links: [
                    { url: "/", name: "Home" },
                    { url: "/ocean", name: "- Ocean 2.0 Reader -" },
                    { url: "/about", name: "About Us" },
                    { url: "/contact", name: "Contact" }
                ],
            }
        },
    }
</script>

<style scoped>
    .title-image {
        padding-bottom: 2em;
        max-width: 200px;
    }
    .ico {
        width: 16px;
        margin-top: -5px;
    }
    .menu-item a {
        cursor: pointer;
    }
    .menu-item a.active {
        background-color: #EEE;
        cursor: default;
        color: black;
        font-weight: bold;
    }
</style>
