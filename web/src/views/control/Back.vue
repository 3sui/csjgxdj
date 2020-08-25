<template>
  <div class="back">
    <div class="main">
      <div class="sub">
        商品管理列表
        <el-button type="primary" size="small">返回</el-button>
      </div>
      <div class="list">
        <div class="list-choose">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="全部"></el-tab-pane>
            <el-tab-pane label="草稿" name="草稿"></el-tab-pane>
            <el-tab-pane label="已发布" name="已发布"></el-tab-pane>
            <el-tab-pane label="下架" name="下架"></el-tab-pane>
            <el-tab-pane label="审核中" name="审核中"></el-tab-pane>
            <el-tab-pane label="已驳回" name="已驳回"></el-tab-pane>
          </el-tabs>
        </div>
        <div class="search">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
              <el-input v-model="input" placeholder="请输入产品名称"></el-input>
            </el-form-item>
            <el-form-item label="创建时间：">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain>查询</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div class="tabletop">
          <el-row :gutter="20">
            <el-col span="3">
              <el-checkbox name="type"></el-checkbox>全选
            </el-col>
            <el-col span="12">商品信息</el-col>
            <el-col span="3">状态</el-col>
            <el-col span="6">操作</el-col>
          </el-row>
        </div>
        <div class="tableitem" v-for="(item,index) in tabledata" :key="index">
          <div class="tabletop">
            <el-row :gutter="20">
              <el-col span="2">
                <el-checkbox name="type"></el-checkbox>
              </el-col>
              <el-col span="2">{{index+1}}</el-col>
              <el-col span="8">
                {{item.productname}}
                <el-tag type="warning" effect="dark" size="mini">标签</el-tag>
              </el-col>
            </el-row>
          </div>
          <div class="tablecontent">
            <el-row :gutter="20">
              <el-col span="3">
                <div class="contain">
                  <img :src="item.image " alt width="80px" height="80px" />
                </div>
              </el-col>
              <el-col span="5">
                <div class="contain">
                  <p class="d-flex justify-content-between">
                    <span class="tabletext">创建日期：</span>
                    <span class="tabletext">{{item.created_time}}</span>
                  </p>
                  <p class="d-flex justify-content-between">
                    <span class="tabletext">库存量：</span>
                    <span class="tabletext">{{item.inventory}}</span>
                  </p>
                </div>
              </el-col>
              <el-col span="7">
                <div class="contain">
                  <p class="d-flex justify-content-between">
                    <span class="tabletext">操作人：</span>
                    <span class="tabletext">{{item.created_by}}</span>
                  </p>
                  <p class="d-flex justify-content-between">
                    <span class="tabletext">所属分类：</span>
                    <span class="tabletext">{{item.class1}}>{{item.class2}}>{{item.class3}}</span>
                  </p>
                </div>
              </el-col>
              <el-col span="3">
                <div class="contain">{{item.state}}</div>
              </el-col>
              <el-col span="6">
                <div class="contain">
                  <el-button size="mini">下架</el-button>
                  <el-button size="mini">明细</el-button>
                  <el-button size="mini">预览</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>

        <div class="page">
          <el-pagination background layout="prev, pager, next" :total="1000" class="page"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "back",
  data() {
    return {
      activeName: "",
      tabledata: [
        {
          productname: "北自所龙门激光焊租赁服务",
          image: "https://cdnfile.htres.cn/upload/yunfile/16/04stsbe2hl2i80",
          created_time: "2020-07-28",
          inventory: "200",
          created_by: "小王",
          class1: "机械设备",
          class2: "焊割设备",
          class3: "其他",
          state: "已发布",
        },
        {
          productname: "北自所龙门激光焊租赁服务",
          image: "https://cdnfile.htres.cn/upload/yunfile/16/04stsbe2hl2i80",
          created_time: "2020-07-28",
          inventory: "200",
          created_by: "小王",
          class1: "机械设备",
          class2: "焊割设备",
          class3: "其他",
          state: "已发布",
        },
        {
          productname: "北自所龙门激光焊租赁服务",
          image: "https://cdnfile.htres.cn/upload/yunfile/16/04stsbe2hl2i80",
          created_time: "2020-07-28",
          inventory: "200",
          created_by: "小王",
          class1: "机械设备",
          class2: "焊割设备",
          class3: "其他",
          state: "已发布",
        },
        {
          productname: "北自所龙门激光焊租赁服务",
          image: "https://cdnfile.htres.cn/upload/yunfile/16/04stsbe2hl2i80",
          created_time: "2020-07-28",
          inventory: "200",
          created_by: "小王",
          class1: "机械设备",
          class2: "焊割设备",
          class3: "其他",
          state: "已发布",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.main {
  width: 1200px;
  margin: auto;
}

.main .sub {
  padding: 10px;
}
.sub {
  line-height: 50px;
  background-color: white;
  font-size: 20px;
  position: relative;
  margin: 20px 0;
}
.sub .el-button {
  position: absolute;
  top: 15px;
  right: 15px;
}
.list {
  background-color: white;
  padding: 10px;
  margin-bottom: 50px;
}

.tabletop {
  background: #eeeeee;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
}

.tableitem {
  margin: 10px auto;
  border: 1px solid #dddddd;
}
.tableitem:hover {
  box-shadow: 0 0 10px #999999;
}

.tabletext {
  color: #383838;
  line-height: 20px;
  overflow: hidden;
}

.contain {
  padding: 20px;
  width: 95%;
  margin: auto;
  text-align: center;
}

.page {
  background-color: white;
  margin: 30px auto;
  text-align: center;
}
</style>