import request from '../utils/request.js'

export function addDeliveryAddress(data) {
	return request({
		url: '/user/address',
		method: 'POST',
		data
	})
}

export function getDeliveryAddress() {
	return request({
		url: '/user/address'
	})
}