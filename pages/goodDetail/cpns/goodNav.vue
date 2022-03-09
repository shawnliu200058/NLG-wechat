<template>
	<view>
		<uni-popup ref="popup" type="bottom" background-color="#fff">
			<view class="popup-container">
				<view class="container1">
					<image :src="goodInfo.displayPicUrl" mode="aspectFill" style="margin-right: 20rpx;"></image>
					
					<text class="close" @click="$refs.popup.close()">✖</text>
					
					<view class="good-info">
						<view>{{goodInfo.name}}</view>
						<view>规格：{{goodInfo.specification}}</view>
						<uni-title type="h1" :title="`￥${goodInfo.price.toFixed(2)}`" color="red"></uni-title>
					</view>
				</view>
				
				<view class="container2">
					<text>购买数量</text>
					<uni-number-box :min="1" v-model="purchaseQuantity"></uni-number-box>
				</view>
			</view>
			
			<view>
				<uni-goods-nav :fill="true" :options="[]" :buttonGroup="buttonGroup" @buttonClick="addCartOrPurchase" />
			</view>
		</uni-popup>
		
		<uni-goods-nav class="footer" :fill="true" :options="options" :buttonGroup="buttonGroup" @click="collectOrCart"
			@buttonClick="popupOrPurchase" />
	</view>
</template>

<script>
	import {
		createNamespacedHelpers, mapGetters, mapMutations
	} from 'vuex'
	// const {
	// 	mapMutations
	// } = createNamespacedHelpers('cart')
	
	export default {
		props: {
			goodInfo: {
				type: Object,
				required: true
			}
		},
		computed: {
			...mapGetters(['goodsCountInCart'])
		},
		data() {
			return {
				purchaseQuantity: 1,
				options: [
				{
					icon: 'star',
					text: '收藏',
				}, {
					icon: 'cart',
					text: '购物车',
					info: 0
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		beforeMount() {
			this.options[1].info = this.goodsCountInCart
		},
		methods: {
			// ...mapMutations({
			// 	addToCart: 'SET_CART_LIST',
			// 	setTotalPrice: 'SET_TOTAL_PRICE'
			// }),
			...mapMutations({
				addToCart: 'cart/SET_CART_LIST',
				setTotalPrice: 'cart/SET_TOTAL_PRICE',
				setUnpaidGood: 'unpaidOrder/SET_UNPAID_GOOD'
			}),
			collectOrCart(e) {
				if(e.index === 0) {
					const { icon } = this.options[0]
					this.options[0].icon = icon === 'star' ? 'star-filled' : 'star'
					if(this.options[0].icon === 'star') {
						uni.showToast({
							title: '取消收藏',
							icon: 'success'
						})
					} else {
						uni.showToast({
							title: '已收藏',
							icon: 'success'
						})
					}
				} else {
					// this.$Router.pushTab({
					// 	name: 'cart'
					// })
					uni.reLaunch({
						url: '/pages/cart/cart'
					})
				}
			},
			popupOrPurchase(e) {
				this.$refs.popup.open('bottom')
			},
			addCartOrPurchase(e) {
				const count = this.purchaseQuantity
				// 记录购物车中商品总数量
				this.options[1].info += count
				
				if(e.index === 0) {
					console.log(this.goodInfo)
					// 记录同种商品的数量
					// 下面这行是错误的，因为是地址引用，this.goodInfo变化的同时state.list也会变化，会和mutations冲突
					// this.goodInfo.count = this.purchaseQuantity => this.addToCart(this.goodInfo)
					this.addToCart({goodInfo: this.goodInfo, count})
					this.setTotalPrice()
					this.$refs.popup.close()
					uni.showToast({
						title: '加入购物车',
						icon: 'success'
					})
				} else {
					this.goodInfo.count = count
					this.setUnpaidGood(this.goodInfo)
					this.$Router.push({
						path: '/pages/order/order',
						query: {
							entryBtn: '立即购买'
						}
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.popup-container {
		padding: 20rpx;
		
		.container1 {
			display: flex;
			position: relative;
			
			.close {
				position: absolute;
				top: 0;
				right: 20rpx;
				color: #c1aca3;
			}
			
			image {
				width: 200rpx;
				height: 200rpx;
			}
				
			.good-info {
				font-size: 14px;
			}
		}
		.container2 {
			display: flex;
			justify-content: space-between;
			margin: 50rpx 0;
		}
	}
	
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
