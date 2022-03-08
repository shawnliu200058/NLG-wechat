<template>
	<view>
		<place-order></place-order>
	</view>
</template>

<script>
	import { createNamespacedHelpers, mapMutations } from 'vuex'
	const { mapActions } = createNamespacedHelpers('address')
	
	import PlaceOrder from './cpns/placeOrder.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			PlaceOrder
		},
		beforeDestroy() {
			this.clearSelectedAddress()
			// 离开订单页时清空从立即购买按钮得到的商品
			this.clearUnpaidGood()
		},
		methods: {
			...mapMutations({
				clearUnpaidGood: 'unpaidOrder/CLEAR_UNPAID_GOOD'
			}),
			...mapActions(['clearSelectedAddress'])
		}
	}
</script>

<style>

</style>
