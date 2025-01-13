<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from "../store";

const props = defineProps(["genres"]);
const router = useRouter();
const selectedGenre = ref(28);
const response = ref(null);
const store = useStore();

// Track added movies
const addedMovies = ref(new Set());

async function getMovieByGenre() {
    response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${selectedGenre.value}`);
}

function getMovieDetails(id) {
    router.push(`/movies/${id}`)
}

function addToCart(movie) {
    store.cart.set(movie.id, { title: movie.title, url: movie.poster_path });
    addedMovies.value.add(movie.id); // Mark as added
}

onMounted(async () => {
    response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${selectedGenre.value}`);
});
</script>

<template>
    <div class="movie-gallery">
        <select v-model="selectedGenre" @change="getMovieByGenre()">
            <option v-for="genre of genres" :value="genre.id">{{ genre.genreName }}</option>
        </select>
        <div v-if="response" class="movie-list">
            <div v-for="movie in response.data.results" :key="movie.id" class="movie-card"
                @click="getMovieDetails(movie.id)">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster"
                    class="movie-poster" />
                <p class="movie-title">{{ movie.title }}</p>
                <button
                    @click.stop="addToCart(movie)" 
                    :disabled="addedMovies.has(movie.id)"
                    class="buy-button">
                    {{ addedMovies.has(movie.id) ? 'Added' : 'Buy' }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Same styles as before */
.movie-gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
}

.movie-gallery select {
    padding: 10px 20px;
    font-size: 18px;
    border: 1px solid #7D4B97;
    border-radius: 5px;
    background-color: #fff;
    color: #7D4B97;
    cursor: pointer;
    margin-bottom: 20px;
    transition: background-color 0.3s;
}

.movie-gallery select:hover {
    background-color: #d0e7f9;
}

.movie-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
}

.movie-card {
    background-color: #4B2C71;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 220px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    color: #fff;
}

.movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

.movie-poster {
    width: 100%;
    height: auto;
    display: block;
    border-bottom: 2px solid #7D4B97;
}

.movie-title {
    padding: 10px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    font-weight: 600;
    background-color: #7D4B97;
    border-top: 2px solid #7D4B97;
}

.buy-button {
    display: inline-block;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 2px solid #fff;
    background-color: #7D4B97;
    transition: background-color 0.3s, color 0.3s;
    width: 100%;
}

.buy-button:disabled {
    background-color: #4B2C71;
    cursor: not-allowed;
    border-color: #7D4B97;
}

.buy-button:hover:not(:disabled) {
    background-color: #4B2C71;
    color: #fff;
}
</style>
