<template>
	<view class="container">
		<view class="content vertical-center" :style="cssVars">
			<!-- <view v-if="cartList.length" class="center" @click="clickSelectAll">
				<cart-checkbox :isSelect="isSelectAll"></cart-checkbox>
				<text style="margin: 10rpx;">全选</text>
			</view>
			<view v-else class="center">
				<cart-checkbox :isSelect="false" color="#bfd1c5"></cart-checkbox>
				<text style="margin: 10rpx;color: #bfd1c5;">全选</text>
			</view> -->
			<slot name="checkbox"></slot>
			
			<view>合计:￥{{orderPrice}}</view>
			<!-- <view v-if="goodsCountInCart" :style="cssVars" class="btn btn-green center" @click="handleCart">{{rightText}}({{goodsCountInCart}})</view>
			<view v-else class="btn btn-grey center">{{rightText}}</view> -->
			<slot name="btn"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			bottom: {
				type: String,
				default: '105'
			},
			orderPrice: {
				type: String,
				required: true
			}
		},
		// beforeMount() {
		// 	console.log(this.totalPrice)
		// },
		computed: {
			cssVars() {
				return {
					'--bottom': this.bottom + 'rpx'
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	// .container {
	// 	position: fixed;
	// 	width: 100%;
	// 	bottom: var(--bottom);
		
		.content {
			padding-left: 20rpx;
			justify-content: space-between;
			height: 80rpx;
			border-top: 1px solid $uni-bg-color-grey;
		}
	// }
</style>
