export default {
    computed:{
        isLogin(){
            return this.$store.state.isLogin
        }
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