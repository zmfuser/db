<template>
  <div id="app">
    <div class="left">
      <AsideAll></AsideAll>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import AsideAll from "@/views/Aside/aside";

export default {
  components: {
    AsideAll,
  }
};
</script>

<style lang="less">
#app {
  width: 100%;
  height: 1080px;
  overflow-y: auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  display: flex;
  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 600px;
    width: 7% !important;
  }
  
  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
    width: 93% ;
  }
  .left{
    width: 140px;
    height: 100%;
   
    background-color: #ccc;
  }
  .right{
    width: 93%;
    height: 100%;
    overflow-y: auto;
    background-color: #f0f0f0;
  }
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

body > .el-container {
  margin-bottom: 40px;
}


</style>
