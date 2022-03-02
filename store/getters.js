const getters = {
	userId: state => state.user.id,
	openid: state => state.user.openid,
	nickName: state => state.user.nickName,
	gender: state => state.user.gender,
	avatarUrl: state => state.user.avatarUrl,
	categoryList: state => state.category.list,
	selectedIndex: state => state.category.selectedIndex,
	goodList: state => state.good.list,
	cartList: state => state.cart.list,
	goodsCountInCart: state => state.cart.goodsCount,
	// 是否全选购物车的商品
	isSelectAll: state => state.cart.isSelectAll
}

export default getters