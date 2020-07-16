<template>
    <div class="footer-container">
        <div class="home-page"><van-icon name="wap-home" @click="toHomePage"/></div>
        <div class="promulgate-comment"><van-icon name="add" /></div>
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
            person(){
                if (this.isLogin==true){
                    this.$router.push('/Personage')
                }else {
                    this.$router.push('/login')
                }
            }
        },
        computed:{
            ...mapState(['isLogin'])
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