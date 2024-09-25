<template>
    <div>
        <transition name="slide-up" mode="out-in">
            <div v-if="!isOpenInvitation">
                <HomeLoadingScreen :openInvitation=" openInvitation " />
            </div>

            <div v-else>
                <!-- Carousel -->
                <main class="h-screen">
                    <HomeCarousel :isOpenInvitation=" isOpenInvitation " />
                    <HomeQuotes />
                    <HomeCouple />
                    <HomeStory />
                    <HomeMap />
                    <HomeCountdown />
                    <HomeGallery />
                    <HomeComments />
                    <Audio />
                </main>

            </div>

        </transition>
    </div>
</template>




<script setup lang="ts">
useHead({
    title: "Nuxt 3 Minimal Starter",
    meta: [{ name: "description", content: "Nuxt 3 Minimal Starter" }]
});

const isOpenInvitation = ref(false);
const openInvitation = () => {
    isOpenInvitation.value = true;
};

</script>

<style scoped>
@import url('../assets/css/animate.css');
</style>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.5s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(60px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}
</style>