<template>
	<view class="">
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
					title: '我的供应',
					extraIcon: {
						size: '20',
						type: 'bars'
					}
				}, {
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
				if(index == 0) this.$Router.push({
					name: 'address'
				})
			}
		}
	}
</script>

<style>
</style>
