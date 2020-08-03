<!--
 * @Author: your name
 * @Date: 2020-07-02 11:00:47
 * @LastEditTime: 2020-07-31 09:22:46
 * @LastEditors: Please set LastEditors
 * @Description: 头部
 * @FilePath: \web\src\components\Header.vue
--> 
<template>
  <div id="header" class="w-100">
    <!-- 头部上部分 -->
    <div class="d-flex jc-between px-5 py-3 border-bottom">
      <div v-if="isLogin()">
        <span>欢迎来到常州工业物联大数据平台</span> |
        <span>吴奇</span> |
        <span @click="delUser">注销</span>
      </div>
      <div v-else>
        <span>欢迎来到常州工业物联大数据平台</span> |
        <span class="cp" @click="$router.push('/login')">登录</span> |
        <span class="cp" @click="$router.push('/register')">注册</span>
      </div>
      <div>
        <span class="pr-2">
          友情链接
          <i class="el-icon-arrow-down"></i>
        </span>
        <span class="pr-2">
          航天云网
          <i class="el-icon-arrow-down"></i>
        </span>
        <span class="pr-2">
          客服中心
          <i class="el-icon-arrow-down"></i>
        </span>
      </div>
    </div>
    <!-- 头部下部分 -->
    <div class="px-5 d-flex ai-center border-bottom">
      <div class="py-2">
        <a href>
          <img src="../assets/img/logo.png" alt height="50px" />
        </a>
      </div>
      <div class="fs-xl nav d-flex jc-start ai-center">
        <el-dropdown
          v-for="(item, index) in menu"
          :key="index"
          @command="handleCommand"
          placement="bottom"
        >
          <span class="text-dark fs-xl cp">{{item.title}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(j, i) in item.children" :key="i" :command="j.path">{{j.title}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <span>设备联网</span>
        <span>工业APP</span>
        <span>企业上云</span>
        <span>开发者社区</span>
        <span>方案与案例</span>
        <span>总控中心</span>
        <span>行业平台</span>
        <span>IDC</span>
        <span>专利搜索</span>
        <span>工业品商城</span>
        <span>产教融合</span>-->
        <span class="el-icon-search"></span>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userName: "",
      menu: [
        {
          title: "供需对接",
          children: [
            { title: "工厂对接", path: "/login" },
            { title: "生产对接", path: "/login" },
            { title: "产品对接", path: "/login" },
            { title: "原料/辅料对接", path: "/login" },
          ],
        },
        {
          title: "设备联网",
          children: [
            { title: "工厂对接", path: "/login" },
            { title: "生产对接", path: "/login" },
            { title: "产品对接", path: "/login" },
            { title: "原料/辅料对接", path: "/login" },
          ],
        },
        {
          title: "工业app",
          children: [
            { title: "自定义应用中心类目", path: "/login" },
            { title: "订阅到期提醒", path: "/login" },
            { title: "后台管理", path: "/login" },
          ],
        },
      ],
    };
  },

  components: {},

  computed: {},

  methods: {
    isLogin() {
      return localStorage.token ? true : false;
    },
    fetchUserInfo() {
      this.userName = localStorage.userName;
    },
    delUser() {
      localStorage.clear();
      isLogin();
    },
    handleCommand(command) {
      this.$router.push(command);
    },
  },
  mounted() {
    this.fetchUserInfo();
  },
};
</script>
<style lang="scss" scoped>
#header {
  z-index: 10000;
  background-color: #f3f3f3;
}
.nav {
  span {
    padding: 10px;
  }
}
</style>>

