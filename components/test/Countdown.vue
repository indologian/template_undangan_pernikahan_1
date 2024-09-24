<template>
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-serif text-pink-600 text-center mb-12">Countdown to Our Big Day</h2>
        <div class="flex justify-center space-x-8">
            <div v-for="(value, unit) in timeLeft" :key=" unit " class="text-center">
                <div class="text-5xl font-bold text-pink-600 mb-2">{{ value }}</div>
                <div class="text-xl text-gray-600 capitalize">{{ unit }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
    date: {
        type: String,
        required: true
    }
})

const timeLeft = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
})

let interval

const updateCountdown = () => {
    const now = new Date().getTime()
    const distance = new Date(props.date).getTime() - now

    timeLeft.value = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }
}

onMounted(() => {
    updateCountdown()
    interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
    clearInterval(interval)
})
</script>