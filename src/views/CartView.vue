<script setup>
import Header from '../components/Header.vue';
import { useStore } from '../store';

const store = useStore();
</script>

<template>
    <Header />
    <RouterLink to="/movies" class="back-button">Back</RouterLink>
    <div class="cart">
        <h2>Your Shopping Cart</h2>
        <div class="item" v-for="([key, value]) in store.cart" :key="key">
            <img :src="`https://image.tmdb.org/t/p/w500${value.url}`" />
            <div class="item-details">
                <h3>{{ value.title }}</h3>
                <button @click="store.cart.delete(key)">Remove</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #4B2C71; /* Dark purple background */
    color: #fff; /* White text */
    font-family: Arial, sans-serif;
    padding: 20px;
}

h2 {
    text-align: center;
    color: #fff;
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
}

.item {
    display: flex;
    align-items: center;
    background-color: #7D4B97; /* Lighter purple background */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    transition: transform 0.3s ease;
    width: 100%;
    max-width: 600px;
}

.item:hover {
    transform: scale(1.02);
}

.item img {
    width: 120px;
    height: auto;
    margin-right: 20px;
    border-radius: 8px;
}

.item-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.item-details h3 {
    color: #fff;
    font-size: 18px;
    margin-bottom: 10px;
}

button {
    padding: 10px 20px;
    background-color: #7D4B97; /* Lighter purple */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
    background-color: #4B2C71; /* Dark purple */
    transform: scale(1.05);
}

.back-button {
    display: inline-block;
    background-color: #7D4B97; /* Lighter purple */
    color: #ffffff;
    padding: 10px 30px;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    border: none;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.back-button:hover {
    background-color: #4B2C71; /* Darker purple */
}
</style>