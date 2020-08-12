<!--
 * @Author: your name
 * @Date: 2020-07-02 11:00:47
 * @LastEditTime: 2020-08-11 16:23:43
 * @LastEditors: Please set LastEditors
 * @Description: 头部
 * @FilePath: \web\src\components\Header.vue
--> 
<template>
  <div class="w-100 header">
    <div class="top bg-light">
      <div class="w text-grey d-flex jc-between">
        <p>
          Hi~ 欢迎来到长三角供需对接平台
          <span class="ml-3">
            <span>登录</span>
            <span class="mx-2">|</span>
            <span>注册</span>
          </span>
        </p>

        <div class="text-right">
          <router-link to tag="span">帮助中心</router-link>
          <span class="mx-2">|</span>
          <span>客服电话：400-853-686</span>
        </div>
      </div>
    </div>
    <!-- 头部上部分 -->
    <div class="w d-flex jc-between py-3 mb-3">
      <div class>
        <router-link to="/">
          <img src="../assets/img/logo.png" alt height="50" />
        </router-link>
      </div>
      <div class style="width: 550px; flex-shrink: 1;">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select" size="middle">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="设备" value="设备"></el-option>
            <el-option label="产品" value="产品"></el-option>
            <el-option label="企业" value="企业"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <div class="mt-2 searchMessage text-grey">
          <router-link to tag="span">加工中心</router-link>
          <i>|</i>
          <router-link to tag="span">焊接机</router-link>
          <i>|</i>
          <router-link to tag="span">钣金加工</router-link>
          <i>|</i>
          <router-link to tag="span">机械加工</router-link>
          <i>|</i>
          <router-link to tag="span">ERP系统</router-link>
        </div>
      </div>
    </div>
    <div class="w nav">
      <p>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            工厂对接
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/compaines">工厂对接1</el-dropdown-item>
            <el-dropdown-item command="/compaines">工厂对接2</el-dropdown-item>
            <el-dropdown-item command="/compaines">工厂对接3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            生产对接
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/compaines">生产对接1</el-dropdown-item>
            <el-dropdown-item command="/compaines">生产对接2</el-dropdown-item>
            <el-dropdown-item command="/compaines">生产对接3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            产品对接
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/compaines">产品对接1</el-dropdown-item>
            <el-dropdown-item command="/compaines">产品对接2</el-dropdown-item>
            <el-dropdown-item command="/compaines">产品对接3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            辅料对接
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/compaines">辅料对接1</el-dropdown-item>
            <el-dropdown-item command="/compaines">辅料对接2</el-dropdown-item>
            <el-dropdown-item command="/compaines">辅料对接3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            应用中心
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/compaines">应用中心1</el-dropdown-item>
            <el-dropdown-item command="/compaines">应用中心2</el-dropdown-item>
            <el-dropdown-item command="/compaines">应用中心3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            设备管理
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/compaines">设备管理1</el-dropdown-item>
            <el-dropdown-item command="/compaines">设备管理2</el-dropdown-item>
            <el-dropdown-item command="/compaines">设备管理3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
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
      select: "设备",
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
  background-color: #fff;
  .top {
    // width: 100%;
    height: 40px;
    line-height: 40px;
    p {
      line-height: 40px;
    }
    span {
      display: inline-block;
      // width: 60px;
    }
  }
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
      cursor: pointer;
    }
  }
}
</style>

<style  lang="scss">
.el-select .el-input {
  width: 100px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>

