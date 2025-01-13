<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from 'vue-router';
import { useStore } from "../store"

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();
const store = useStore();

async function registerByEmail() {
  try {
    const user = (await createUserWithEmailAndPassword(auth, email.value, password.value)).user;
    await updateProfile(user, { displayName: `${firstName.value} ${lastName.value}` });
    store.user = user;
    router.push("/movies/all");
  } catch (error) {
    alert("There was an error creating a user with email!");
  }
}

async function registerByGoogle() {
  try {
    const user = (await signInWithPopup(auth, new GoogleAuthProvider())).user;
    store.user = user;
    router.push("/movies/all");
  } catch (error) {
    alert("There was an error creating a user with Google!");
  }
}
</script>

<template>
    <h1 class="hero">StreamFlix</h1>
    <RouterLink to="/Login" class="button register">Login</RouterLink>
    <RouterLink to="/" class="button home">Back to Home</RouterLink>

    <div class="form-container">
        <h2>Register Account</h2>
        <form @submit.prevent="registerByEmail">
            <input v-model="firstName" type="text" placeholder="First Name" class="input-field" required />
            <input v-model="lastName" type="text" placeholder="Last Name" class="input-field" required />
            <input v-model="email" type="email" placeholder="Email" class="input-field" required />
            <input v-model="password" type="password" placeholder="Password" class="input-field" required />
            <input v-model="reEnterPassword" type="password" placeholder="Re-enter Password" class="input-field"
                required />
            <button type="submit" class="button login">Register</button>
        </form>
    </div>
    
    <div>
        <button @click="registerByGoogle()" class="button register">Register by Google</button>
    </div>
</template>

<style scoped>
body {
    background-color: #f4f4f9;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 20px 0 70px;
}

.hero {
    background-color: #6c5ce7;
    color: white;
    text-align: center;
    padding: 60px 20px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: 60px;
    color: white;
    margin-bottom: 10px;
}

.hero p {
    font-size: 20px;
    margin-bottom: 20px;
}

.form-container {
    background-color: white;
    border-radius: 10px;
    padding: 40px 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
}

.form-container h2 {
    color: #6c5ce7;
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
}

.input-field {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 2px solid #e1e1e1;
    border-radius: 5px;
    font-size: 16px;
    color: #6c5ce7;
}

.input-field:focus {
    border-color: #6c5ce7;
    outline: none;
}

.button {
    background-color: #6c5ce7;
    color: white;
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
    background-color: #4e3dbf;
}

footer {
    background-color: #6c5ce7;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

</style>