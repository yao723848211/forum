import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from "../layout/IndexLayout";
import Index from "../views/Index";
import Theme from "../views/Theme";
import MsgDetail from "../views/MsgDetail";
import OtherLayout from "../layout/OtherLayout";


Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/index"
    },
    {
        path: "/index",
        component: IndexLayout,
        children: [
            {
                path: "",
                component: Index
            },
            {
                path: "theme",
                component: Theme
            },

        ]
    },
    {
        path: "/OtherLayout",
        component: OtherLayout,
        children: [
            {
                path: "/OtherLayout/msgDetail/:postsId",
                component: MsgDetail
            },
        ]
    }

    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
