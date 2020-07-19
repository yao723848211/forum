<template>
    <div class="otherHeader">
        <div class="goBack" @click="goBack">
            <van-icon name="arrow-left"/>
            返回
        </div>
        <div>
            {{title}}
        </div>
        <div>
            <van-icon name="ellipsis"/>
        </div>
    </div>
</template>

<script>
    // import {mapState} from "vuex";

    export default {
        name: "OtherHeader",
        // data() {
        //     return {
        //         title: this.$route.meta.title
        //     }
        // },
        computed: {
            // ...mapState(["title"])
            title(){
                return this.$store.state.headerTitle.title
            }
        },
        methods: {
            goBack() {
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

        .goBack {
            display: flex;
            align-items: center;
        }
    }
</style>