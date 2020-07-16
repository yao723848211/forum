<template>
    <div>
        <LoginHeader title="登录"></LoginHeader>
        <div  class="login-container">
        <h2>forum</h2>
        <van-field v-model="number" type="text" label="用户名" />
        <!-- 输入密码 -->
        <van-field v-model="password" type="password" label="密码" />

       <div class="btn-box">
           <button class="btn" @click="submitForm">登录</button>

       </div>
                <span>没有账号？去</span><router-link to="/Sign"><span>注册</span></router-link>
                <router-link to="/ForgetPassword"><p>忘记密码</p></router-link>
    </div>
    </div>
</template>

<script>
    import {islogin} from "../api/loginApi";
    import LoginHeader from "./LoginHeader";

    export default {
        name: "login",
        components:{
        LoginHeader
            },
        data() {


            return {
                number: '',
                password: '',
            }
        },
        methods: {
            submitForm() {
                if (this.number==''){
                 alert('输入账号')
                }
                else if(this.password==''){
                    alert('输入密码')
                }
                else {
                    islogin(this.number,this.password).then(res=>{
                        console.log(res)
                        this.$store.commit('changisLogin', {isLogin:true})
                        this.$router.push('/Personage')
                    })
                }


            },
        },
        created() {

        }
    }
</script>

<style scoped lang="less">
    .login-container {
        text-align: center;
    }
    .btn{
        width: 100%;
        height: 40px;

    }
    .btn-box {
        margin-bottom: 20px;
        margin-top: 20px;
    }
</style>