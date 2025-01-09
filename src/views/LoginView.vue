<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const password = ref('');

const handleLogin = () => {
    if (password.value === "123") {
        router.push("/movies");
    } else {
        alert("Invalid Password");
    }
};
</script>

<template>
    <h1 class="hero">StreamFlix</h1>
    <RouterLink to="/register" class="button register">Register</RouterLink>
    <RouterLink to="/" class="button home">Back to Home</RouterLink>

    <div class="form-container">
        <h2>Login to Your Account</h2>
        <form @submit.prevent="handleLogin">
            <input type="email" placeholder="Email" class="input-field" required />
            <input v-model="password" type="password" placeholder="Password" class="input-field" required />
            <button type="submit" class="button login">Login</button>
        </form>
    </div>
</template>

<style scoped>
body {
    background-color: #4B2C71; /* Dark purple background */
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 20px 0 70px;
    color: #fff; /* White text */
}

.hero {
    background-color: #7D4B97; /* Lighter purple */
    color: #fff; /* White text */
    text-align: center;
    padding: 60px 20px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: 60px;
    margin-bottom: 10px;
}

.hero p {
    font-size: 20px;
    margin-bottom: 20px;
}

.form-container {
    background-color: #fff;
    border-radius: 10px;
    padding: 40px 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
}

.form-container h2 {
    color: #7D4B97; /* Lighter purple */
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
}

.input-field {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 2px solid #d0e7f9;
    border-radius: 5px;
    font-size: 16px;
    color: #10375c;
}

.input-field:focus {
    border-color: #7D4B97; /* Purple border on focus */
    outline: none;
}

.button {
    background-color: #7D4B97; /* Lighter purple */
    color: #ffffff;
    padding: 12px 30px;
    font-size: 18px;
    border: none;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
}

.button:hover {
    background-color: #4B2C71; /* Darker purple */
}

footer {
    background-color: #7D4B97; /* Lighter purple */
    color: #fff;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>