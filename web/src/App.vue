<!--
 * @Author: your name
 * @Date: 2020-07-02 09:16:50
 * @LastEditTime: 2020-07-31 17:15:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\App.vue
--> 
<template>
  <div id="app">
    <!-- <Home /> -->
  
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from "./views/Home.vue";

export default {
  name: "app",
  components: {
    // Home
  },
};
</script>

<style>
#app {
  /* height:5000px; */
  overflow: hidden;
  overflow-x: hidden;
  /* overflow-y: scroll; */
}
</style>
