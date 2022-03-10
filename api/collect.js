import request from '../utils/request.js'

export function updateCollect(data) {
	return request({
		url: `/collect/update`,
		method: 'POST',
		data
	})
}

export function getCollectListById(userId) {
	return request({
		url: `/collect/list?user_id=${userId}`
	})
}