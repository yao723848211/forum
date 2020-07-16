<template>
    <div class="otherHeader">
        <div class="goBack" @click="goBack">
            <van-icon name="arrow-left"/>
            返回
        </div>
        <div>
            帖子详情
        </div>
        <div>
            <van-icon name="ellipsis" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "OtherHeader",
        methods:{
            goBack(){
                this.$router.back();
            }
        }
    }
</script>

<style scoped lang="less">
    .otherHeader {
        height: 40px;
        line-height: 40px;
        background-color: #26a2ff;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        .goBack{
            display: flex;
            align-items: center;
        }
    }
</style>