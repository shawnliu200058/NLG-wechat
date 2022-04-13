import { getPublish, delPublish, updatePublish } from '@/api/publish.js'

import { getCache } from '@/utils/auth.js'

const state = {
	list: []
}

const mutations = {
	SET_PUBLISH_LIST: (state, publishList) => {
		// publishList.forEach(item => {
		// 	state.list.push(item)
		// })
		state.list = publishList
	}
}

const actions = {
	getPublishList({ commit, state }) {
		// console.log('123131313')
		return new Promise((resolve, reject) => {
			getPublish(getCache('user').id).then(res => {
				console.log(res.data)
				commit('SET_PUBLISH_LIST', res.data.publishList.list)
				resolve(res)
			}).catch(err => {
				reject(err)
			})

		})
	},
	updatePublishInfo({dispatch}, goodForm) {
		// console.log(goodForm)
		const {form, goodId} = goodForm
		return new Promise((resolve, reject) => {
			updatePublish(goodId, form).then(res => {
				console.log(res.data)
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	delPublishInfo({ dispatch }, goodId) {
		// console.log(goodId)
		return new Promise((resolve, reject) => {
			delPublish(goodId).then(res => {
				dispatch('getPublishList')
				resolve(res)
			}).then(err  => {
				reject(err)
			})
		})
	},
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}