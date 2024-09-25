<template>
    <div ref="couple" class="block md:col-span-2 lg:col-span-1 couple-container" :class=" {
        'animate__animated animate__slow': coupleAnimating,
        [animationClass]: coupleAnimating,
        'visible': coupleVisible
    } ">
        <div class="relative mb-6">
            <img class="w-60 h-60 rounded-full mx-auto object-cover border-4 border-solid border-pink-200"
                :src=" image " alt="couple image" />
        </div>
        <h4 class="text-4xl md:text-5xl font-serif text-pink-600 mb-5 capitalize text-center">{{ name }}</h4>
        <span class="text-xl md:text-2xl mb-2 text-center block">{{ maleFemale }} dari</span>
        <span class="text-xl md:text-2xl mb-2 text-center block">{{ fatherName }} & {{ motherName }}</span>
        <span class="text-xl md:text-2xl mb-2 text-center block">{{ address }}</span>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
    animationClass: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    maleFemale: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const couple = ref<HTMLElement | null>(null);
const coupleAnimating = ref(false);
const coupleVisible = ref(false);

const animateElement = (element: HTMLElement) => {
    coupleAnimating.value = true;
    coupleVisible.value = true;

    element.classList.add('animate__animated', 'animate__slow', props.animationClass);

    element.addEventListener('animationend', () => {
        coupleAnimating.value = false;
        element.classList.remove('animate__animated', 'animate__slow', props.animationClass);
    }, { once: true });
};

const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !coupleVisible.value) {
            animateElement(entry.target as HTMLElement);
        } else if (!entry.isIntersecting) {
            coupleVisible.value = false;
        }
    });
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
        observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px',
        });

        if (couple.value) observer.observe(couple.value);
    } else {
        // Fallback if IntersectionObserver is not supported
        coupleVisible.value = true;
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<style scoped>
.couple-container {
    min-height: 300px;
    position: relative;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
}

.couple-container.visible {
    opacity: 1;
    visibility: visible;
}

section {
    contain: paint;
}
</style>