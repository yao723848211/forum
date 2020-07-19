<template>
    <div class="otherHeader">
        <div class="goBack" @click="goBack">
            <van-icon name="arrow-left"/>
            返回
        </div>
        <div>
            帖子详情
        </div>
        <div>

            <van-cell is-link @click="showPopup">    <van-icon name="ellipsis" /></van-cell>
            <van-popup v-model="show"  position="bottom" :style="{ height: '100px',width:'100%' }" >

                    <button @click="delete1">删除帖子</button>
                    <button>修改帖子</button>

            </van-popup>
        </div>
    </div>
</template>

<script>
    import {deletepost} from "../api/loginApi";

    export default {
        name: "OtherHeader",
        data(){
            return {
                show: false,
            };
        },
        methods:{
            goBack(){
                this.$router.back();
            },
            showPopup() {
                this.show = true;
            },
            delete1(){
                deletepost(this.$route.params.)
            }
        }
    }
</script>

<style scoped lang="less">
    .otherHeader {
        height: 40px;
        line-height: 40px;
        background-color: #26a2ff;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        .goBack{
            display: flex;
            align-items: center;
        }
    }
    button{
        display: block;
        width: 100%;
    }
</style>