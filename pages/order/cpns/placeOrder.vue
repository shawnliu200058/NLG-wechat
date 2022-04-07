<template>
	<view class="container">
		<uni-card title="收货地址">
			<view class="vertical-center address" @click="chooseAddress">
				<uni-icons type="home-filled" size="26"></uni-icons>
				<view v-if="addressData">
					<view class="left-align">
						<text>{{addressData.realName}} {{addressData.phone}}</text>
					</view>
					<view class="left-align">
						<text>{{addressData.address}} {{addressData.house}}</text>
					</view>
				</view>
				<view v-else style="color: red;">请选择收货地址</view>
				<uni-icons type="right"></uni-icons>
			</view>
		</uni-card>

		<uni-card title="商品信息">
			<good-info v-for="item in selectedGood" :key="item.id" :item="item">
				<template #img>
					<image :src="item.displayPicUrl" mode="aspectFill"></image>
				</template>

				<template #count>
					<text>x{{item.count}}</text>
				</template>
			</good-info>
		</uni-card>

		<uni-card>
			<view class="vertical-center">
				<text>订单备注</text>
				<uni-easyinput v-model="remark" :inputBorder="false" placeholder="选填"></uni-easyinput>
			</view>
		</uni-card>

		<view class="fixedSpace"></view>

		<common-footer bottom="0" class="fixedFooter" :orderPrice="orderPrice">
			<template #btn>
				<view class="btn center" @click="pay">付款</view>
			</template>
		</common-footer>
	</view>
</template>

<script>
	import {
		mapGetters, mapState, mapMutations, createNamespacedHelpers
	} from 'vuex'
	const { mapActions } = createNamespacedHelpers('paidOrder')

	import GoodInfo from '@/components/goodInfo/goodInfo.vue'
	import CommonFooter from '@/components/commonFooter/commonFooter.vue'

	export default {
		data() {
			return {
				remark: null
			}
		},
		components: {
			GoodInfo,
			CommonFooter
		},
		computed: {
			...mapGetters(['goodsCountInCart', 'cartList', 'totalPrice', 'addressInfo', 'selectedAddress']),
			...mapState({
				unpaidGood: state => state.unpaidOrder.unpaidGood,
				unpaidPrice: state => state.unpaidOrder.unpaidPrice,
			}),
			// 订单列表
			selectedGood() {
				if(this.$Route.query.entryBtn == '立即购买') return [this.unpaidGood]
				return this.cartList.map(item => item).filter(item => item.isSelected)
			},
			// 订单总价
			orderPrice() {
				if(this.$Route.query.entryBtn == '立即购买') return this.unpaidPrice
				return this.totalPrice
			},
			// 订单地址
			addressData() {
				return this.selectedAddress ? this.selectedAddress : 
							this.addressInfo.find(item => item.isDefault == 1)
			}
		},
		beforeMount() {
			// console.log([this.unpaidGood])
		},
		methods: {
			...mapActions(['placeOrder']),
			...mapMutations({
				clearCartList: 'cart/CLEAR_CART_LIST',
				clearUnpaidGood: 'unpaidOrder/CLEAR_UNPAID_GOOD'
			}),
			chooseAddress() {
				this.$Router.push({
					name: 'address'
				})
			},
			pay() {		
				console.log(this.addressData)
				if(this.addressData) {
					let goodList = this.selectedGood
					goodList.forEach(item => {
						delete item.detailPic
					})
					
					this.placeOrder({
						deliveryAddress: this.addressData,
						goodList,
						totalPrice: this.orderPrice,
						remark: this.remark
					}).then(res => {
						// 支付成功后清空购物车和订单页信息
						this.clearCartList()
						this.clearUnpaidGood()
						this.$Router.push({
							name: 'paymentSucceeded'
						})
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {

		.address {
			justify-content: space-between;
		}

		image {
			margin: 0 20rpx;
			width: 200rpx;
			height: 200rpx;
		}
		
		.fixedSpace {
			width: 100%;
			height: 100rpx;
		}

		.fixedFooter {
			position: fixed;
			width: 100%;
			bottom: 0;
			z-index: 999;
			background-color: $uni-bg-color-grey;

			.btn {
				width: 25%;
				height: 100%;
				color: #F8F8F8;
				background-color: #00dc00;
			}
		}
	}
</style>
