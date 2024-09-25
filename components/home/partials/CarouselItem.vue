<template>
    <div class="carousel-item absolute inset-0 z-0">
        <img class="object-cover h-full" :src=" image " :alt=" alt ">
    </div>
</template>

<script setup lang="ts">
defineProps({
    image: {
        type: String,
    },
    alt: {
        type: String
    }
})
</script>