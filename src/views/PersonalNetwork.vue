<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>
    
<template>
    <div>
        <ul class="nav flex-column">
            <p class="heading">Personal Network
                <hr />
            </p>
            <li class="nav-item">
                <RouterLink to="/personalOverview" class="nav-link">Overview</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/personalWorkspace" class="nav-link">My Personal Workspace</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/personalTeamWorkspaces" class="nav-link">Team Workspaces (0)</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/plans&Payment" class="nav-link">Plans & Payment</RouterLink>
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
    