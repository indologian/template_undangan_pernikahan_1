<template>
    <section id="story" class="w-full justify-center pt-6 bg-pink-100">
        <div class="w-full max-w-7xl flex flex-col m-auto p-auto">
            <h1 class="text-center pb-10 font-bold text-4xl text-gray-800">
                Our Story
            </h1>
            <div class="flex overflow-x-scroll hide-scroll-bar px-4 md:px-6">
                <div class="flex flex-nowrap space-x-12">
                    <HomePartialsStoryItem />
                    <HomePartialsStoryItem />
                    <HomePartialsStoryItem />
                    <HomePartialsStoryItem />
                    <HomePartialsStoryItem />
                    <HomePartialsStoryItem />
                    <HomePartialsStoryItem />
                    <HomePartialsStoryItem />
                    <HomePartialsStoryItem />
                </div>
            </div>
        </div>
    </section>
</template>

<style secoped>
.hide-scroll-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.hide-scroll-bar::-webkit-scrollbar {
    display: none;
}
</style>