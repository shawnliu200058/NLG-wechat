<template>
	<view class="container">
		<uni-card title="收货地址">
			<view class="vertical-center address" @click="chooseAddress">
				<uni-icons type="home-filled" size="26"></uni-icons>
				<uni-icons type="right"></uni-icons>
			</view>
		</uni-card>
		
		<uni-card title="商品信息">
			<good-info v-for="item in selectedGood" :key="item.id" :item="item">
				<template #count>
					<text>x{{item.count}}</text>
				</template>
			</good-info>
		</uni-card>
		
		<uni-card>
			<view class="vertical-center">
				<text>订单备注</text>
				<uni-easyinput :inputBorder="false" suffixIcon="right" placeholder="选填"></uni-easyinput>
			</view>
		</uni-card>
		
		<common-footer bottom="0" class="fixedFooter">
			<template #btn>
				<view class="btn center">付款</view>
			</template>
		</common-footer>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	
	import GoodInfo from '@/components/goodInfo/goodInfo.vue'
	import CommonFooter from '@/components/commonFooter/commonFooter.vue'
	
	export default {
		components: {
			GoodInfo,
			CommonFooter
		},
		computed: {
			...mapGetters(['goodsCountInCart', 'cartList', 'totalPrice']),
			selectedGood() {
				return this.cartList.map(item => item).filter(item => item.isSelected)
			}
		},
		methods: {
			chooseAddress() {
				this.$Router.push({
					name: 'address'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		.address {
			justify-content: space-between;
		}
		
		.fixedFooter {
			position: fixed;
			width: 100%;
			bottom: 0;
			
			.btn {
				width: 25%;
				height: 100%;
				color: #F8F8F8;
				background-color: #00dc00;
			}
		}
	}
</style>
