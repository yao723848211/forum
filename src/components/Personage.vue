<template>
    <div>
        <div class="personmation">
        <img src="../assets/10583098_172043022317_2.jpg" v-if="!list.avatar" class="pic" @click="amend">
        <input type="file" style="display: none" ref="input1" @change="onImgUpload">
        <img :src="list.avatar" v-if="list.avatar" class="pic" @click="amend">
        <h2 style="text-align: center" class="title">
            {{list.userName}}
        </h2>
        <div class="box">
            <p><span>账号：</span>{{list.loginName}}</p>
            <p><span>手机号：</span>{{list.phonenumber}} </p>
        </div>
        <div class="box-person">
          <router-link to="/Participation">  <p>我参与的</p></router-link>
        <router-link to="/ModifiedData">
            <p>修改资料</p>
        </router-link>
            <p @click="exit">退出登录</p>
        </div>
    </div>
    </div>
</template>

<script>

    import {amendpic, exitlogin, wathcpersonmataion} from "../api/loginApi";
    import Dialog from "vant/lib/dialog";
    import {mapState} from "vuex";
    import Loginminix from "../minix/Loginminix";


    export default {
        name: "Personage",
        components:{

        },
        data() {
            return {
                list: {}
            }
        },
        mixins:[Loginminix],
        methods: {
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
            },
            exit() {
                Dialog.confirm({
                    title: '退出登录',
                    message: '是否退出登录',
                }).then(() => {
                        //退出登录的接口
                        exitlogin().then(() => {
                            // console.log(res)
                            this.$router.push('/login')
                            this.$store.commit('changisLogin', {isLogin:false})
                        }).catch(() => {
                            this.$router.push('/login')
                            this.$store.commit("changisLogin", {isLogin: false})
                        });
                    })
            },
            amend() {
                this.$refs.input1.click();
            },
            onImgUpload(e) {
                //修改头像的接口
                amendpic(e.target.files[0]).then(() => {
                    //个人信息的接口
                    wathcpersonmataion().then(res => {
                        // console.log(res)
                        this.list = res.data
                    })
                })
            },


        },

        created() {
            //个人信息的接口
            wathcpersonmataion().then(res => {
                // console.log(res)
                this.list = res.data
            });
            // this.list=this.islogin1
        },
        computed:{
                ...mapState(['isLogin1'])
        }
    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .pic {
        width: 100px;
        height: 100px;
        display: block;
        margin: 20px auto;
    }

    .title {
        margin-bottom: 30px;
    }

    .box {
        box-shadow: -6px -1px 8px #7bc1f6;
        border-radius: 10px;
        padding: 10px;
        p {
            margin-top: 10px;
        }

        margin-bottom: 50px;
    }

    .box-person {
        padding: 10px;
        p {
            margin-top: 10px;
        }
    }
    a{
        color: black;
    }
    .personmation{
    margin-top: 40px;
    }
</style>