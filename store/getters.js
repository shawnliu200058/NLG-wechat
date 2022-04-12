const getters = {
	carouselList: state => state.carousel.list,
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
	isSelectAll: state => state.cart.isSelectAll,
	// 选中商品总价
	totalPrice: state => state.cart.totalPrice,
	// 收货人地址信息
	addressInfo: state => state.address.addressInfo,
	// 下订单时所选中的地址
	selectedAddress: state => state.address.selectedAddress,
	// 我的订单
	orderInfo: state => state.paidOrder.myOrder,
	// 我的收藏
	collectInfo: state =>state.collect.list,
	// 我的发布
	publishInfo: state => state.publish.list
}

export default getters