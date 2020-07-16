import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLogin:false,
        isLogin1:{}
    },
    mutations: {
        changisLogin(state,payload){
            state.isLogin=payload.isLogin
        },
        changeisLogin1(state,payload){
            state.isLogin1=payload.isLogin1
        }
    },
    getters:{

    },
    actions:{

    },
    modules:{

    },
})
export default store