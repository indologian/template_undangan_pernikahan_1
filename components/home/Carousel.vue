<template>
    <section id="home" class="flex items-center justify-center h-full relative">
        <div class="carousel relative w-full h-full">
            <div class="absolute inset-0 h-full flex items-center justify-center">
                <div class="mask-overlay absolute z-10 inset-0 bg-pink-200 bg-opacity-60"></div>
                <div
                    class="absolute z-20 w-full left-1/2 transform -translate-x-1/2 text-3xl md:text-6xl font-serif text-pink-900 mb-8 capitalize text-center">
                    <div class="py-4 home-subtitle">
                        <div>Beni Mustiko Aji</div>
                        <div class="py-4">&</div>
                        <div>Oktaviyanti</div>
                    </div>
                </div>
            </div>
            <HomePartialsCarouselItem
                image=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzil6oGp-bc4f4ZS_4_jQUy70lIX04_y5cEA&usqp=CAU" />
            <HomePartialsCarouselItem
                image=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmnmcilX11at5xHWgBTiMUhiWsNIeBwJcKA&usqp=CAU" />
            <HomePartialsCarouselItem
                image=" https://i.pinimg.com/236x/a5/f4/42/a5f44278c913e18266adbb97b8bb5e89.jpg" />
        </div>
    </section>
</template>

<script setup lang="ts">

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
