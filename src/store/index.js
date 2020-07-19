import Vue from 'vue'
import Vuex from 'vuex'
import headerTitle from "./moudels/headerTitle";
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {

        isLogin:false,
        isLogin1:{},
        content:'',
        list:[]
    },
    mutations: {
        changisLogin(state,payload){
            state.isLogin=payload.isLogin
        },
        changeisLogin1(state,payload){
            state.isLogin1=payload.isLogin1
        },
        changecontent(state,payload){
            state.content=payload.content
        },
        changelist(state,payload){
            state.list=payload.list
        }
    },
    getters:{

    },
    actions:{

    },
    modules:{
        headerTitle:headerTitle
    },
})
export default store