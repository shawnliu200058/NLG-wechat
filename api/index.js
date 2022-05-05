import request from '../utils/request.js'

export function getList(type, queryInfo = {
	offset: 0,
	limit: 100
}) {
	return request({
		url: `/${type}/list`,
		method: 'POST',
		data: queryInfo
	})
}