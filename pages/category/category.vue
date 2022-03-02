<template>
	<view class="container">
		<uni-search-bar :radius="100" @confirm="search" placeholder="搜索商品名称"></uni-search-bar>
		<CategoryList :categoryList="list"></CategoryList>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	
	import CategoryList from './cpns/categoryList.vue'
	
	export default {
		data() {
			return {

			}
		},
		components: {
			CategoryList
		},
		computed: {
			...mapGetters(['categoryList']),
			list() {
				return this.categoryList
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		
		
	}
</style>
