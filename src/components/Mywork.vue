<template>
  <div class="c-levelOne-container">
    <div class="c-levelTwo-container" v-for="item in projectData" :key="item">
      <div class="c-levelThree-container image"></div>
      <h3 class="project-title">{{ item["name"] }}</h3>
      <p class="project-description">{{ item["short-description"] }}</p>
      <div class="c-levelThree-container techstack">
        <p
          class="tech-items"
          v-for="techitem in item.techstack"
          :key="techitem"
        >
          {{ techitem }}
        </p>
      </div>
      <div class="c-levelThree-container button-container">
        <button class="button">
          <span class="icon-content">Live</span>
          <span class="icon-content material-icons"> open_in_new </span>
        </button>
        <button class="button" @click="individualWork(item['name'])">
          <span class="icon-content">More</span>
          <span class="icon-content material-icons"> ads_click </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import projectData from "@/assets/projects.json";
import router from "@/router";

const individualWork = (projectName) => {
  router.push({ name: "singleProject", params: { projectName: projectName } });
};
</script>

<style scoped>
.c-levelOne-container {
  width: 80%;
  height: auto;
  margin: 10px auto;
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
}
.c-levelTwo-container {
  margin: 40px 0px;
  width: 100%;
  height: 30vh;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 2fr 5fr 1fr 2fr;
  grid-template-areas:
    "image title"
    "image description"
    "image tech"
    "image action-button";
}
.c-levelThree-container.image {
  grid-area: image;
  background-color: aliceblue;
  border-radius: 4px;
}
.project-title {
  grid-area: title;
  font-size: 1.6rem;
  /* color: aliceblue; */
}
.project-description {
  grid-area: description;
  font-size: 1.2rem;
  /* color: aliceblue; */
}
.techstack {
  grid-area: tech;
  display: flex;
}
.techstack .tech-items {
  background-color: black;
  color: aliceblue;
  border-radius: 3px;
  padding: 3px 8px;
  margin: 4px;
}
.button-container {
  grid-area: action-button;
}
.button {
  padding: 0%;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  border: 0px;
  background-color: #8988fe;
  cursor: pointer;
  font-size: 1rem;
  color: aliceblue;
  border-radius: 5px;
  margin-right: 20px;
}
.button:hover {
  background-color: #2c2b7f;
}
.icon-content {
  padding: 7px 40px;
  font-weight: 900;
}
.material-icons {
  padding: 7px;
  background-color: #2c2b7f;
  border-radius: 0 5px 5px 0;
}
</style>
