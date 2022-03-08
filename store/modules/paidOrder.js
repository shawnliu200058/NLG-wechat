import { placeOrderInfo } from '@/api/order.js'

const state = {
	
}

const mutations = {
	
}

const actions = {
	placeOrder({ commit }, info) {
		console.log(info)
		return new Promise((resolve, reject) => {
			placeOrderInfo(info).then(res => {
				console.log(res.data)
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