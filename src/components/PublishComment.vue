<template>
    <div class="publish-comment-container">
        <div class="clearfix">
            <ul>
                <h2>选择帖子分类</h2>
                <li v-for="item in list" :key="item.categoryId" @click="acvieItem(item.categoryId)"
                    :class="categoryId1==item.categoryId?'active':''">{{item.name}}
                </li>
            </ul>
        </div>
        <div class="clearfix">
            <h2>发布帖子信息</h2>
        </div>
        <div class="publish_">
            <div class="pulishTitle">
                标题:<input type="text" placeholder="请输入发布标题" v-model="title">
            </div>
            <div>
                <h4 style="margin-top: 10px">发布内容:</h4>
                <textarea class="publishText" v-model="publishContent">

                </textarea>
            </div>
            <div class="fileuploader">
                <van-uploader v-model="fileList" :after-read="afterRead" multiple/>

            </div>
            <div class="publishButton">
                <van-button type="primary" style="width: 100px;margin: 0 auto" @click="fabu">发布</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {createPost, getThemeList} from "../api/listApi";
    import Loginminix from "../minix/Loginminix";
    import {uploadingpic} from "../api/loginApi";

    export default {
        name: "PublishComment",
        data() {
            return {
                categoryId1: '',
                list: [],
                title: '',
                publishContent: "",
                fileList: [],
                file: {}
            }
        },
        created() {
            getThemeList().then(res => {
                // console.log(res)
                this.list = res.rows;
            })
        },
        mixins: [Loginminix],
        methods: {
            acvieItem(categoryId) {
                // console.log(categoryId)
                this.categoryId1 = categoryId
            },
            afterRead(a) {
                console.log(a)
                this.file = a
            },
            fabu() {
                console.log(this.file)
                uploadingpic(this.file.file, "BBS").then(response => {
                    // console.log(response.url)
                    createPost(this.categoryId1, this.title, this.publishContent, response.url).then(res => {
                        // console.log(res);
                        alert(res.msg)
                    })
                })

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

    .active {
        background-color: burlywood;
    }

    .publish-comment-container {
        padding-bottom: 60px;
        box-sizing: border-box;
        padding: 10px;

        h2 {
            display: flex;
            justify-content: center;
            font-size: 20px;
            color: brown;
        }

        ul {
            li {
                float: left;
                width: calc(100% / 6);
                height: 25px;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                border: 1px solid rosybrown;
                border-radius: 15px;
            }
        }

        .publish_ {
            border-top: 1px solid saddlebrown;

            .pulishTitle {
                margin-top: 10px;
                margin-left: 30px;
                font-size: 18px;

                input {
                    border-radius: 15px;
                    /*outline-color: #26a2ff;*/
                    padding-left: 15px;
                    margin-left: 8px;
                    border: 1px solid #cccccc;
                    height: 35px;
                }
            }

            .publishText {
                width: 80%;
                height: 200px;
                overflow: auto;
                border: 1px solid brown;
                margin: 10px auto;
                display: flex;
            }

            .publishButton {
                display: flex;
                justify-content: flex-end;
            }

            .fileuploader {
                display: flex;
                justify-content: center;
                margin-top: 20px;

                .van-uploader__upload {
                    width: 200px;
                    height: 200px;
                }

                p {
                    font-size: 14px;
                    align-self: flex-end;
                }
            }


        }

    }
    h2 {
        margin-bottom: 10px;
        margin-top: 10px;
    }
.clearfix{

    li{
        margin-right: 10px;
        margin-top: 10px;
    }
}
</style>