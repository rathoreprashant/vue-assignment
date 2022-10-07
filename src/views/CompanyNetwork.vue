<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink } from 'vue-router'
</script>
      
<template>
  <div>
    <ul class="nav flex-column">
      <p class="heading">Company Networks
        <hr />
      </p>
      <li class="nav-item">
        Aman's Company Network
      <li class="nav-item">
        <RouterLink to="/companyOverview" class="nav-link">Overview</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/members" class="nav-link">Members</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/distribution" class="nav-link">Distribution Lists</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/companyTeamWorkspaces" class="nav-link">Team Workspaces (1)</RouterLink>
      </li>
      </li>
    </ul>
  </div>
  <!-- <RouterView /> -->
</template>
      
<style>
.homeStyle {
  color: black;
}
</style>
      