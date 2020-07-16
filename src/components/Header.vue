<template>
    <div class="Header-container">
        <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                input-align="center"
        />
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
                value:""
            }
        }
    }
</script>

<style scoped lang="less">
    .Header-container {

    }
</style>