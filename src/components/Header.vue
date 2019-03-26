<template>
    <div class="main-nav-container">
        <!-- site branding -->
        <div class="site-branding">
            <b-container>
              <b-row>
                <b-col cols="12" sm="3" class="text-center">
                    <IconsWrapper :icons="$store.getters.getSocialLinks"/>
                </b-col>
                <b-col cols="12" sm="6" class="text-center">
                    <g-link to="/" rel="home">
                            <g-image src="../../static/assets/img/logo2.svg" alt="home" class="title-image"/>
                        </g-link>
                </b-col>
                <b-col cols="12" sm="3" class="text-right">
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
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="exampleInputGroup1"
        label="Email address:"
        label-for="exampleInput1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="exampleInput1"
          type="email"
          v-model="form.email"
          required
          placeholder="Enter email" />
      </b-form-group>

      <b-form-group id="exampleInputGroup2" label="Your Name:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="text"
          v-model="form.name"
          required
          placeholder="Enter name" />
      </b-form-group>

      <b-form-group id="exampleInputGroup3" label="Food:" label-for="exampleInput3">
        <b-form-select id="exampleInput3" :options="foods" required v-model="form.food" />
      </b-form-group>

      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
                </b-col>
              </b-row>
            </b-container>
        </div>


        <!-- .site-branding -->
        <div class="site-navigation-sticky-wrappers sticky">
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
                                                <g-image v-if="link.url === '/'" src="../../static/assets/img/favicon.svg" class="ico" alt="No image"/>
                                                {{ link.name }}
                                            </g-link>
                                        </li>
                                        <li class="menu-item menu-item-has-children" aria-haspopup="true"><a>{{`Language: (${currentLang})`}}</a>
                                            <ul class="sub-menu">
                                                <li v-for="(language, code) in languages" class="menu-item" :key="code">
                                                    <a @click="assignLanguage(code)" :class="{ active: code===currentLang }"> {{ language }} </a>
                                                </li>
                                            </ul>
                                        </li>
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
                ]
            }
        },
        computed: {
            languages() {
                return this.$store.getters.languageList
            },
            currentLang() {
                return this.$store.getters.currentLang
            }
        },
        methods: {
            assignLanguage (lang) {
                this.$store.dispatch('assignLanguage', lang) // saves language and rebuilds articles list
            }
        }
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


    div.sticky {
        position: -webkit-sticky; /* Safari */
        position: sticky !important;
        top: 0  !important;
        z-index: 1000;
    }
    div.main-nav-container {
        /* required to allow child to be sticky */
        display: inline !important;
    }
</style>
