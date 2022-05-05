<template>
	<view>
		<view class="container">
			<view class="subsection">
				<u-subsection :list="list" :current="curNow" @change="sectionChange"></u-subsection>
			</view>

			<template v-if="publishInfo.length" v-for="(good, index) in publishInfo">
				<publish-list-item v-if="good.status && !curNow" :publishItem="good" :key="good.id"/>
				<review-list-item v-else-if="!good.status && curNow" :publishItem="good" :key="good.id"/>
			</template>
			
			<u-empty v-if="!curNow && !onCount" width="200" 
				text-size="16" icon="http://cdn.uviewui.com/uview/empty/data.png">
			</u-empty>
			<u-empty v-else-if="curNow && !offCount" width="200" text-size="16" icon="http://cdn.uviewui.com/uview/empty/data.png">
			</u-empty>
<!-- {{onCount}}{{offCount}} -->
		</view>
	</view>
</template>

<script>
	import {
		createNamespacedHelpers,
		mapGetters
	} from 'vuex'
	const {
		mapActions
	} = createNamespacedHelpers('publish')

	import PublishListItem from './cpns/publishListItem.vue'
	import ReviewListItem from './cpns/reviewListItem.vue'

	export default {
		data() {
			return {
				list: ['已上架', '未上架'],
				curNow: 0
			}
		},
		components: {
			PublishListItem,
			ReviewListItem
		},
		onLoad() {
			this.getPublishList()
			// console.log(this.publishInfo)
		},
		computed: {
			...mapGetters(['publishInfo']),
			// 已上架商品数量
			onCount() {
				return this.publishInfo.filter(item => {
					return item.status
				}).reduce((preValue, item) => {
					return ++preValue
				}, 0)
			},
			// 未上架商品数量
			offCount() {
				return this.publishInfo.filter(item => {
					return !item.status
				}).reduce((preValue, item) => {
					return ++preValue
				}, 0)
			}
		},
		methods: {
			...mapActions(['getPublishList']),
			sectionChange(index) {
				this.curNow = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.subsection {
		margin: 20rpx 26rpx 0 26rpx
	}
</style>
