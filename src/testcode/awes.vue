<!--
 * @Description: Web project
 * @Version: 2.0
 * @Autor: Xu.wenqing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-08 18:13:29
 * @LastEditors: Xu.wenqing
 * @LastEditTime: 2020-08-08 19:07:18
-->
<template>
  <div>
    <swiper class="swiper" option="swiperOption">
      <swiper-slide class="text">
        <div class="centent">
          一大堆丸子............
          // direction：'vertical'设置竖排显示
          // slidesPerView:'auto' 设置同屏显示的数量，默认为1，这里使用auto是随意的意思。
          // freeMode:true 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
          // mousewheel:true 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
          // direction：'vertical'设置竖排显示
          // slidesPerView:'auto' 设置同屏显示的数量，默认为1，这里使用auto是随意的意思。
          // freeMode:true 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
          <div>
            // mousewheel:true 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
            // direction：'vertical'设置竖排显示
            // slidesPerView:'auto' 设置同屏显示的数量，默认为1，这里使用auto是随意的意思。
            // freeMode:true 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
            // mousewheel:true 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
            // direction：'vertical'设置竖排显示
            // slidesPerView:'auto' 设置同屏显示的数量，默认为1，这里使用auto是随意的意思。
            // freeMode:true 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
            // mousewheel:true 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
          </div>
          <div>
            // mousewheel:true 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
            // direction：'vertical'设置竖排显示
            // slidesPerView:'auto' 设置同屏显示的数量，默认为1，这里使用auto是随意的意思。
            // freeMode:true 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
            // mousewheel:true 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
            // direction：'vertical'设置竖排显示
            // slidesPerView:'auto' 设置同屏显示的数量，默认为1，这里使用auto是随意的意思。
            // freeMode:true 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
            // mousewheel:true 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      slide: [1, 2, 3, 4, 5, 6],
      // swiperOption: {
      //   direction: "vertical",
      //   slidesPerView: "auto",
      //   freeMode: true,
      //   mousewheel: true,

      //   // direction：'vertical'设置竖排显示

      //   // slidesPerView:'auto' 设置同屏显示的数量，默认为1，这里使用auto是随意的意思。

      //   // freeMode:true 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。

      //   // mousewheel:true 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
      //   loop: true,
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true
      //   }
      // },
      slide: [1, 2, 3, 4, 5, 6],
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  components: { swiper, swiperSlide },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.swiper {
  height: 300px;
  overflow: hidden;
}
.text {
  font-size: 18px !important;
  text-align: left;
  padding: 30px;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
