import { getList } from '@/api/index.js'

const state = {
	list: []
}

const mutations = {
	SET_LIST: (state, carouselList) => {
		state.list = carouselList
	}
}

const actions = {
	// 获取分类列表
	getCarousel({ commit, state }) {
		if(!state.list.length) {
			return new Promise((resolve, reject) => {
				getList('carousel').then(res => {
					console.log(res.data)
					commit('SET_LIST', res.data)
					resolve(res)
				}).catch(error => {
					reject(error)
				})
			})
		}
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}