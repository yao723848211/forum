<template>
    <div>
        <div style="background-color: #f5f7fa; ">
            <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    input-align="center"
                    @search="add()"
                    @focus="focus"
            />
            <div>
                <ul>
                    <li v-for="(item,index) in history" :key="index">
                        {{item}}
                    </li>
                </ul>
                <span @click="serchrecord">清空搜索记录</span>
            </div>
            <router-link :to="'/OtherLayout/msgDetail/'+item.postsId+'/'+item.title" class="list"
                         v-for="(item,index) in list" :key="index">
                <div class="person">
                    <img :src="item.avatar" alt="">
                    <span>{{item.userName}}</span>
                </div>
                <div class="mation">
                    <h4>{{item.title}}</h4>
                    <p>{{item.intro}}</p>
                </div>
                <div class="img">
                    <img :src="item.coverImgUrl" alt="">
                </div>
            </router-link>

        </div>
    </div>
</template>

<script>
    import {getPostList} from "../api/listApi";
    import Loginminix from "../minix/Loginminix";
    // import instance from "../utils/http";

    export default {
        name: "Search",
        data() {
            return {
                value: '',
                list: [],
                history: [],

            }
        },
        mixins:[Loginminix],
        created() {

            this.history = JSON.parse(localStorage.getItem('key1'))
        },
        methods: {

            focus() {
                getPostList(this.value).then(res => {
                    console.log(res)
                    this.list = res.rows
                });
            },

            add() {

                getPostList(this.value).then(res => {

                    this.list = res.rows
                });
                this.history.push(this.value)
                let setList = new Set(this.history)
                this.history = Array.from(setList)
                localStorage.setItem('key1', JSON.stringify(this.history))

            },
            serchrecord() {
                this.history = []
            }
        },
        watch: {
            value() {
                getPostList(this.value).then(res => {
                    console.log(res)
                    var details = [];
                    this.list = details.concat(res.rows)
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .list {
        display: flex;
        /*flex-direction: column;*/
        justify-content: space-around;
        background-color: white;
        margin-top: 10px;

        .person {
            width: 25%;
            text-align: center;

            img {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                margin-top: 20px;
            }
        }

        .mation {
            width: 50%;

            p {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }

        .img {
            width: 25%;
            padding: 2px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 20px;
            }
        }
    }

    a {
        color: black;
    }
</style>