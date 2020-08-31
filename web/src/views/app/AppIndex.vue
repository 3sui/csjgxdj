<template>
  <div class="appindex">
    <section>
      <div class="bannnerInfo">
        <Banner :imgList="imgList" class="bannner" />
        <div class="category">
          <ul>
            <li id="caregroytitle">应用分类</li>
            <li v-for="item in categorylist" class="caregroylist">
              <div class="aside"></div>
              <!-- <div class="recommend">
                <ul>
                  <li v-for="item in apprecommend">
                    <div class="appitem">
                      <div class="img">
                        <img :src="item.url" alt width="100px" height="70px" />
                      </div>
                      <p>{{item.name}}</p>
                    </div>
                  </li>
                </ul>
              </div> -->
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="icon">
                    <i :class="item.icon"></i>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="categoryname">{{item.name}}</div>
                  <div class="categorylabel">{{item.label}}</div>
                  <!-- <p>{{item.label}}</p> -->
                </el-col>
              </el-row>
            </li>
          </ul>
        </div>

        <div class="recommend">
          <ul>
            <li v-for="item in apprecommend">
              <div class="appitem">
                <div class="img">
                  <img :src="item.url" alt width="100px" height="70px" />
                </div>
                <p>{{item.name}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <App />
      <div class="line w"></div>
    </section>
    <section>
      <App />
      <div class="line"></div>
    </section>
    <section>
      <App />
      <div class="line"></div>
    </section>
    <section>
      <App />
      <div class="line"></div>
    </section>
    <section>
      <App />
    </section>
  </div>
</template>

<script>
import Banner from "../../components/Banner";
import img1 from "../../assets/img/app/banner1.jpg";
import img2 from "../../assets/img/app/banner2.png";
import img from "../../assets/img/app/app1.jpg";
import App from "../../components/app/App";

export default {
  name: "AppIndex",
  components: {
    Banner,
    App,
  },
  data() {
    return {
      imgList: [img1, img2],
      categorylist: [
        {
          name: "研发设计",
          label: "提升效率，降低成本",
          icon: "el-icon-s-tools",
        },
        {
          name: "研发设计",
          label: "提升效率，降低成本",
          icon: "el-icon-s-tools",
        },
        {
          name: "研发设计",
          label: "提升效率，降低成本",
          icon: "el-icon-s-tools",
        },
        {
          name: "研发设计",
          label: "提升效率，降低成本",
          icon: "el-icon-s-tools",
        },
        {
          name: "研发设计",
          label: "提升效率，降低成本",
          icon: "el-icon-s-tools",
        },
        {
          name: "研发设计",
          label: "提升效率，降低成本",
          icon: "el-icon-s-tools",
        },
      ],
      apprecommend: [
        { name: "产线仿真建模", url: img },
        { name: "产线仿真建模", url: img },
        { name: "产线仿真建模", url: img },
        { name: "产线仿真建模", url: img },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.appindex {
  background: white;
}
.bannnerInfo {
  height: 550px;
  position: relative;
}
.category {
  position: absolute;
  top: 0;
  left: 100px;
  // background: cadetblue;
  z-index: 2;

  font-size: 16px;
  color: white;
  width: 300px;
  background: #374766;
}

.category li {
  height: 80px;
  line-height: 80px;
  background: #374766;
  padding: 0 20px;
}

.caregroylist:hover .aside {
  transform: scale(1);
  opacity: 0.4;
}

.caregroylist {
  position: relative;
  border-bottom: 1px solid rgba($color: #eeeeee, $alpha: 0.5);
}
.caregroylist:nth-last-child(1) {
  border-bottom: none;
}
#caregroytitle {
  background: #0077ff;
  height: 70px;
  line-height: 70px;
}
.categoryname {
  height: 40px;
  line-height: 40px;
}
.categorylabel {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #dddddd;
}
.icon {
  font-size: 26px;
}

.aside {
  position: absolute;
  top: 0px;
  left: 0px;
  transition: all 0.4s;
  width: 100%;
  height: 100%;
  background: #3480dd;
  transform: scale(0);
}

.recommend {
  width: 200px;
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 400px;
  background: white;
  display: none;
}

.caregroylist:hover .recommend {
  display: block;
}

.appitem {
  padding: 10px;
  border-bottom: 1px solid rgba($color: #dddddd, $alpha: 0.5);
}
.img {
  width: 100px;
  height: 70px;
  margin: auto;
}
.appitem p {
  line-height: 30px;
  height: 30px;
  text-align: center;
}
.line {
  background: #eeeeee;
  height: 3px;
  width: 1150px;
  margin: auto;
}
</style>