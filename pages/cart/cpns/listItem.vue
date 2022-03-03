<template>
	<view class="container">
		<uni-card>
			<good-info :item="item">
				<template #checkbox>
					<cart-checkbox :isSelect="item.isSelected" @click.native="isSelectGood(item.id, item.isSelected)"></cart-checkbox>
				</template>
				<template #number-box>
					<uni-number-box :min="1" v-model="item.count" @change="countChange"></uni-number-box>
				</template>
			</good-info>
		</uni-card>
	</view>
</template>



<script>
	import {
		createNamespacedHelpers
	} from 'vuex'
	const {
		mapMutations
	} = createNamespacedHelpers('cart')
	
	import CartCheckbox from '@/components/checkbox/cartCheckbox.vue'
	import GoodInfo from '@/components/goodInfo/goodInfo.vue'
	
	export default {
		props: {
			item: {
				type: Object,
				required: true
			}
		},
		components: {
			CartCheckbox,
			GoodInfo
		},
		methods: {
			...mapMutations({
				setIsSelected: 'SET_IS_SELECTED',
				setCount: 'SET_COUNT',
				setTotalPrice: 'SET_TOTAL_PRICE'
			}),
			isSelectGood(goodId, isSelected) {
				this.isSelected = !this.isSelected
				this.setIsSelected({goodId, isSelected: !isSelected}),
				this.setTotalPrice()
			},
			countChange(goodCount) {
				this.setCount({goodId: this.item.id, count: goodCount})
				this.setTotalPrice()
			}
		}
	}
</script>

<style scoped lang="scss">
	.good-content {
		display: grid;
		grid-template-columns: 1fr 2fr 7fr;
		grid-column-gap: 20rpx;
		align-items: center;
		padding-top: 20rpx;
		
		.good-item {
			
		}
		
		image {
			width: 200rpx;
			height: 200rpx;
		}
		
		.common-padding {
			padding-bottom: 10rpx;
		}
		
		.stock {
			font-size: 12px;
			color: $uni-text-color-grey;
		}
	}
</style>
