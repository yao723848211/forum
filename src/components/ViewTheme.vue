<template>
    <!--主题界面-->
    <div class="view-theme-container">
        <div v-for="(item,index) in list" :key="index" @click="jumpDetailTheme(item.categoryId,item.name)">
            <img :src="item.cover" alt="">
            <p>{{item.name}}</p>
        </div>
    </div>
</template>

<script>
    import {getThemeList} from "../api/listApi";

    export default {
        name: "ViewTheme",
        data() {
            return {
                list: [],
            }
        },
        created() {
            getThemeList().then(res => {
                // console.log(res)
                this.list = res.rows
            });
        },
        methods: {
            jumpDetailTheme(categoryId,name) {
                console.log(name)
                this.$router.push("/theme/friend/"+categoryId)
                this.$store.commit("headerTitle/getAllTitle",{title:name})
            }
        }
    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
    }

    .view-theme-container {
        padding-bottom: 50px;
        overflow: hidden;

        div {
            width: calc(100% / 3);
            display: flex;
            flex-direction: column;
            padding-left: 10px;
            padding-right: 10px;
            margin-bottom: 20px;
            box-sizing: border-box;
            float: left;
            height: 100px;

            img {
                width: 100%;
                height: 100px;
            }

            p {
                display: flex;
                justify-content: center;
            }
        }
    }

</style>