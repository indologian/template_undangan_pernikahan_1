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
                    <HomeCountdown />
                    <HomeGallery />
                    <HomeComments />
                </main>

            </div>

        </transition>
    </div>
</template>




<script setup lang="ts">
useHead({
    title: "Nuxt 3 Minimal Starter",
    meta: [{ name: "description", content: "Nuxt 3 Minimal Starter" }],
    link: [{ rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" }],
});

const isOpenInvitation = ref(false);

const openInvitation = () => {
    isOpenInvitation.value = true;
};

</script>


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