<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :unique-opened="true">

      <template v-for="(item) in $menu.customMenu">
        <template v-if="item.children">
            <el-submenu :index="item.code">
              <template slot="title">
                <i :class="'oqoqbobo '+item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </template>
              <template v-for="(child) in item.children">
                <el-menu-item v-if="child.skip" :index="child.code" @click="clickOuter(child.routerName)">
                  <i :class="'oqoqbobo '+child.icon"></i>
                  <span>{{child.title}}</span>
                </el-menu-item>
                <el-menu-item v-else :index="child.code" @click="clickInner(child.routerName)">
                  <i :class="'oqoqbobo '+child.icon"></i>
                  <span>{{child.title}}</span>
                </el-menu-item>
              </template>
            </el-submenu>
        </template>
        <template v-else>
          <el-menu-item v-if="item.skip" :index="item.code" @click="clickOuter(item.routerName)">
            <i :class="'oqoqbobo '+item.icon"></i>
            <span>{{item.title}}</span>
          </el-menu-item>
          <el-menu-item v-else :index="item.code" @click="clickInner(item.routerName)">
            <i :class="'oqoqbobo '+item.icon"></i>
            <span>{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>



    </el-menu>
  </div>
</template>

<script>

  export default {
    name: "myMenu",
    props: {
      isCollapse: {
        type: Boolean,
        require: true
      },
    },
    data() {
      return {}
    },
    methods: {
      clickInner(pathCode) {
        let routeData = this.$router.resolve({name: pathCode});
        location.href = routeData.href
      },
      clickOuter(pathCode) {
        let routeData = this.$router.resolve({name: pathCode});
        window.open(routeData.href, '_blank');
      },
    }
  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .router-link-active,
  .router-link-active i {
    text-decoration: none;
    color: #009eff !important;
  }

  .el-menu-item-content {
    display: block;
    margin: 0px;
  }


</style>
