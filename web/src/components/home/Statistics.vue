<!--
 * @Author: your name
 * @Date: 2020-08-11 14:21:46
 * @LastEditTime: 2020-08-20 16:12:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\components\home\Statistics.vue
-->
<!--  -->
<template>
  <div class="bg-white">
    <div class="w d-flex jc-between ai-center">
      <div class="left d-flex jc-between py-5">
        <div class="text-left" v-for="(item, index) in tableData" :key="index">
          <p class="fs-xxl-4 text-dark-1">{{item.num}}</p>
          <!-- <div class="my-4 line"></div> -->
          <p class="fs-xl mt-4">{{item.title}}</p>
        </div>
      </div>
      <div v-if="!userName" class="right text-center">
        <div>
          <img src="@/assets/img/logo.png" alt width="230px" />
        </div>
        <p class="fs-xxl my-3">Hi 欢迎来到长三角工业互联网平台</p>
        <p>
          <router-link to="/login" tag="span" class="login">登录</router-link>
          <router-link to="/register" tag="span" class="register ml-3">注册</router-link>
        </p>
      </div>
      <div v-else class="right text-center">
        <div>
          <img src="@/assets/img/default_handsome.jpg" style="border-radius: 50%;" alt width="40px" />
        </div>
        <p class="fs-xxl my-3">Hi {{userName}}</p>
        <p class="fs-xxl my-3">欢迎来到长三角工业互联网平台</p>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../../bus'
export default {
  name: "Statistics",
  data() {
    return {
      userName: "",
      tableData: [
        { title: "入住会员", num: 0, count: 3000 },
        { title: "上云设备", num: 0, count: 300 },
        { title: "发布需求", num: 0, count: 4000 },
        { title: "成交金额", num: 0, count: 16000 },
        { title: "采购金额", num: 0, count: 8000 },
      ],
      a: 0,
    };
  },

  components: {},

  computed: {},
  created(){
    bus.$on('logout', () => {
      this.fetchUserInfo()
    })
  },
  mounted() {
    this.countUp();
    this.fetchUserInfo();
  },
  methods: {
    valueFlash(dom, val, s) {
      let v = 0; //累计值
      let v2 = 16; //执行毫秒值,不建议数字设置的过低
      s = Math.ceil((val / (s * 1000)) * v2); //计算每次递增量
      var timmer = setInterval(function () {
        v += s;
        if (v >= val) {
          dom.innerText = val;
          clearInterval(timmer);
        } else {
          dom.innerText = v;
        }
      }, v2);
    },
    timer(a) {
      let timmer = setInterval(() => {
        if (this.tableData[a].num < this.tableData[a].count) {
          this.tableData[a].num += Math.ceil(
            (this.tableData[a].count / (5 * 1000)) * 10
          );
        } else {
          clearInterval(timmer);
        }
      }, 3);
    },
    countUp() {
      for (let i = 0; i < this.tableData.length; i++) {
        this.timer(i);
      }
    },
    fetchUserInfo() {
      window.console.log(localStorage.userName);
      this.userName = localStorage.userName;
    },
  },
};
</script>
<style scoped lang="scss">
.left {
  width: 70%;
  .line {
    width: 40px;
    height: 3px;
    background-color: rgb(27, 103, 162);
  }
}
.right {
  flex: 1;
  // width: ;
  span {
    text-align: center;
    display: inline-block;
    width: 100px;
    line-height: 35px;
    border: 1px solid rgb(27, 103, 162);
    cursor: pointer;
    &.login {
      color: #fff;
      background-color: rgb(27, 103, 162);
    }
    &.register {
      color: rgb(27, 103, 162);
      border: 1px solid rgb(27, 103, 162);
    }
  }
}
</style>