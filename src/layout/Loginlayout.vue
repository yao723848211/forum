<template>
    <div>

        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    // import LoginHeader from "../components/LoginHeader";

    import Footer from "../components/Footer";

    export default {
        name: "Loginlayout",
        components:{
          Footer
        },

        data(){
            return{
                // list:['登录','注册','忘记密码']
            }
        }
    }
</script>

<style scoped>

</style>