<template>
    <div id="content">
        <SkipContent/>
        <slot/>
    </div>
</template>

<script>
  import SkipContent from '~/components/SkipContent.vue'
  export default {
    components: { SkipContent }
  }
</script>

<style scoped>
    #content {
        margin: 0;
        padding: 0;
        line-height: normal;
    }
</style>
