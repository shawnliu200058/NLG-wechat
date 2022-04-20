// 以对象形式导出
import request from '../utils/request.js'
import { getCache } from '@/utils/auth.js'

export function createUser(data) {
	return request({
		url: '/user/login',
		method: 'POST',
		data
	})
}

export function changePwd(data) {
	return request({
		url: `/user/pwd/${getCache('user').id}`,
		method: 'PATCH',
		data
	})
}
