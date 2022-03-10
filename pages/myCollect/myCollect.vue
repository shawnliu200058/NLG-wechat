<template>
	<view class="container">
		<template v-if="list">
			<uni-card v-for="good in list" :key="good.id">
				<three-column :gridPartition="[2, 5, 3]">
					<template #column1>
						<image :src="good.displayPic" mode="aspectFill"></image>
					</template>
					<template #column2>
						<view class="column-sort">
							<text>{{good.name}}</text>
							<text class="detail">{{good.detail}}</text>
							<text class="detail">{{good.specification}}/{{good.unit}}</text>
							<text style="color: red;">￥{{good.price.toFixed(2)}}</text>
						</view>
					</template>
					<template #column3>
						<u-button :plain="true" type="warning" text="删除"
							shape="circle" @click="delCollect(good.id)"></u-button>
					</template>
				</three-column>
			</uni-card>
		</template>
		
		<u-empty v-else
			mode="favor" width="200" text-size="16"
			icon="http://cdn.uviewui.com/uview/empty/data.png">
		</u-empty>
	</view>
</template>

<script>
	import {
		mapGetters, mapActions
	} from 'vuex'
	// const { mapActions } = createNamespacedHelpers('collect')
	
	import ThreeColumn from '@/layout/three-column/three-column.vue'
	
	export default {
		data() {
			return {

			}
		},
		components: {
			ThreeColumn
		},
		computed: {
			...mapGetters(['collectInfo']),
			list() {
				return this.collectInfo
			}
		},
		onLoad() {
			this.getCollectList()
		},
		methods: {
			// ...mapActions(['getCollectList']),
			...mapActions({
				getCollectList: 'collect/getCollectList',
				setCollectStatus: 'good/setCollectStatus'
			}),
			delCollect(goodId) {
				let that = this
				
				uni.showModal({
					content: '是否删除收藏',
					success: res => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.setCollectStatus({
								userId: null,
								goodId
							}).then(res => {
								uni.showToast({
									title: '删除成功',
									icon: 'success'
								})
								that.getCollectList()
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
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
		}
	}
</style>
