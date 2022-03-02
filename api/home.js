import request from '../utils/request.js'

export function getHomeCarousels() {
	return request({
		url: '/file/carousel'
	})
}

export function getCategoryList() {
	return request({
		url: '/category/list',
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