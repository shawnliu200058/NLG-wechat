import { getList } from '@/api/index.js'

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
				getList('category').then(res => {
					// console.log(res.data)
					commit('SET_LIST', res.data.categoryList.list)
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