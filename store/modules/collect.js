import { updateCollect, getCollectListById } from '@/api/collect.js'

const state = {
	list: []
}

const mutations = {
	SET_COLLECT_LIST: (state, collectList) => {
		state.list = collectList
	}
}

const actions = {
	getCollectList({ commit, rootGetters }) {
		const { userId } = rootGetters
		return new Promise((resolve, reject) => {
			getCollectListById(userId).then(res => {
				console.log(res.data)
				commit('SET_COLLECT_LIST', res.data.collectGood)
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	// updateCollectList({ dispatch }, info) {
	// 	console.log(info)
	// 	return new Promise((resolve, reject) => {
	// 		updateCollect(info).then(res => {
	// 			dispatch('getCollectList')
	// 			resolve(res)
	// 		}).catch(err => {
	// 			reject(err)
	// 		})
	// 	})
	// }
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}