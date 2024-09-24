<template>
    <template>
        <section id="couple" class="py-12 w-full flex justify-center">
            <div class="max-w-7xl mx-auto px-4">
                <div class="mb-12">
                    <h2 class="font-manrope text-5xl text-center font-bold text-gray-900">Our team</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    <!-- Bride Top Element -->
                    <div ref="bride" :class=" { 'animate__animated animate__fadeInLeft animate__slow': brideVisible } "
                        class="block md:col-span-2 lg:col-span-1 bride-groom-container">
                        <div class="relative mb-6">
                            <img class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                                src="https://pagedone.io/asset/uploads/1696238374.png" alt="Bride image" />
                        </div>
                        <h4
                            class="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500">
                            Bride Name
                        </h4>
                        <span class="text-gray-500 text-center block transition-all duration-500">Putri dari</span>
                        <span class="text-gray-500 text-center block transition-all duration-500">Bapak Akbar S.Kom
                            &</span>
                        <span class="text-gray-500 text-center block transition-all duration-500">Ibu Siti S.Pd</span>
                        <span class="text-gray-500 text-center block transition-all duration-500">Dsn.ngadirejo
                            ds.cepoko Rt/02 Rw/02 kec.ngrambe kab.Ngawi Jawa timur</span>
                    </div>

                    <h2 class="text-gray-500 text-center block transition-all duration-500">&</h2>

                    <!-- Groom Top Element -->
                    <div ref="groom" :class=" { 'animate__animated animate__fadeInLeft animate__slow': groomVisible } "
                        class="block md:col-span-2 lg:col-span-1 bride-groom-container">
                        <div class="relative mb-6">
                            <img class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                                src="https://pagedone.io/asset/uploads/1696238374.png" alt="Groom image" />
                        </div>
                        <h4
                            class="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500">
                            Groom Name
                        </h4>
                        <span class="text-gray-500 text-center block transition-all duration-500">Putra dari</span>
                        <span class="text-gray-500 text-center block transition-all duration-500">Bapak Akbar S.Kom
                            &</span>
                        <span class="text-gray-500 text-center block transition-all duration-500">Ibu Siti S.Pd</span>
                        <span class="text-gray-500 text-center block transition-all duration-500">Dsn.ngadirejo
                            ds.cepoko Rt/02 Rw/02 kec.ngrambe kab.Ngawi Jawa timur</span>
                    </div>
                </div>
            </div>
        </section>
    </template>

    <script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

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
        } else {
          // Reset visibility when elements are out of view
          if (entry.target === bride.value) {
            brideVisible.value = false;
          } else if (entry.target === groom.value) {
            groomVisible.value = false;
          }
        }
      });
    };

    let observer: IntersectionObserver | null = null;

    onMounted(() => {
      if (bride.value || groom.value) {
        observer = new IntersectionObserver(observerCallback);
        if (bride.value) observer.observe(bride.value);
        if (groom.value) observer.observe(groom.value);
      }
    });

    onUnmounted(() => {
      if (observer) {
        if (bride.value) observer.unobserve(bride.value);
        if (groom.value) observer.unobserve(groom.value);
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
            /* Adjust height as needed */
            position: relative;
            /* Prevent layout shifts */
        }

        html {
            scroll-behavior: smooth;
            /* Smooth scrolling */
        }
    </style>

</template>