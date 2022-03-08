<template>
	<view class="container">
		<uni-nav-bar leftText="购物车列表" :rightText="switchText ? '编辑' : '完成'" @clickRight="clickEdit" color="#999" fixed :height="40"></uni-nav-bar>
		<cart-list></cart-list>
		<view class="fixedSpace"></view>
		<view class="footer">
			<settlement v-if="switchText"></settlement>
			<edit v-else></edit>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	
	import CartList from './cpns/cartList.vue'
	import Settlement from './cpns/footerCpns/settlement.vue'
	import Edit from './cpns/footerCpns/edit.vue'
	
	export default {
		data() {
			return {
				switchText: true
			}
		},
		components: {
			CartList,
			Settlement,
			Edit
		},
		computed: {
			...mapGetters(['cartList'])
		},
		methods: {
			clickEdit() {
				this.switchText = !this.switchText
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		position: relative;
		
		.fixedSpace {
			width: 100%;
			height: 100rpx;
		}
		
		.footer {
			margin-top: 50rpx;
			position: fixed;
			width: 100%;
			// bottom: 0;
			bottom: 96rpx;
			z-index: 999;
			background-color: $uni-bg-color-grey;
		}
	}
</style>
