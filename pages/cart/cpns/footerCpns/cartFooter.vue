<template>
	<view class="container">
		<view class="content vertical-center">
			<view v-if="cartList.length" class="center" @click="clickSelectAll">
				<cart-checkbox :isSelect="isSelectAll"></cart-checkbox>
				<text style="margin: 10rpx;">全选</text>
			</view>
			<view v-else class="center">
				<cart-checkbox :isSelect="false" color="#bfd1c5"></cart-checkbox>
				<text style="margin: 10rpx;color: #bfd1c5;">全选</text>
			</view>
			<view v-if="goodsCountInCart" class="btn btn-green center">{{rightText}}({{goodsCountInCart}})</view>
			<view v-else class="btn btn-grey center">{{rightText}}</view>
		</view>
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
	
	export default {
		props: {
			rightText: {
				type: String,
				default: '结算'
			}
		},
		components: {
			CartCheckbox
		},
		computed: {
			...mapGetters(['goodsCountInCart', 'isSelectAll', 'cartList'])
		},
		methods: {
			...mapMutations({
				setIsSelectAll: 'SET_IS_SELECT_ALL'
			}),
			clickSelectAll() {
				this.setIsSelectAll(!this.isSelectAll)
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
				background-color: #00dc00;
			}
			
			.btn-grey {
				background-color: #bfd1c5;
			}
			
		}
	}
</style>
