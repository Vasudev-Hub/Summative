<script setup>
import { useStore } from '../store';
import { RouterLink, useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

function logoutAndSignOut(event) {
  event.preventDefault();
  router.push('/').then(() => {
    window.location.reload();
  });
}
</script>

<template>
  <div class="header-buttons">
    <div v-if="!store.email">
      <RouterLink to="/register" class="button register">Register</RouterLink>
      <RouterLink to="/login" class="button login">Login</RouterLink>
    </div>

    <div v-if="store.email">
      <p class="welcome-message">Hello {{ store.firstName }}!</p>
      <RouterLink to="/cart" class="button cart">Cart</RouterLink>
      <RouterLink to="/settings" class="button settings">Settings</RouterLink>
      <RouterLink to="/" class="button settings" @click="logoutAndSignOut">Logout</RouterLink>
    </div>

    <h1>StreamFlix</h1>
  </div>
</template>

<style scoped>
h1 {
  margin-left: auto;
  padding: 1%;
  color: #ffffff; /* White for the main header text */
}

.header-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.button {
  margin-right: 10px;
  background-color: #9b4d96; /* Purple button background */
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  padding: 10px 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.header-buttons .button:hover {
  background-color: #5c1e73; /* Darker purple on hover */
}

.welcome-message {
  margin-right: 20px;
  font-size: 18px;
  color: #f2e1f3; /* Lighter purple text for the welcome message */
}
</style>