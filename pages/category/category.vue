<template>
	<view class="container">
		<uni-search-bar v-model="searchValue" :radius="100" placeholder="搜索商品名称" 
			@focus="isSearch = true" @confirm="confirm" @cancel="isSearch = false">
			</uni-search-bar>
		<CategoryList v-if="!isSearch" :categoryList="list"></CategoryList>
		<search-content v-else ref="searchContent"></search-content>
	</view>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	
	import CategoryList from './cpns/categoryList.vue'
	import SearchContent from './cpns/searchContent.vue'
	
	export default {
		data() {
			return {
				isSearch: false,
				searchValue: null
			}
		},
		components: {
			CategoryList,
			SearchContent
		},
		computed: {
			...mapGetters(['categoryList']),
			list() {
				return this.categoryList
			}
		},
		onLoad() {
			this.getGoodList()
		},
		methods: {
			...mapActions({
				getGoodList: 'good/getGoodList'
			}),
			confirm() {
				if(this.searchValue === '') this.searchValue = null
				this.$refs.searchContent.getGoodByKeyword(this.searchValue)

			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		
		
	}
</style>
