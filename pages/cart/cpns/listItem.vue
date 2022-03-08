<template>
	<view class="container">
		<uni-card>
			<!-- <good-info :item="item">
				<template #checkbox>
					<cart-checkbox :isSelect="item.isSelected" @click.native="isSelectGood(item.id, item.isSelected)"></cart-checkbox>
				</template>
				<template #img>
					<image :src="item.displayPicUrl" mode="aspectFill"></image>
				</template>
				<template #number-box>
					<uni-number-box :min="1" v-model="item.count" @change="countChange"></uni-number-box>
				</template>
			</good-info> -->
			<view class="vertical-center">
				<three-column>
					<template #column1>
						<cart-checkbox :isSelect="item.isSelected" @click.native="isSelectGood(item.id, item.isSelected)"></cart-checkbox>
					</template>
					<template #column2>
						<image v-if="item.displayPicUrl" :src="item.displayPicUrl" mode="aspectFill"></image>
					</template>
					<template #column3>
						<view>{{item.name}}</view>
						<uni-title :title="`￥${item.price.toFixed(2)}/${item.unit}`" type="h4" color="red"></uni-title>
						<uni-number-box :min="1" v-model="item.count" @change="countChange"></uni-number-box>
					</template>
				</three-column>
			</view>
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
	import ThreeColumn from '@/layout/three-column/three-column.vue'
	
	export default {
		props: {
			item: {
				type: Object,
				required: true
			}
		},
		components: {
			CartCheckbox,
			GoodInfo,
			ThreeColumn
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
	.container {
		// display: grid;
		// grid-template-columns: 2fr 3fr 5fr;
		// grid-column-gap: 20rpx;
		// align-items: center;
		// padding-top: 20rpx;
		
		image {
			margin: 0 20rpx;
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
