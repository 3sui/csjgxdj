<!--
 * @Author: your name
 * @Date: 2020-08-05 16:21:17
 * @LastEditTime: 2020-08-06 14:16:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\views\products\ProductIndex.vue
-->
<!--  -->
<template>
  <div class="ProductIndex">
    <header id="header">
      <div class="header-out w">
        <!-- <div class="header-left">
          <ul>
            <li>
              <a href="#">小米商城</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">MIUI</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">IoT</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">云服务</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">金融</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">有品</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">小爱开放平台</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">企业团购</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">资质证照</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">协议规则</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">下载app</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">Select Region</a>
            </li>
          </ul>
        </div>-->
        <div class="header-right">
          <a href="#">登录</a>
          <a href="#">注册</a>
          <a href="#">消息通知</a>
          <a href="#" class="el-icon-shopping-cart-2">购物车(0)</a>
        </div>
      </div>
    </header>
    <!-- 头部结束 -->
    <!-- nav开始 -->
    <section id="nav" class="w">
      <!-- <img src="img/logo.png" alt /> -->
      <ul>
        <li>
          <a href="#">小米手机</a>
        </li>
        <li>
          <a href="#">Redmi 红米</a>
        </li>
        <li>
          <a href="#">电视</a>
        </li>
        <li>
          <a href="#">笔记本</a>
        </li>
        <li>
          <a href="#">家电</a>
        </li>
        <li>
          <a href="#">路由器</a>
        </li>
        <li>
          <a href="#">智能硬件</a>
        </li>
        <li>
          <a href="#">服务</a>
        </li>
        <li>
          <a href="#">社区</a>
        </li>
      </ul>
      <div class="search">
        <form action="#">
          <input type="text" class="input pl-2" />
          <!-- <input type="button" class="btn el-icon-search" /> -->
          <span class="btn el-icon-search"></span>
        </form>
      </div>
    </section>
    <!-- nav结束 -->
    <!-- banner开始 -->
    <section id="banner" class="w">
      <div class="banner-img">
        <a href="#">
          <img src="@/assets/img/changzhou.jpg" width="1150px" alt />
        </a>
      </div>
      <div class="list">
        <ul>
          <li>
            <a href="#">
              手机 电话卡
              <span class="el-icon-arrow-right"></span>
            </a>
          </li>
          <li>
            <a href="#">
              电视 盒子
              <span class="el-icon-arrow-right"></span>
            </a>
          </li>
          <li>
            <a href="#">
              笔记本 平板
              <span class="el-icon-arrow-right"></span>
            </a>
          </li>
          <li>
            <a href="#">
              笔记本 平板
              <span class="el-icon-arrow-right"></span>
            </a>
          </li>
          <li>
            <a href="#">
              笔记本 平板
              <span class="el-icon-arrow-right"></span>
            </a>
          </li>
          <li>
            <a href="#">
              笔记本 平板
              <span class="el-icon-arrow-right"></span>
            </a>
          </li>
          <li>
            <a href="#">
              笔记本 平板
              <span class="el-icon-arrow-right"></span>
            </a>
          </li>
          <li>
            <a href="#">
              笔记本 平板
              <span class="el-icon-arrow-right"></span>
            </a>
          </li>
          <li>
            <a href="#">
              笔记本 平板
              <span class="el-icon-arrow-right"></span>
            </a>
          </li>
          <li>
            <a href="#">
              笔记本 平板
              <span class="el-icon-arrow-right"></span>
            </a>
          </li>
        </ul>
      </div>
      <div class="next el-icon-arrow-right"></div>
      <div class="last el-icon-arrow-left"></div>
      <div class="all">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="advertisement">
        <div class="tages">
          <div>
            <a href="#">
              <span class="el-icon-s-data"></span>选购手机
            </a>
          </div>
          <div>
            <a href="#">
              <span class="el-icon-s-data"></span>选购手机
            </a>
          </div>
          <div>
            <a href="#">
              <span class="el-icon-s-data"></span>选购手机
            </a>
          </div>
          <div>
            <a href="#">
              <span class="el-icon-s-data"></span>选购手机
            </a>
          </div>
          <div>
            <a href="#">
              <span class="el-icon-s-data"></span>选购手机
            </a>
          </div>
          <div>
            <a href="#">
              <span class="el-icon-s-data"></span>选购手机
            </a>
          </div>
        </div>
        <div>
          <img src="@/assets/img/banner1.png" alt />
        </div>
        <div>
          <img src="@/assets/img/banner1.png" alt />
        </div>
        <div>
          <img src="@/assets/img/banner1.png" alt />
        </div>
      </div>
      <div>
        <img src="@/assets/img/banner1.png" height="120px" width="100%" alt />
      </div>
    </section>
    <!-- banner结束 -->
    <!-- 商品内容开始 -->
    <section id="list">
      <div class="list w">
        <div class="list-top">
          <span>手机</span>
          <a href="#">查看全部</a>
        </div>
        <div class="list-main">
          <div class="list-main-left">
            <img src="@/assets/img/banner1.png" alt />
          </div>
          <div class="list-main-right">
            <div>
              <div>新品</div>
              <a href="#">
                <img src="@/assets/img/banner1.png" alt />
              </a>
              <a href="#">小米9 6GB+128GB</a>
              <p>骁龙855，索尼4800万超广角微距三摄</p>
              <p>2999元</p>
            </div>
            <div>
              <div>新品</div>
              <a href="#">
                <img src="@/assets/img/banner1.png" alt />
              </a>
              <a href="#">小米9 6GB+128GB</a>
              <p>骁龙855，索尼4800万超广角微距三摄</p>
              <p>2999元</p>
            </div>
            <div>
              <div>新品</div>
              <a href="#">
                <img src="@/assets/img/banner1.png" alt />
              </a>
              <a href="#">小米9 6GB+128GB</a>
              <p>骁龙855，索尼4800万超广角微距三摄</p>
              <p>2999元</p>
            </div>
            <div>
              <div>新品</div>
              <a href="#">
                <img src="@/assets/img/banner1.png" alt />
              </a>
              <a href="#">小米9 6GB+128GB</a>
              <p>骁龙855，索尼4800万超广角微距三摄</p>
              <p>2999元</p>
            </div>
            <div>
              <div>新品</div>
              <a href="#">
                <img src="@/assets/img/banner1.png" alt />
              </a>
              <a href="#">小米9 6GB+128GB</a>
              <p>骁龙855，索尼4800万超广角微距三摄</p>
              <p>2999元</p>
            </div>
            <div>
              <div>新品</div>
              <a href="#">
                <img src="@/assets/img/banner1.png" alt />
              </a>
              <a href="#">小米9 6GB+128GB</a>
              <p>骁龙855，索尼4800万超广角微距三摄</p>
              <p>2999元</p>
            </div>
            <div>
              <div>新品</div>
              <a href="#">
                <img src="@/assets/img/banner1.png" alt />
              </a>
              <a href="#">小米9 6GB+128GB</a>
              <p>骁龙855，索尼4800万超广角微距三摄</p>
              <p>2999元</p>
            </div>
            <div>
              <div>新品</div>
              <a href="#">
                <img src="@/assets/img/banner1.png" alt />
              </a>
              <a href="#">小米9 6GB+128GB</a>
              <p>骁龙855，索尼4800万超广角微距三摄</p>
              <p>2999元</p>
            </div>
          </div>
        </div>
        <div class="list-bottom">
          <img src="img/xmad_15595260886_oDbVR.jpg" alt />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProductIndex",
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped>
#header {
  width: 100%;
  height: 40px;
  background-color: #333;
}

#header .header-out {
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
}

#header .header-out li {
  display: inline-block;
  font-size: 12px;
}

#header .header-out li a,
#header .header-right a {
  color: #b0b0b0;
  text-decoration: none;
}

#header .header-out li {
  color: #424242;
  margin: 0 5px;
}

#header .header-right {
  float: right;
  height: 100%;
}

#header .header-right a {
  display: inline-block;
  height: 100%;
  padding: 0 10px;
  line-height: 40px;
}

#header .header-right a:nth-last-child(1) {
  background-color: #424242;
  padding: 0 20px;
  margin-left: 10px;
  transition: all 0.3s ease;
}

#header .header-out a:hover {
  color: #fff;
}

#header .header-right a:nth-last-child(1):hover {
  background-color: #fff;
  color: #ff6700;
}

/* **************************header样式部分结束************************** */
/* ***************************nav样式部分开始************************** */
#nav {
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav img {
  width: 55px;
}

#nav li {
  display: inline-block;
}

#nav li a {
  padding: 0 10px;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  /* background: red; */
}

#nav li a:hover {
  color: #ff6700;
}

#nav .search form {
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
}

#nav .search .input {
  width: 245px;
  height: 50px;
  outline: none;
  border: 1px solid #b0b0b0;
}

#nav .search .btn {
  width: 52px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  outline: none;
  border: 1px solid #b0b0b0;
  border-left: none;
  background-color: #fff;
  font-size: 20px;
  color: #b0b0b0;
  cursor: pointer;
  transition: all 0.3s ease;
}

#nav .search .btn:hover {
  color: #fff;
  background: #ff6700;
  border: none;
}

#nav .search .tags {
  position: absolute;
  right: 65px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
}

#nav .search .tags a {
  text-decoration: none;
  background-color: #eee;
}

/* ***************************nav样式部分结束************************** */
/* ***************************banner样式部分开始************************** */
#banner {
  margin: 0 auto;
  height: 460px;
  position: relative;
  /* overflow: hidden; */
}
#banner .banner-img img {
  width: 1150px;
  height: 460px;
  object-fit: cover;
}

#banner .list {
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 20px;
  height: 100%;
  width: 234px;
  background-color: rgba(0, 0, 0, 0.7);
}

#banner .list li {
  width: 100%;
  height: 42px;
  line-height: 42px;
  transition: all 0.3s ease;
}

#banner .list li:hover {
  background-color: #ff6700;
}

#banner .list li a {
  display: inline-block;
  position: relative;
  padding: 0 0 0 20px;
  width: 100%;
  line-height: 42px;
  height: 100%;
  color: #fff;
  text-decoration: none;
}

#banner .list li a span {
  position: absolute;
  left: 200px;
  text-align: center;
  line-height: 42px;
  height: 100%;
  /* line-height: 1; */
  /* margin-right: -180px; */
}

#banner .next,
#banner .last {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  line-height: 70px;
  font-size: 60px;
  color: rgba(255, 255, 255, 0.5);
  width: 40px;
  height: 70px;
  cursor: pointer;
}

#banner .next {
  right: 0px;
}

#banner .last {
  left: 234px;
}

#banner .next:hover,
#banner .last:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

#banner .all {
  position: absolute;
  right: 30px;
  bottom: 30px;
  display: flex;
}

#banner .all div {
  width: 8px;
  height: 8px;
  margin-left: 10px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

#banner .all div:nth-child(3) {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #000;
}

#banner .advertisement {
  margin-top: 15px;
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: space-between;
  text-align: right;
}

#banner .advertisement .tages {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  height: 100%;
}

#banner .advertisement .tages div {
  /* background-color:red; */
  width: 33.33%;
  height: 50%;
  text-align: center;
}

#banner .advertisement .tages div a {
  position: relative;
  padding-top: 20px;
  text-decoration: none;
  color: #fff;
  display: inline-block;
}

#banner .advertisement .tages div:nth-child(4) a:before,
#banner .advertisement .tages div:nth-child(5) a:before,
#banner .advertisement .tages div:nth-child(6) a:before {
  position: absolute;
  top: 0;
  left: -10px;
  display: block;
  content: "";
  width: 50px;
  height: 1px;
  background: #665e57;
}

#banner .advertisement .tages div:nth-child(1) a:after,
#banner .advertisement .tages div:nth-child(2) a:after,
#banner .advertisement .tages div:nth-child(4) a:after,
#banner .advertisement .tages div:nth-child(5) a:after {
  position: absolute;
  top: 15px;
  left: 55px;
  display: block;
  content: "";
  width: 1px;
  height: 50px;
  background: #665e57;
}

#banner .advertisement .tages div a span {
  display: block;
  font-size: 30px;
}

#banner .advertisement > div {
  width: 315px;
  height: 170px;
}

#banner .advertisement > div:nth-child(1) {
  width: 235px;
  background-color: #5f5750;
}

#banner .advertisement div img {
  width: 95%;
  height: 100%;
  object-fit: cover;
}

#banner > div:nth-last-child(1) {
  margin: 20px 0;

  width: 100%;
}

/* ***************************banner样式部分结束************************** */
/* ************************商品内容样式部分开始************************** */
#list {
  width: 100%;
  /* height: 4400px; */
  margin-top: 400px;
  background-color: #f5f5f5;
}

#list .list {
  margin: 0 auto;
}

#list .list .list-top {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  font-family: icomoon;
}

#list .list .list-top a,
#list .list .list-top span {
  color: #000;
  text-decoration: none;
  vertical-align: middle;
}

#list .list-main {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  height: 615px;
}

#list .list-main .list-main-right,
#list .list-main .list-main-left {
  width: 235px;
  height: 100%;
  text-align: center;
}

#list .list-main .list-main-right {
  width: 978.25px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
}

#list .list-main .list-main-right > div {
  width: 225px;
  height: 300px;
  background: #fff;
}

#list .list-main .list-main-left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#list .list-main .list-main-right > div div {
  width: 50px;
  height: 15px;
  margin: 0 auto;
  line-height: 15px;
  color: #fff;
  background-color: #83c44e;
}

#list .list-main .list-main-right > div a {
  display: inline-block;
}
#list .list-main .list-main-right > div a img {
  margin-top: 10px;
  width: 60%;
  height: 180px;
  object-fit: cover;
}

#list .list-main .list-main-right > div a:nth-child(3) {
  padding-top: 15px;
  text-decoration: none;
  color: #000;
}

#list .list-main .list-main-right > div p {
  color: #b0b0b0;
}

#list .list-main .list-main-right > div p:nth-last-child(1) {
  padding-top: 10px;
  color: #ff6700;
}

#list .list-bottom img {
  margin-top: 50px;
  width: 100%;
}

#list .list .list-main .list-main-left,
#list .list .list-main .list-main-right > div {
  transition: all 0.3s ease;
}

#list .list .list-main .list-main-left:hover,
#list .list .list-main .list-main-right > div:hover {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  /* transform: scale(1.1); */
  transform: translateY(-2px);
}

/* ************************商品内容样式部分结束************************** */
</style>