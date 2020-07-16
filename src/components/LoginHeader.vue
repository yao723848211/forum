<template>
    <div>
        <div class="header">
            <van-icon name="arrow-left" class="icon" />
            <span @click="back" class="back">返回</span>
              <span style="margin-left: 33%">{{title}}</span>
<!--            123-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginHeader",
        props:['title'],
        methods:{
            back(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped lang="less">
.header {
    height: 40px;
    width: 100%;
    background: red;
    /*text-align: center;*/
    color: white;


    /*justify-content: space-around;*/
}
.back{
    width: 49px;
    height: 41px;
    line-height: 41px;
}
    .icon {
        line-height: 40px;
    }

</style>