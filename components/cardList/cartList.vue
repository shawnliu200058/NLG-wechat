<template>
	<view class="container">
		<uni-card>
			<template v-for="item in list" :key="item.id">
				<three-column :gridPartition="[2, 7, 1]">
					<template #column1>
						<image :src="item.displayPicUrl" mode="aspectFill"></image>
					</template>
					<template #column2>
						<view class="text-info left-align">
							<text>{{item.name}}</text>
							<text class="detail">{{item.detail}}</text>
						</view>
					</template>
					<template #column3>
						<view class="text-info right-align">
							<text class="right">￥{{item.price.toFixed(2)}}</text>
							<text class="right detail">x{{item.count}}</text>
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
			list: {
				type: Array,
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
		image {
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
