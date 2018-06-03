import * as types from '../mutaion-type'

const defaultUser = {
    UserName: "",
    EmailAddress: "",
    PhoneNumber: "",
    Authority: 0,
    HeadPortrait: "static/images/head.jpg",
    WishList: [],
    isRegister: false
}
const state = { currentUser: $.extend({}, defaultUser) }
const getters = { currentUser: (state) => state.currentUser }
const actions = {
    updateUser({ commit }, user) {
        if (!user) user = $.extend({}, defaultUser)
        commit(types.UPDATE_USER, user)
    },
    addWish({ commit }, wish) {
        if (!Array.isArray(wish)) wish = [wish]
        commit(types.ADD_WISH, wish)
    }
}
const mutations = {
    [types.UPDATE_USER](state, user) {
        state.currentUser = user
    },
    [types.ADD_WISH](state, wish) {
        state.WishList.push(...wish)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}