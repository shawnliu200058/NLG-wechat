const state = {
	unpaidGood: null,
	unpaidPrice: 0
}

const mutations = {
	SET_UNPAID_GOOD: (state, item) => {
		state.unpaidGood = item
		state.unpaidPrice = (item.price * item.count).toFixed(2)
	},
	CLEAR_UNPAID_GOOD: (state) => {
		state.unpaidGood = null
	}
}

export default {
	namespaced: true,
	state,
	mutations
}