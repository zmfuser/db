<template>
  <div class="aside">
    <div class="all_icon">
      <div class="clear_scroll">
        <div :class="company ?'icon_item_selete':'icon_item'">
          <div class="img_font" @click="routerGo('/home',111)">
            <div>
              <img  src="../../assets/logo.png" style="width:95px;margin-bottom: 12px;" alt />
            </div>
            <div>链通科技</div>
          </div>
        </div>
        <div :class="item.selete? 'icon_item_selete': 'icon_item'"  v-for="(item,index) of asidelist" :key="index">
          <div class="img_font" @click="routerGo(item.routerUrl,index)">
            <div class="background_img">
              <img  :src="item.selete? item.seleteIMg : item.notSeleteIMg " alt />
            </div>
            <div>{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company:false,
      asidelist:[
        // {
        //   selete:false,
        //   seleteIMg:require( '../../assets/logo.png'),
        //   notSeleteIMg: require("../../assets/logo.png"),
        //   routerUrl:"/home",
        //   name:"链通科技",
        // },
        {
          selete:true,
          seleteIMg:require("../../assets/nab_icon_home_set.png"),
          notSeleteIMg:require("../../assets/nab_icon_home_not.png"),
          routerUrl:"/home",
          name:"首页",
        },
        {
          selete:false,
          seleteIMg:require("../../assets/nab_icon_all_set.png"),
          notSeleteIMg:require("../../assets/nab_icon_all_not.png"),
          routerUrl:"/All",
          name:"全部",
        },
        {
          selete:false,
          seleteIMg:require("../../assets/nab_icon_new_set.png"),
          notSeleteIMg:require("../../assets/nab_icon_new_not.png"),
          routerUrl:"/newItems",
          name:"新建事项",
        },
        {
          selete:false,
          seleteIMg:require("../../assets/nab_icon_du_set.png"),
          notSeleteIMg:require("../../assets/nab_icon_du_not.png"),
          routerUrl:"/Supervisorymatters",
          name:"督办事项",
        },
        {
          selete:false,
          seleteIMg:require("../../assets/nab_icon_shen_set.png"),
          notSeleteIMg:require("../../assets/nab_icon_shen_not.png"),
          routerUrl:"/examination_atters",
          name:"事项审批",
        },
        {
          selete:false,
          seleteIMg:require("../../assets/nab_icon_ping_set.png"),
          notSeleteIMg:require("../../assets/nab_icon_ping_not.png"),
          routerUrl:"/ItemEvaluation",
          name:"事项评价",
        },
        {
          selete:false,
          seleteIMg:require("../../assets/nab_icon_yan_set.png"),
          notSeleteIMg:require("../../assets/nab_icon_yan_not.png"),
          routerUrl:"/delaymatters",
          name:"延期事项",
        },
        {
          selete:false,
          seleteIMg:require("../../assets/nab_icon_hui_set.png"),
          notSeleteIMg:require("../../assets/nab_icon_hui_not.png"),
          routerUrl:"/ReportingMatters",
          name:"事项汇报",
        },
        {
          selete:false,
          seleteIMg:require("../../assets/nab_icon_nub_set.png"),
          notSeleteIMg:require("../../assets/nab_icon_nub_not.png"),
          routerUrl:"/DataKanban",
          name:"数据看板",
        },
      ]
    };
  },
  methods: {
    routerGo(url,index){
      let _this=this
      this.$router.push(url)
      this.asidelist.forEach(function(item,indexind){
        if (indexind==index) {
          item.selete=true
          _this.company=false
        }else if (index==111) {
          _this.company=true
          item.selete=false
        }else{
          item.selete=false
          _this.company=false
        }
      })
    },
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
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 110px;
        .img_font {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          .background_img {
            width: 20px;
            height: 20px;
            margin-bottom: 12px;
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
      .icon_item_selete {
        border-left: 4px solid #f0914d;
        background-color: #fff9f5;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 110px;
        .img_font {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          .background_img {
            width: 20px;
            height: 20px;
            margin-bottom: 12px;
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
}
</style>