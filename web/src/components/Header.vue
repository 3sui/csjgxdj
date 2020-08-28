<!--
 * @Author: your name
 * @Date: 2020-07-02 11:00:47
 * @LastEditTime: 2020-08-27 22:51:48
 * @LastEditors: Please set LastEditors
 * @Description: 头部
 * @FilePath: \web\src\components\Header.vue
--> 
<template>
  <div class="w-100 header shadow">
    <div class="top bg-light-2">
      <div class="w text-grey d-flex jc-between">
        <p>
          Hi~ 欢迎来到长三角供需对接平台
          <span class="ml-3" v-if="!$store.state.user">
            <!-- <span class="cp" @click="login">登录</span> -->
            <router-link class="cp" to="login" tag="span">登录</router-link>

            <span class="mx-2">|</span>
            <router-link class="cp" to="register" tag="span">注册</router-link>
          </span>
          <span class="ml-3" v-else>
            <router-link class="cp" to="#" tag="span">
              你好
              <span class="text-red">{{$store.state.user.fullname}}</span>
            </router-link>
            <span class="mx-2">|</span>
            <span class="cp" @click="delUser">注销</span>
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
    <div class="w d-flex jc-between py-3 mb-3 ai-center">
      <div class>
        <router-link to="/">
          <img src="../assets/img/logo.png" alt height="60" />
        </router-link>
      </div>
      <div class style="width: 450px; flex-shrink: 1;">
        <el-input
          placeholder="请输入内容"
          v-model="input"
          class="input-with-select"
          size="small"
          style="border: 2px solid #1875f0;border-radius: 4px"
        >
          <el-select
            class="bg-light-2 text-grey-1"
            v-model="select"
            slot="prepend"
            placeholder="请选择"
          >
            <el-option label="设备" value="设备"></el-option>
            <el-option label="产品" value="产品"></el-option>
            <el-option label="企业" value="企业"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" class="bg-info text-white fs-sm">搜索</el-button>
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
        <!-- <el-dropdown @command="handleCommand">
          <router-link to="Interconnection" class="el-dropdown-link" tag="span">设备物联</router-link>
        </el-dropdown>-->
        <el-dropdown @command="handleCommand" placement="bottom">
          <span class="el-dropdown-link">设备物联</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/demand">接入设备</el-dropdown-item>
            <el-dropdown-item command="/newneeds">设备管理</el-dropdown-item>
            <el-dropdown-item command="/demand">设备预警</el-dropdown-item>
            <el-dropdown-item command="/demand">设备租债</el-dropdown-item>
            <el-dropdown-item command="/demand">查找设备</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="handleCommand" placement="bottom">
          <span class="el-dropdown-link">应用市场</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/compaines">ERP</el-dropdown-item>
            <el-dropdown-item command="/compaines">MES</el-dropdown-item>
            <el-dropdown-item command="/compaines">CRM</el-dropdown-item>
            <el-dropdown-item command="/compaines">SRM</el-dropdown-item>
            <el-dropdown-item command="/compaines">WMS</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="handleCommand" placement="bottom">
          <span class="el-dropdown-link">供需对接</span>
          <el-dropdown-menu slot="dropdown">
            <div>
              <div style="display: inline-block">
                <h3 class="mx-4 pb-2 border-bottom">需求发布- 外协生产需求</h3>
                <el-dropdown-item command="/compaines">设备需求</el-dropdown-item>
                <el-dropdown-item command="/compaines">产品需求</el-dropdown-item>
                <el-dropdown-item command="/compaines">原材料需求</el-dropdown-item>
              </div>
              <div style="display: inline-block">
                <h3 class="mx-4 pb-2 border-bottom">能力发布- 生产能力发布</h3>
                <el-dropdown-item command="/compaines">设备能力发布</el-dropdown-item>
                <el-dropdown-item command="/compaines">产品发布</el-dropdown-item>
                <el-dropdown-item command="/compaines">原材料发布</el-dropdown-item>
              </div>
            </div>
            <div class="mt-3">
              <div style="display: inline-block">
                <h3 class="mx-4 pb-2 border-bottom">需求对接- 对接生产需求</h3>
                <el-dropdown-item command="/compaines">对接设备需求</el-dropdown-item>
                <el-dropdown-item command="/compaines">对接原料需求</el-dropdown-item>
              </div>
              <div style="display: inline-block">
                <h3 class="mx-4 pb-2 border-bottom">能力对接- 下生产订单</h3>
                <el-dropdown-item command="/compaines">采购产品</el-dropdown-item>
                <el-dropdown-item command="/compaines">采购原料</el-dropdown-item>
              </div>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="handleCommand" placement="bottom">
          <span class="el-dropdown-link">企业服务</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/compaines">量化融合贯标</el-dropdown-item>
            <el-dropdown-item command="/compaines">省、市智能车间</el-dropdown-item>
            <el-dropdown-item command="/compaines">星级上云</el-dropdown-item>
            <el-dropdown-item command="/compaines">智能化改造</el-dropdown-item>
            <el-dropdown-item command="/compaines">系统集成服务</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">辅料对接</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/compaines">辅料对接1</el-dropdown-item>
            <el-dropdown-item command="/compaines">辅料对接2</el-dropdown-item>
            <el-dropdown-item command="/compaines">辅料对接3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">应用中心</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/compaines">应用中心1</el-dropdown-item>
            <el-dropdown-item command="/compaines">应用中心2</el-dropdown-item>
            <el-dropdown-item command="/compaines">应用中心3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">设备管理</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/compaines">设备管理1</el-dropdown-item>
            <el-dropdown-item command="/compaines">设备管理2</el-dropdown-item>
            <el-dropdown-item command="/compaines">设备管理3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>-->
      </p>
    </div>
  </div>
</template>

<script>
import bus from "../bus";
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
  created() {
    this.isLogin();
  },
  methods: {
    // isLogin() {
    //   return localStorage.token ? true : false;
    // },
    fetchUserInfo() {
      window.console.log(localStorage.userName);
      this.userName = localStorage.userName;
    },
    delUser() {
      localStorage.clear();
      this.isLogin();
      // this.userName = localStorage.userName;
      // bus.$emit("logout");
    },
    handleCommand(command) {
      this.$router.push(command);
    },
    isLogin() {
      if (localStorage.access_token) {
        this.axios({
          method: "get",
          url: "/account/fetchUserInfo",
          params: {
            access_token: localStorage.access_token,
          },
        }).then((res) => {
          window.console.log(res.data.data);
          this.$store.commit("changeUser", res.data.data);
        });
      } else {
        this.$store.commit("changeUser", '');
      }
      return false;
      // let url = window.location.href;

      // window.console.log(window.location.search);
      // let isToken =
      //   window.location.search.includes("status=authentication") || false;
      // window.console.log(isToken);

      // this.axios({
      //   url: "http://auth.mst.casicloud.com/1/sso/is_login",
      //   method: "get",
      //   headers: {
      //     scene: "web",
      //     Referer: "http://58.216.47.108:8893",
      //   },
      //   params: {
      //     client_id: "3e55qge5xjvagi1n",
      //   },
      // })
      //   .then((res) => {
      //     window.console.log(res);
      //     if (res.data.data) {
      //       if (isToken) {
      //         window.console.log(1);
      //         this.fetchInfo();
      //       } else {
      //         window.console.log(2);

      //         window.location.href =
      //           "http://auth.mst.casicloud.com/1/sso/login?redirect=http:%2F%2F58.216.47.108:8893";
      //       }
      //     } else {
      //       window.console.log("暂未登录");
      //     }
      //   })
      //   .catch((err) => {});
    },
    login() {
      this.$store.commit("DialogVisible");
    },

    fetchInfo() {
      let url = window.location.href;
      let code = url.split("?").pop().split("&").pop().split("=").pop() || "";
      this.axios({
        method: "get",
        url: "http://auth.mst.casicloud.com/1/sso/issue_token",
        headers: {
          scene: "web",
          Referer: "http://58.216.47.108:8893",
        },
        params: {
          client_id: "3e55qge5xjvagi1n",
          code: code,
        },
      }).then((res) => {
        window.console.log(res);
        if (res.data.data) {
          this.userName = res.data.data.user.fullname;
        }
      });
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
.header {
  .el-select .el-input {
    width: 100px;
  }
  .el-input__inner:focus {
    border: 1px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-button {
    line-height: 0.5;
    border-radius: 0;
  }
  .el-input-group__append,
  .el-input-group__prepend {
    border: 0;
  }
}
</style>

