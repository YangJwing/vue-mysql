/*
 * @作者: Edwin Yeung
 * @Date: 2020-03-12 00:27:32
 * @修改人: Edwin Yeung
 * @LastEditTime: 2020-03-12 23:43:42
 * @描述: 
 */

 import Vue from "vue";
 import VueRouter from "vue-router"
 import store from "../store/index.js"

 Vue.use(VueRouter)

 //懒加载
const AddUser = () => import('../components/AddUser')
const Login = () => import('../components/Login')



 const routes=[
     {
        path:'',
        redirect:"/login"
    },
    {
        path:'/home',
        component:AddUser,
        meta:{
            requireAuth:true     // 添加该字段，表示进入这个路由是需要登录的
        }
    },
    {
        path:'/login',
        component:Login
    }
]

const router=new VueRouter({
    routes,
    mode:"history"
})

//注册全局钩子用来拦截导航
router.beforeEach((to,from,next)=>{
    const token=store.state.token
    if (to.meta.requireAuth){  // 判断该路由是否需要登录权限
        if (token) {           // 通过vuex state获取当前的token是否存在
            next()
        } else {
            console.log('该页面需要登录!');
            // alert('该页面需要登录后才能使用!');
            next({
                path:'/login'
                // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {    //不用登录权限的页面直接显示
        next()
    }
})

export default router