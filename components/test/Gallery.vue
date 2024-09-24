<template>
    <div class="container mx-auto px-4">
        <div class="relative w-full max-w-3xl mx-auto">
            <transition-group name="fade" tag="div">
                <img v-for="(image, index) in images" :key=" image " :src=" image " :alt=" `Gallery image ${ index + 1 }` "
                    v-show=" index === currentIndex "
                    class="w-full h-[600px] object-cover rounded-lg shadow-lg absolute top-0 left-0" />
            </transition-group>
            <button @click=" prevSlide "
                class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300">
                <ChevronLeft class="w-6 h-6 text-pink-600" />
            </button>
            <button @click=" nextSlide "
                class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300">
                <ChevronRight class="w-6 h-6 text-pink-600" />
            </button>
        </div>
        <div class="flex justify-center mt-4 space-x-2">
            <button v-for="(_, index) in images" :key=" index " @click="setCurrentIndex(index)" :class=" [
                'w-3 h-3 rounded-full',
                index === currentIndex ? 'bg-pink-600' : 'bg-pink-300'
            ] " />
        </div>
    </div>
</template>

<script setup>

const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzil6oGp-bc4f4ZS_4_jQUy70lIX04_y5cEA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmnmcilX11at5xHWgBTiMUhiWsNIeBwJcKA&usqp=CAU',
    'https://i.pinimg.com/236x/a5/f4/42/a5f44278c913e18266adbb97b8bb5e89.jpg',
]

const currentIndex = ref(0)

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

const setCurrentIndex = (index) => {
    currentIndex.value = index
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>