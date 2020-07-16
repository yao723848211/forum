<template>
    <div >
        <LoginHeader title="注册"></LoginHeader>
        <div class="sign-container">

        <van-cell-group>
            <van-field
                    v-model="username"
                    error
                    required
                    label="用户名"
                    placeholder="请输入用户名"

            />
            <van-field
                    v-model="name"
                    error
                    required
                    label="昵称"
                    placeholder="请输入昵称"
            />
            <van-field
                    v-model="password"
                    error
                    required
                    label="密码"
                    placeholder="请输入密码"
                    type="password"
            />
            <van-field
                    v-model="phone"
                    required
                    label="手机号"
                    placeholder="请输入手机号"

            />
            <van-field
                    v-model="sms"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
                    required
            >
                <template #button>
                    <van-button size="small" type="primary" @click="code" :disabled="disabled">
                        {{code1}}

                    </van-button>
                </template>

            </van-field>
            <button class="btn" @click="sign">注册</button>
        </van-cell-group>
        </div>
    </div>
</template>

<script>
    import {code, signin} from "../api/loginApi";
    import LoginHeader from "./LoginHeader";

    export default {
        name: "Sign",
        components:{
            LoginHeader
        },
        data() {
            return {
                username:'',
                phone:'',
                password:'',
                sms:'',
                name:'',
                // timer:null,
                code1:"发送验证码",
                disabled:null
            };
        },
        methods:{
            code(){
        if (this.phone=='') {
            alert('输入手机号')
        }else {
            this.disabled=true;
            var time=60;
            this.code1=time;
            let timer= setInterval(() =>{
                this.code1--;
                if (  this.code1==0){
                    clearInterval(timer);

                    this.code1='发送验证码'
                    this.disabled=false
                }
            },1000);


            code(this.phone).then(res=>{
                console.log(res)
            })
        }

            },
            sign(){
                signin(this.username,this.sms,this.phone,this.password,this.name).then(res=>{
                    if (res.code==500){
                        alert(res.msg)
                    }else {
                        alert('注册成功')
                        this.$router.push('/login')
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    /**{*/
    /*    margin:0;*/
    /*    padding: 0;*/
    /*}*/
 .sign-container {
     margin-top: 10px;
     padding: 10px;
 }
   /deep/ .import {
       width: 65%;
    }
    .text {
        margin-right: 10px;
    }
    .btn {
        width: 65px;
        height: 30px;
        margin-left: 40%;
        margin-top: 20px;
    }
</style>