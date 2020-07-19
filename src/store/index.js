import Vue from 'vue'
import Vuex from 'vuex'
import {postListDetail} from "../api/listApi";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLogin:false,
        isLogin1:{},
        content:'',
        list:[],
        detail: {},
        detailId:''
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
        },
        changdetail(state,payload){
            state.detail=payload.detail
        },
        changeid(state,payload){
            state.detailId=payload.detailId
        }
    },
    getters:{

    },
    actions:{
        details(context){
          return postListDetail(this.state.detailId).then(res => {
                console.log(res)
                // this.detail = res.data
              context.commit('changdetail',{detail:res.data})
                // console.log(this.obj)
            })
        }
    },
    modules:{

    },
})
export default store