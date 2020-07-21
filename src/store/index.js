import Vue from 'vue'
import Vuex from 'vuex'
import headerTitle from "./moudels/headerTitle";
import { postListDetail} from "../api/listApi";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {

        isLogin: false,
        isLogin1: {},
        content: '',
        list: [],
        detail: {},
        detailId: '',
        particular: '详情',
        music:'音乐列表',
        person:'个人信息',
        post:'发布帖子',
        news:'新闻列表',
        login:'登录',
        // postsId1:[]
    },
    mutations: {
        changisLogin(state, payload) {
            state.isLogin = payload.isLogin
        },
        changeisLogin1(state, payload) {
            state.isLogin1 = payload.isLogin1
        },
        changecontent(state, payload) {
            state.content = payload.content
        },
        changelist(state, payload) {
            state.list = payload.list
        },
        changdetail(state, payload) {
            state.detail = payload.detail
        },
        changeid(state, payload) {
            state.detailId = payload.detailId
        },
        // changecomment(state,payload){
        //     state.postsId1=payload.postsId1
        // }
    },
    getters: {},
    actions: {
        details(context,payload) {
            return postListDetail(payload.detailId).then(res => {
                console.log(res)
                // this.detail = res.data
                context.commit('changdetail', {detail: res.data})
                // console.log(this.obj)
            })
        },
        // comment(context,payload){
        //  return commentList(payload.postsId2).then(res => {
        //      context.commit('changecomment', {postsId1: res.data})
        //         // this.$store.commit('changelist',{list:res.rows})
        //     })
        // }
    },
    modules: {
        headerTitle: headerTitle
    },
})
export default store