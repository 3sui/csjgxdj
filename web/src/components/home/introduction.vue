<!--
 * @Author: your name
 * @Date: 2020-08-12 10:24:13
 * @LastEditTime: 2020-08-12 13:47:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\components\home\introduction.vue
-->
<!--  -->
<template>
  <div class="bg-dark w-100 p-5 text-light-1">
    <div class="w d-flex">
      <div class="left">
        <h3 class="fs-xxl-3">
          遍布全球的数据中心，
          <br />让跨域体验更流畅
        </h3>
        <p class="fs-xl">
          无论是硅谷核心区，还是迪拜贸易枢纽区，全
          <br />无缝覆盖，提供CN2高速网络，BGP接入支持
        </p>
        <router-link to="#" class="more">了解全球数据中心</router-link>
      </div>
      <div class="right">
        <p class="mb-3">
          <span>国内数据中心</span>
          <span>全球数据中心</span>
        </p>
        <div class="d-flex jc-between border-top p-3">
          <dl>
            <dt>青岛</dt>
            <dd>青岛</dd>
            <dd>青岛</dd>
          </dl>
          <dl>
            <dt>青岛</dt>
            <dd>青岛</dd>
            <dd>青岛</dd>
          </dl>
          <dl>
            <dt>青岛</dt>
            <dd>青岛</dd>
            <dd>青岛</dd>
          </dl>
          <dl>
            <dt>青岛</dt>
            <dd>青岛</dd>
          </dl>
          <dl>
            <dt>青岛</dt>
            <dd>青岛</dd>
          </dl>
          <dl>
            <dt>青岛</dt>
            <dd>青岛</dd>
          </dl>
          <dl>
            <dt>青岛</dt>
            <dd>青岛</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "introduction",
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped lang="scss">
.left {
  width: 50%;
  h3 {
    margin-bottom: 20px;
    line-height: 35px;
    font-weight: 500;
  }
  p {
    line-height: 20px;
  }
  .more {
    display: inline-block;
    margin-top: 100px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    font-size: 14px;
    color: #999;
  }
}
.right {
  width: 50%;
  p {
      span {
          margin-right: 35px;
          font-size: 18px;
          color: #eee;
      }
  }
  dt {
      color: #ccc;
      font-size: 16px;
  }
  dd {
      margin-top: 10px;
  }
}
</style>