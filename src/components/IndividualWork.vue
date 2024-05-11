<template>
  <div class="c-levelOne-container">
    <div class="c-levelTwo-container button-bar">
      <button class="button" @click="back()">
        <span class="icon-content">Back</span>
        <span class="icon-content material-icons"> arrow_back </span>
      </button>
      <button class="button" @click="liveProject(projects[project]['domain'])">
        <span class="icon-content">Live</span>
        <span class="icon-content material-icons"> ads_click </span>
      </button>
      <button class="button" @click="githubCode(projects[project]['github'])">
        <span class="icon-content">GitHub</span>
        <span class="icon-content material-icons"> data_object </span>
      </button>
    </div>
    <div class="c-levelTwo-container">
      <h2 class="title">{{ projects[project]["name"] }}</h2>
      <h3 class="sub-topic object">Objective</h3>
      <p class="content">{{ projects[project]["objective"] }}</p>
      <h3 class="sub-topic technology">technologies I used</h3>
      <div class="c-levelThree-container technology-container">
        <p
          v-for="item in projects[project]['techstack']"
          :key="item"
          class="content tech-item"
        >
          {{ item }}
        </p>
      </div>
      <h3 class="sub-topic feature">key features</h3>
      <div class="c-levelThree-container">
        <ul>
          <li
            v-for="item in projects[project]['features']"
            :key="item"
            class="content"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <h3 class="sub-topic chalengers">challengers I had to faced</h3>
      <div class="levelThree-container">
        <ul>
          <li
            v-for="item in projects[project]['challengers']"
            :key="item"
            class="content"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import projects from "@/assets/projects.json";

const back = () => {
  router.replace("/");
};

const liveProject = (link) => {
  window.open(link);
};

const githubCode = (link) => {
  window.open(link);
  // console.log(link);
};

const project = router.currentRoute.value.params["projectName"];
</script>

<style scoped>
.c-levelOne-container {
  width: 80%;
  margin: 0px auto 60px auto;
}
.c-levelThree-container {
  width: 100%;
  margin: 10px 0 20px 0;
}
.button-bar {
  position: sticky;
  top: 16vh;
  padding: 20px 0px 20px 0px;
  background-color: var(--background-color-content);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.button {
  align-self: self-end;
  padding: 0%;
  /* display: inline-flex;
  justify-content: space-evenly;
  align-items: center; */
  display: grid;
  grid-template-columns: 6fr 2fr;
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
.title {
  font-size: 3rem;
  margin-bottom: 20px;
}
.sub-topic {
  font-size: 1.8rem;
  margin-bottom: 20px;
}
.content {
  font-size: 1.2rem;
}
.technology-container {
  display: flex;
}
.tech-item {
  background-color: black;
  color: aliceblue;
  border-radius: 4px;
  margin-right: 20px;
  padding: 5px 20px;
}
</style>
