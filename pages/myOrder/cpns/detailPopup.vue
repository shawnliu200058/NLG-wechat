<template>
	<view class="container">
		<u-popup :show="show" :round="10" mode="bottom" @close="close" @open="open">
			<view class="column-sort popup-content">
				<text>姓名：{{orderItem.real_name}}</text>
				<text>地址：{{orderItem.delivery_address}}</text>
				<text>门牌号：{{orderItem.house}}</text>
				<text>电话：{{orderItem.phone}}</text>
				<text v-if="orderItem.remark">备注：{{orderItem.remark}}</text>
			</view>
		</u-popup>
		<u-button :plain="true" type="primary" shape="circle" text="收货人信息" @click="show = true"></u-button>
	</view>
</template>
<script>
	export default {
		props: {
			orderItem: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				show: false
			}
		},
		methods: {
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		.popup-content {
			padding: 20rpx;
			font-size: $uni-font-size-lg;
		}
	}
</style>
