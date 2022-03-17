// 以对象形式导出
import request from '../utils/request.js'

export function registerUser(data) {
	return request({
		url: '/user/register',
		method: 'POST',
		data
	})
}

export function loginUser(data) {
	return request({
		url: '/user/login',
		method: 'POST',
		data
	})
}
