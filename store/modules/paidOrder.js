import { placeOrderInfo, getOrderInfo, delOrderInfo } from '@/api/order.js'

const state = {
	myOrder: []
}

const mutations = {
	SET_MY_ORDER(state, info) {
		state.myOrder = info
	}
}

const actions = {
	placeOrder({ dispatch }, info) {
		console.log(info)
		return new Promise((resolve, reject) => {
			placeOrderInfo(info).then(res => {
				console.log(res.data)
				dispatch('getOrder')
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	delOrder({ dispatch }, orderId) {
		console.log(orderId)
		return new Promise((resolve, reject) => {
			delOrderInfo(orderId).then(res => {
				dispatch('getOrder')
				resolve(res)
			}).then(err  => {
				reject(err)
			})
		})
	},
	getOrder({ commit, rootGetters }) {
		const { userId } = rootGetters
		return new Promise((resolve, reject) => {
			getOrderInfo(userId).then(res => {
				// console.log(res.data)
				const {list} = res.data.orderList
				list.forEach(item => {
					item.goodList = JSON.parse(item.good_info)
					delete item.good_info
				})
				commit('SET_MY_ORDER', list)
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