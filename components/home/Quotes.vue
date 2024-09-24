<template>
    <section id="quotes" ref="quotes" class="flex w-full  justify-center pt-12 bg-pink-50">
        <div class="flex flex-col justify-center bg-pink-50 shadow-xl border-2 border-pink-600 text-center py-4 px-4 w-[80%] rounded-lg h-56"
            :class=" {
                'animate__animated animate__fadeInUp animate__slow visible': quotesVisible
            } ">
            <div class="font-semibold text-pink-900">Tidak ada solusi yg lebih baik bagi dua insan yang saling mencintai
                di
                banding pernikahan </div>
            <div class="font-semibold text-pink-900 mt-3">-HR.Ibnu Majah </div>
        </div>
    </section>
</template>



<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

// Define refs
const quotes = ref<HTMLElement | null>(null);
const quotesVisible = ref(false);

// Define the observer callback
const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target === quotes.value) {
                quotesVisible.value = true;
            }
        }
    });
};

// Initialize the observer
let observer: IntersectionObserver | null = null;

onMounted(() => {
    if (quotes.value) {
        observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px'
        });
        observer.observe(quotes.value);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>
