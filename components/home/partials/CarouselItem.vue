<template>
    <div class="carousel-item absolute inset-0 z-0">
        <img class="object-cover h-full" :src=" props.image " :alt=" props.alt ">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    image: {
        type: String,
    },
    alt: {
        type: String
    }
})
</script>