<template>
	<div class="nav-area">
		<b-container class="border-bottom border-bottom-width" id="navbar-id">

			<b-row class="justify-content-md-center">
			    <b-col col lg="2"></b-col>
			    <b-col cols="12" lg="auto">
						<b-navbar toggleable="lg" type="dark" id="nav">

						    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

						    <b-collapse id="nav-collapse" is-nav>
						      <b-navbar-nav>
						  		<li v-for="link in $site.themeConfig.nav" class="nav-item" :key="link.text">
						  			<router-link :to="link.link" class="nav-link">
						  			<img v-if="link.link === '/'" :src="$withBase('/favicon.png')" alt="Logo" style="width: 16px;"> {{ link.text }}
						  			</router-link>
						  		</li>
						  		
							      <b-nav-item-dropdown text="Language(EN)" right>
							          <b-dropdown-item href="#">ENGLISH</b-dropdown-item>
							          <b-dropdown-item href="#">ITALIANO</b-dropdown-item>
							       </b-nav-item-dropdown>
						  		
						      </b-navbar-nav>

						    </b-collapse>
						  </b-navbar>

			    </b-col>
			    <b-col col lg="2"></b-col>
			  </b-row>
		</b-container>
	</div>
</template>


						  			
						  			
						  			

<script>
	export default {
	  mounted() {
	      this.$nextTick(function(){
	        window.addEventListener("scroll", function(){
	          var navbar = document.getElementById("navbar-id")
	          var nav_classes = navbar.classList
	          if(document.documentElement.scrollTop >= 97) {
	            if (nav_classes.contains("fixed-top") === false) {
	              nav_classes.toggle("fixed-top");
	            }
	          }
	          else {
	            if (nav_classes.contains("fixed-top") === true) {
	              nav_classes.toggle("fixed-top");
	            }
	          }
	        })
	      })
	    },
	}
</script>

<style lang="stylus">
	.nav-area
		margin-top 100px /*For checkeing scroll effect only. will be removed */
		min-height 55px
	.border-bottom-width
		border-bottom 5px solid #eeeeee !important

	.navbar
		padding 0

	.navbar-dark .navbar-nav .nav-link
		color: #000
		padding-top 15px
		padding-bottom 15px
		padding-left 15px
		padding-right 15px
		text-transform uppercase
		font-weight bold
		font-size 14px

	.navbar-dark .navbar-nav .nav-link:hover,.navbar-dark .navbar-nav .nav-link:focus
		color #000

	.navbar-dark .navbar-nav .show > .nav-link
		color #000

	.navbar-dark .navbar-nav .nav-link:hover,.navbar-dark .navbar-nav .active > .nav-link
		color #000
		background-color #eeeeee

	.navbar-dark .navbar-toggler
		background-color rgba(0,0,0,0.5)
		margin-bottom 10px
		margin-top 10px

	.fixed-top
		background-color: #ffffff

	@media only screen and (max-width: 991px)
		.navbar-collapse
			width 100%
			position: absolute;
			background-color: rgba(255,255,255,0.9);
			top 64px
			z-index 99

		.navbar 
			margin: 0 -15px

</style>