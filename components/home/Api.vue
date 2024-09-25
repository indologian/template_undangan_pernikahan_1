<template>
    <div class="h-screen">
      <h1>Comments</h1>
      <form @submit.prevent="addComment">
        <input v-model="newComment.name" placeholder="Your Name" required />
        <textarea v-model="newComment.comment" placeholder="Your Comment" required></textarea>
        <button type="submit">Add Comment</button>
      </form>
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          <strong>{{ comment.name }}</strong>: {{ comment.comment }}
          <button @click="deleteComment(comment.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
  const comments = ref([]);
  const newComment = ref({ name: '', comment: '' });
  
  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    comments.value = await response.json();
  };
  
  const addComment = async () => {
    await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment.value),
    });
    newComment.value = { name: '', comment: '' }; // Reset form
    fetchComments(); // Refresh comments
  };
  
  const deleteComment = async (id: number) => {
    await fetch('/api/comments', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchComments(); // Refresh comments
  };
  
  onMounted(fetchComments);
  </script>
  