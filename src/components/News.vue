<template>
    <div class="newsContainer">
        <div class="weather">
            <van-notice-bar
                    left-icon="volume-o"
                    mode="closeable"
            >{{weather.city + ' '+weather.week+ ' '+weather.wea + ' '+ weather.tem2+'~' +weather.tem1 + ' '+  ' '+weather.win +
                weather.air_tips}}
            </van-notice-bar>
            <!--            <span></span>-->
        </div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <div class="news" v-for="(item,index) in list" :key="index" @click="jumpNewsDetail(item.articleId)">
                    <div class="newsContent clearfix">
                        <div class="newsTitle">
                            <h4>{{item.articleSource}}</h4>
                            <span >更多<van-icon name="arrow"/></span>
                        </div>
                        <div class="newsText">
                            <div class="text">{{item.title}}</div>
                            <div class="img"><img
                                    :src="item.bannerImgUrl"
                                    alt=""></div>
                        </div>
                        <div class="newsTime">{{item.createTime}}</div>
                    </div>
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
    import {getNewsList} from "../api/newsApi";
    import Loginminix from "../minix/Loginminix";

    export default {
        name: "News",
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                refreshing: false,
                offset: 10,
                weather: {},
            }
        },
        created() {
            // getNewsList(1, 20).then(res => {
            //     console.log(res)
            //     this.list = res.rows
            // })
            this.$http.get("https://tianqiapi.com/api?version=v6&appid=25354371&appsecret=BH48dg1e").then(res => {
                // console.log(res)
                this.weather = res.data
            })
        },
        mixins: [Loginminix],
        methods: {
            //处理加载更多的时候
            onLoad() {
                getNewsList(1, this.offset).then(res => {
                    //加载到更多后，应该告诉这个组件，我们加载完成了
                    this.list = this.list.concat(res.rows);
                    this.loading = false;
                    this.refreshing = false;
                })
                this.offset += 10;
            },
            onRefresh() {
                // 清空列表数据
                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                this.list = [];
                // this.offset = 10;
                this.offset = parseInt(Math.random() * 10 + 10)
                this.onLoad();

            },
            jumpNewsDetail(articleId){
                this.$router.push("/news/detail/" +articleId)
            }
        },
    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
    }

    .clearfix:after {
        Content: "";
        Height: 0;
        display: block;
        clear: both;
    }

    .newsContainer {

        padding-bottom: 60px;

        .news {
            padding: 10px 25px;

            .newsContent {
                .newsTitle {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid black;
                    padding-bottom: 8px;
                    box-sizing: border-box;

                    span {
                        display: flex;
                        align-items: center;
                        font-size: 16px;
                        color: #7bc1f6;
                    }
                }

                .newsText {
                    margin-top: 8px;
                    box-sizing: border-box;

                    .text {
                        width: 60%;
                        height: 100px;
                        float: left;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                    }

                    .img {
                        width: 30%;
                        margin-left: 10%;
                        height: 100px;
                        float: left;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

                .newsTime {
                    margin-top: 10px;
                    font-size: 14px;
                    color: saddlebrown;
                }
            }
        }
    }

.weather{
    margin-top: 40px;
}
</style>