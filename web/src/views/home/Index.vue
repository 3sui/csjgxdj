<!--
 * @Author: your name
 * @Date: 2020-07-09 17:31:22
 * @LastEditTime: 2020-07-28 10:12:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\views\home\Index.vue
--> 
<!--  -->
<template>
  <div>
    <Banner :imgList="imgList" />
    <Information />
  </div>
</template>

<script>
import Banner from "../../components/Banner";
import Information from "../../components/home/Information";

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
  },

  computed: {},

  methods: {},
};
</script>
<style scoped>
</style>