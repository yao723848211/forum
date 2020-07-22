<template>
    <div class="modified">
        <van-field v-model="number" type="text" label="用户名" />
        <!-- 输入密码 -->

        <van-field v-model="phone" type="number" label="手机号" />

            <button class="amend-box" @click="amend">确认修改</button>

    </div>
</template>

<script>
    import {amendmataion} from "../api/loginApi";
    import Dialog from "vant/lib/dialog";
    import Loginminix from "../minix/Loginminix";
    import Toast from "vant/lib/toast";
    export default {
        name: "ModifiedData",
        data() {


            return {
                number: '',

                phone:""
            }
        },
        mixins:[Loginminix],
        methods:{
            amend(){
                //修改资料的接口
                amendmataion(this.number,this.phone).then(res=>{
                    if (res.code==500){
                        Toast(res.msg)
                    }else {
                        Dialog.confirm({
                            title: '修改信息',
                            message: '是否修改信息',
                        })
                            .then(() => {
                                this.$router.push('/login')
                            })
                            .catch(() => {

                            });

                    }
                })


            }

        }
    }
</script>

<style scoped lang="less">
.amend-box {

    /*margin-left: 40%;*/
    /*margin-top: 20px;*/
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 0;
}
    .modified {
        margin-top: 40px;
    }
</style>