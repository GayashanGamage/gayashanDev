<template>
  <div class="container">
    <div class="intro sub-container">
      <Intro></Intro>
    </div>
    <div class="menu sub-container">Menu</div>
    <div class="content sub-container">Content</div>
    <div class="footer sub-container">Footer</div>
  </div>
</template>

<script setup>
import Intro from "./components/Intro.vue";

name: "App";
</script>

<style>
* {
  margin: 0px;
  font-family: "Poppins", sans-serif;
}
.container {
  display: grid;
  width: 100%;
  height: 850px;
  grid-template-columns: 1fr 850px;
  grid-template-rows: 2fr 20fr 2fr;
  grid-template-areas:
    "intoduction menu"
    "intoduction content"
    "footer footer";
}
.intro {
  grid-area: intoduction;
  background-color: #151965;
}
.menu {
  grid-area: menu;
}
.content {
  grid-area: content;
}
.footer {
  grid-area: footer;
}
.sub-container {
  border: 1px solid black;
}
</style>
