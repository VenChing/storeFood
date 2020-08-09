<!--
 * @Description: Web project
 * @Version: 2.0
 * @Autor: WenChing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-10 02:37:05
 * @LastEditors: WenChing
 * @LastEditTime: 2020-08-10 03:20:31
-->
<template>
  <div>
    <van-nav-bar
      title="用户注册"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    >
      <div class="register-panel">
        <van-field
          v-model="username"
          label="用户名"
          icon="clear"
          placeholder="请输入用户名"
          required
          @click-icon="username = ''"
        ></van-field>

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        ></van-field>
      </div>
    </van-nav-bar>
    <div class="register-button">
      <van-button
        type="primary"
        size="large"
        @click="RegisterUser"
      >马上注册</van-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/serviceAPI.config.js'
export default {
  data() {
    return {
      username:'',
      password:''
    };
  },
  created() {},
  mounted() {},
  methods: {
    goBack(){
      this.$router.go(-1)
    },
    // 用户注册方法
    RegisterUser(){
      axios({
        url:URL.registerUser,
        method:'post',
        data:{
          username:this.username,
          password:this.password
        }
      })
      .then(response=>{
        console.log(response);
        
      })
      .catch((error)=>{
        console.log(error);
        
      })
    }
  }
};
</script>

<style scoped>
 .register-panel{
        width:96%;
        border-radius: 5px;
        margin:20px auto;
        padding-bottom:50px;
    }
    .register-button{
        padding-top:10px;
    }
</style>
