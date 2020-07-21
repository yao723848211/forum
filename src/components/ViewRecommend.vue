<template>
    <div class="view-recommend-container">
        <!--        首页的中间区域-->
        <div style="padding: 1px 15px">
            <ul class="container" v-for="(item,index) in list" :key="index">
                <div @click="toMsgDetail(item.postsId,item.title)">
                    <li class="personInfo">
                        <span>{{item.userName}}</span>
                        <img :src="item.avatar"
                             alt="">
                    </li>
                    <li class="personComment">
                        <div>
                            <h3>{{item.title}}</h3>
                            <p v-html="item.intro"></p>
                        </div>
                    </li>
                    <li class="personSceneryImg">
                        <img :src="item.coverImgUrl" alt="">
                    </li>
                </div>
                <van-cell title="点击分享给好友" @click="showShare = true"/>
                <van-share-sheet
                        v-model="showShare"
                        title="立即分享给好友"
                        :options="options"
                        @select="onSelect"
                        :overlay="flag"
                />
            </ul>
        </div>
    </div>
</template>

<script>
    import {getPostList1} from "../api/listApi";
    import {Toast} from 'vant';

    export default {
        name: "ViewRecommend",
        data() {
            return {
                list: [],
                flag: false,
                showShare: false,
                options: [
                    [
                        {name: '微信', icon: 'wechat'},
                        {name: '微博', icon: 'weibo'},
                        {name: 'QQ', icon: 'qq'},
                    ],
                    [
                        {name: '复制链接', icon: 'link'},
                        {name: '分享海报', icon: 'poster'},
                        {name: '二维码', icon: 'qrcode'},
                    ],
                ],
            }
        },
        created() {
            getPostList1(this.$route.params.categoryId).then(res => {
                // console.log(res)
                this.list = res.rows
            })
        },
        methods: {
            //点击进入该论坛的详情界面
            // toMsgDetail(postsId){
            //     this.$router.push("/OtherLayout/msgDetail/" +postsId)
            toMsgDetail(postsId, title) {
                this.$router.push("/OtherLayout/msgDetail/" + postsId + '/' + title)
            },
            onSelect(option) {
                Toast(option.name);
                this.showShare = false;
            },
        }
    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
    }

    .view-recommend-container {
        box-sizing: border-box;
        overflow: scroll;
        height: 1000px;
        padding-bottom: 50px;
        background-color: #f7f8fa;

        /deep/.van-share-sheet__options {
            display: flex;
            justify-content: space-around;
        }

        .container {
            padding: 10px 20px;
            box-sizing: border-box;
            border-radius: 10px;
            height: 140px;
            background-color: white;
            margin-top: 5px;

            .personInfo {
                float: left;
                width: 20%;
                /*display: flex;*/
                /*flex-shrink: 1;*/
                box-sizing: border-box;

                img {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                }

                span {
                    color: lightseagreen;
                    font-size: 12px;
                }
            }

            .personComment {
                float: left;
                margin-left: 5%;
                width: 35%;
                box-sizing: border-box;

                h3 {
                    color: black;
                    font-size: 20px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                p {
                    width: 100%;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    /*white-space: nowrap;*/
                    overflow: hidden;
                    /*text-overflow: ellipsis;*/
                }
            }

            .personSceneryImg {
                box-sizing: border-box;
                width: 35%;
                float: left;
                margin-left: 5%;

                img {
                    width: 90px;
                    height: 80px;
                    border-radius: 20px;
                }
            }
        }
    }
</style>