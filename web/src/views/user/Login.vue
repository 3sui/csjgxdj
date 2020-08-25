<!--
 * @Author: your name
 * @Date: 2020-07-06 16:21:51
 * @LastEditTime: 2020-08-21 14:00:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\components\login\Login.vue
--> 
<!--  -->
<template>
  <div>
    <div class="bg-white w-100 shadow">
      <div class="w py-3 d-flex ai-center">
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt height="40px" />
        </router-link>
        <span class="mx-5 fs-xxl text-grey">|</span>
        <span class="fs-xl text-grey">欢迎登录</span>
      </div>
    </div>
    <div class="content">
      <div class="w h-100 d-flex ai-center jc-end">
        <div class="bg-white py-4 px-4 shadow-1" style="width: 400px;">
          <div class="d-flex jc-around fs-xl mt-4 text-grey">
            <span :class="{'active': loginStyle}" class="cp" @click="loginStyle = true">账号登录</span>
            <span class="fs-xxl">|</span>
            <span :class="{'active': !loginStyle}" class="cp" @click="loginStyle = false">微信登录</span>
          </div>
          <div v-if="loginStyle" class="w-100">
            <div class="d-flex jc-center mt-5">
              <el-form :rules="rules" style="width: 95%" :model="form" ref="form">
                <el-form-item class="mb-4" prop="account">
                  <el-input
                    size="middle"
                    placeholder="请输入手机/邮箱/用户名"
                    prefix-icon="el-icon-user"
                    v-model.trim="form.account"
                  ></el-input>
                </el-form-item>
                <el-form-item class="mb-4" prop="password">
                  <el-input
                    size="middle"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-c-scale-to-original"
                    v-model.trim="form.password"
                    show-password
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>
            <div class="d-flex jc-between ai-center">
              <el-checkbox v-model="checked">记住我</el-checkbox>
              <span>短信验证码登录</span>
            </div>
            <div>
              <el-button type="primary" class="w-100 mt-4" @click="submit('form')">登录</el-button>
            </div>
            <div class="d-flex jc-center my-4 fs-lg text-grey">
              <span class="cp" @click="$router.push('/register')">立即注册</span>
              <span class="px-2">|</span>
              <span class="cp" @click="$router.push('/forget')">忘记密码</span>
            </div>
          </div>
          <div v-else class="d-flex jc-center py-5">
            <img src="../../assets/img/logo.png" width="300px" alt />
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="请进行安全验证"
      :visible.sync="dialogFormVisible"
      width="20%"
      style="min-width: 600px"
    >
      <el-form @submit.native.prevent :model="verCode" class="d-flex ai-center" ref="ver">
        <div style="width: 40%;height: 60px;min-width: 120px" v-html="img" @click="fetchCaptcha()"></div>
        <el-form-item
          prop="code"
          label-width="20px"
          class="m-0"
          :rules="[{ required: true, message: '请输入验证码', trigger: 'blur' }]"
        >
          <el-input v-model="verCode.code" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="verification('ver')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import img from "../../assets/img/logo.png";
export default {
  name: "Login",
  data() {
    return {
      img: "",
      loginStyle: true,
      checked: true,
      form: {
        account: "",
        password: "",
      },
      rules: {
        account: [{ required: true, message: "请输入账户", trigger: "blur" }],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
      verCode: {
        code: "",
      },
      dialogFormVisible: false,
    };
  },

  components: {},

  computed: {},

  methods: {
    //获取验证码
    fetchCaptcha() {
      this.axios({
        method: "get",
        url: "/account/fetchCaptcha",
      }).then((res) => {
        if (res.data.success) {
          this.img = res.data.data;
          // window.console.log(res.data.captchaText);
        }
      });
    },
    //提交账号密码进行登录
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = true;
          this.fetchCaptcha();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //验证验证码
    verification(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios({
            method: "post",
            url: "/account/varCode",
            data: {
              code: this.verCode.code,
            },
          }).then((res) => {
            if (res.data.success) {
              this.dialogFormVisible = false;
              // this.$message.success(res.data.message);
              this.login();
            } else {
              this.verCode.code = "";
              this.$message.error(res.data.message);
              this.fetchCaptcha();
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    //验证账号密码
    login() {
      this.axios({
        method: "post",
        url: "/account/login",
        data: this.form,
      }).then((res) => {
        if (res.data.success) {
          this.$message.success(res.data.message);
          localStorage.token = res.data.token;
          localStorage.userName = res.data.userInfo.user_name;

          this.$router.push("/");
        } else {
          this.$message.success(res.data.message);
        }
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.content {
  width: 100%;
  height: calc(100vh - 66px);
  background: url("../../assets/img/changzhou.jpg") no-repeat center center;
  background-size: cover;
  .active {
    color: #000;
  }
}
</style>