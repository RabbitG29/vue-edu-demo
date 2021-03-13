import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList } from '../api/index.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        newses: [],
    },
    getters: {
        GET_NEWS(state){
            return state.newses
        },
    },
    mutations: {
        SET_NEWS(state, data){
            state.newses = data
        },
    },
    actions: {
        async FETCH_NEWS(context){
            await fetchNewsList().then((res) => {
                context.commit('SET_NEWS', res.data)
            }).catch((err) => {
                console.log(err)
            })
        },
    },
  })