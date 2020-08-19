<!--
 * @Author: your name
 * @Date: 2020-08-17 11:17:26
 * @LastEditTime: 2020-08-18 17:10:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\views\user\Finished.vue
-->
<!--  -->
<template>
  <div>
    <div class="w-100 bg-white mb-5">
      <div class="w py-2">
        <router-link to="/">
          <img src="../../assets/img/logo.png" height="60px" alt />
        </router-link>
      </div>
    </div>
    <el-steps
      class="w bg-white"
      :active="2"
      finish-status="success"
      simple
      style="margin-bottom: 20px;"
    >
      <el-step title="用户注册"></el-step>
      <el-step title="加入企业"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <div class="w bg-white p-1">
      <div>
        <div class="text-center p-5">
          <svg
            t="1597043425136"
            class="icon m-5"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2155"
            width="100"
            height="100"
          >
            <path
              d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 947.2c-240.64 0-435.2-194.56-435.2-435.2S271.36 76.8 512 76.8s435.2 194.56 435.2 435.2-194.56 435.2-435.2 435.2z m266.24-578.56c0 10.24-5.12 20.48-10.24 25.6l-286.72 286.72c-5.12 5.12-15.36 10.24-25.6 10.24s-20.48-5.12-25.6-10.24l-163.84-163.84c-15.36-5.12-20.48-15.36-20.48-25.6 0-20.48 15.36-40.96 40.96-40.96 10.24 5.12 20.48 10.24 25.6 15.36l138.24 138.24 261.12-261.12c5.12-5.12 15.36-10.24 25.6-10.24 20.48-5.12 40.96 15.36 40.96 35.84z"
              fill="#6BC839"
              p-id="2156"
            />
          </svg>
          <h2 class="p-5 fs-xxl-3">恭喜您注册成功</h2>
          <div class="btn">
            <router-link to="index" tag="span" class="btn1">进入平台</router-link>
            <router-link to="#" tag="span" class="btn2">完善个人信息</router-link>
            <router-link to="#" tag="span" class="btn2">完善企业信息</router-link>

            <!-- 
            <span>进入平台</span>
            <span>成为企业用户</span>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Finished",
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped lang="scss">
.btn {
  span {
    display: inline-block;
    width: 200px;
    // height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    // background-color: red;
  }
  .btn1 {
    border: 1px solid #1875f0;
    color: #1875f0;
  }
  .btn2 {
    margin-left: 30px;
    color: #fff;
    background-color: #1875f0;

    border: 1px solid #1875f0;
  }
}
</style>