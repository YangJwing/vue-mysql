/*
 * @作者: Edwin Yeung
 * @Date: 2020-03-12 22:45:41
 * @修改人: Edwin Yeung
 * @LastEditTime: 2020-03-12 23:42:27
 * @描述: 
 */
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {
    user: window.sessionStorage.getItem('user'),
    token: window.sessionStorage.getItem('token')
}
//将token保存到sessionStorage里，token表示登陆状态
const mutations = {
    SET_TOKEN: (state, data) => {
        state.token = data
        window.sessionStorage.setItem('token', data)
    },
    //获取用户名
    GET_USER: (state, data) => {
        // 把用户名存起来
        state.user = data
        window.sessionStorage.setItem('user', data)
    },
    //登出
    LOGOUT: (state) => {
        // 登出的时候要清除token
        state.token = null
        state.user = null
        window.sessionStorage.removeItem('token')
        window.sessionStorage.removeItem('user')
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