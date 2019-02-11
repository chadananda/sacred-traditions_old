<template>
  <section class="widget astrif_widget_follow_me">
    <h2 class="widget-title">
      <span>Follow us</span>
    </h2>
    <div class="follow-me">
      <ul class="social-icon social-icon-color">
        <li v-for="link in links" :key="link.id">
          <a :href="link.url" :class="`icon-${link.icon}${(link.icon === 'youtube') ? '-play' : ''}`" target="_new">
            <i :class="`fa fa-${link.icon}`"></i>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    links() {
      return this.$store.getters['links/getSocialLinks']
    }
  },
}
</script>

<style scoped>
</style>