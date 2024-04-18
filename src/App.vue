<template>
  <div class="container">
    <div class="intro sub-container">Introduction</div>
    <div class="menu sub-container">Menu</div>
    <div class="content sub-container">Content</div>
    <div class="footer sub-container">Footer</div>
  </div>
</template>

<script setup>
name: "App";
</script>

<style>
* {
  margin: 0px;
}
.container {
  display: grid;
  width: 100%;
  height: 731px;
  grid-template-columns: repeat (2, 1fr);
  grid-template-rows: 2fr 20fr 2fr;
  grid-template-areas:
    "intoduction menu"
    "intoduction content"
    "footer footer";
}
.intro {
  grid-area: intoduction;
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
