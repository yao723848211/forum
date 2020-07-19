export default {
    namespaced: true,
    state: {
        title: "",
    },
    mutations: {
        getAllTitle(state, payload) {
            state.title = payload.title;
        }
    },
    getters: {},
    actions: {},
}