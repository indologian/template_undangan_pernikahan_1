<template>
    <!-- Loading Screen -->
    <div class="loading relative z-40 h-screen" ref="loadingPage" style="
      background-image: url('https://api.our-wedding.link/uploads/8cde97a0-cc1d-11ee-8a12-1d71291003ab.jpg');
      background-size: cover;
      background-position: center;
    ">
        <div class="flex flex-col items-center justify-center h-full relative">
            <h2 class="font-esthetic mb-4 animate__animated animate__fadeInDown animate__slow text-4xl">
                The Wedding Of
            </h2>
            <div
                class="border-4 border-pink-500 rounded-full overflow-hidden h-52 w-52 my-6 animate__animated animate__fadeIn animate__slow">
                <img src="https://www.shutterstock.com/image-photo/image-young-asian-bride-groom-600nw-2145073147.jpg"
                    alt="Description" class="w-full h-full object-cover" />
            </div>

            <h2 class="font-esthetic my-4 animate__animated animate__fadeIn animate__slow text-4xl">
                Beni &amp; Okta
            </h2>

            <button @click=" openInvitation "
                class="bg-pink-500 text-white rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors duration-300 mt-4 animate__animated animate__zoomIn animate__slow px-4 py-2 flex items-center">
                <i class="fa-solid fa-envelope-open mr-2"></i> Open Invitation
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    openInvitation: {
        type: Function,
    }
});
</script>
