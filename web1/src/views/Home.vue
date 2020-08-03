<!--
 * @Author: your name
 * @Date: 2020-07-02 09:16:50
 * @LastEditTime: 2020-08-03 11:07:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\views\Home.vue
--> 
<template>
  <div class="home">
    <template>
      <el-backtop target=".home" :bottom="100" :visibility-height="10">
        <div
          style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
        >UP</div>
      </el-backtop>
    </template>
    <Header class="header"></Header>
    <router-view></router-view>
    <!-- <br v-for="i in 100" :key="i" /> -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
}
.home {
  height: 100vh; /*height可以根据你要创建的页面进行修改*/
  width: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
  // overflow: hidden;
  // overflow-x: hidden;
  /* overflow-y: scroll; */
}
</style>
