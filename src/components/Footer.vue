<template>
    <div class="footer-container">
        <div class="home-page"><van-icon name="wap-home" @click="toHomePage"/></div>
        <router-link to="/music"  style="margin-top: 5px"><div><van-icon name="music-o" /></div></router-link>
        <div class="promulgate-comment" @click="publishPost"><van-icon name="add" /></div>
        <router-link to="/news"> <div style="margin-top: 10px"><van-icon name="new-o" /></div></router-link>
       <div class="person-info"><van-icon name="manager" @click="person" /></div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Footer",
        methods:{
            toHomePage(){
                this.$router.push("/index")
            },
            publishPost(){
                if (this.isLogin==true){
                    this.$router.push('/publish')
                }else {
                    this.$router.push('/login')
                    alert("请先登录在发表评论")
                }
            },
            person(){
                if (this.isLogin==true){
                    this.$router.push('/Personage')
                }else {
                    this.$router.push('/login')
                }
            },

        },
        computed:{
            ...mapState(['isLogin'])
        }
    }
</script>

<style scoped lang="less">
.footer-container{
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    background-color: white;
    div{
        font-size:40px;
        line-height: 50px;
        color: #7bc1f6;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
}
</style>