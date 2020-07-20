<template>
    <div>
        <!--登录界面的组件-->
<!--        <OtherHeader></OtherHeader>-->
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>

    import Footer from "../components/Footer";
    // import OtherHeader from "../components/OtherHeader";

    export default {
        name: "Loginlayout",
        components: {
            Footer,
            // OtherHeader
        },
    }
</script>

<style scoped>

</style>