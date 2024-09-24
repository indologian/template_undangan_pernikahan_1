<template>
    <section id="couple" class="pt-12 pb-6 w-full flex justify-center overflow-hidden bg-pink-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="mb-12">
                <h2 class="font-manrope text-5xl text-center font-bold text-gray-900">Pasangan</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                <!-- Bride Top Element -->
                <div ref="bride" class="block md:col-span-2 lg:col-span-1 bride-groom-container"
                    :class=" { 'animate__animated animate__fadeInLeft animate__slow visible': brideVisible } ">
                    <div class="relative mb-6">
                        <img class="w-40 h-40 rounded-full mx-auto object-cover border-4 border-solid border-pink-200"
                            src="https://pagedone.io/asset/uploads/1696238374.png" alt="Bride image" />
                    </div>
                    <h4 class="text-4xl md:text-6xl font-serif text-pink-600 mb-8 capitalize text-center">
                        Oktaviyanti
                    </h4>
                    <span class="text-xl md:text-2xl mb-2 text-center block">Putri dari</span>
                    <span class="text-xl md:text-2xl mb-2 text-center block">Bapak Akbar S.Kom &</span>
                    <span class="text-xl md:text-2xl mb-2 text-center block">Ibu Siti S.Pd</span>
                    <span class="text-xl md:text-2xl mb-2 text-center block">Dsn.ngadirejo ds.cepoko
                        Rt/02 Rw/02 kec.ngrambe kab.Ngawi Jawa timur</span>
                </div>

                <h2 class="text-4xl md:text-6xl font-serif capitalize text-pink-600 mb-8 text-center">&</h2>

                <!-- Groom Top Element -->
                <div ref="groom" class="block md:col-span-2 lg:col-span-1 bride-groom-container"
                    :class=" { 'animate__animated animate__fadeInRight animate__slow visible': groomVisible } ">
                    <div class="relative mb-6">
                        <img class="w-40 h-40 rounded-full mx-auto object-cover border-4 border-solid border-pink-200"
                            src="https://pagedone.io/asset/uploads/1696238374.png" alt="Groom image" />
                    </div>
                    <h4 class="text-4xl md:text-6xl font-serif capitalize text-pink-600 mb-8 text-center">
                        beni mustiko aji
                    </h4>
                    <span class="text-xl md:text-2xl mb-2 text-center block">Putra dari</span>
                    <span class="text-xl md:text-2xl mb-2 text-center block">Bapak Akbar S.Kom &</span>
                    <span class="text-xl md:text-2xl mb-2 text-center block">Ibu Siti S.Pd</span>
                    <span class="text-xl md:text-2xl mb-2 text-center block">Dsn.ngadirejo ds.cepoko
                        Rt/02 Rw/02 kec.ngrambe kab.Ngawi Jawa timur</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
    setup() {
        const bride = ref<HTMLElement | null>(null);
        const groom = ref<HTMLElement | null>(null);
        const brideVisible = ref(false);
        const groomVisible = ref(false);

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === bride.value) {
                        brideVisible.value = true;
                    } else if (entry.target === groom.value) {
                        groomVisible.value = true;
                    }
                }
            });
        };

        let observer: IntersectionObserver | null = null;

        onMounted(() => {
            if (bride.value && groom.value) {
                observer = new IntersectionObserver(observerCallback, {
                    rootMargin: '0px 0px -10% 0px' 
                });
                observer.observe(bride.value);
                observer.observe(groom.value);
            }
        });

        onUnmounted(() => {
            if (observer) {
                observer.disconnect();
            }
        });

        return {
            bride,
            groom,
            brideVisible,
            groomVisible,
        };
    },
});
</script>

<style scoped>
.bride-groom-container {
    min-height: 300px;
    position: relative;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
}

.bride-groom-container.visible {
    opacity: 1;
    visibility: visible;
}
section {
    contain: paint;
}

.animate__animated {
    animation-fill-mode: both !important;
}
</style>