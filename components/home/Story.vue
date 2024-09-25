<template>
    <section id="story" class="w-full justify-center bg-pink-100">
        <div class="w-full max-w-7xl flex flex-col m-auto p-auto">
            <HomePartialsSectionTitle label="Cerita Kami" />
            <div class="flex overflow-x-scroll hide-scroll-bar px-6 md:px-6">
                <div class="flex flex-nowrap space-x-12">
                    <HomePartialsStoryItem :image=" image_story_1 " label="Story 1" />
                    <HomePartialsStoryItem :image=" image_story_2 " label="Story 2" />
                    <HomePartialsStoryItem :image=" image_story_3 " label="Story 3" />
                    <HomePartialsStoryItem :image=" image_story_4 " label="Story 4" />
                </div>
            </div>
        </div>
    </section>
</template>



<script setup lang="ts">
import image_story_1 from '~/assets/images/story/story_1.jpeg';
import image_story_2 from '~/assets/images/story/story_2.jpeg';
import image_story_3 from '~/assets/images/story/story_3.jpeg';
import image_story_4 from '~/assets/images/story/story_4.jpeg';
</script>
<style secoped>
.hide-scroll-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.hide-scroll-bar::-webkit-scrollbar {
    display: none;
}
</style>