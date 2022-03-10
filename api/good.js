import request from '../utils/request.js'

export function getGoodsByKeyword(word) {
	return request({
		url: `/good/query?keyword=${word}`
	})
}