<template>
    <div>
        <div class="section-title">
            <h3>Written by</h3>
        </div>
        <div class="entry-author-bio">
            <div class="author-bio-avatar">
                <g-image alt="author bio" src="~/assets/img/astrif-about.jpg" class="avatar"/>
            </div>
            <!-- .author-bio-avatar -->
            <div class="author-bio-description">
                <h4>astri fajria</h4>
                <p>Young girl who love meet people to talk each other. Nerd. Has ability to make people fascinated. My passion in fashion and making a good personality bring happiness to a lot of people.</p>

                <ul class="social-icon">
                    <li v-for="(icon, index) in icons" :key="index">
                        <g-link to="#" :class="`${icon.class}`" target="_blank">
                            <i :class="`${icon.social_icon}`"></i>
                        </g-link>
                    </li>
                </ul>
            </div>
            <!-- .author-bio-description -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Authbio",
        data() {
            return {
                icons: [
                    {class: 'icon-facebook', social_icon: 'fa fa-facebook'},
                    {class: 'icon-twitter', social_icon: 'fa fa-twitter'},
                    {class: 'icon-instagram', social_icon: 'fa fa-instagram'},
                    {class: 'icon-youtube', social_icon: 'fa fa-youtube-play'},
                    {class: 'icon-pinterest', social_icon: 'fa fa-pinterest'},
                ]
            }
        }
    };
</script>

<style scoped>

</style>
