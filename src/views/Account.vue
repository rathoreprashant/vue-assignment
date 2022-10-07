<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <ul class="nav flex-column">
      <p class="heading">Account
        <hr />
      </p>
      <li class="nav-item">
        <RouterLink to="/" class="nav-link">Profile</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/Preferences" class="nav-link">Preferences</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/signIn" class="nav-link">Sign In & Security</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/integrations" class="nav-link">Integrations</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style>
.homeStyle {
  color: black;
}
</style>
