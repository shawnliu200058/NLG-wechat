import {
	addDeliveryAddress,
	getDeliveryAddress,
	modifyDeliveryAddress,
	delDeliveryAddress
} from '../../api/address.js'

import { getCache } from '@/utils/auth.js'

const state = {
	addressInfo: [],
	selectedAddress: null
}

const mutations = {
	SET_ADDRESS_INFO(state, info) {
		state.addressInfo = info
	},
	SET_SELECTED_ADDRESS(state, info = null) {
		state.selectedAddress = info
	}
}

const actions = {
	addAddress({ commit, dispatch }, info) {
		const {
			addressInfo,
			userId
		} = info
		return new Promise((resolve, reject) => {
			addDeliveryAddress(addressInfo, userId).then(res => {

				dispatch('getAddress')

				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	getAddress({ commit }) {
		const info = getCache('user')
		// console.log(info)
		return new Promise((resolve, reject) => {
			getDeliveryAddress(info.id).then(res => {
				// console.log(res.data)
				commit('SET_ADDRESS_INFO', res.data)
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	modifyAddress({ commit, dispatch }, info) {
		// console.log(info)
		const {
			addressInfo,
			addressId
		} = info
		return new Promise((resolve, reject) => {
			modifyDeliveryAddress(addressInfo, addressId).then(res => {
			dispatch('getAddress')
				
			resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	delAddress({ commit, dispatch }, addressId) {
		console.log(addressId)
		return new Promise((resolve, reject) => {
			delDeliveryAddress(addressId).then(res => {
				// console.log(res) 
				
				dispatch('getAddress')
				
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	selectAddress({ commit }, addressId) {
		const selectedAddress = state.addressInfo.find(item => item.id == addressId)
		commit('SET_SELECTED_ADDRESS', selectedAddress)
	},
	clearSelectedAddress({ commit }) {
		commit('SET_SELECTED_ADDRESS')
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
