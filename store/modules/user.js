import { createUser, retriveInfo } from '../../api/my.js'
import { loginUser } from '@/api/login.js'
import { setToken, setCache, getCache } from '@/utils/auth.js'

const state = {
	id: null,
	openid: '',
	nickName: '',
	gender: '',
	avatarUrl: '',
	birthday: '',
	email: ''
}

const mutations = {
	SET_ID: (state, id) => {
		state.id = id
	},
	SET_OPENID: (state, openid) => {
		state.openid = openid
	},
	SET_NICK_NAME: (state, nickName) => {
		state.nickName = nickName
	},
	SET_GENDER: (state, gender) => {
		state.gender = gender
	},
	SET_AVATAR_URL: (state, avatarUrl) => {
		state.avatarUrl = avatarUrl
	},
	SET_BIRTHDAY: (state, birthday) => {
		state.birthday = birthday
	},
	SET_EMAIL: (state, email) => {
		state.email = email
	}
}

const actions = {
	// 用户登录
	login({ commit }, user) {
		// console.log(user)
		// const { name, password } = user
		return new Promise((resolve, reject) => {
			loginUser(user).then(res => {
				console.log(res.data)
				const { id, nickName, gender, birthday, email, avatarUrl, token} = res.data
				commit('SET_ID', id)
				commit('SET_NICK_NAME', nickName)
				commit('SET_AVATAR_URL', avatarUrl)
				commit('SET_GENDER', gender)
				commit('SET_BIRTHDAY', birthday)
				commit('SET_EMAIL', email)
				setToken(token)
				setCache('user', res.data)
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
		// const { userInfo, openid } = user
		// return new Promise((resolve, reject) => {
		// 	createUser(user).then(res => {
		// 		const { id } = res.data.user
		// 		console.log(id)
		// 		commit('SET_ID', id)
		// 		commit('SET_OPENID', openid)
		// 		const { nickName, gender, avatarUrl } = userInfo
		// 		commit('SET_NICK_NAME', nickName)
		// 		commit('SET_GENDER', gender)
		// 		commit('SET_AVATAR_URL', avatarUrl)
		// 		resolve(res)
		// 	}).catch(error => {
		// 		reject(error)
		// 	})
		// })
	},
	loadUserInfo({ commit }) {
		const info = getCache('user')
		if(info) {
			const { id, nickName, gender, birthday, email, avatarUrl, token} = info
			commit('SET_ID', id)
			commit('SET_NICK_NAME', nickName)
			commit('SET_AVATAR_URL', avatarUrl)
			commit('SET_GENDER', gender)
			commit('SET_BIRTHDAY', birthday)
			commit('SET_EMAIL', email)
		} 
	},
	retriveUserInfo({ commit }) {
		return new Promise((resolve, reject) => {
			retriveInfo().then(res => {
				console.log(res.data)
				const { id, nickName, gender, birthday, email, avatarUrl} = res.data
				commit('SET_ID', id)
				commit('SET_NICK_NAME', nickName)
				commit('SET_AVATAR_URL', avatarUrl)
				commit('SET_GENDER', gender)
				commit('SET_BIRTHDAY', birthday)
				commit('SET_EMAIL', email)
				setCache('user', res.data)
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}