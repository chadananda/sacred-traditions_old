<template>
    <nuxt-header>
        <!-- site branding -->
        <div class="site-branding">
            <div class="container">
            <div class="row">
                <div class="col-md-3">
                <ul class="social-icon">
                    <li><a href="" class="icon-twitter"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="" class="icon-facebook"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="" class="icon-instagram"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="" class="icon-pinterest"><i class="fa fa-pinterest"></i></a></li>
                    <li><a href="" class="icon-youtube"><i class="fa fa-youtube-play"></i></a></li>
                </ul>
                </div><!-- .col-md-3 -->

                <div class="col-md-6">
                <!-- <h1 class="site-title"><a href="index.html" rel="home">Astrif.</a></h1> -->
                <h1 class="site-title title-image"><a href="index.html" rel="home"><img src="~/assets/img/astrif-logo.png" alt="astrif."></a></h1>
                <p class="site-description">- Good Food Lovers -</p>
                </div><!-- .col-md-6 -->

                <div class="col-md-3">
                <form class="search-form">
                    <div class="form-group">
                    <label for="search" class="sr-only">Search</label>
                    <input type="text" class="form-control search-field" placeholder="Search...">
                    </div><!-- .form-group -->
                    <button type="submit" class="btn btn-default search-submit"><i class="fa fa-search"></i></button>
                </form><!-- .search-form -->
                </div><!-- .col-md-3 -->
            </div><!-- .row -->
            </div><!-- .container -->
        </div><!-- .site-branding -->


        <!-- main navigation -->
        <div class="site-navigation-sticky-wrapper">
            <header id="masthead" class="site-header" role="banner">
                <nav id="site-navigation" class="main-navigation" role="navigation">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                        <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><i class="fa fa-bars"></i><span class="sr-only">Primary Menu</span></button>
                        <div class="menu-container">
                            <ul id="primary-menu" class="menu nav-menu" aria-expanded="false">
                            <li class="menu-item"><nuxt-link to="/">Home page</nuxt-link></li>
                            <li class="menu-item menu-item-has-children" aria-haspopup="true"><a href="#">Features</a>
                                <ul class="sub-menu">
                                <li class="menu-item"><nuxt-link to="/single">Single Post</nuxt-link></li>
                                <li class="menu-item"><nuxt-link to="/single-sidebar">Single Post With Sidebar</nuxt-link></li>
                                <li class="menu-item"><nuxt-link to="/page-fullwidth">Page Full Width</nuxt-link></li>
                                <li class="menu-item"><nuxt-link to="/page-sidebar">Page With Sidebar</nuxt-link></li>
                                <li class="menu-item"><nuxt-link to="/shortcodes">Shortcodes</nuxt-link></li>
                                <li class="menu-item"><nuxt-link to="/typography">Typography</nuxt-link></li>
                                <li class="menu-item"><nuxt-link to="/404">Not Found</nuxt-link></li>
                                </ul>
                            </li>
                            <li class="menu-item"><nuxt-link to="/category">Food</nuxt-link></li>
                            <li class="menu-item"><nuxt-link to="/cook">Cook</nuxt-link></li>
                            <li class="menu-item"><nuxt-link to="/about">About Me</nuxt-link></li>
                            <li class="menu-item"><nuxt-link to="/contact">Contact</nuxt-link></li>
                            </ul>
                        </div><!-- .menu-container -->
                        </div><!-- .col-md-12 -->
                    </div><!-- .row -->
                    </div><!-- .container -->
                </nav><!-- #site-navigation -->
            </header><!-- #masthead -->
        </div><!-- .site-header-affix-wrapper -->
    </nuxt-header>
</template>