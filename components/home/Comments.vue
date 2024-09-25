<template>
    <section id="comments" class="pt-6 pb-32 bg-pink-100">
        <HomePartialsSectionTitle label="Ucapan" />
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
                    <p class="text-gray-600">{{ comment.comment }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Comment {
    id: number;
    name: string;
    comment: string;
}

const comments = ref<Comment[]>([]);

const newComment = ref<{ name: string; text: string }>({
    name: '',
    text: ''
});

// Fetch comments from the API
const fetchComments = async () => {
    const response = await fetch('/api/comments');
    comments.value = await response.json();
};

// Add a new comment
const addComment = async () => {
    if (newComment.value.name && newComment.value.text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: newComment.value.name,
                comment: newComment.value.text
            }),
        });

        if (response.ok) {
            const createdComment = await response.json();
            comments.value.push(createdComment); // Update local comments
            newComment.value = { name: '', text: '' }; // Reset form
        } else {
            console.error('Failed to add comment');
        }
    }
};

// Fetch comments on component mount
onMounted(fetchComments);
</script>