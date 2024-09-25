<template>
    <div class="fixed bottom-[7rem] right-4 z-30">
        <button v-if="!isPlaying" ref="playBtn" @click=" startAudio "
            class="bg-pink-500 hover:bg-pink-600 transition-colors text-white font-bold py-2 px-3 rounded-full flex items-center justify-center">
            <Icon name="lucide:audio-lines" class="text-lg" />
        </button>
        <button v-else @click=" stopAudio "
            class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-3 rounded-full flex justify-center items-center">
            <Icon name="ph:stop-fill" class="text-lg" />
        </button>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import sound from '~/assets/audio/audio.mp3'; // Ensure the path is correct

const audio = ref(null);
const isPlaying = ref(false);
const playBtn = ref(null);

const handleAudioEnd = () => {
    isPlaying.value = false;
};

onMounted(() => {
    audio.value = new Audio(sound);
    audio.value.addEventListener('ended', handleAudioEnd);

    // Simulate a click on the play button
    playBtn.value.click();
});

onUnmounted(() => {
    audio.value.removeEventListener('ended', handleAudioEnd);
});

const startAudio = () => {
    audio.value.play().then(() => {
        isPlaying.value = true;
    }).catch((error) => {
        console.error("Error playing audio:", error);
    });
};

const stopAudio = () => {
    if (audio.value) {
        audio.value.pause();
        audio.value.currentTime = 0; // Reset to the beginning
        isPlaying.value = false;
    }
};
</script>

<style scoped>
.fixed {
    position: fixed;
}

button {
    width: 50px;
    height: 50px;
}
</style>