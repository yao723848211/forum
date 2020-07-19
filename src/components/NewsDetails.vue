<template>
    <div class="newsDeatil">
        <div class="newsDeatilContent">
            <h3>{{obj.title}}</h3>
            <div class="newsDeatilText">
                <div v-html="obj.content"></div>
            </div>
        </div>

    </div>
</template>

<script>
    import Loginminix from "../minix/Loginminix";
    import {getNewsDetail} from "../api/newsApi";

    export default {
        name: "NewsDetails",
        mixins: [Loginminix],
        data() {
            return {
                obj: {},
            }

        },
        created() {
            getNewsDetail(this.$route.params.articleId).then(res => {
                console.log(res)
                this.obj = res.data
            })
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


    .newsDeatil {
        padding-bottom: 60px;
        box-sizing: border-box;
        .newsDeatilContent {
            padding: 10px 20px;

            h3 {
                text-align: center;
            }
            .newsDeatilText{
                /deep/img{
                    width: 100%;
                }
            }

        }
    }
</style>