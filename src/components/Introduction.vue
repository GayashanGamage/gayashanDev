<template>
  <div class="c-levelOne-container">
    <p class="description">Hi.. I'm..</p>
    <h1 class="description name">Gayashan Gamage</h1>
    <h3 class="description position">SOFTWARE ENGINEER</h3>
    <p class="description">
      I love build logical stuff using code lines and my fingers to get easier
      business task and daily life
    </p>
    <div class="c-levelTwo-container buttons">
      <button>Download CV</button>
      <button>LinkedIn</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.c-levelOne-container {
  /* border: 1px solid black; */
  margin: 25vh 3vw;
}
.description {
  color: var(--font-color);
  font-size: 2rem;
}
.name {
  font-size: 4rem;
  font-weight: 900;
}
button {
  font-family: "Poppins", sans-serif;
  background-color: var(--button-background-color);
  font-size: var(--button-font-size);
  color: var(--button-font-color);
  padding: 12px 25px;
  border: 0px;
  border-radius: 6px;
  margin-right: 20px;
}
</style>
