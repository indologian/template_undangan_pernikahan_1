<template>
    <li>
        <NuxtLink :to=" to " class="flex flex-col items-center p-2 text-gray-700 hover:text-blue-500">
            <Icon :name=" icon " />
            <span class="text-xs">{{ label }}</span>
        </NuxtLink>
    </li>
</template>

<script setup lang="ts">
const props = defineProps({
    to: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})
</script>