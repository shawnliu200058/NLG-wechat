import Vue from 'vue'
import Vuex from 'vuex'

import {
	router
} from '../router.js'
import getters from './getters.js'

Vue.use(Vuex)

// 参数一：表示查找 modules 文件夹下的文件；
// 参数二：支持递归逐层查找符合条件的文件，若为 false 就只查找当前目标文件夹的文件；
// 参数三：查找后缀名开头为 js 的文件
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	// set './app.js' => 'app'
	const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
	const value = modulesFiles(modulePath)
	modules[moduleName] = value.default
	return modules
}, {})

const store = new Vuex.Store({
	modules,
	getters
})

export function retriveData() {
	// console.log(router.$route.history.current.fullPath)
	const curPath = router.$route.history.current.fullPath
	// console.log(curPath, 123)
	if (curPath !== '/' && curPath !== '/pages/register/register') {
		store.dispatch('category/getCategoryList')
		store.dispatch('good/getGoodList')
		store.dispatch('user/loadUserInfo')
		store.dispatch('address/getAddress')
	}

}

export default store
