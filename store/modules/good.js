import { getHomeGoods } from '@/api/home.js'
import { updateCollect } from '@/api/collect.js'

const state = {
	list: null
}

const mutations = {
	SET_GOOD_LIST: (state, goodList) => {
		state.list = goodList
	}
}

const actions = {
	getGoodList({ commit }) {
		return new Promise((resolve, reject) => {
			getHomeGoods().then(res => {
				commit('SET_GOOD_LIST', res.data)
			})
		})
	},
	setCollectStatus({ dispatch }, info) {
		console.log(info)
		return new Promise((resolve, reject) => {
			updateCollect(info).then(res => {
				dispatch('getGoodList')
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}