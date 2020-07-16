<template>
    <div>
        <!--        头部-->
        <Header></Header>
        <!--        中间的切换-->
        <ul class="switch">
            <li>
                <router-link to="/index">推荐</router-link>
            </li>
            <li>
                <router-link to="/index/theme">主题</router-link>
            </li>
        </ul>
        <!--       中间的渲染区域 -->
        <div>
            <router-view></router-view>
        </div>
        <!--        底部-->
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";

    export default {
        name: "IndexLayout",
        components: {
            Header,
            Footer
        }
    }
</script>

<style scoped lang="less">
.switch{
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    font-size: 24px;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 1px solid #26a2ff;
    /deep/li{
        color: #26a2ff;
    }
}
</style>