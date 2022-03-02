<template>
	<view class="container">
		<uni-card>
			<view :key="item.id" class="good-content">
				<!-- <uni-icons :type="item.isSelected ? 'checkbox' : 'circle'" 
					:size="30" @click="isSelectGood(item.id, item.isSelected)"></uni-icons> -->
					<cart-checkbox :isSelect="item.isSelected" @click.native="isSelectGood(item.id, item.isSelected)"></cart-checkbox>
				<image :src="item.displayPicUrl" mode="aspectFill"></image>
				<view class="good-item">
					<view class="common-padding">{{item.name}}</view>
					<!-- <view class="stock common-padding">库存：{{item.stock}}</view> -->
					<uni-title :title="`￥${item.price.toFixed(2)}/${item.unit}`" type="h4" color="red"></uni-title>
					<uni-number-box :min="1" v-model="item.count" @change="countChange"></uni-number-box>
				</view>
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
	
	export default {
		props: {
			item: {
				type: Object,
				required: true
			}
		},
		components: {
			CartCheckbox
		},
		methods: {
			...mapMutations({
				setIsSelected: 'SET_IS_SELECTED',
				setCount: 'SET_COUNT'
			}),
			edit() {
				console.log(12)
			},
			isSelectGood(goodId, isSelected) {
				this.isSelected = !this.isSelected
				console.log(isSelected)
				this.setIsSelected({goodId, isSelected: !isSelected})
			},
			countChange(goodCount) {
				this.setCount({goodId: this.item.id, count: goodCount})
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
