<template>
  <div class="c-levelOne-container">
    <div class="c-levelTwo-container" v-for="item in newData" :key="item">
      <p class="blog-title">{{ item["title"] }}</p>
      <!-- <button @click="visitMedium(item['link'])">click to visit</button> -->
      <button class="button" @click="visitMedium(item['link'])">
        <span class="icon-content">Read on Medium</span>
        <span class="icon-content material-icons"> open_in_new </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import blogData from "@/assets/blog.json";
import axios from "axios";
import { onMounted, ref } from "vue";
// https://v1.nocodeapi.com/shangamage/medium/wnCavSsEZOSpRbSt

const newData = ref("");

onMounted(() => {
  axios
    .get("https://wefw.wefew.fe")
    .then(function (response) {
      console.log(response);
      newData.value = response.data;
    })
    .catch(function (error) {
      newData.value = blogData;
    });
});

const visitMedium = (url) => {
  window.open(url);
};
</script>

<style scoped>
.c-levelOne-container {
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  margin: 40px auto;
}
.c-levelTwo-container {
  padding: 8px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px;
  width: 100%;
  margin: 3vh 0;
  display: flex;
  flex-direction: column;
}
.blog-title {
  font-size: 1.5rem;
  font-weight: 900;
}
.button {
  align-self: self-end;
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
