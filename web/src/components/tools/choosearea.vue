<template>
  <div class="choosearea">
    <el-select v-model="value" placeholder="请选择省" @change="handelChange1(value)" class="selectitem">
      <el-option v-for="item in provinces" :key="item.id" :label="item.label" :value="item.id"></el-option>
    </el-select>
    <el-select v-model="city" placeholder="请选择市" 
    @change="handelChange2"class="selectitem">
      <el-option
        v-for="item in citiestem"
        :key="item.laber"
        :label="item.laber"
        :value="item.laber"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import provinces from "../../plugins/provinces";
import cities from "../../plugins/cities";
export default {
  name: "choosearea",
  data() {
    return {
      provinces: provinces,
      cities: cities,
      citiestem: [],
      value: "",
      province: "",
      city: "",
    };
  },
  computed: {
    province: {
      get: function () {
        var data = this.provinces.filter(function (item) {
          return item.id == value;
        });
        return data.name;
      },
      set: function () {
        var data = this.provinces.filter(function (item) {
          return item.id == value;
        });
        return data.name;
      },
    },
  },
  methods: {
    handelChange1(value) {
      this.city = "";
      this.citiestem = this.cities[value];
      console.log(value);
      let p=this.provinces.filter(item=>{
        return item.id===value
      })
      this.province=p[0].value
      this.$emit('getprovince', this.province)
    },
     handelChange2() {  
      this.$emit('getcity',  this.city)
    },
    reset(){
      this.province=''
      this.city=''
      this.value=''
      this.citiestem=[]

    }
  },
};
</script>




<style>
.choosearea .el-select .el-input {
  width: 200px;
}

.choosearea .el-select {
  margin-right: 20px;
}
</style>