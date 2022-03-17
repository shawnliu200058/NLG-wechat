import {
	RouterMount,
	createRouter
} from 'uni-simple-router';

import {
	getToken
} from '@/utils/auth.js'

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [...ROUTES]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log(to.name)
	if (to.fullPath === '/') to.fullPath = '/pages/login/login'
	if (to.name !== 'login') {
		const token = getToken()
		if (!token) {
			next({ name: 'login' });
		}
	}
	next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {
	// console.log('跳转结束')
})

export {
	router,
	RouterMount
}
