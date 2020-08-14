<!--
 * @Author: your name
 * @Date: 2020-08-13 17:05:14
 * @LastEditTime: 2020-08-14 17:25:51
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
    this.restaurants = this.loadAll();
  },
  methods: {
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
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101",
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号",
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号",
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        {
          value: "Monica摩托主题咖啡店",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F",
        },
        {
          value: "浮生若茶（凌空soho店）",
          address: "上海长宁区金钟路968号9号楼地下一层",
        },
        { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
        { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
        {
          value: "快乐柠檬（神州智慧店）",
          address: "上海市长宁区天山西路567号1层R117号店铺",
        },
        {
          value: "Merci Paul cafe",
          address: "上海市普陀区光复西路丹巴路28弄6号楼819",
        },
        {
          value: "猫山王（西郊百联店）",
          address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306",
        },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        {
          value: "唦哇嘀咖",
          address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元",
        },
        { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
        {
          value: "爱茜茜里(近铁广场)",
          address:
            "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺",
        },
        {
          value: "鲜果榨汁（金沙江路和美广店）",
          address: "普陀区金沙江路2239号金沙和美广场B1-10-6",
        },
        {
          value: "开心丽果（缤谷店）",
          address: "上海市长宁区威宁路天山路341号",
        },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        {
          value: "凡仔汉堡（老真北路店）",
          address: "上海市普陀区老真北路160号",
        },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
        {
          value: "饭典*新简餐（凌空SOHO店）",
          address: "上海市长宁区金钟路968号9号楼地下一层9-83室",
        },
        {
          value: "焦耳·川式快餐（金钟路店）",
          address: "上海市金钟路633号地下一层甲部",
        },
        { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
        { value: "浏阳蒸菜", address: "天山西路430号" },
        { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
        {
          value: "樱花食堂（凌空店）",
          address: "上海市长宁区金钟路968号15楼15-105室",
        },
        { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
        {
          value: "福荣祥烧腊（平溪路店）",
          address: "上海市长宁区协和路福泉路255弄57-73号",
        },
        {
          value: "速记黄焖鸡米饭",
          address: "上海市长宁区北新泾街道金钟路180号1层01号摊位",
        },
        { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
        {
          value: "(小杨生煎)西郊百联餐厅",
          address: "长宁区仙霞西路88号百联2楼",
        },
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13",
        },
      ];
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
            // if (res.data.success) {
            //   this.$message.success(res.data.message);
            //   localStorage.token = res.data.token;
            //   localStorage.user = res.data.user;
            //   // this.$router.push("/");
            //   this.isRegister = false;
            // } else {
            //   this.$message.warning(res.data.message);
            // }
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
<style lang="scss">
.el-autocomplete {
  display: inline;
}
.el-cascader {
  display: inline;
}
</style>