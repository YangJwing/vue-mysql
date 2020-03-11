/*
 * @作者: Edwin Yeung
 * @Date: 2020-03-12 00:27:32
 * @修改人: Edwin Yeung
 * @LastEditTime: 2020-03-12 00:58:18
 * @描述: 
 */

 import Vue from "vue";
 import VueRouter from "vue-router"

 Vue.use(VueRouter)

 //懒加载
const AddUser = () => import('../components/AddUser')
const Login = () => import('../components/Login')



 const routes=[
     {
        path:'',
        redirect:"/home"
    },
    {
        path:'/home',
        component:AddUser
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
 
export default router