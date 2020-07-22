<template>
    <div class="mvMusicDetailContainer">
        <div class="mvMusicDetail">
            <div class="mvMusicVideo">
                <div class="video">
                    <video :src="obj.url" controls style="width: 100%;"></video>
                    <div class="mvMusicDetailTitle">
                        <div>
                            歌曲名字:{{name}}
                        </div>
                    </div>
                </div>
            </div>
                <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                    <van-list
                            v-model="loading"
                            :finished="finished"
                            finished-text="没有更多了"
                            @load="onLoad"
                    >
                        <div class="mvMusicDetailComment">
                            <div class="mvMusicDetailPerson">
                                <div v-for="(item,index) in comments" :key="index">
                                    <div class="PersonComment">
                                        <div class="person">
                                            <div class="img">
                                                <img :src="item.user.avatarUrl" alt="">
                                            </div>
                                            <div class="text">
                                                {{item.user.nickname}}
                                            </div>
                                        </div>
                                        <div class="comment">
                                            {{item.content}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-list>
                </van-pull-refresh>
        </div>
    </div>
</template>

<script>
    import Loginminix from "../minix/Loginminix";
    import {getMvMusicComment, getMvMusicListDetail} from "../api/musicApi";

    export default {
        name: "MvMusicDetail",
        mixins: [Loginminix],
        data() {
            return {
                obj: {},
                comments: [],
                name: "",
                loading: false,
                finished: false,
                refreshing: false,
                offset: 0,
            }
        },
        created() {
            // console.log(this.$route.params.id)
            //音乐视频video
            getMvMusicListDetail(this.$route.params.id).then(res => {
                // console.log(res)
                this.obj = res.data
            });
            //音乐评论
            getMvMusicComment(this.$route.params.id).then(res => {
                console.log(res)
                this.comments = res.comments
            })
            this.name = this.$route.params.name
        },
        methods: {
            //加载更多
            onLoad() {
                getMvMusicComment(this.$route.params.id, 20, this.offset).then(res => {
                    // console.log(res)
                    this.comments = this.comments.concat(res.comments)
                    this.loading = false;
                    this.refreshing = false;
                });
                this.offset += 20;
            },
            onRefresh() {
                // 清空列表数据
                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                this.comments = [];
                // this.offset = 10;
                this.offset = 0
                this.onLoad();

            },
        }
    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
    }

    .mvMusicDetailContainer {
        padding-top: 8px;
        padding-bottom: 60px;
        box-sizing: border-box;


        .mvMusicDetail {

            .mvMusicVideo {
                .video {
                    width: 100%;
                    height: 240px;
                    position: fixed;
                    top: 40px;
                    z-index: 100;
                    background-color: #fff;
                }

                .mvMusicDetailTitle {
                    position: fixed;
                    padding-left: 15px;
                    font-size: 14px;
                    color: #888888;
                    border-bottom: 1px solid #f7f8fa;
                    padding-bottom: 10px;
                }
            }

            .mvMusicDetailComment {
                border-top: 1px solid black;
                margin-top: 280px;
                .mvMusicDetailPerson {
                    /*margin-top: 225px;*/

                    .PersonComment {
                        padding-left: 10px;
                        padding-right: 10px;

                        .person {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            margin-top: 10px;
                            box-sizing: border-box;

                            .img {
                                width: 50px;
                                height: 50px;

                                img {
                                    width: 100%;
                                    height: 100%;
                                    border-radius: 50%;
                                }
                            }

                            .text {
                                color: #26a2ff;
                                font-size: 14px;
                                margin-left: 10px;
                            }
                        }

                        .comment {
                            padding-left: 15px;
                            box-sizing: border-box;
                            border-bottom: 1px solid #f7f8fa;
                            margin-top: 5px;
                            padding-bottom: 5px;
                        }
                    }
                }
            }
        }
    }


</style>