<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="topnav">
      <nav>
        <RouterLink to="/">Strona główna</RouterLink>
        <RouterLink to="/licytacja">Licytacja</RouterLink>
        <RouterLink to="/system">System</RouterLink>
        <RouterLink to="/zegar">Zegar dla spóźnialskich</RouterLink>
      </nav>
  </div>
  <RouterView />
</template>

<style scoped>
.topnav {
  background-color: #333;
  overflow: hidden;
}
.topnav a {
  float: left;
  color: aliceblue;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 15px;
  border: solid;
  border-radius: 2px;
  border-width: 1px;
  border-color: hsla(160, 100%, 37%, 0.2)
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: hsla(160, 100%, 37%, 1);
  color: black;
  transition: 0.3s;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #ff0000;
  color: white;
}
</style>
