<!--
 * @Description: Web project
 * @Version: 2.0
 * @Autor: Xu.wenqing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-08 20:31:48
 * @LastEditors: Xu.wenqing
 * @LastEditTime: 2020-08-08 20:36:07
-->
<template>
  <div class="goods-info">
    <div class="goods-image">
      <img v-lazy="goodsImage" width="90%" alt />
    </div>
    <div class="goods-name">{{goodsName}}</div>
    <div class="goods-price">{{goodsPrice | moneyFilter}}</div>
  </div>
</template>

<script>
import { toMoney } from "@/filter/moneyFilter.js";
export default {
  props: ["goodsImage", "goodsName", "goodsPrice"],
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.goods-name {
  padding: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
