<template>
    <div class="footer-container">
        <div class="home-page"><van-icon name="wap-home" @click="toHomePage"/></div>
        <div class="promulgate-comment"><van-icon name="add" /></div>
        <router-link to="/login">        <div class="person-info"><van-icon name="manager" /></div></router-link>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        methods:{
            toHomePage(){
                this.$router.push("/index")
            }
        }
    }
</script>

<style scoped lang="less">
.footer-container{
    background-color: aliceblue;
    height: 30px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    background-color: #26a2ff;
    div{
        font-size:40px;
        line-height: 50px;
        color: crimson;
    }
}
</style>