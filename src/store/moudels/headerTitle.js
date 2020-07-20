export default {
    namespaced: true,
    state: {
        title: "",
        title1:"",
    },
    mutations: {
        getAllTitle(state, payload) {
            state.title = payload.title;
        },
        getAllTitle1(state, payload) {
            state.title1 = payload.title;
        }
    },
    getters: {},
    actions: {},
}