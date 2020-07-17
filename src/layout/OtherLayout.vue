<template>
    <div>
        <!--        头部-->
        <OtherHeader></OtherHeader>
        <!--        中间渲染区域-->
        <div>
            <router-view></router-view>
        </div>
        <!--        底部-->
        <Footer></Footer>
    </div>
</template>

<script>
    import OtherHeader from "../components/OtherHeader";
    import Footer from "../components/Footer";

    export default {
        name: "OtherLayout",
        components: {
            OtherHeader,
            Footer
        }
    }
</script>

<style scoped>

</style>