import request from '../utils/request.js'

export function createGood(data) {
	return request({
		url: '/good/create',
		method: 'POST',
		data
	})
}

export function getPublish(userId, queryInfo = {
	offset: 0,
	limit: 10
}) {
	return request({
		url: `/good/getPublish?userId=${userId}`,
		method: 'POST',
		data: queryInfo
	})
}

export function delPublish(goodId) {
	return request({
		url: `/good/delPublish?goodId=${goodId}`,
		method: 'DELETE'
	})
}

export function updatePublish(goodId, formData) {
	return request({
		url: `/good/updatePublish/${goodId}`,
		method: 'PATCH',
		data: formData
	})
}
