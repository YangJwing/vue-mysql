/*
 * @作者: Edwin Yeung
 * @Date: 2020-03-12 22:45:41
 * @修改人: Edwin Yeung
 * @LastEditTime: 2020-03-15 01:59:53
 * @描述: 
 */
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {
    // user: window.sessionStorage.getItem('user'),
    // token: window.sessionStorage.getItem('token')
    user: window.localStorage.getItem('user'),
    token: window.localStorage.getItem('token'),
    islogin: window.localStorage.getItem('islogin'),
    
}
//将token保存到sessionStorage里，token表示登陆状态
const mutations = {
    SET_TOKEN: (state, data) => {
        state.token = data
        // window.sessionStorage.setItem('token', data)
        window.localStorage.setItem('token', data)
    },
    //获取用户名
    GET_USER: (state, data) => {
        // 把用户名存起来
        state.user = data
        // window.sessionStorage.setItem('user', data)
        window.localStorage.setItem('user', data)
    },
    SET_LOGIN:(state,data)=>{
        state.islogin=data
        window.localStorage.setItem('islogin', data)
    },
    //登出
    LOGOUT: (state) => {
        // 登出的时候要清除token
        state.token = null
        state.user = null
        state.islogin=false
        console.log('state.islogin :', state.islogin);
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
        window.localStorage.removeItem('islogin')

    }
}

const actions = {
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store