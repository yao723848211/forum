<template>
    <div class="otherHeader">
        <div class="goBack" @click="goBack">
            <van-icon name="arrow-left"/>
            返回
        </div>
        <div>
            {{title}}
        </div>
        <div>
<!--            <van-icon name="ellipsis"/>-->

            <van-cell is-link @click="showPopup"> <van-icon name="ellipsis" /></van-cell>
            <van-popup v-model="show"  position="bottom" :style="{ height: '100px',width:'100%' }" >
                    <button @click="delete1">删除帖子</button>
                    <button @click="emend">修改帖子</button>
            </van-popup>
        </div>
    </div>
</template>

<script>
    // import {mapState} from "vuex";

    import { deletepost} from "../api/loginApi";
    import Dialog from "vant/lib/dialog";
    import {emendpost} from "../api/listApi";
    // import {commentList} from "../api/listApi";

    export default {
        name: "OtherHeader",
        // data() {
        //     return {
        //         title: this.$route.meta.title
        //     }
        // },
        computed: {
            // ...mapState(["title"])
            title(){
                return this.$store.state.headerTitle.title
            }
        },

        data(){
            return {
                show: false,
            };
        },
        created() {

        },
        methods:{
            goBack(){
                this.$router.back();
            },
            showPopup() {
                this.show = true;
            },
            delete1(){
                Dialog.confirm({
                    title: '删除',
                    message: '是否删除',
                }).then(() => {
                    deletepost(this.$route.params.postsId).then(()=>{
                      this.$router.push('/index')

                    })
                }).catch(() => {
                });

            },
            emend(){
                    Dialog.confirm({
                        title: '修改',
                        message: '是否确认修改',
                    }).then(() => {
                        emendpost(this.$route.params.postsId,this.$route.params.title).then(()=>{
                            this.$router.push('/index')

                        })
                    }).catch(() => {
                    });

                    // this.$store.dispatch('details').then(res=>{
                    //     this.$store.commit('changdetail',res.data)
                    // })
            }
        }
    }
</script>

<style scoped lang="less">
    .otherHeader {
        height: 40px;
        line-height: 40px;
        background-color: #26a2ff;
        display: flex;
        justify-content: space-between;
        font-size: 20px;

        .goBack {
            display: flex;
            align-items: center;
        }
    }
    button{
        display: block;
        width: 100%;
    }

    /deep/ .van-cell {
        background-color:#26a2ff ;
        padding: 7px 16px;
    }
</style>