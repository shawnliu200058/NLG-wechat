// 以对象形式导出
import request from '../utils/request.js'

export function createUser(data) {
	return request({
		url: '/user/login',
		method: 'POST',
		data
	})
}
