<template>
    <div class="detailComment">
        <div>
            <div class="title">
                <h4>全部评论</h4>
            </div>
            <div class="allComment" v-for="(item,index) in list" :key="index">
                <div class="person">
                    <img :src="item.avatar" alt="">
                    <div class="personName">
                        <span>{{item.userName}}</span>
                        <span>{{item.updatedTime}}</span>
                    </div>
                </div>
                <div class="commentContext">
                    <span>{{item.commentContent}}</span>
                </div>
                <div class="commentIcon">
                    <van-icon name="clear" @click.capture="delete1(item.commentId)" />
                    <i class="el-icon-chat-round"></i>
                    <span  @click="replyComment(item.commentId)">回复</span>
                </div>
            </div>
            <van-action-sheet v-model="show" title="回复列表" :overlay=false>
                <div class="content">
                    <div class="perContent" v-for="(item,index) in detailList" :key="index">
                        <div class="person">
                            <img :src="item.avatar" alt="">
                            <div class="personName">
                                <span>{{item.userName}}</span>
                            </div>
                        </div>
                        <div class="commentContext">
                            <span>评论内容:{{item.commentContent}}</span>
                        </div>
                        <div>
                            <span>{{item.updatedTime}}</span>
                        </div>
                    </div>
                </div>
            </van-action-sheet>
        </div>
<!--        <div class="discuss">-->
<!--            <input type="text">-->
<!--            <button>评论</button>-->
<!--        </div>-->
    </div>
</template>

<script>
    import {commentList, replyComment} from "../api/listApi";
    import {Delete} from "../api/loginApi";
    import Loginminix from "../minix/Loginminix";

    export default {
        name: "DetailComment",
        mixins:[Loginminix],
        data() {
            return {
                list: [],
                show: false,
                detailList:[],
            }

        },
        created() {
            // console.log(this.$route.params.postsId)
            commentList(this.$route.params.postsId).then(res => {
                this.list = res.rows;
                console.log(this.list);
                // this.$store.commit('changelist',{list:res.rows})
            })
        },
        methods: {
            replyComment(parentId) {
                this.show = !this.show;
                console.log(parentId)
                replyComment(parentId).then(res => {
                    console.log(res)
                    this.detailList=res.rows
                })
            },
            delete1(ids){
                if (this.loginClick()){
                    alert('需要登录才能回复')
                }else {
                    console.log(11)
                    Delete(ids).then(res=>{
                        console.log(res)
                        commentList(this.$route.params.postsId).then(res => {
                            this.list = res.rows;
                            console.log(this.list);
                            // this.$store.commit('changelist',{list:res.rows})
                        })
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
    }

    .detailComment {
        border-top: 1px dashed black;
        padding: 15px 10px;
        .van-action-sheet__content{
            height: 240px;
            overflow: scroll;
        }
        .allComment {
            width: 100%;
            height: 100px;
            background-color: burlywood;
            border-radius: 15px;
            margin-top: 15px;

            .person {
                display: flex;

                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }

                .personName {
                    margin-left: 15px;
                    display: flex;
                    flex-direction: column;
                }

                .commentContext {
                    font-size: 14px;
                }

            }

            .commentIcon {
                display: flex;
                justify-content: flex-end;
                height: 30px;
                margin-top: 15px;

                .content {
                    padding: 16px 16px 160px;
                }
            }
        }


        .perContent{
            overflow: scroll;
            background-color: burlywood;
            padding: 10px 30px;
            box-sizing: border-box;
            margin-top: 15px;
            .person {
                display: flex;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }

                .personName {
                    margin-left: 15px;
                    display: flex;
                    flex-direction: column;
                }

                .commentContext {
                    font-size: 14px;
                }
            }
        }
    }
    .discuss {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>