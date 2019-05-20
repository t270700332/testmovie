<template>
  <div class="header">
    <router-link to="/" class="header_menu" tag="a">
      主页
    </router-link>
    <router-link to="/" class="header_menu" tag="a">
      电影
    </router-link>
     <router-link :to="{name:'registerLink'}" class="header_menu_right" tag="a">
      注册
    </router-link>
    <router-link :to="{name:'loginLink'}" class="header_menu_right" tag="a">
      登录
    </router-link>
   
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  color: #000;
  background-color: #a5a5a5;
  border-bottom: 2px solid #000;
}
.header_menu{
  padding-left: 60px;
  padding-top: 20px;
  float: left;
  color: #fff;
  text-decoration:none;
}
.header_menu_right{
  padding-right: 60px;
  padding-top: 20px;
  float: right;
  color: #fff;
  text-decoration:none;
}
</style>
