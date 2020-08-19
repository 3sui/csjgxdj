<!--
 * @Author: your name
 * @Date: 2020-08-13 17:05:14
 * @LastEditTime: 2020-08-18 16:20:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\views\user\Business.vue
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
    <el-steps
      class="w bg-white"
      :active="1"
      finish-status="success"
      simple
      style="margin-bottom: 20px;"
    >
      <el-step title="用户注册"></el-step>
      <el-step title="加入企业"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <div class="w bg-white p-1">
      <div v-if="!isSubmit">
        <h2 class="p-4 border-bottom">{{businessHas ? '加入企业':'注册企业' }}</h2>
        <el-form :model="form" class="form" :rules="rules" ref="form">
          <el-form-item prop="businessName">
            <el-autocomplete
              popper-class="my-autocomplete"
              v-model="form.businessName"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              @select="handleSelect"
              @input="handleInput"
            >
              <!-- <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i> -->
              <div class="text-center" style="width: 80px;" slot="prepend">企业名称</div>
              <template slot-scope="{ item }">
                <div class="name">{{ item.value }}</div>
                <span class="addr">{{ item.address }}</span>
              </template>
            </el-autocomplete>
          </el-form-item>
          <div v-if="businessHas">
            <el-form-item>
              <el-button class="w-100" type="primary" @click="apply('form')">申请加入</el-button>
            </el-form-item>
          </div>
          <div v-else>
            <el-form-item prop="businessType">
              <el-input v-model.trim="form.businessType">
                <div class="text-center" style="width: 80px;" slot="prepend">企业类型</div>
              </el-input>
            </el-form-item>
            <el-form-item prop="selectedOptions">
              <el-cascader
                :options="options"
                @change="handleChange"
                class="full-width"
                size="medium"
                v-model="form.selectedOptions"
                placeholder="请选择地址"
              />
            </el-form-item>
            <el-form-item prop="businessAddress">
              <el-input v-model.trim="form.businessAddress">
                <!-- <div style="width: 60px;background-color: red" slot="prepend">手机号</div> -->
                <div class="text-center" style="width: 80px;" slot="prepend">企业详细地址</div>
              </el-input>
            </el-form-item>
            <el-form-item prop>
              <el-input v-model.trim="form.invitationCode">
                <div class="text-center" style="width: 80px;" slot="prepend">注册邀请码</div>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="w-100" type="primary" @click="onSubmit('form')">立即注册企业</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div v-else>
        <h2>完成加入企业</h2>
      </div>
    </div>
    <p
      class="text-center mt-5 fs-lg text-grey"
    >Copyright©2019常州工业物联大数据平台,All Rights Reserved 京B2-20190490号 京ICP备16012914号-1 京公网安备11010802022625</p>
  </div>
</template>

<script>
import {
  provinceAndCityData,
  regionData,
  provinceAndCityDataPlus,
  regionDataPlus,
  CodeToText,
  TextToCode,
} from "element-china-area-data";
export default {
  name: "Business",
  data() {
    return {
      isSubmit: false,
      options: regionData, // options绑定的数据就是引入的 regionData

      businessHas: true, //判断是注册企业还是加入企业
      restaurants: [],
      form: {
        businessName: "",
        businessAddress: "",
        businessType: "",
        invitationCode: "",
        selectedOptions: [],
      },
      rules: {
        businessName: [
          { required: true, message: "请输入企业名称", trigger: "change" },
        ],
        businessType: [
          { required: true, message: "请输入企业类型", trigger: "blur" },
        ],
        businessAddress: [
          { required: true, message: "请输入企业详细地址", trigger: "blur" },
        ],
        selectedOptions: [
          { required: true, message: "请选择企业地址", trigger: "blur" },
        ],
      },
    };
  },

  components: {},

  computed: {},
  mounted() {
    this.loadAll();
  },
  methods: {
    //如果输入的企业不存在,则用户创建企业并成为管理员
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios({
            method: "post",
            url: "/account/registerBusiness",
            data: this.form,
          }).then((res) => {
            if (res.data.success) {
              this.$message.success(res.data.message);
              this.$router.push("/finished");
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
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据

      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      this.axios({
        method: "get",
        url: "/account/fetchBusiness",
      }).then((res) => {
        window.console.log(res.data.business);
        if (res.data.success) {
          this.restaurants = res.data.business;
        }
      });
    },
    handleSelect(item) {
      this.businessHas = true;
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    },

    handleChange(value) {
      console.log(value);
      for (let i in value) {
        window.console.log(CodeToText[value[i]]);
      }
    },
    handleInput(value) {
      for (let i in this.restaurants) {
        if (this.restaurants[i].value === value) {
          this.businessHas = true;
          return false;
        } else {
          this.businessHas = false;
        }
      }
    },

    //如果输入的企业存在,则用户加入企业
    apply(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios({
            method: "post",
            url: "/account/applyBusiness",
            data: {
              business: this.form.businessName,
            },
          }).then((res) => {
            if (res.data.success) {
              this.$message.success(res.data.message);
              this.$router.push("/finished");
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
</style>
<style lang="scss">
.el-autocomplete {
  display: inline;
}
.el-cascader {
  display: inline;
}
</style>