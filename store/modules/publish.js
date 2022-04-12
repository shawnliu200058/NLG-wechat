import { getPublish } from '@/api/publish.js'

import { getCache } from '@/utils/auth.js'

const state = {
	list: null
}

const mutations = {
	SET_PUBLISH_LIST: (state, publishList) => {
		state.list = publishList
	}
}

const actions = {
	getPublishList({ commit, state }) {
		return new Promise((resolve, reject) => {
			if(!state.list) {
				getPublish(getCache('user').id).then(res => {
					console.log(res.data)
					commit('SET_PUBLISH_LIST', res.data.publishList.list)
				})
			}
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}