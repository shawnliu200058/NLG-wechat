<template>
	<view class="container">
		<template v-if="orderInfo.length">
			<order-list-item v-for="order in orderInfo" 
				:orderItem="order" :key="order.id"></order-list-item>
		</template>
			
			<u-empty v-else
				mode="order" width="200" text-size="16"
				icon="http://cdn.uviewui.com/uview/empty/order.png">
			</u-empty>
		
	</view>
</template>

<script>
	import { createNamespacedHelpers, mapGetters } from 'vuex'
	const { mapActions } = createNamespacedHelpers('paidOrder')
	
	import OrderListItem from './cpns/orderListItem.vue'
	import DetailPopup from './cpns/detailPopup.vue'
	
	export default {
		data() {
			return {

			}
		},
		components: {
			OrderListItem,
			DetailPopup
		},
		computed: {
			...mapGetters(['orderInfo']),
		},
		onLoad() {
			this.getOrder()
		},
		methods: {
			...mapActions(['getOrder'])
		}
	}
</script>

<style scoped lang="scss">
 .container {
	 
	
 }
</style>
