<template>
	<view class="container">
		<template v-if="goodList.length">
			<uni-card v-for="good in goodList" :key="good.id" @click="goToDetail(good.id)">
				<three-column :gridPartition="[3, 7, 0]">
					<template #column1>
						<image :src="good.displayPicUrl" mode="aspectFill"></image>
					</template>
					<template #column2>
						<view class="column-sort">
							<text>{{good.name}}</text>
							<text class="detail">{{good.detail}}</text>
							<text class="detail">销量：{{good.sale}} 库存：{{good.stock}}</text>
							<text style="color: red;">￥{{good.price.toFixed(2)}}/{{good.unit}}</text>
						</view>
					</template>
				</three-column>
			</uni-card>
		</template>
		
		<u-empty v-else mode="search" width="200" marginTop="20"
			icon="http://cdn.uviewui.com/uview/empty/search.png">
		</u-empty>
	</view>
</template>

<script>
	import ThreeColumn from '@/layout/three-column/three-column.vue'
	
	import { getGoodsByKeyword } from '@/api/good.js'
	
	export default {
		data() {
			return {
				goodList: []
			}
		},
		components: {
			ThreeColumn
		},
		methods: {
			getGoodByKeyword(word) {
				getGoodsByKeyword(word).then(res => {
						this.goodList = res.data
				})
			},
			goToDetail(id) {
				this.$Router.push({
					name: 'goodDetail',
					params: {
						goodId: id
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		image {
			width: 200rpx;
			height: 200rpx;
		}
		
		.detail {
			color: $uni-text-color-grey;
			font-size: $uni-font-size-sm;
			margin-bottom: 10rpx;
		}
	}
</style>
