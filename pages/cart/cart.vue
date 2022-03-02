<template>
	<view class="container">
		<uni-nav-bar leftText="购物车列表" :rightText="switchText ? '编辑' : '完成'" @clickRight="clickEdit" color="#999" fixed :height="40"></uni-nav-bar>
		<cart-list></cart-list>
		<settlement v-if="switchText"></settlement>
		<edit v-else></edit>
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

<style>

</style>
