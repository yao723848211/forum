import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLogin:false
    },
    mutations: {
        changisLogin(state,payload){
            state.isLogin=payload.isLogin
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