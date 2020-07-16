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
            wathcpersonmataion().then(()=>{
                this.$store.commit('changisLogin', {isLogin:true})
            })
        }
    }
</script>
<style scoped lang="less">


</style>

