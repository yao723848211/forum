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
                    <van-icon name="clear" @click.capture="delete1(item.commentId)" style="margin-right: 10px"/>
                    <i class="el-icon-chat-round" style="margin-right: 10px"></i>
                    <span @click.capture="replyComment(item.commentId)" style='line-height: 16px;margin-right: 10px'>回复</span>
                </div>
                <van-action-sheet v-model="show" title="回复列表" :overlay=false cancel-text="回复" @click.capture="btn1">
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
                    <input type="text" class="content1" v-model="content">
                </van-action-sheet>
            </div>
        </div>
    </div>
</template>

<script>
    import {commentList, replyComment, revert} from "../api/listApi";
    import {Delete} from "../api/loginApi";
    import Loginminix from "../minix/Loginminix";
    import Dialog from "vant/lib/dialog";

    export default {
        name: "DetailComment",
        mixins: [Loginminix],
        data() {
            return {
                list: [],
                show: false,
                detailList: [],
                revert1: false,
                content: '',
                id: ''

            }

        },
        created() {
            //获取评论列表
            commentList(this.$route.params.postsId).then(res => {
                this.list = res.rows;
                console.log(this.list);
                // this.$store.commit('changelist',{list:res.rows})
            })
        },
        methods: {
            //回复
            replyComment(parentId) {

                this.revert1 = true;
                this.show = !this.show;
                console.log(parentId)
                replyComment(parentId).then(res => {
                    console.log(res)
                    this.detailList = res.rows
                })
                this.id = parentId
            },
            //删除
            delete1(ids) {
                if (this.loginClick()) {
                    alert('需要登录才能删除')
                } else {
                    Dialog.confirm({
                        title: '删除',
                        message: '是否删除',
                    }).then(() => {
                            Delete(ids).then(() => {
                                commentList(this.$route.params.postsId).then(res => {
                                    this.list = res.rows;
                                })
                            })
                        }).catch(() => {
                        });
                }
            },
            btn1() {
                if (this.loginClick()) {
                    alert('需要登录才能回复')
                } else {
                    this.revert1 = false;
                    console.log(this.id)
                    revert(this.$route.params.postsId, this.id, this.content).then(res => {
                        this.content = ''
                       if (res.code==0){
                           alert('回复成功')
                       }
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

    .detailComment {
        border-top: 1px dashed black;
        padding-top: 15px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 60px;
        .van-action-sheet__content {
            height: 240px;
            overflow: scroll;
        }

        .allComment {
            width: 100%;
            height: 100px;
            background-color: burlywood;
            border-radius: 15px;
            margin-top: 15px;
            padding: 10px;
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
                margin-top: 8px;

                .content {
                    padding: 16px 16px 160px;
                }
            }
        }


        .perContent {
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
                    padding: 10px;
                }
            }
        }
    }

    .discuss {
        position: fixed;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 40px;

        .btn {
            width: 25%;
            height: 100%;
        }
    }

    /deep/ .van-action-sheet__cancel {
        width: 15%;
        background: red;
        height: 36px;
        margin-left: 85%;
    }

    .content1 {
        position: fixed;
        bottom: 0;
        width: 85%;
        height: 36px;
    }
</style>