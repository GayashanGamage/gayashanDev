<template>
  <div class="main-container">
    <div class="sub-containers">
      <introduction></introduction>
    </div>
    <!-- <div class="sub-containers"></div>
    <div class="sub-containers"></div> -->
  </div>
</template>

<script setup>
import Introduction from "./components/Introduction.vue";
name: "App";
</script>

<style>
* {
  margin: auto 0px;
  font-family: "Poppins", sans-serif;
}

.main-container {
  background-color: burlywood;
  width: auto;
  height: 800px;
  padding-top: 1px;
}
.sub-containers {
  /* background-color: cornflowerblue; */
  /* border: 1px solid black; */
  width: 60%;
  height: 400px;
  margin: 160px auto;
}
</style>
