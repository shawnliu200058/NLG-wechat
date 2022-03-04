<template>
	<view class="container center">
		<!-- <view class="btn center" @click="editAddress">新增地址</view> -->
		<circle-btn text="新增地址" class="btn" @click.native="editAddress"></circle-btn>
	</view>
</template>

<script>
	import CircleBtn from '@/components/circle-btn/circle-btn.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			CircleBtn
		},
		methods: {
			editAddress() {
				this.$Router.push({
					name: 'editAddress'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.container {
	.btn {
		position: fixed;
		bottom: 20rpx;
	}
}
</style>
