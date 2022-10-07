<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Account from './views/Account.vue'
import PersonalNetwork from './views/PersonalNetwork.vue'
import CompanyNetwork from './views/CompanyNetwork.vue'
import ProfileHead from './views/ProfileHead.vue'

</script>

<template>
  <div class="grid-container">
      <div class="item1">
        <nav class="bg-blue text-black text-end border-bottom p-3 pe-5">
          <img src="../public/triangleicon.jpeg" alt="" style="width: 2em; height: 2em;" >
          <img src="../public/cube.png" alt="" style="width: 2em; height: 2em;">
          <img src="../public/profile1.webp" alt="" style="width: 2.5em; height: 2.5em;">
          <!-- TODO: Add icons -->
        </nav>
      </div>
  <header class="container text-black item2">
    <ProfileHead />
    <Account />
    <PersonalNetwork />
    <CompanyNetwork />  
  </header>
  <div class="item3">
    <RouterView />
  </div>
  
  </div>
  
</template>

<style>
.myNav {
  background-color: aqua;
}

.heading>hr {
  margin: 0px;
}

.nav-item {
  margin-top: 0px;
}

.nav-link {
  color: rgba(64, 62, 62, 0.641);
  padding-top: 0px;
  margin-left: 0px;
  padding-left: 0px;
}

.nav-link:hover {
  color: rgb(0, 0, 0);
}

.userName {
  font-size: 20px;
  padding-bottom: 0px;
}

.container {
  border-right: 1px rgb(230, 230, 230) solid;
}
.grid-container{
  display: grid;
    grid-template-areas:
    'header header header header header header'
    'sidebar right right right right right';
}
.item1 { grid-area: header; }
.item2 { grid-area: sidebar; }
.item3 { grid-area: right; }
.item1 > nav > img{
  margin-right: 1em;
}

.navCont {
  padding: 0;
  width: 10rem;
  display: flex;
  flex-direction: column
}

.navCont p {
  margin: 0px;
  font-size: 1rem;
}

.navCont > RouterLink {
  color: black;
}
</style>
