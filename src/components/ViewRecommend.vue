<template>
    <div class="view-recommend-container">
        <div>
            <ul class="container" v-for="(item,index) in list" :key="index" @click="toMsgDetail(item.postsId)">
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
            </ul>
        </div>
    </div>
</template>

<script>
    import {getPostList} from "../api/listApi";

    export default {
        name: "ViewRecommend",
        data() {
            return {
                list: [],
            }
        },
        created() {
            getPostList().then(res => {
                // console.log(res)
                this.list = res.rows
            })
        },
        methods:{
            toMsgDetail(postsId){
                this.$router.push("/OtherLayout/msgDetail/" +postsId)
            }
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
        .container {
            padding: 10px 20px;
            box-sizing: border-box;
            height: 100px;
            background-color: #cccccc;
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