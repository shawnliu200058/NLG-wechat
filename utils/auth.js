import Cookies from 'js-cookie'

const TokenKey = 'user'

export function setCache(key, value) {
	window.sessionStorage.setItem(key, JSON.stringify(value))
}

export function getCache(key) {
	const value = window.sessionStorage.getItem(key)
	if (value) return JSON.parse(value)
}

export function removeCache() {
	window.sessionStorage.removeItem(TokenKey);
}

export function getToken() {
	return Cookies.get(TokenKey)
}

export function setToken(token) {
	return Cookies.set(TokenKey, token)
}

export function removeToken() {
	return Cookies.remove(TokenKey)
}

export function removeId(key) {
	window.sessionStorage.removeItem(key)
}
