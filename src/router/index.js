import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from "../layout/IndexLayout";
import Index from "../views/Index";
import Theme from "../views/Theme";
import MsgDetail from "../views/MsgDetail";
import OtherLayout from "../layout/OtherLayout";
import Loginlayout from "../layout/Loginlayout";
import Sign from "../components/Sign";
import ForgetPassword from "../components/ForgetPassword";
import Personage from "../components/Personage";
import ModifiedData from "../components/ModifiedData";
import Login from "../components/Login";
import store from "../store";
import Search from "../components/Search";
import Participation from "../components/Participation";

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
                path: "/OtherLayout/msgDetail/:postsId/:title",
                component: MsgDetail
            },
            {
                path: '/search',
                component: Search,
                children:[{
                    path:"/OtherLayout/msgDetail/:postsId/:title",
                    component: MsgDetail
                }]
            }
        ]
    },
    {
        path: '/login',
        component: Loginlayout,
        children: [{
            path: '/login',
            component: Login
        },

            {
                path: '/Sign',
                component: Sign
            },
            {
                path: '/ForgetPassword',
                component: ForgetPassword
            }, {
                path: '/Personage',
                component: Personage,
                meta: {
                    isAuth: true
                }

            }, {
                path: '/ModifiedData',
                component: ModifiedData
            },
            {
                path: '/Participation',
                component: Participation
            },


        ]
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    store
})

router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (store.state.isLogin == true) {
            next();
        }
        else {
            next('/')
        }
    }

    else{
        next()
    }
})


export default router
