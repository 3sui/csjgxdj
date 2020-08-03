<!--
 * @Author: your name
 * @Date: 2020-07-09 17:13:35
 * @LastEditTime: 2020-07-13 10:00:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\views\home\Banner.vue
--> 
<!--  -->
<template>
  <div>
    <div class="" style="width: 100%;max-width: 2000px;margin: 0 auto">
      <el-carousel trigger="click" height="440px">
        <el-carousel-item v-for="item in imgList" :key="item">
          <!-- <h3 class="small">{{ item }}</h3> -->
          <el-image style="height: 100%;width: 100%" :src="item" fit="cover"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: ["imgList"],
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style scoped>
</style>