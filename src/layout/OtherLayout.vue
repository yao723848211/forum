<template>
    <div>
        <!--        头部-->
        <OtherHeader></OtherHeader>
        <!--        中间渲染区域-->
        <div>
            <router-view></router-view>
        </div>
        <!--        底部-->
    </div>
</template>

<script>
    import OtherHeader from "../components/OtherHeader";

    export default {
        name: "OtherLayout",
        components: {
            OtherHeader
        }
    }
</script>

<style scoped>

</style>