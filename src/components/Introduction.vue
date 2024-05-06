<template>
  <div>
    <p class="intro-description">Hi... I'm...</p>
    <h1 class="intro-name">Gayashan Gamage</h1>
    <p class="intro-title">SOFTWARE ENGINEER</p>
    <p class="intro-description">
      I love build logical stuff using code and my fingers to get easier your
      businees tasks and daily life
    </p>
    <div class="intro-button-div">
      <button class="intro-button">
        <span class="material-symbols-outlined"> description </span>Download CV
      </button>
      <button class="intro-button intro-button-linkedin">
        <span class="material-symbols-outlined">person_add</span>LinkedIn
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scope>
.intro-button-div {
  margin-top: 5%;
  display: flex;
  /* justify-content: center; */
}
.intro-button {
  padding: 10px 20px;
  background-color: black;
  color: burlywood;
  border: 0px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
}
.intro-button-linkedin {
  margin-left: 20px;
}
.intro-name {
  font-size: 90px;
  padding: 0 0 20px 0;
}
.intro-description {
  font-size: 24px;
  font-weight: 300;
}
.intro-title {
  font-size: 24px;
  font-weight: 900;
  padding: 0 0 20px 0;
}
.material-symbols-outlined {
  font-family: "Material Icons";
  margin-right: 15px;
}
</style>
