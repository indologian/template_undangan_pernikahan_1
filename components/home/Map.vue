<template>
    <div class="px-4 bg-pink-100 py-12">
        <div class="px-4 py-6 bg-pink-300 rounded-lg shadow-lg flex flex-col overflow-hidden map-container">
            <LMap style="height: 350px" :zoom=" 15 " :center=" [lat, lng] " @click=" handleMapClick ">
                <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                    layer-type="base" name="OpenStreetMap" />

                <LMarker :lat-lng=" [lat, lng] ">
                    <LIcon :icon-url=" iconUrl " :icon-size=" iconSize " />
                </LMarker>
            </LMap>

            <NuxtLink to="https://maps.app.goo.gl/ugMkAnKrojWvKVLx9" target="_blank"
                class="px-3 py-2 text-center bg-pink-600 mt-3 text-pink-50">
                Lihat Map</NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { LIcon, LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { computed, onMounted, ref } from 'vue';

onMounted(() => {
    import('leaflet')
})

const iconWidth = ref(21);
const iconHeight = ref(42);
const lat = ref(-7.7081044);
const lng = ref(110.3008213);

const iconUrl = computed(() => `https://picsum.photos/${ iconWidth.value }/${ iconHeight.value }`);
const iconSize = computed(() => [iconWidth.value, iconHeight.value]);

const changeIcon = () => {
    iconWidth.value += 1;
    if (iconWidth.value > iconHeight.value) {
        iconWidth.value = Math.floor(iconHeight.value / 2);
    }
};

const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    console.log(`Clicked at latitude: ${ lat }, longitude: ${ lng }`);
};
</script>

<style>
.leaflet-div-icon {
    background: steelblue;
    color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    font-weight: bold;
    font-size: large;
    text-align: center;
    line-height: 21px;
}

.map-container {
    position: relative;
    z-index: 1;
}

.leaflet-pane {
    z-index: 1;
}

.leaflet-top,
.leaflet-bottom {
    z-index: 1;
}
</style>