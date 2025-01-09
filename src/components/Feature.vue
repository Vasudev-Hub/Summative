<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';

const response = ref(null);
const numbers = ref([]);

// Generate 3 random unique numbers
numbers.value = (() => {
    const set = new Set();
    while (set.size < 3) {
        set.add(Math.floor(Math.random() * 19));
    }
    return [...set]; // Convert Set to Array
})();

onMounted(async () => {
    try {
        const API_KEY = import.meta.env.VITE_API_KEY; // Access environment variable
        console.log("API Key:", API_KEY); // Debugging log for API key

        // Validate API Key
        if (!API_KEY) {
            throw new Error("API Key is missing or undefined.");
        }

        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
        const res = await axios.get(url);
        response.value = res.data.results; // Store only results array
    } catch (error) {
        console.error("Error fetching data:", error.message || error);
    }
});
</script>

<template>
    <h3>Now Playing</h3>
    <div class="movie-gallery">
        <div v-if="response" class="movie-list">
            <div v-for="(number, index) in numbers" :key="index" class="movie-card">
                <img :src="`https://image.tmdb.org/t/p/w500${response[number]?.poster_path}`"
                    alt="Movie Poster" class="movie-poster" />
                <p class="movie-title">{{ response[number]?.title || "Untitled" }}</p>
            </div>
        </div>
        <p v-else>Loading...</p> <!-- Fallback while data is loading -->
    </div>
</template>

<style scoped>
h3 {
    color: #fff;
    text-align: center;
    font-size: 28px;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
}

.movie-gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 10px;
}

.movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.movie-card {
    width: 200px;
    text-align: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #4B2C71; /* Purple background */
    transition: transform 0.3s ease;
    color: #fff; /* White text color */
}

.movie-poster {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-bottom: 2px solid #f5f5f5;
}

.movie-title {
    font-size: 16px;
    color: #fff;
    padding: 10px;
    background-color: #7D4B97; /* Lighter purple background */
    margin: 0;
}

.movie-card:hover {
    transform: scale(1.05);
    background-color: #5a1e6f; /* Darker purple on hover */
}

@media (max-width: 768px) {
    .movie-card {
        width: 150px;
    }
}

@media (max-width: 480px) {
    .movie-card {
        width: 120px;
    }
}
</style>