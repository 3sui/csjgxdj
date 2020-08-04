<!--
 * @Author: your name
 * @Date: 2020-07-02 11:00:47
 * @LastEditTime: 2020-08-04 13:41:42
 * @LastEditors: Please set LastEditors
 * @Description: 头部
 * @FilePath: \web\src\components\Header.vue
--> 
<template>
  <div class="w-100 header">
    <!-- 头部上部分 -->
    <div class="w d-flex jc-between py-3">
      <div class>
        <router-link to="/">
          <img src="../assets/img/logo.png" alt height="50" />
        </router-link>
      </div>
      <div class style="width: 550px; flex-shrink: 1;">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select" size="middle">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="设备" value="1"></el-option>
            <el-option label="产品" value="2"></el-option>
            <el-option label="企业" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <div class="mt-2 searchMessage text-grey">
          <span>加工中心</span>
          <i>|</i>
          <span>焊接机</span>
          <i>|</i>
          <span>钣金加工</span>
          <i>|</i>
          <span>机械加工</span>
          <i>|</i>
          <span>ERP系统</span>
        </div>
      </div>
    </div>
    <div class="w nav">
      <p>
        <span>工厂对接</span>
        <span>生产对接</span>
        <span>产品对接</span>
        <span>辅料对接</span>
        <span>应用中心</span>
        <span>设备管理</span>
      </p>
    </div>
    <!-- <div class="d-flex jc-between px-5 py-3 border-bottom">
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
    </div>-->
    <!-- 头部下部分 -->
    <!-- <div class="px-5 d-flex ai-center border-bottom">
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
    </el-dropdown>-->
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
    <!-- <span class="el-icon-search"></span>
      </div>
      <div></div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      select: "",
      input: "",
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
.header {
  z-index: 2000;
  background-color: #f3f3f3;
  .searchMessage {
    i {
      margin: 0 8px;
    }
  }
  .nav {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #333;
    span {
      padding: 10px;
      margin-right: 20px;
    }
  }
}
</style>
<style lang="scss">
.el-select .el-input {
  width: 100px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>

