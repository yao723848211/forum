export default {
    computed:{
        isLogin(){
            return this.$store.state.isLogin
        }
    },
    methods:{
        loginClick(){
            if (this.isLogin==true){
                return true
            }else {
                return false
                this.$router.push('/')

            }
        }
    }
}