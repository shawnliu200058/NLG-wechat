<template>
	<u-button :plain="true" type="warning" text="删除商品" shape="circle" @click="deletePublish"></u-button>
</template>

<script>
	import {
		createNamespacedHelpers,
		mapGetters
	} from 'vuex'
	const {
		mapActions
	} = createNamespacedHelpers('publish')

	export default {
		props: {
			publishItem: {
				type: Object,
				required: true
			}
		},
		beforeMount() {
			// console.log(this.publishItem)
		},
		methods: {
			...mapActions(['delPublishInfo']),
			deletePublish() {
				uni.showModal({
					content: '是否删除商品',
					success: res => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.delPublishInfo(this.publishItem.id).then(res => {
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
