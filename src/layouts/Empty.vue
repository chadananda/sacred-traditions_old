<template>
    <div id="content">
        <slot/>
    </div>
</template>

<script>
  export default {
    name: "Empty"
  };
</script>

<style scoped>
    #content {margin: 20px; padding-right: 20px;}
</style>
