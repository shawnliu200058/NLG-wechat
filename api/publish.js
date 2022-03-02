import request from '../utils/request.js'

export function createGood(data) {
	return request({
		url: '/good/create',
		method: 'POST',
		data
	})
}

// export function getCategoryList() {
// 	return request({
// 		url: '/category/list',
// 		method: 'POST'
// 	})
// }

// export function getHomeCategoryIcons(filename = undefined) {
// 	return request({
// 		url: `/file/categoryIcon/${filename}`
// 	})
// }
