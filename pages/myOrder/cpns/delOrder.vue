<template>
	<u-button :plain="true" type="warning" text="删除订单" 
		shape="circle" @click="deleteOrder"></u-button>
</template>

<script>
	import { createNamespacedHelpers, mapGetters } from 'vuex'
	const { mapActions } = createNamespacedHelpers('paidOrder')
	
	export default {
		props: {
			orderItem: {
				type: Object,
				required: true
			}
		},
		methods: {
			...mapActions(['delOrder']),
			deleteOrder() {
				uni.showModal({
					content: '是否删除订单',
					success: res => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.delOrder(this.orderItem.id).then(res => {
								uni.showToast({
									title: '删除成功',
									icon: 'success'
								})
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

<style>
</style>
