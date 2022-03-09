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
		url: `/order/list?userId=${userId}`
	})
}
export function delOrderInfo(orderId) {
	return request({
		url: `/order/delete/${orderId}`,
		method: 'DELETE'
	})
}
