<template>
	<view container>
		<main-info :goodInfo="goodInfo"></main-info>
		<detail-info :goodInfo="goodInfo"></detail-info>
		<good-nav :goodInfo="goodInfo"></good-nav>
	</view>
</template>

<script>
	import {
		mapGetters, createNamespacedHelpers
	} from 'vuex'
	const { mapActions } = createNamespacedHelpers('good')

	import MainInfo from './cpns/mainInfo.vue'
	import DetailInfo from './cpns/detailInfo.vue'
	import GoodNav from './cpns/goodNav.vue'

	export default {
		data() {
			return {
				goodInfo: null,
			}
		},
		components: {
			MainInfo,
			DetailInfo,
			GoodNav
		},
		computed: {
			...mapGetters(['goodList']),
		},
		onLoad() {
			console.log(this.$Route.query)
			this.goodInfo = this.goodList.find(element => element.id == this.$Route.query.goodId);
			console.log(this.goodInfo)
		},
		methods: {
			...mapActions(['getGoodList'])
		}
	}
</script>

<style scoped lang="scss">
	
</style>
