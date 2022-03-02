import { getCategoryList } from '@/api/home.js'

const state = {
	list: [],
	selectedIndex: 0
}

const mutations = {
	SET_LIST: (state, categoryList) => {
		state.list = categoryList
	},
	SET_SELECTED_INDEX: (state, index) => {
		state.selectedIndex = index
	}
}

const actions = {
	// 获取分类列表
	getCategoryList({ commit, state }) {
		if(!state.list.length) {
			return new Promise((resolve, reject) => {
				getCategoryList().then(res => {
					commit('SET_LIST', res.data)
					// res.data.forEach(item => {
					// 	commit('SET_LIST', item)
					// })
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