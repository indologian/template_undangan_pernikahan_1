<template>
    <div class="w-full py-12">
        <h2 class="font-manrope text-4xl md:text-5xl text-center font-bold text-gray-900">{{ label }}</h2>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    label: {
        type: String
    }
})
</script>