import { addDeliveryAddress, getDeliveryAddress } from '../../api/address.js'

const state = {
	addressInfo: []
}

const mutations = {
	SET_ADDRESS_INFO(state, info) {
		// 新加入的地址不为默认地址
		// if(!info.isDefault || !state.addressInfo.length) state.addressInfo.push(info)
		// else {
		// 	for(let item of state.addressInfo) {
		// 		// 若之前的地址为默认地址，则需要取消
		// 		if(item.isDefault) {
		// 			item.isDefault = 0
		// 			state.addressInfo.push(info)
		// 			break
		// 		}
		// 	}
		// }
		state.addressInfo = info
	}
}

const actions = {
	addAddress({ commit }, info) {
		console.log(info)
		return new Promise((resolve, reject) => {
			addDeliveryAddress(info).then(res => {
				// info.id = res.data.insertId
				
				getDeliveryAddress().then(res => {
					console.log(res.data)
					commit('SET_ADDRESS_INFO', res.data)
				})
				
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