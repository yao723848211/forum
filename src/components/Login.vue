<template>
    <div>
        <div class="login-container">
            <h2>forum</h2>
            <!--登录注册界面-->
            <van-field v-model="number" type="text" label="用户名"/>
            <!-- 输入密码 -->
            <van-field v-model="password" type="password" label="密码"/>
            <div class="btn-box">
                <button class="btn" @click="submitForm">登录</button>
            </div>
            <span>没有账号？去</span>
            <router-link to="/Sign"><span>注册</span></router-link>
            <router-link to="/ForgetPassword"><p>忘记密码</p></router-link>
        </div>
    </div>
</template>

<script>
    import {islogin} from "../api/loginApi";
    import {mapState} from "vuex";
    import Loginminix from "../minix/Loginminix";
    import { Toast } from 'vant';
    export default {
        name: "login",
        components: {},
        data() {
            return {
                number: '',
                password: '',

            }
        },
        mixins: [Loginminix],
        methods: {
            //登录判断
            submitForm() {
                if (this.number == '') {
                    alert('输入账号')
                } else if (this.password == '') {
                    alert('输入密码')
                } else {
                    //登录的接口
                    islogin(this.number, this.password).then(res => {
                        // console.log(res)
                        if (res.code == 0) {
                            Toast.success('登录成功');
                            this.$store.commit('changisLogin', {isLogin: true})
                            this.$store.commit('changeisLogin1', {isLogin1: res.data})
                            this.$router.push('/')
                        } else if (res.code == 500) {
                            alert(res.msg)
                        }
                    })
                }


            },
        },
        computed: {
            ...mapState(['isLogin'])
        },
    }
</script>

<style scoped lang="less">
    .login-container {
        text-align: center;
    }

    .btn {
        width: 100%;
        height: 40px;

    }

    .btn-box {
        margin-bottom: 20px;
        margin-top: 20px;
    }
</style>