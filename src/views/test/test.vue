<template>
  <div>
    <el-form :model="searchForm"  ref="ruleForm" label-width="120px" class="manage-form">
      <el-form-item class="item">
        <span class="title" >活动名称</span>
        <el-input v-model="searchForm.name" placeholder="请选择活动名称"></el-input>
      </el-form-item>
      <el-form-item class="item">
        <span class="title">活动区域</span>
        <el-select v-model="searchForm.region" placeholder="请选择活动区域" >
          <el-option :key="key" v-for="(item,key) in list" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item >
        <el-button @click="submit">提交</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>



  </div>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        searchForm: {
          name: "",
          region: ""
        },
        list: [
          {label: "区域一", value: "shanghai"},
          {label: "区域二", value: "beijing"}
        ],
      }
    },
    created(){
      this.test()
    },
    methods: {
      test(){
        console.log("comeHere")
        window.$ajax.post("/database/test",{"pageNo":2, "pageSize":15})
          .then(res => {
            console.log(res.data)
          })
      },
      submit(){
        console.log(this.searchForm)
      },
      reset(){}
    }
  }
</script>

<style scoped>

</style>
