<template>
    <div>
        <!--        上半部分的帖子详情-->
        <MesageDetail></MesageDetail>
        <!--        下半部分的评论-->
        <DetailComment></DetailComment>
    </div>
</template>

<script>

    import MesageDetail from "../components/MesageDetail";
    import DetailComment from "../components/DetailComment";

    export default {
        name: "MsgDetail",
        components: {
            MesageDetail,
            DetailComment
        }
    }
</script>

<style scoped>

</style>