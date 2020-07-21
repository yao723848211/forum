<template>
    <div>
            <router-link :to="'/OtherLayout/msgDetail/'+item.postsId+'/'+item.title" tag="div"  class="participation-content" v-for="(item,index) in list" :key="index">
                <div>
                    <h3>{{item.title}}</h3>
                    <img :src="item.coverImgUrl" alt="">
                </div>
                <div style="clear: both"></div>
                <span>楼主</span><span>{{item.userName}}</span>
            </router-link>
    </div>
</template>
<script>
    import {Participation} from "../api/loginApi";
    import Loginminix from "../minix/Loginminix";

    export default {
        name: "Participation",
        data() {
            return {
                list: []
            }
        },
        mixins:[Loginminix],
        created() {
            //我参与的接口
            Participation().then(res => {
                // console.log(res)
                this.list = res.rows
            })
        }
    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
    }

    .participation-content {
        border-radius: 10px;
        margin-top: 10px;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        -webkit-box-shadow: 4px 5px #ccc;
        box-shadow: 2px 2px #ccc;
        background-color: #fff;


        h3 {
            float: left;
        }
    }

    img {
        width: 80px;
        float: right;
    }
</style>