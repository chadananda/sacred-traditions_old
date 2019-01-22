<template>
    <img class="aspect-ratio"
         :src="`/img/${src}`"
         :alt="`${alt}`"
         :style="`width: ${width}px; height: ${height}px;`"
    >
</template>

<script>
    export default {
        name: "ImageWrapper",
        props: ['src', 'alt', 'width', 'height']
    }
</script>

<style scoped>
    .aspect-ratio {
        object-fit: cover;
        font-family: 'object-fit: cover;';
    }
</style>