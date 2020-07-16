<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script>
    import {wathcpersonmataion} from "./api/loginApi";

    export default {
        name:'app',
        created() {

            wathcpersonmataion().then(res=>{
                if (res.code==0){
                    this.$store.commit('changisLogin', {isLogin:true})
                }else{
                    this.$store.commit('changisLogin', {isLogin:false})
                }

            })
        }
    }
</script>
<style scoped lang="less">


</style>

