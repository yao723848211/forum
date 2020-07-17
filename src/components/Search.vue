<template>
    <div>
        <div style="background-color: #f5f7fa; ">
        <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                input-align="center"
                @click="search"
        />

        <div class="list" v-for="(item,index) in list" :key="index">
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
        </div>
    </div>
        </div>
</template>

<script>
    import {getPostList} from "../api/listApi";

    export default {
        name: "Search",
        data(){
            return{
                value:'',
                list:[]
            }
        },
        created() {

        },
        methods:{
            search(){
                getPostList(this.value).then(res=>{
                    console.log(res)
                    this.list=res.rows
                })
                console.log(this.value)
            }
        }
    }
</script>

<style scoped lang="less">
.list {
    display: flex;
    /*flex-direction: column;*/
    justify-content: space-around;
    background-color: #888888;
    .person{
        width: 25%;
        text-align: center;

        img{
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-top: 20px;
        }
    }
    .mation {
        width: 50%;
        p{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
    .img{
        width:25% ;
        padding: 2px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 20px;
        }
    }
}

</style>