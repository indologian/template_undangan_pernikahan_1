<template>
    <section id="countdown" class="w-full bg-pink-100">
        <HomePartialsSectionTitle label="Countdown Acara" />

        <div class="flex items-start justify-center h-24 gap-4 pt-12">
            <div class="timer w-16">
                <div class="bg-pink-50 border-2 border-pink-200 shadow-lg py-4 px-2 rounded-lg overflow-hidden">
                    <h3 class="countdown-element days font-Cormorant font-semibold text-2xl text-center">
                        {{ days }}
                    </h3>
                </div>
                <p class="text-lg font-Cormorant font-medium text-gray-900 mt-2 text-center">days</p>
            </div>

            <div class="flex items-center pt-4">
                <h3 class="font-manrope font-semibold text-2xl text-gray-900">:</h3>
            </div>

            <div class="timer w-16">
                <div class="bg-pink-50 border-2 border-pink-200 shadow-lg py-4 px-2 rounded-lg overflow-hidden">
                    <h3 class="countdown-element hours font-Cormorant font-semibold text-2xl text-center">
                        {{ hours }}
                    </h3>
                </div>
                <p class="text-lg font-Cormorant font-normal text-gray-900 mt-2 text-center">hours</p>
            </div>

            <div class="flex items-center pt-4">
                <h3 class="font-manrope font-semibold text-2xl text-gray-900">:</h3>
            </div>

            <div class="timer w-16">
                <div class="bg-pink-50 border-2 border-pink-200 shadow-lg py-4 px-2 rounded-lg overflow-hidden">
                    <h3 class="countdown-element minutes font-Cormorant font-semibold text-2xl text-center">
                        {{ minutes }}
                    </h3>
                </div>
                <p class="text-lg font-Cormorant font-normal text-gray-900 mt-2 text-center">minutes</p>
            </div>

            <div class="flex items-center pt-4">
                <h3 class="font-manrope font-semibold text-2xl text-gray-900">:</h3>
            </div>

            <div class="timer w-16">
                <div class="bg-pink-50 border-2 border-pink-200 shadow-lg py-4 px-2 rounded-lg overflow-hidden">
                    <h3 class="countdown-element seconds font-Cormorant font-semibold text-2xl text-center">
                        {{ seconds }}
                    </h3>
                </div>
                <p class="text-lg font-Cormorant font-normal text-gray-900 mt-2 text-center">seconds</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// Define the target date for the countdown
const targetDate = new Date('2024-12-31T00:00:00').getTime(); // Change this to your target date

// Reactive state for time components
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

// Function to update the countdown
const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(timer); // Stop the timer if the date has passed
        return;
    }

    // Calculate time components
    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
};

// Set up the timer
let timer: ReturnType<typeof setInterval>;
onMounted(() => {
    updateCountdown(); // Initial call to set values
    timer = setInterval(updateCountdown, 1000); // Update every second
});

// Cleanup on component unmount
onBeforeUnmount(() => {
    clearInterval(timer);
});
</script>
