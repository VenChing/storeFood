<!--
 * @Description: Web project
 * @Version: 2.0
 * @Autor: Xu.wenqing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-08 19:45:38
 * @LastEditors: Xu.wenqing
 * @LastEditTime: 2020-08-08 20:10:48
-->
<template>
  <div>
    <!-- 楼层1 不规则布局 -->
    <div class="floor-title">{{floorTitle}}</div>
    <div class="floor">
      <div class="floor-anomaly">
        <div class="floor-one">
          <img :src="floorData0.image" width="100%" alt />
        </div>
        <div>
          <div class="foor-tow">
            <img :src="floorData1.image" width="100%" alt />
          </div>
          <div>
            <img :src="floorData2.image" width="100%" alt />
          </div>
        </div>
      </div>
    </div>

    <!-- 楼层 规则部分布局 -->
    <!-- 所谓规则部分，就是由左右两列组成，用v-for可以进行循环。 -->

    <div class="floor-rule">
      <div v-for="(item,index) in floorData.slice(3)" :key="index">
        <img :src="item.image" width="100%" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 子父传值
  props: ["floorData", "floorTitle"],
  data() {
    return {
      floorData0: {},
      floorData1: {},
      floorData2: {}
    };
  },
  created() {
    //这里写得不到数据，应为数据是延迟返回的
  },
  mounted() {},
  methods: {},
  // 加入watch属性来监听传递过来值的变化
  watch: {
    floorData: function(val) {
      this.floorData0 = this.floorData[0];
      this.floorData1 = this.floorData[1];
      this.floorData2 = this.floorData[2];
    }
  }
};
</script>

<style scoped>
/* 楼层信息 */

.floor-title {
  text-align: center;
  font-size: 14px;
  height: 1.8rem;
  line-height: 1.8rem;
}

.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.floor-anomaly div {
  width: 10rem;
  box-sizing: border-box;
}
.floor-one {
  border-right: 1px solid #ddd;
}
.floor-two {
  border-bottom: solid 1px #ddd;
}

/* 规则楼层 */

.floor-rule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
}
.floor-rule div {
  box-sizing: border-box;
  width: 10rem;
  border-bottom: 1px solid #ddd;
}
.floor-rule div:nth-child(odd) {
  border-right: 1px solid #ddd;
}
</style>
