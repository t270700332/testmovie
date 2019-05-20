<template>
    <div class="registerPage">
        <div>
            <div class="box">
                <label for="">输入用户名</label>
                <input type="text" placeholder="用户名" v-model="username">
            </div>
            <div class="box">
                <label for="">输入密码</label>
                <input type="text" placeholder="密码" v-model="password">
            </div>
            <div class="box">
                <label for="">再次输入密码</label>
                <input type="text" placeholder="密码">
            </div>
            <div class="box">
                <button v-on:click="addUser">注册</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
         username:"",
         password:""
        }
    },
    methods: {
    addUser() {
      var username = this.username;
      var password = this.password;
      this.$http.post('/api/user/addUser', {
        username: username,
        password: password
      },{}).then(function(result){
          console.log(result);
           alert("注册成功");
      },function(){

      })
    }
  }

}
</script>

<style scoped>
.box{
    display:flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
}
.registerPage{
    margin-top: 10%;
}
</style>


