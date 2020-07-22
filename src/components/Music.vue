<template>
    <div class="musicContainer">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <div class="musicContainerConatent" v-for="(item,index) in list " :key="index"
                     @click="toMusicMvDetail(item.id,item.name)">
                    <div class="img">
                        <img :src="item.cover" alt="">
                    </div>
                    <div class="musicContainerText">
                        <h4>{{item.name}}</h4>
                        <p>{{item.artistName}}</p>
                    </div>
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
    import {getMvMusicList} from "../api/musicApi";
    import Loginminix from "../minix/Loginminix";

    export default {
        name: "Music",
        data() {
            return {
                list: [],
                limit: 0,
                loading: false,
                finished: false,
                refreshing: false,
            }
        },
        mixins: [Loginminix],
        created() {
            getMvMusicList('',).then(res => {
                // console.log(res)
                this.list = res.data
            })
        },
        methods: {
            //加载更多
            onLoad() {
                getMvMusicList('', this.limit).then(res => {
                    // console.log(res)
                    this.list = this.list.concat(res.data)
                    this.loading = false;
                    this.refreshing = false;
                });
                this.limit += 20;
            },
            //下拉刷新
            onRefresh() {
                // 清空列表数据
                this.finished = false;
                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                this.limit = 0;
                this.onLoad();
            },
            toMusicMvDetail(id,name1) {
                this.$router.push({name:"mvMusicDetail",params:{id:id,name:name1}})
            }
        }
    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
    }

    .musicContainer {
        /*margin-top: 36px;*/
        margin-top: 40px;
        .musicContainerConatent {
            display: flex;
            justify-content: space-around;
            padding: 20px;
            box-sizing: border-box;
            border-bottom: 1px solid #cccccc;

            .img {
                width: 40%;
                height: 100px;
                float: left;

                img {
                    width: 100%;
                    height: 100%;
                }

            }

            .musicContainerText {
                display: flex;
                width: 57%;
                margin-left: 3%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;

                h4 {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: cadetblue;
                }

                p {
                    font-size: 14px;
                    color: saddlebrown;
                }
            }
        }
    }
</style>