<template>
    <div class="min-h-screen bg-pink-50 text-gray-800">
        <transition name="slide-up" mode="out-in">
            <div v-if="!isInvitationOpen" class="flex flex-col items-center justify-center min-h-screen">
                <h1 class="text-4xl md:text-6xl font-serif text-pink-600 mb-8">Sarah & John</h1>
                <p class="text-xl md:text-2xl mb-12">We're getting married!</p>
                <button @click=" openInvitation "
                    class="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors duration-300">
                    Open Invitation
                </button>
            </div>
            <div v-else>
                <!-- <header class="bg-white shadow-md py-6">
                    <nav class="container mx-auto px-4">
                        <ul class="flex justify-center space-x-8">
                            <li><a href="#home" class="text-pink-600 hover:text-pink-800">Home</a></li>
                            <li><a href="#countdown" class="text-pink-600 hover:text-pink-800">Countdown</a></li>
                            <li><a href="#gallery" class="text-pink-600 hover:text-pink-800">Gallery</a></li>
                        </ul>
                    </nav>
                </header> -->

                <main>
                    <section id="home" class="py-20 text-center">
                        <h1 class="text-5xl md:text-7xl font-serif text-pink-600 mb-8">Sarah & John</h1>
                        <p class="text-2xl md:text-3xl mb-12">Join us in celebrating our love</p>
                        <p class="text-xl mb-4">Saturday, December 31, 2023</p>
                        <p class="text-xl">123 Wedding Venue, City, Country</p>
                    </section>

                    <section id="countdown" class="py-20 bg-pink-100">
                        <TestCountdown date="2023-12-31T00:00:00" />
                    </section>

                    <section id="gallery" class="py-20">
                        <h2 class="text-4xl font-serif text-pink-600 text-center mb-12">Our Gallery</h2>
                        <TestGallery />
                    </section>
                </main>

                <footer class="bg-pink-600 text-white py-8 text-center">
                    <p>&copy; 2023 Sarah & John. All rights reserved.</p>
                </footer>
            </div>
        </transition>
    </div>
</template>

<script setup>

const isInvitationOpen = ref(false)

const openInvitation = () => {
    isInvitationOpen.value = true
}
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