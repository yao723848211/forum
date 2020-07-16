<template>
    <div class="message-detail-container">
        <div class="personIntro">
            <img :src="obj.avatar" alt="">
            <h4>楼主:</h4>
            <p>{{obj.userName}}</p>
        </div>
        <div class="perBaner">
            <img :src="obj.coverImgUrl" alt="">
        </div>
        <h3 class="tittle">{{obj.title}}</h3>
        <div class="info">
            <p v-html="obj.intro"></p>
        </div>
        <div class="comment">
            <van-icon name="chat-o" />
            <span>评论</span>
        </div>
    </div>
</template>

<script>
    import {postListDetail} from "../api/listApi";

    export default {
        name: "MesageDetail",
        data() {
            return {
                obj: {},
            }
        },
        created() {
            // console.log(this.$route.params.postsId)
            postListDetail(this.$route.params.postsId).then(res => {
                // console.log(res)
                this.obj = res.data
                // console.log(this.obj)
            })
        }
    }
</script>

<style scoped lang="less">
    .message-detail-container {
        width: 100%;
        padding: 10px 20px;
        box-sizing: border-box;
        overflow: scroll;
        .personIntro{
            display: flex;
            align-items: center;
            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            h4{
                margin-left: 15px;
                font-size: 20px;
            }
            p{
                margin-left: 15px;
                font-size: 14px;
                color: #26a2ff;
            }
        }
        .perBaner{
            display: flex;
            flex-shrink: 1;
            img {
                width: 100%;
                height: 240px;
            }
        }
        .info{
            p{
                color: #888;
                font-size: 14px;
            }
        }
        .comment{
            width: 80px;
            height: 30px;
            border: 1px solid black;
            border-radius: 10px;
            display: flex;
            justify-content: space-around;
            float: right;
            overflow: hidden;
            van-icon{
                font-size: 16px;
            }
            span {
                font-size: 16px;
                /*float: left;*/
            }

        }
    }
</style>