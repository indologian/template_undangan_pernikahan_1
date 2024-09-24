<template>
    <section id="comments" class="pt-12 pb-32">
        <h2 class="font-manrope text-5xl text-center font-bold text-gray-900 pb-10">Ucapan</h2>
        <div class="max-w-2xl mx-auto w-[80%] p-6 bg-pink-200 rounded-lg shadow-lg">

            <!-- Comment Input Form -->
            <form @submit.prevent=" addComment " class="mb-6">
                <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
                    <input v-model=" newComment.name " type="text" id="name"
                        class="mt-1 block w-full rounded-md border-pink-300 focus:outline-none py-3 px-4 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
                        required />
                </div>
                <div class="mb-4">
                    <label for="comment" class="block text-sm font-medium text-gray-700">Your Comment</label>
                    <textarea v-model=" newComment.text " id="comment" rows="3"
                        class="mt-1 block w-full rounded-md border-pink-300 focus:outline-none py-3 px-4 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 resize-none"
                        required></textarea>
                </div>
                <button type="submit"
                    class="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                    Post Comment
                </button>
            </form>

            <!-- Comments List -->
            <div class="space-y-4">
                <div v-for="comment in comments" :key=" comment.id " class="bg-white p-4 rounded-lg shadow">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold mr-2">
                            {{ comment.name.charAt(0).toUpperCase() }}
                        </div>
                        <h3 class="font-semibold text-gray-800">{{ comment.name }}</h3>
                    </div>
                    <p class="text-gray-600">{{ comment.text }}</p>
                </div>
            </div>
        </div>
    </section>

</template>


<script setup lang="ts">
import { ref } from 'vue';

interface Comment {
    id: number
    name: string
    text: string
}

const comments = ref<Comment[]>([
    { id: 1, name: 'Alice', text: 'Great post! Thanks for sharing.' },
    { id: 2, name: 'Bob', text: 'I found this very helpful. Looking forward to more content like this.' }
])

const newComment = ref<{ name: string; text: string }>({
    name: '',
    text: ''
})

const addComment = () => {
    if (newComment.value.name && newComment.value.text) {
        comments.value.push({
            id: comments.value.length + 1,
            name: newComment.value.name,
            text: newComment.value.text
        })
        newComment.value = { name: '', text: '' }
    }
}
</script>