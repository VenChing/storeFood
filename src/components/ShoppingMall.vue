<template>
  <!-- 先在created里获取数据，然后进行html骨架编写，最后进行CSS样式的调整。 -->
  <div>
    <!--search bar layout-->
    <div class="search-bar">
      <van-row gutter="5">
        <van-col span="3">
          <img :src="locationIcon" width="80%" class="location-icon" />
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" />
        </van-col>
        <van-col span="5">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>

    <!-- swiper -->
    <div class="swiper-area">
      <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <img v-lazy="banner.image" width="100%" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="munebg">
      <!-- 菜单 -->
      <div class="type-bar">
        <div v-for="(cate,index) in category" :key="index">
          <img v-lazy="cate.image" alt width="90%" />
          <span>{{cate.mallCategoryName}}</span>
        </div>
      </div>
      <!-- ad广告 -->
      <div class="ad-banner">
        <img :src="adBanner" alt width="100%" />
      </div>
    </div>
    <!-- 商品推荐 -->
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <!--swiper-->
        <swiper :options="swiperOption">
          <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%" />
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price | moneyFilter}} (￥{{item.mallPrice}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>

    <!-- 楼层1 不规则布局 -->

    <!-- 楼层 规则部分布局 -->
    <!-- 所谓规则部分，就是由左右两列组成，用v-for可以进行循环。 -->

    <!-- 楼层信息封装为组件  -->
    <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
    <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
    <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>
    <!-- 热卖商品 -->
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <!-- 这里需要一个list组件 -->
        <!-- 下拉加载更多 -->
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
              <goodsInfo :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goodsInfo>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
//引入接口配置文件
import URL from "@/serviceAPI.config.js";
// 注意axios和axiso的书写方式、
import axios from "axios";

import floorComponent from "@/components/component/floorComponent";
import goodsInfo from "@/components/component/goodsINfoComponent";
import { toMoney } from "@/filter/moneyFilter.js";
export default {
  data() {
    return {
      // 赋值自定义变量
      locationIcon: require("../assets/images/location.png"),
      bannerPicArray: [],
      category: [],
      adBanner: "",
      recommendGoods: [],
      floorName: {},
      floor1: [],
      floor2: [],
      floor3: [],
      hotGoods: [],
      // swiper配置
      slide: [1, 2, 3, 4, 5, 6],
      swiperOption: {
        slidesPerView: 3,
        loop: true,
        // autoplay: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  components: {
    floorComponent,
    goodsInfo
  },
  created() {
    // 获取数据
    axios({
      // 直接使用接口地址，如果以后接口地址有改动修改起来太麻烦
      // 把接口统一写在serviceAPI.config.js文件中
      // url: "https://mock.yonyoucloud.com/mock/14397/store/FoodList",
      url: URL.getShoppingMallInfo,
      method: "get"
    })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          this.category = response.data.data.category; //获取菜单
          this.adBanner = response.data.data.advertesPicture.Adpic; //获得广告图片
          this.recommendGoods = response.data.data.recommend; //推荐商品
          this.bannerPicArray = response.data.data.slides; //轮播图片
          this.floorName = response.data.data.floorName; //楼层标题
          this.floor1 = response.data.data.floor1; //楼层1
          // 楼层封装为组件
          // 获取对应楼层内容数据

          // 直接在模板floor1[0].image取值会报错，这可能也是vue框架的一个限制
          // this.floor1_0 = this.floor1[0];
          // this.floor1_1 = this.floor1[1];
          // this.floor1_2 = this.floor1[2];

          this.floor1 = response.data.data.floor1;
          this.floor2 = response.data.data.floor2;
          this.floor3 = response.data.data.floor3;

          // 热卖
          this.hotGoods = response.data.data.hotGoods;
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  mounted() {},
  methods: {},
  // Filter在实际工作中是并用的一个技能，虽然很简单，但是你要反复琢磨你写的代码是否可以优化或者是否可以精简。
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  }
};
</script>

<style scoped>
/* 头部定位 */
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid #ea92c7 !important ;
  background-color: #e5017d;
  color: #fff;
}
.location-icon {
  padding-top: 0.2rem;
  padding-left: 0.3rem;
}
/* 轮播图 */
.swiper-area {
  /* width: 20rem;
  overflow: hidden;
  clear: both;
  height: 20rem; */
  width: 100%;
  height: 100%;
  clear: both;
}
/* 菜单 */
.munebg {
  background-color: #ececec;
}
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  width: 5.5rem;
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
}
/* 商品推荐 */
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}

.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}

/* 楼层信息封装为组件 */

/* 楼层信息 */

/* 规则楼层 */

/* 热卖商品
 */
.hot-area {
  text-align: center;
  font-size: 14px;
  height: 1.8rem;
  line-height: 1.8rem;
}
</style>
