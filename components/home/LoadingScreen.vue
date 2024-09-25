<template>
    <!-- Loading Screen -->
    <div class="loading relative z-40 h-screen" ref="loadingPage" style="
      background-image: url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/wedding-background-template-design-d85f3add7afc698b51696366dcc85b60_screen.jpg?ts=1698042684');
      background-size: cover;
      background-position: center;
    ">
        <div class="flex flex-col items-center justify-center h-full relative">
            <h2 class="font-esthetic font-bold mb-4 animate__animated animate__fadeInDown animate__slow text-4xl">
                Pernikahan
            </h2>
            <div
                class="border-4 border-pink-500 rounded-full overflow-hidden h-52 w-52 my-6 animate__animated animate__fadeIn animate__slow">
                <img src="../../assets/images/cover.jpeg" alt="Description" class="w-full h-full object-cover" />
            </div>

            <h2
                class="font-esthetic font-bold text-pink-600 mt-3 mb-4 animate__animated animate__fadeIn animate__slow text-4xl">
                Beni &amp; Okta
            </h2>

            <span class="text-lg text-center block">Kepada</span>
            <span class="text-lg text-center block font-semibold">{{ penerima }}</span>
            <span class="text-lg text-center block">di {{ lokasi }}</span>

            <button @click=" openInvitation "
                class="bg-pink-500 text-white rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors duration-300 mt-6 animate__animated animate__zoomIn animate__slow px-4 py-2 flex items-center">
                <i class="fa-solid fa-envelope-open mr-2"></i> Open Invitation
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

// Mengambil parameter dari URL
const route = useRoute();
const penerima = route.query.penerima || 'Default Penerima'; // Ganti dengan default jika tidak ada
const lokasi = route.query.lokasi || 'Default Lokasi'; // Ganti dengan default jika tidak ada

defineProps({
    openInvitation: {
        type: Function,
    }
});
</script>
