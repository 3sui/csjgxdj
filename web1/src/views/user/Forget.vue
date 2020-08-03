<!--
 * @Author: your name
 * @Date: 2020-07-09 16:13:03
 * @LastEditTime: 2020-07-09 17:12:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\views\user\Forget.vue
--> 
<!--  -->
<template>
  <div id="forget">
    <div class="w-100 bg-white mb-5">
      <div class="w py-2">
        <router-link to="/">
          <img src="../../assets/img/logo.png" height="60px" alt />
        </router-link>
      </div>
    </div>
    <div class="w bg-white p-1">
      <h2 class="p-4 border-bottom">找回密码</h2>
      <el-form :model="form" class="form" :rules="rules" ref="form">
        <el-form-item prop="phone">
          <el-input v-model.number.trim="form.phone">
            <!-- <div style="width: 60px;background-color: red" slot="prepend">手机号</div> -->
            <div style="width: 80px;" slot="prepend">手机号</div>
          </el-input>
        </el-form-item>
        <el-form-item prop="verCode">
          <el-input v-model="form.verCode">
            <div style="width: 80px;" slot="prepend">验证码</div>
            <el-button
              class="cp"
              @click="fetchVer"
              slot="append"
              :disabled="!disabledCodeBtn"
            >{{codeText}}</el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" show-password placeholder="请输入密码">
            <div style="width: 80px;" slot="prepend">设置密码</div>
          </el-input>
        </el-form-item>
        <el-form-item prop="newPassword">
          <el-input v-model.trim="form.newPassword" show-password placeholder="请确认密码">
            <div style="width: 80px;" slot="prepend">确认密码</div>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="w-100" type="primary" @click="onSubmit('form')">立即注册</el-button>
        </el-form-item>
      </el-form>
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
    let validatePhone = (rule, value, callback) => {
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
    };

    let isPassword = (rule, value, callback) => {
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
    };

    let isNewPassword = (rule, value, callback) => {
      if (value == "" || value == undefined || value == null) {
        callback();
      } else {
        if (value !== this.form.password) {
          callback(new Error("请再次输入相同的值"));
        } else {
          callback();
        }
      }
    };
    return {
      codeText: "获取验证码",
      disabledCodeBtn: true,
      form: {
        phone: "",
        verCode: "",
        newPassword: "",
        password: ""
      },
      rules: {
        phone: [
          { validator: validatePhone, trigger: "blur" },
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        verCode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        newPassword: [
          { required: true, message: "请输入会员姓名", trigger: "blur" },
          { validator: isNewPassword, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: isPassword, trigger: "blur" }
        ]
      }
    };
  },

  components: {},

  computed: {},

  methods: {
    fetchVer() {
      this.countDown(60);
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
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
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
</style>