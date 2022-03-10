<template>
	<view class="container">
		<uni-card>
			<template v-for="good in orderItem.goodList">
				<three-column :key="good.id"
					:gridPartition="[2, 6, 2]" class="row-divide">
					<template #column1>
						<image :src="good.displayPicUrl" mode="aspectFill" class="img"></image>
					</template>
					<template #column2>
						<view class="text-info left-align">
							<text>{{good.name}}</text>
							<text class="detail">{{good.detail}}</text>
						</view>
					</template>
					<template #column3>
						<view class="text-info right-align">
							<text class="right">￥{{good.price.toFixed(2)}}</text>
							<text class="right detail">x{{good.count}}</text>
						</view>
					</template>
				</three-column>
				
				<u-divider></u-divider>
		
			</template>
			
			<text class="right-align total-price">
				总价￥{{orderItem.total_price.toFixed(2)}}</text>
			
			<three-column :gridPartition="[4, 1, 5]">
				<template #column3>
					<view class="right-align">
						<detail-popup :orderItem="orderItem"></detail-popup>
						<del-order style="margin-left: 30rpx;" 
							:orderItem="orderItem"></del-order>
					</view>
				</template>
			</three-column>
			
		</uni-card>

	</view>
</template>

<script>

	import ThreeColumn from '@/layout/three-column/three-column.vue'
	import DetailPopup from './detailPopup.vue'
	import DelOrder from './delOrder.vue'

	export default {
		props: {
			orderItem: {
				type: Object,
				required: true
			}
		},
		data() {
			return {

			}
		},
		components: {
			ThreeColumn,
			DetailPopup,
			DelOrder
		},
		beforeMount() {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		.row-divide {

		}

		.img {
			width: 200rpx;
			height: 200rpx;
		}

		.text-info {
			flex-direction: column;

			.right {
				margin-left: auto;
			}

			.detail {
				color: $uni-text-color-grey;
			}
		}

		.total-price {
			font-size: $uni-font-size-lg;
			margin-bottom: 30rpx;
		}

	}
</style>
