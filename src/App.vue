<template>
  <div class="levelOne-container">
    <div class="levelTwo-container menu">
      <Menu></Menu>
    </div>
    <div class="levelTwo-container description">
      <Introduction></Introduction>
    </div>
    <div class="levelTwo-container content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Introduction from "./components/Introduction.vue";
import Menu from "./components/Menu.vue";
import Mywork from "./components/Mywork.vue";
</script>

<style>
* {
  margin: 0;
}
html {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
}
body {
  background-color: var(--background-color);
}
.levelOne-container {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "description menu"
    "description content";
}
.levelTwo-container.menu {
  grid-area: menu;
  position: sticky;
  top: 0;
  height: 15vh;
}
.levelTwo-container.description {
  grid-area: description;
  position: sticky;
  top: 0;
  height: 100vh;
  margin: 0;
}
.levelTwo-container.content {
  grid-area: content;
  min-height: 85vh;
  max-height: auto;
  margin: 2px 0 0 0;
  background-color: var(--background-color-content);
}
</style>
