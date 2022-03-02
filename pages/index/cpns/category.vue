<template>
	<view class="container">
		<template v-for="(item, index) in list">
			<view class="category-item" :key="index" @click="toCategory(index)">
				<image :src="item.icon_url" mode="scaleToFill"></image>
				<text>{{item.name}}</text>
			</view>
		</template>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	import {
		createNamespacedHelpers
	} from 'vuex'
	const {
		mapMutations
	} = createNamespacedHelpers('category')
	
	export default {
		name: 'Category',
		data() {
			return {
				
			}
		},
		computed: {
			...mapGetters(['categoryList']),
			list() {
				return this.categoryList
			}
		},
		methods: {
			...mapMutations({
				setCategoryIndex: 'SET_SELECTED_INDEX'
			}),
			toCategory(index) {
				// 记录点击的分类 index
				this.setCategoryIndex(index)
				// 跳转到 tabbar 页面不能用 push
				this.$Router.pushTab({
					name: 'category'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: grid;
		grid-template-rows: 160rpx 160rpx;
		grid-template-columns: repeat(4, 1fr);
		align-items: center;
		justify-items: center;
		padding-top: 10rpx;

		.category-item {
			text-align: center;

			image {
				display: block;
				width: 100rpx;
				height: 100rpx;
			}

			text {
				font-size: $uni-font-size-sm;
			}
		}
	}
</style>
