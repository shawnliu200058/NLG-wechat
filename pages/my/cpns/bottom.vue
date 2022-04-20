<template>
	<view class="container">
		<uni-list v-for="(item, index) in listItems" :key="index">
			<view @click="goToPage(index)">
				<uni-list-item :title="item.title" show-extra-icon
				:extraIcon="item.extraIcon"></uni-list-item>
			</view>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listItems: [{
					title: '地址管理',
					extraIcon: {
						size: '20',
						type: 'location'
					}
				}, {
					title: '我的订单',
					extraIcon: {
						size: '20',
						type: 'list'
					}
				}, {
					title: '我的收藏',
					extraIcon: {
						size: '20',
						type: 'star'
					}
				}, 
				{
					title: '我的发布',
					extraIcon: {
						size: '20',
						type: 'plus'
					}
				}, 
				{
					title: '系统设置',
					extraIcon: {
						size: '20',
						type: 'gear'
					}
				}]
			}
		},
		methods: {
			goToPage(index) {
				if(index == 0) {
					this.$Router.push({
						path: '/pages/address/address',
						query: {
							entrance: 'my'
						}
					})
				} else if(index == 1) {
					this.$Router.push({
						name: 'myOrder'
					})
				} else if(index == 2) {
					this.$Router.push({
						name: 'myCollect'
					})
				} else if(index == 3) {
					this.$Router.push({
						name: 'myPublish'
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
</style>
