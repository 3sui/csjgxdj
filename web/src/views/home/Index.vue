<!--
 * @Author: your name
 * @Date: 2020-07-09 17:31:22
 * @LastEditTime: 2020-08-26 10:37:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\views\home\Index.vue
--> 
<!--  -->
<template>
  <div>
    <Banner :imgList="imgList" />
    <Statistics />
    <Information />
    <!-- <SearchInfo /> -->
    <AppCenter />
    <!-- <Introduction /> -->
    <App />
    <Recommend />
    <Dialog :DialogVisible="$store.state.Dialog" />
  </div>
</template>

<script>
import Banner from "../../components/Banner";
import Statistics from "../../components/home/Statistics";
import AppCenter from "../../components/home/AppCenter";
import Information from "../../components/home/Information";
// import SearchInfo from "../../components/home/SearchInfo";
import Introduction from "../../components/home/Introduction";
import App from "../../components/home/App";

import Recommend from "../../components/home/Recommend";
import Dialog from "../../components/tools/Dialog";

import img1 from "../../assets/img/banner1.png";
import img2 from "../../assets/img/banner2.jpeg";

export default {
  name: "Index",
  data() {
    return {
      imgList: [img1, img2],
    };
  },

  components: {
    Banner,
    Information,
    Introduction,
    // SearchInfo,
    Statistics,
    AppCenter,
    App,
    Recommend,
    Dialog,
  },

  computed: {},

  methods: {},
};
</script>
<style scoped>
</style>