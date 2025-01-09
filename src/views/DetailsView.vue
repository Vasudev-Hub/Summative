<script setup>
import Details from '../components/Details.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
</script>

<template>
    <Header />
    <RouterLink to="/movies" class="back-button">Back</RouterLink>
    <Details />
    <Footer />
</template>

<style scoped>
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