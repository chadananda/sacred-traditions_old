<template>
    <ul>
        <li v-for="(img, index) in footer_images" :key="index">
            <a href>
                <img :src="img.url" :alt="img.alt">
            </a>
        </li>
    </ul>
</template>
<script>
    export default {
        props: ['footer_images']
    }
</script>