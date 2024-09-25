<template>
    <!-- Loading Screen -->
    <div class="relative z-40 h-screen" ref="loadingPage" :style=" {
        backgroundImage: `url(${ config.backgroundImage })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    } ">
        <div class="flex flex-col items-center justify-center h-full relative">
            <h2 class="font-esthetic font-bold mb-4 animate__animated animate__fadeInDown animate__slow text-4xl">
                Pernikahan
            </h2>
            <div
                class="border-4 border-pink-500 rounded-full overflow-hidden h-52 w-52 my-6 animate__animated animate__fadeIn animate__slow">
                <img :src=" coverImage " alt="Cover Image" class="w-full h-full object-cover" />
            </div>

            <h2
                class="font-esthetic font-bold text-pink-600 mt-3 mb-4 animate__animated animate__fadeIn animate__slow text-4xl">
                {{ config.groomNickname }} &amp; {{ config.brideNickname }}
            </h2>

            <span class="text-lg text-center block">Kepada</span>
            <span class="text-lg text-center block font-semibold">{{ penerima }}</span>
            <span class="text-lg text-center block">di {{ lokasi }}</span>

            <button @click=" openInvitation "
                class="bg-pink-500 text-white rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors duration-300 mt-6 animate__animated animate__zoomIn animate__slow px-4 py-2 flex items-center">
                <i class="fa-solid fa-envelope-open mr-2"></i> Buka Undangan
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { useRoute } from 'vue-router';
import coverImage from '~/assets/images/cover.jpeg';

const config = inject('appConfig') || (() => { throw new Error('Config not provided'); })();

const route = useRoute();
const penerima = route.query.penerima || 'Default Penerima';
const lokasi = route.query.lokasi || 'Default Lokasi';

defineProps({
    openInvitation: {
        type: Function,
    }
});
</script>