<template>
  <div>
    <ul>
      <li>
        <img v-if="collapse" class="left-logo-img-close" src="../../img/logo_close.png"/>
        <img v-else class="left-logo-img-open" width="270" src="../../img/logo_open.png"/>
      </li>
      <li class="theCollapse">
        <el-button v-if="collapse" type="primary" icon="el-icon-menu" circle @click="toShow"></el-button>
        <el-button v-else type="primary" icon="el-icon-s-fold" circle @click="toShow"></el-button>
      </li>
    </ul>
    <div class="line"></div>
    <div class="body">
      <my-menu :is-collapse="collapse" class="left"></my-menu>
      <div class="content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>

    <el-backtop>
      <i class="el-icon-top" :title="`点击回到顶部`"></i>
    </el-backtop>
  </div>
</template>


<script>
  import myMenu from '@/components/base/menu';

  export default {
    name: "home",
    components: {myMenu},
    data() {
      return {
        adPort: {
          adPortValue:"AD采样端口实际值",
          adPortMin:"AD采样端口最小值",
          adPortNumber:"AD采样端口观测编号",
          adPortMax:"AD采样端口最大值"
        },
        collapse: false
      }
    },
    created(){
      console.log(this.adPort['adPortValue'])
      let map = new Map();
      map.set("nihao","cool")
      console.log(map.get("nihao"))


    },
    methods: {
      toShow() {
        this.collapse = !this.collapse
      }
    }
  }
</script>

<style scoped>
  .line {
    border-bottom: 1px dashed #c6c6c6;
  }

  .content, .left {
    float: left;
  }
  .body::after{
    clear: both;
  }
  .left-logo-img-close {
    max-width: 52px;
    max-height: 52px;
  }
  .left-logo-img-open {
    max-width: 200px;
    max-height: 60px;
  }
  ul,li{
    padding: 0;
    margin: 0;
  }
  li{
    list-style-type: none;
    height: 60px;
    vertical-align: middle;
    line-height: 60px;
    display: inline-block;
  }
  .theCollapse{
    margin-left: 10px;
  }

</style>
