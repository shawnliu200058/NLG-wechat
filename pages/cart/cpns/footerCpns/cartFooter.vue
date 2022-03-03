<template>
	<!-- <view class="container">
		<view class="content vertical-center">
			<view v-if="cartList.length" class="center" @click="clickSelectAll">
				<cart-checkbox :isSelect="isSelectAll"></cart-checkbox>
				<text style="margin: 10rpx;">全选</text>
			</view>
			<view v-else class="center">
				<cart-checkbox :isSelect="false" color="#bfd1c5"></cart-checkbox>
				<text style="margin: 10rpx;color: #bfd1c5;">全选</text>
			</view>
			
			<view>合计:￥{{totalPrice}}</view>
			
			<view v-if="goodsCountInCart" :style="cssVars" class="btn btn-green center" @click="handleCart">{{rightText}}({{goodsCountInCart}})</view>
			<view v-else class="btn btn-grey center">{{rightText}}</view>
		</view>
	</view> -->
	<view class="container">
		<common-footer>
			<template #checkbox>
				<view v-if="cartList.length" class="center" @click="clickSelectAll">
					<cart-checkbox :isSelect="isSelectAll"></cart-checkbox>
					<text style="margin: 10rpx;">全选</text>
				</view>
				<view v-else class="center">
					<cart-checkbox :isSelect="false" color="#bfd1c5"></cart-checkbox>
					<text style="margin: 10rpx;color: #bfd1c5;">全选</text>
				</view>
			</template>
			
			<template #btn>
				<view v-if="goodsCountInCart" :style="cssVars" class="btn btn-green center" @click="handleCart">{{rightText}}({{goodsCountInCart}})</view>
				<view v-else class="btn btn-grey center">{{rightText}}</view>
			</template>
		</common-footer>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	import {
		createNamespacedHelpers
	} from 'vuex'
	const {
		mapMutations
	} = createNamespacedHelpers('cart')
	
	import CartCheckbox from '@/components/checkbox/cartCheckbox.vue'
	import CommonFooter from '@/components/commonFooter/commonFooter.vue'
	
	export default {
		props: {
			rightText: {
				type: String,
				default: '结算'
			},
			bgColor: {
				type: String,
				default: '#00dc00'
			},
			actionType: {
				type: Number,
				required: true
			}
		},
		components: {
			CartCheckbox,
			CommonFooter
		},
		computed: {
			...mapGetters(['goodsCountInCart', 'isSelectAll', 'cartList', 'totalPrice']),
			cssVars() {
				return {
					'--bgColor': this.bgColor
				}
			}
		},
		methods: {
			...mapMutations({
				setIsSelectAll: 'SET_IS_SELECT_ALL',
				deleteCartGood: 'DELETE_CART_GOOD',
				setTotalPrice: 'SET_TOTAL_PRICE'
			}),
			clickSelectAll() {
				this.setIsSelectAll(!this.isSelectAll)
				this.setTotalPrice()
			},
			handleCart() {
				// 结算
				if(this.actionType) {
					// 前往订单页
					this.$Router.push({name: 'order'})
				} else {
					uni.showModal({
						title: '提示',
						content: '确定删除商品吗',
						success: res => {
							if (res.confirm) {
								this.deleteCartGood()
								this.setTotalPrice()
							}
						}
					});
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		position: fixed;
		width: 100%;
		bottom: 105rpx;
		
		.content {
			padding-left: 20rpx;
			justify-content: space-between;
			height: 80rpx;
			border-top: 1px solid $uni-bg-color-grey;
			
			.btn {
				width: 25%;
				height: 100%;
				color: #F8F8F8;
			}
			
			.btn-green {
				background-color: var(--bgColor);
			}
			
			.btn-grey {
				background-color: #bfd1c5;
			}
			
		}
	}
</style>
