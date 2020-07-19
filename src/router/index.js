import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from "../layout/IndexLayout";
import Index from "../views/Index";
import Theme from "../views/Theme";
import MsgDetail from "../views/MsgDetail";
import OtherLayout from "../layout/OtherLayout";
import MakeFriends from "../components/MakeFriends";
import PublishComment from "../components/PublishComment";
import ViewRecommend from "../components/ViewRecommend";


import Sign from "../components/Sign";
import ForgetPassword from "../components/ForgetPassword";
import Personage from "../components/Personage";
import ModifiedData from "../components/ModifiedData";
import Login from "../components/Login";
import store from "../store";
import Search from "../components/Search";
import Loginlayout from "../layout/Loginlayout";
import News from "../components/News";
import NewsDetails from "../components/NewsDetails";

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
                component: MsgDetail,
                meta: {
                    title: "帖子详情"
                }
            },
            {
                path: "/theme/friend/:categoryId",
                component: MakeFriends,
                children: [{
                    path: "",
                    component: ViewRecommend,
                }]
            },
            {
                path: "/publish",
                component: PublishComment,
                meta: {
                    title: "发布帖子"
                }
            },
            {
                path: '/search',
                component: Search,
                children: [{
                    path: "/OtherLayout/msgDetail/:postsId", component: MsgDetail
                }]
            },
            {
                path: "/news",
                component:News,
                meta: {
                    title: "新闻列表"
                }
            },
            {
                path: "/news/detail/:articleId",
                component: NewsDetails,
                meta: {
                    title: "新闻详情"
                }
            }
        ]
    },
    {
        path: '/login',
        component: Loginlayout,
        children: [{
            path: '/login',
            component: Login,
            meta: {
                title: "登录"
            },
        },

            {
                path: '/Sign',
                component: Sign,
                meta: {
                    title: "注册"
                }
            },
            {
                path: '/ForgetPassword',
                component: ForgetPassword,
                meta: {
                    title: "忘记密码",
                }
            },
            {
                path: '/Personage',
                component: Personage,
                meta: {
                    isAuth: true,
                    title: "个人信息"
                }

            }, {
                path: '/ModifiedData',
                component: ModifiedData,
                meta: {
                    title: "修改资料"
                }
            }

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
        } else {
            next('/')
        }
    } else {
        next()
    }
})


export default router
