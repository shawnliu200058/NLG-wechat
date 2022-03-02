import { getHomeGoods } from '../../api/home.js'

const state = {
	// id: null,
	// name: '',
	// categoryId: null,
	// detail: '',
	// price: null,
	// unit: '',
	// specification: '',
	// stock: null,
	// address: '',
	// displayPicUrl: '',
	// detailPic: null
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
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}