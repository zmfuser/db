<template>
  <div class="aside">
    <div class="all_icon">
      <div class="clear_scroll">
        <div class="icon_item">
          <router-link to="home" class="icon_item">
            <i class="el-icon-edit"></i> 联通科技
          </router-link>
          <!-- <div>联通科技</div> -->
        </div>
        <div class="icon_item">
          <router-link to="home" class="icon_item">
            <i class="el-icon-s-home"></i> 首页
          </router-link>
          <!-- <div>首页</div> -->
        </div>
        <div class="icon_item">
          <router-link to="All" class="icon_item">
            <i class="el-icon-edit"></i>
            <div>全部</div>
          </router-link>
        </div>
        <div class="icon_item">
          <router-link to="newItems" class="icon_item">
            <i class="el-icon-edit"></i> 新建事项
          </router-link>
          <!-- <div>新建事项</div> -->
        </div>
        <div class="icon_item">
          <router-link to="Supervisorymatters" class="icon_item">
            <i class="el-icon-edit"></i> 督办事项
          </router-link>
          <!-- <div>督办事项</div> -->
        </div>
        <div class="icon_item">
          <router-link to="examination_atters" class="icon_item">
            <i class="el-icon-edit"></i> 事项审批
          </router-link>
        </div>
        <div class="icon_item">
          <router-link to="ItemEvaluation" class="icon_item">
            <i class="el-icon-edit"></i> 事项评价
          </router-link>
        </div>
        <div class="icon_item">
          <router-link to="delaymatters" class="icon_item">
            <i class="el-icon-edit"></i> 延期事项
          </router-link>
        </div>
        <div class="icon_item">
          <router-link to="ReportingMatters" class="icon_item">
            <i class="el-icon-edit"></i> 事项汇报
          </router-link>
        </div>
        <div class="icon_item">
          <router-link to="DataKanban" class="icon_item">
            <i class="el-icon-edit"></i> 数据看板
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen() {},
    handleClose() {}
  }
};
</script>

<style lang="less" scoped>
.aside {
  text-align: center;
  background-color: white;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  .all_icon {
    overflow: hidden;
    position: relative;
    overflow-x: hidden;
    // overflow-y:scroll;

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: white;
    .clear_scroll {
      position: absolute; /*不能使用relative和fixed定位*/
      top: 0;
      bottom: 0; /*相当于height:100%时的高度*/
      left: 0;
      right: -17px; /*图层宽度大于width:100%,滚动条的宽度刚刚好被隐藏 */
    overflow-y: auto;

      .icon_item {
        // border: 1px solid #ccc;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 110px;
      }
    }
  }
}
</style>