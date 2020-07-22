<template>
    <div>
        <div class="otherHeader">
            <div class="otherHeader-left">
                <div class="goBack" @click="goBack"
                     v-if="(this.title !== this.music)&&(this.title !== this.person)&&(this.title !== this.post)&&(this.title !== this.news)&&(this.title!==this.login)">
                                <van-icon name="arrow-left"/>
                    返回
                </div>
            </div>
            <div class="otherHeader-title"  v-text="title?title:title1">
            </div>
            <div class="otherHeader-right" >
                <div v-if="this.title === this.particular" >
                    <van-cell is-link @click="showPopup">
                    </van-cell>
                    <van-popup v-model="show" position="bottom" :style="{ height: '100px',width:'100%' }">
                        <button @click="delete1">删除帖子</button>
                        <button @click="emend">修改帖子</button>
                    </van-popup>
                </div>
            </div>
        </div>
        <div style="clear: both"></div>
    </div>
</template>
<script>
    import {deletepost} from "../api/loginApi";
    import Dialog from "vant/lib/dialog";
    import {emendpost} from "../api/listApi";
    import Loginminix from "../minix/Loginminix";
    import {mapState} from "vuex";
    import {Toast} from 'vant';

    export default {
        name: "OtherHeader",
        computed: {
            title1() {
                return this.$store.state.headerTitle.title1
            },
            title() {
                return this.$store.state.headerTitle.title
            },
            ...mapState(['particular', 'music', 'news', 'person', 'post','login'])
        },
        mixins: [Loginminix],
        data() {
            return {
                show: false,
            };
        },

        methods: {
            onClickLeft() {
                Toast('返回');
            },
            onClickRight() {
                Toast('按钮');
            },
            goBack() {
                this.$router.back();
            }
            ,
            showPopup() {
                if (this.title === this.particular) {
                    if (!this.loginClick()) {
                        this.show = true;
                    }
                }
            },

            delete1() {
                Dialog.confirm({
                    title: '删除',
                    message: '是否删除',
                }).then(() => {
                    deletepost(this.$route.params.postsId).then(() => {
                        this.$router.push('/index')

                    })
                }).catch(() => {
                });

            }
            ,
            emend() {
                Dialog.confirm({
                    title: '修改',
                    message: '是否确认修改',
                }).then(() => {
                    emendpost(this.$route.params.postsId, this.$route.params.title).then(res => {
                        // this.$router.push('/index')
                        console.log(res)
                    })
                }).catch(() => {
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .otherHeader {
        height: 40px;
        line-height: 40px;
        background-color: #f5f7fa;
        /*display: flex;*/
        /*justify-content: space-between;*/
        font-size: 20px;
        display: flex;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;

        .goBack {
            display: flex;
            align-items: center;
            /*float: left;*/
            width: 70px;
        }
    }

    button {
        display: block;
        width: 100%;
    }

    /deep/ .van-cell {
        background-color: #f5f7fa;
        padding: 7px 16px;
    }
    .otherHeader-left{
        width: 70px;
    }
    .otherHeader-title {
        flex-grow: 1;text-align: center
    }
    .otherHeader-right {
        width: 70px;
    }
</style>