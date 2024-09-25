<template>
    <section id="home" class="flex items-center justify-center h-full relative">
        <div class="carousel relative w-full h-full">
            <div class="absolute inset-0 h-full flex items-center justify-center">
                <div class="mask-overlay absolute z-10 inset-0 bg-pink-100 bg-opacity-60"></div>
                <div
                    class="absolute z-20 w-full left-1/2 transform -translate-x-1/2 text-3xl md:text-6xl font-serif text-pink-600 mb-8 capitalize text-center lg:left-72 lg:translate-x-0">
                    <div>Beni Mustiko Aji</div>
                    <div class="py-4">&</div>
                    <div>Oktaviyanti</div>
                </div>
            </div>
            <HomePartialsCarouselItem :image=" image_carousel_1 " />
            <HomePartialsCarouselItem :image=" image_carousel_2 " />
            <HomePartialsCarouselItem :image=" image_carousel_3 " />
        </div>
    </section>
</template>

<script setup lang="ts">
import image_carousel_1 from '~/assets/images/carousel/carousel_1.jpeg';
import image_carousel_2 from '~/assets/images/carousel/carousel_2.jpeg';
import image_carousel_3 from '~/assets/images/carousel/carousel_3.jpeg';

const props = defineProps({
    isOpenInvitation: {
        type: Boolean
    }
})



const startCarousel = () => {
    const items = document.querySelectorAll<HTMLElement>('.carousel-item');
    if (items.length === 0) return;

    let currentIndex = 0;
    items[currentIndex].classList.add('active');

    function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    setInterval(showNextItem, 3000);
};

onMounted(() => {
    if (props.isOpenInvitation) {
        startCarousel();
    }
});
</script>

<style scoped>
.carousel-item {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.carousel-item.active {
    opacity: 1;
}
</style>
