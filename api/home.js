import request from '../utils/request.js'

export function getHomeCarousels() {
	return request({
		url: '/file/carousel'
	})
}

export function getList(type, queryInfo = {
	offset: 0,
	limit: 10
}) {
	return request({
		url: `/${type}/list`,
		method: 'POST',
		data: queryInfo
	})
}

export function getHomeCategoryIcons(filename = undefined) {
	return request({
		url: `/file/categoryIcon/${filename}`
	})
}

export function getHomeGoods() {
	return request({
		url: '/good/list'
	})
}
