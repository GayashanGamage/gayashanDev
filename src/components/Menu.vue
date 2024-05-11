<template>
  <div class="c-levelOne-container">
    <div class="menu-button">
      <router-link to="/" class="menu-button">Projects</router-link>
    </div>
    <div class="menu-button">
      <router-link to="/leetcode" class="menu-button">LeetCode</router-link>
    </div>
    <div class="menu-button">
      <router-link to="/blog" class="menu-button">Blog</router-link>
    </div>
    <div class="menu-button">
      <router-link to="/techstack" class="menu-button">TechStack</router-link>
    </div>
  </div>
</template>
<script setur></script>

<style scoped>
.c-levelOne-container {
  display: flex;
  height: 100%;
  gap: 2px;
  background-color: aliceblue;
}
.menu-button {
  background-color: var(--button-background-color);
  color: var(--button-font-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  font-size: 1.4rem;
  text-align: center;
  border-bottom: 2px solid aliceblue;
}
.menu-button:hover {
  background-color: var(--button-hover-color);
  color: var(--button-font-color);
}
.menu-button:focus {
  background-color: var(--button-background-color);
  color: var(--button-font-color);
}
</style>
