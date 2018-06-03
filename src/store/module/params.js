import * as types from '../mutaion-type'

const state = { params: null }
const getters = { params: (state) => state.params }
const actions = {
    setParams({ commit }, params) { commit(types.SET_PARAMS, params) },
    clearParams({ commit }) { commit(types.CLEAR_PARAMS) }
}
const mutations = {
    [types.SET_PARAMS](params) {
        state.params = $.extend(true, {}, params)
    },
    [types.CLEAR_PARAMS]() {
        state.params = null
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}