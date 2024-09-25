<template>
    <section id="quotes" class="flex w-full justify-center pt-12 bg-pink-50">
        <div ref="quotes"
            class="wrapper flex flex-col justify-center bg-pink-50 shadow-xl border-2 border-pink-600 text-center py-4 px-4 w-[80%] rounded-lg h-56"
            :class=" { 'animate__animated animate__zoomIn animate__slow': quotesAnimating, 'visible': quotesVisible } ">
            <div class="font-semibold text-pink-900">{{ config.quotes }}</div>
            <div class="font-semibold text-pink-900 mt-3">{{ config.quotesAuthor }}</div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref } from 'vue';

const config = inject('appConfig') || (() => { throw new Error('Config not provided'); })();

const quotes = ref<HTMLElement | null>(null);
const quotesVisible = ref(false);
const quotesAnimating = ref(false);

const animateElement = (element: HTMLElement) => {
    quotesAnimating.value = true;
    quotesVisible.value = true;
    element.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slow');

    element.addEventListener('animationend', () => {
        quotesAnimating.value = false;
        element.classList.remove('animate__animated', 'animate__fadeInUp', 'animate__slow');
    }, { once: true });
};

const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
        if (entry.target === quotes.value) {
            if (entry.isIntersecting && !quotesVisible.value) {
                animateElement(entry.target as HTMLElement);
            } else if (!entry.isIntersecting) {
                quotesVisible.value = false;
            }
        }
    });
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
        observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px'
        });

        if (quotes.value) observer.observe(quotes.value);
    } else {
        // Fallback if IntersectionObserver is not supported
        quotesVisible.value = true;
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<style scoped>
.wrapper {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
}

.wrapper.visible {
    opacity: 1;
    visibility: visible;
}
</style>