<template>
	<view>
		<view class="overall">
			<carousel-list :carousels="carouselList"></carousel-list>
			<uni-notice-bar scrollable single showIcon :speed="80"
				text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏">
			</uni-notice-bar>
			<category></category>
		</view>
		<recommended-view-list></recommended-view-list>
		<view>
			<uni-fab :pattern="pattern" :content="content" horizontal="right" direction="vertical" @trigger="trigger">
			</uni-fab>
		</view>
	</view>

</template>

<script>
	import {
		mapActions,
		mapGetters
	} from 'vuex'
	// const {
	// 	mapActions
	// } = createNamespacedHelpers('category')

	import CarouselList from './cpns/carouselList.vue'
	import Category from './cpns/category.vue'
	import RecommendedViewList from './cpns/recommededView.vue'

	import {
		getHomeCategoryIcons
	} from '../../api/home.js'

	export default {
		name: 'index',
		data() {
			return {
				carousels: [],
				pattern: {
					buttonColor: '#1afa29'
				},
				content: [{
					text: '发布供应',
					iconPath: '../../static/tabbarIcon/category.png'
				}, {
					text: '发布求购'
				}]
			}
		},
		components: {
			CarouselList,
			Category,
			RecommendedViewList
		},
		computed: {
			...mapGetters(['carouselList'])
		},
		onLoad() {
			this.getCarouselList()
			this.getCategoryList()
			this.getGoodList()
		},
		methods: {
			// ...mapActions(['getCategoryList']),
			...mapActions({
				getCarouselList: 'carousel/getCarousel',
				getCategoryList: 'category/getCategoryList',
				getGoodList: 'good/getGoodList'
			}),
			trigger(e) {
				uni.navigateTo({
					url: '../publish/publish'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>
