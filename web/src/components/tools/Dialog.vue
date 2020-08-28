<!--
 * @Author: your name
 * @Date: 2020-08-26 09:26:39
 * @LastEditTime: 2020-08-26 15:02:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\components\tools\Dialog.vue
-->
<template>
  <el-dialog
    title="需要您进行登入操作"
    :visible.sync="DialogVisible"
    :before-close="() => {$store.commit('DialogHidden')}"
    width="30%"
    center
  >
    <span>您是否拥有云网账号?</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="login">有账号 直接登录</el-button>
      <el-button type="primary" @click="register">没有账号 先注册</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    DialogVisible: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },

  methods: {
    login() {
      this.$store.commit("DialogHidden");
      window.location.href =
        "http://auth.mst.casicloud.com/1/sso/login?redirect=http:%2F%2F58.216.47.108:8893";
      let url = window.location.href;
      window.console.log(
        url.split("?").pop().split("&").shift().split("=").pop()
      );
    },
    register() {
      this.$store.commit("DialogHidden");
      this.$router.push("/register");
    },
  },
};
</script>
