<template>
    <section id="couple" class="pb-12 w-full bg-pink-50">
        <div class="max-w-7xl mx-auto px-4">
            <HomePartialsSectionTitle label="Pasangan" />
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 place-items-center">
                <!-- Groom Top Element -->
                <HomePartialsCoupleItem animationClass="animate__fadeInLeft" :image=" groomImage "
                    :name=" config.groomName " maleFemale="Putri" :fatherName=" config.groomFather "
                    :motherName=" config.groomMother " :address=" config.groomAddress " />

                <h2 class="text-7xl md:text-8xl font-serif capitalize text-pink-600 text-center">&</h2>

                <!-- Bride Top Element -->
                <HomePartialsCoupleItem animationClass="animate__fadeInRight" :image=" brideImage "
                    :name=" config.brideName " maleFemale="Putra" :fatherName=" config.brideFather "
                    :motherName=" config.brideMother " :address=" config.brideAddress " />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import brideImage from '~/assets/images/couple/bride.jpeg';
import groomImage from '~/assets/images/couple/groom.jpeg';
const config = inject('appConfig') || (() => { throw new Error('Config not provided'); })();


</script>