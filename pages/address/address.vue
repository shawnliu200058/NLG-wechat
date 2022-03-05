<template>
	<view class="container center">
		<address-info></address-info>
		<circle-btn text="新增地址" class="btn" @click.native="editAddress"></circle-btn>
	</view>
</template>

<script>
	import CircleBtn from '@/components/circle-btn/circle-btn.vue'
	import AddressInfo from './cpns/addressInfo.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			CircleBtn,
			AddressInfo
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
