<template>
    <div>
        <van-cell-group>
            <van-field
                    v-model="username"
                    error
                    required
                    label="用户名"
                    placeholder="请输入用户名"
            />
            <van-field
                    v-model="password"
                    error
                    required
                    label="新密码"
                    placeholder="请输入新密碼"
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
            >
                <template #button>
                    <van-button size="small" type="primary" @click="code" :disabled="disabled">
                        {{code1}}
                    </van-button>
                </template>

            </van-field>
            <button class="btn" @click="forget">找回密碼</button>
        </van-cell-group>
    </div>
</template>

<script>
    import {code, forgetpassword} from "../api/loginApi";
    import Loginminix from "../minix/Loginminix";


    export default {
        name: "ForgetPassword",
        mixins:[Loginminix],
        data() {
            return {
                username: '',
                phone: '',
                password: '',
                sms: '',

                // timer:null,
                code1: "发送验证码",
                disabled: null
            };
        },
        methods: {
            code() {
                if (this.phone == '') {
                    alert('输入手机号')
                } else {
                    this.disabled = true;
                    var time = 60;
                    this.code1 = time;
                    let timer = setInterval(() => {
                        this.code1--;
                        if (this.code1 == 0) {
                            clearInterval(timer);

                            this.code1 = '发送验证码'
                            this.disabled = false
                        }
                    }, 1000);


                    code(this.phone).then(res => {
                        console.log(res)
                    })
                }

            },
            forget() {
                //忘记密码的接口
                forgetpassword(this.username, this.password, this.phone, this.sms).then(res => {
                    console.log(res)
                    if (res.code == 0) {
                        this.$router.push('/login')
                    } else {
                        alert(res.msg)
                    }
                })
            }
        }

    }
</script>

<style scoped lang="less">
    .btn {
        width: 100%;
        margin-top: 20px;
        height: 40px;
    }
</style>