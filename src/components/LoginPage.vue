<template>
    <div class="loginPage">
        <div>
            <div>
                <div class="box">
                    <label>用户名：</label>
                    <input placeholder="用户名">
                </div>
                <div class="box">
                    <label >密码：</label>
                    <input type="text" placeholder="密码">
                </div>
                <div class="box">
                    <button>登录</button>
                    <router-link :to="{name:'registerLink'}" style="margin-left:10px" tag="button">注册</router-link>
                    <button style="margin-left:10px">忘记密码</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.box{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
}
.loginPage{
    margin-top: 10%;
}
</style>

