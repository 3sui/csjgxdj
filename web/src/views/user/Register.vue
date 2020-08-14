<!--
 * @Author: your name
 * @Date: 2020-07-09 09:07:18
 * @LastEditTime: 2020-08-14 17:09:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\views\user\register.vue
--> 
<!--  -->
<template>
  <div id="register">
    <div class="w-100 bg-white mb-5">
      <div class="w py-2">
        <router-link to="/">
          <img src="../../assets/img/logo.png" height="60px" alt />
        </router-link>
      </div>
    </div>
    <div class="w bg-white p-1">
      <div v-if="isRegister">
        <h2 class="p-4 border-bottom">欢迎注册账号</h2>
        <el-form :model="form" class="form" :rules="rules" ref="form">
          <el-form-item prop="phone">
            <el-input v-model.number.trim="form.phone">
              <!-- <div style="width: 60px;background-color: red" slot="prepend">手机号</div> -->
              <div class="text-center" style="width: 80px;" slot="prepend">手机号码</div>
            </el-input>
          </el-form-item>
          <el-form-item prop="verCode">
            <el-input v-model.trim="form.verCode">
              <div class="text-center" style="width: 80px;" slot="prepend">短信验证</div>
              <el-button
                class="cp"
                @click="fetchVer"
                slot="append"
                :disabled="!disabledCodeBtn"
              >{{codeText}}</el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="userName">
            <el-input v-model="form.userName" placeholder="会员姓名长度2-30，可使用中文，大小写字母，数字，下划线">
              <div class="text-center" style="width: 80px;" slot="prepend">会员姓名</div>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model.trim="form.password" show-password>
              <div class="text-center" style="width: 80px;" slot="prepend">设置密码</div>
            </el-input>
          </el-form-item>
          <el-form-item prop="checkout">
            <el-checkbox v-model="form.checkout">
              阅读并同意
              <a
                class="text-info"
                target="_blank"
                href="http://uc.casicloud.com/new/register_xieyi"
              >《航天云网用户注册协议》</a>
              <a
                class="text-info"
                target="_blank"
                href="http://uc.casicloud.com/new/login_xieyi"
              >《航天云网登录服务协议》</a>
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button
              class="w-100"
              type="primary"
              @click="onSubmit('form')"
              :disabled="!form.checkout"
            >立即注册</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-else>
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
            <router-link to="Business" tag="span" class="btn2">成为企业用户</router-link>
            <!-- 
            <span>进入平台</span>
            <span>成为企业用户</span>-->
          </div>
        </div>
      </div>
    </div>
    <p
      class="text-center mt-5 fs-lg text-grey"
    >Copyright©2019常州工业物联大数据平台,All Rights Reserved 京B2-20190490号 京ICP备16012914号-1 京公网安备11010802022625</p>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    function validatePhone(rule, value, callback) {
      const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (value == "" || value == undefined || value == null) {
        callback();
      } else {
        if (!reg.test(value) && value != "") {
          callback(new Error("请输入正确的电话号码"));
        } else {
          callback();
        }
      }
    }
    function isUsername(rule, value, callback) {
      const reg = /^[a-zA-Z_\u4e00-\u9fa5][a-zA-Z0-9_\u4e00-\u9fa5]*$/;
      if (value == "" || value == undefined || value == null) {
        callback();
      } else {
        if (!reg.test(value)) {
          callback(new Error("会员姓名仅由英文字母，数字以及下划线组成"));
        } else {
          callback();
        }
      }
    }
    function isPassword(rule, value, callback) {
      const reg = /^[_a-zA-Z0-9]+$/;
      if (value == "" || value == undefined || value == null) {
        callback();
      } else {
        if (!reg.test(value)) {
          callback(new Error("密码仅由英文字母，数字以及下划线组成"));
        } else {
          callback();
        }
      }
    }
    return {
      isRegister: true,
      codeText: "获取验证码",
      disabledCodeBtn: true,
      form: {
        phone: "",
        verCode: "",
        userName: "",
        password: "",
        checkout: false,
      },
      rules: {
        phone: [
          { validator: validatePhone, trigger: "blur" },
          { required: true, message: "请输入手机号", trigger: "blur" },
        ],
        verCode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        userName: [
          { required: true, message: "请输入会员姓名", trigger: "blur" },
          { validator: isUsername, trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: isPassword, trigger: "blur" },
        ],
      },
    };
  },

  components: {},

  computed: {},

  methods: {
    //获取手机短信验证码
    fetchVer() {
      const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (
        this.form.phone == "" ||
        this.form.phone == undefined ||
        this.form.phone == null
      ) {
        this.$message.warning("请输入手机号码");
      } else {
        window.console.log(123);
        if (!reg.test(this.form.phone)) {
          this.$message.warning("请输入正确的手机号码");
        } else {
          this.axios({
            method: "post",
            url: "/account/fetchVer",
            data: {
              phone: this.form.phone,
            },
          }).then((res) => {
            if (res.data.success) {
              this.$message.success(res.data.message);
            } else {
              this.$message.warning(res.data.message);
            }
          });
          this.countDown(60);
        }
      }
    },
    // 倒计时方法
    countDown(time) {
      if (time === 0) {
        this.disabledCodeBtn = true;
        this.codeText = "获取验证码";
        return;
      } else {
        this.disabledCodeBtn = false;
        this.codeText = "重新发送(" + time + ")";
        time--;
      }
      setTimeout(() => {
        this.countDown(time);
      }, 1000);
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios({
            method: "post",
            url: "/account/register",
            data: this.form,
          }).then((res) => {
            if (res.data.success) {
              this.$message.success(res.data.message);
              localStorage.token = res.data.token;
              localStorage.user = res.data.user;
              // this.$router.push("/");
              this.isRegister = false;
            } else {
              this.$message.warning(res.data.message);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
.form {
  margin: 60px auto;
  //   text-align: center;
  width: 40%;
  min-width: 400px;
}
a {
  text-decoration: none;
}
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