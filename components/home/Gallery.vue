<template>
    <section id="gallery" class="pt-12 bg-pink-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center flex-col lg:flex-row">
                <HomePartialsSectionTitle label="Gallery" />
                <div class="w-full lg:w-1/2 lg:mt-0 md:mt-40 max-lg:max-w-2xl">
                    <div class="grid grid-cols-3 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                        <img src="~/assets/images/gallery/gallery_1.jpeg" alt=""
                            class="w-44 h-56 rounded-2xl object-cover mt-6 md:mt-20 mx-auto min-[450px]:mr-0" />
                        <img src="~/assets/images/gallery/gallery_2.jpeg" alt=""
                            class="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto" />
                        <img src="~/assets/images/gallery/gallery_3.jpeg" alt=""
                            class="w-44 h-56 rounded-2xl object-cover mt-6 md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0" />
                        <img src="~/assets/images/gallery/gallery_4.jpeg" alt=""
                            class="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto" />
                        <img src="~/assets/images/gallery/gallery_5.jpeg" alt=""
                            class="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto" />
                        <img src="~/assets/images/gallery/gallery_6.jpeg" alt=""
                            class="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const galleryImages = document.querySelectorAll('#gallery img')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow', 'visible')
            } else {
                entry.target.classList.remove('animate__animated', 'animate__zoomIn', 'animate__slow', 'visible')
            }
        })
    }, {
        threshold: 0.5 // Trigger animation when 50% of the element is visible
    })

    galleryImages.forEach((image) => {
        observer.observe(image)
    })
})
</script>

<style scoped>
#gallery img {
    opacity: 0;
    visibility: hidden;
}

#gallery img.visible {
    opacity: 1;
    visibility: visible;
}
</style>