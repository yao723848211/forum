<template>
    <!--    帖子详情界面-->
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
        <!--发表评论-->
        <div class="comment" @click="publicationContent">
            <van-icon name="chat-o" style="line-height: 25px"/>
            <span @click.capture="comment" style="margin-left: -16px">评论</span>
        </div>
        <div class="discuss" v-if="this.comment1==true">
            <input type="text" class="content" v-model="content">
            <button class="btn" @click="btn1" ref="a1">评论</button>
        </div>
    </div>
</template>

<script>
    import {publicationComment} from "../api/listApi";

    import Loginminix from "../minix/Loginminix";
    import {comment} from "../api/loginApi";
    import {mapState} from "vuex";
    import Toast from "vant/lib/toast";
    // import {comment} from "../api/loginApi";

    export default {
        name: "MesageDetail",
        data() {
            return {
                obj: {},
                comment1: false,
                content: ''
            }
        },
        mixins: [Loginminix],
        computed: {
            ...mapState(['detail', 'postsId'])
        },

        created() {
            console.log(this.$route.params.postsId)

            // console.log(this.$route.params.postsId)
            this.$store.commit('changeid', {detailId: this.$route.params.postsId})
            this.$store.dispatch('details', {detailId: this.$route.params.postsId}).then(() => {
                // this.obj = res.data
                this.obj = this.detail
            })
            console.log(this.detail)

        },

        methods: {
            publicationContent() {

                publicationComment(775, "eeeeeee").then(() => {

                })
            }
            ,
            comment() {
                this.comment1 = true


                if (this.loginClick()) {
                    Toast('需要登录才能评论')
                    this.$router.push('/login')
                }
            }
            ,
            btn1() {
                console.log(111)
                // console.log(this.content)

                if (this.loginClick()) {
                    Toast('需要登录才能评论')
                    // this.$router.push('/login')
                } else if (this.content == '') {
                    Toast("输入框为空")
                } else {
                    this.comment1 = false
                    comment(this.$route.params.postsId, this.content).then(() => {

                        Toast('评论成功');
                        this.$store.dispatch('initCommentList',{postsId:this.$route.params.postsId})
                        this.comment1 = false
                    })
                }
            }
        }
    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .message-detail-container {
        width: 100%;
        padding: 10px 20px;
        box-sizing: border-box;
        overflow: scroll;
        margin-top: 40px;

        .personIntro {
            display: flex;
            align-items: center;

            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }

            h4 {
                margin-left: 15px;
                font-size: 20px;
            }

            p {
                margin-left: 15px;
                font-size: 14px;
                color: #26a2ff;
            }
        }

        .perBaner {
            display: flex;
            flex-shrink: 1;

            img {
                width: 100%;
                height: 100%
            }
        }

        .info {
            p {
                color: #888;
                font-size: 14px;
            }
        }

        .comment {
            width: 80px;
            height: 30px;
            border: 1px solid black;
            border-radius: 10px;
            display: flex;
            justify-content: space-around;
            float: right;
            overflow: hidden;

            van-icon {
                font-size: 16px;
            }

            span {
                font-size: 16px;
                /*float: left;*/
            }

        }
    }

    .discuss {
        position: fixed;
        bottom: 55.5px;
        left: 0;
        width: 100%;
        height: 40px;

        .content {
            width: 75%;
            height: 100%;
        }

        .btn {
            width: 25%;
            height: 100%;
        }
    }
</style>