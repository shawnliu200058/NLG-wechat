import request from '../utils/request.js'

export function addDeliveryAddress(data, userId) {
	return request({
		url: `/user/address/add?userId=${userId}`,
		method: 'POST',
		data
	})
}

export function getDeliveryAddress() {
	return request({
		url: '/user/address'
	})
}

export function modifyDeliveryAddress(data, addressId) {
	return request({
		url: `/user/address/modify/${addressId}`,
		method: 'PUT',
		data
	})
}

export function delDeliveryAddress(addressId) {
	return request({
		url: `/user/address/delete/${addressId}`,
		method: 'DELETE'
	})
}