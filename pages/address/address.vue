<template>
	<view class="container center">
		<address-info :entrance="entrance"></address-info>
	</view>
</template>

<script>
	import CircleBtn from '@/components/circle-btn/circle-btn.vue'
	import AddressInfo from './cpns/addressInfo.vue'
	
	export default {
		data() {
			return {
				entrance: ''
			}
		},
		components: {
			CircleBtn,
			AddressInfo
		},
		onLoad() {
			this.entrance = this.$Route.query.entrance
		},
		methods: {
			
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
