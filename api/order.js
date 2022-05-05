import request from '../utils/request.js'

export function placeOrderInfo(data) {
	return request({
		url: '/order/add',
		method: 'POST',
		data
	})
}

export function getOrderInfo(userId) {
	return request({
		url: `/order/list`,
		method: 'POST',
		data: {userId}
	})
}
export function delOrderInfo(orderId) {
	return request({
		url: `/order/${orderId}`,
		method: 'DELETE'
	})
}
