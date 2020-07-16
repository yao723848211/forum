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
                <div>
                    <span>内容</span>
                </div>
                <div>
                    图标
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {commentList} from "../api/listApi";

    export default {
        name: "DetailComment",
        data() {
            return {
                list: []
            }

        },
        created() {
            console.log(this.$route.params.postsId)
            commentList(this.$route.params.postsId).then(res => {
                console.log(res);
                this.list =res.rows
            })
        },
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

        .allComment {
            width: 100%;
            height: 100px;
            background-color: #888888;
            border-radius: 15px;

            .person {

            }
        }
    }
</style>