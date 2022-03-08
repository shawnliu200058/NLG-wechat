import request from '../utils/request.js'

export function placeOrderInfo(data) {
	return request({
		url: '/order/add',
		method: 'POST',
		data
	})
}
