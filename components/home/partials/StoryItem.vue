<template>
    <div class="flex w-full flex-col items-center justify-center space-y-6">
        <div
            class="w-64 h-64 max-w-xs overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-full mx-auto border-2 border-solid border-pink-600">
            <img class="object-cover h-full w-full" :src=" image " :alt=" alt " />
        </div>
        <span class="text-xl text-pink-600">{{ label }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps({
    image: {
        type: String
    },
    alt: {
        type: String
    },
    label: {
        type: String
    }
})
</script>