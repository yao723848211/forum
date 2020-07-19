export default {
    computed:{
        isLogin(){
            return this.$store.state.isLogin
        }
    },
    mounted() {
        this.$store.commit("headerTitle/getAllTitle",{title:this.$route.meta.title})
    },
    methods:{
        loginClick(){
            if (this.isLogin==false){
                this.$router.push('/login')
                return true
            }else {
                this.$store.commit('changisLogin',{isLogin:true})
                return false
            }
        }
    }
}