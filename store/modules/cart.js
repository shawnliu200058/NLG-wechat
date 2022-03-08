import Vue from 'vue'

const state = {
	list: [],
	goodsCount: 0,
	isSelectAll: true,
	totalPrice: 0
}

const mutations = {
	SET_CART_LIST: (state, goodItem) => {
		const { goodInfo, count } = goodItem
		// 默认选中
		// 这样做执行SET_IS_SELECTED时视图不会跟着变化：goodInfo.isSelected = true
		Vue.set(goodInfo, 'isSelected', true)
		
		const length = state.list.length
		if(length) {
			for(let i in state.list) {
				// 新加入的商品原数组中已有，只需更新数量
				if(state.list[i].id === goodInfo.id) {
					state.list[i].count += count
					// 强制更新购物车 numberBox 数据
					Vue.set(state.list, i, state.list[i])
					break
				}
				// 新加入的商品原数组中没有，直接插入数组
				if(i == (length - 1)) {
					goodInfo.count = count
					state.list.push(goodInfo)
				}
			}
		} else {
			goodInfo.count = count
			state.list.push(goodInfo)
		}
		// console.log(state.goodsCount, '+', count)
		// 购物车选中商品的总数量
		state.goodsCount += count
	},
	// 在购物车中更新商品数量
	SET_COUNT(state, option) {
		const { goodId, count } = option
		
		for(let good of state.list) {
			if(good.id == goodId) {
				// 更新购物车所选中商品的总数量
				if(good.isSelected) state.goodsCount += count - good.count
				// 更新购物车单个商品的数量
				good.count = count
				break
			}
		}
	},
	SET_IS_SELECTED(state, option) {
		const { goodId, isSelected } = option
		// 设置单个商品是否选中
		for(let good of state.list) {
			if(good.id == goodId) {
				good.isSelected = isSelected
				// 若取消选中该商品，则购物车内选中商品的数量减少
				if(!isSelected) state.goodsCount -= good.count
				else state.goodsCount += good.count
				break
			}
		}
		// 设置全选按钮的状态，有一个商品没选则全选按钮应为false
		if(!isSelected) state.isSelectAll = false
		else {
			const { length } = state.list
			for(let i in state.list) {
				if(!state.list[i].isSelected) {
					state.isSelectAll = false
					break
				}
				// 遍历完所有商品均已选中，则全选按钮也为true
				if(i == (length - 1)) {
					state.isSelectAll = true
				}
			}
		}
	},
	SET_IS_SELECT_ALL(state, isCheckAll) {
		// 全不选
		if(!isCheckAll) {
			state.goodsCount = 0
			state.list.forEach(item => {
				item.isSelected = isCheckAll
			}) 
		} else { // 全选
			state.list.forEach(item => {
				// 且当前商品未选的情况下才能相加，否则会重复加
				if(!item.isSelected) {
					state.goodsCount += item.count
					item.isSelected = isCheckAll
				}
			}) 
		}
		state.isSelectAll = isCheckAll
	},
	// 删除购物车商品
	DELETE_CART_GOOD(state) {
		console.log(123)
		for(let i = 0; i < state.list.length; i++) {
			if(state.list[i].isSelected) {
				state.goodsCount -= state.list[i].count
				state.list.splice(i--, 1)
			}
		}
	},
	// 选中商品的总价
	SET_TOTAL_PRICE(state) {
		// 每次重新计算都要清零
		state.totalPrice = 0
		state.list.forEach(item => {
			if(item.isSelected) state.totalPrice += item.price * item.count
		})
		if(!Number.isInteger(state.totalPrice)) state.totalPrice = state.totalPrice.toFixed(2)
	},
	CLEAR_CART_LIST(state) {
		state.list.length = 0
		state.goodsCount = 0,
		state.isSelectAll = true,
		state.totalPrice = 0
	}
}

export default {
	namespaced: true,
	state,
	mutations
}