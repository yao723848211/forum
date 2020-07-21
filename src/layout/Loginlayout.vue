<template>
    <div>
        <!--登录界面的组件-->
        <!--        界面渲染-->
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>

    import Footer from "../components/Footer";

    export default {
        name: "Loginlayout",
        components: {
            Footer,
        },
    }
</script>

<style scoped>

</style>