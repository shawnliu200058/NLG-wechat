import request from '../utils/request.js'

export function getAnnouncement() {
	return request({
		url: `/announcement`
	})
}