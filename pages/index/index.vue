<template>
	<view>
		<view class="overall">
			<carousel-list :carousels="carouselList"></carousel-list>
			<uni-notice-bar scrollable showGetMore required 
				single more-text="查看更多" :speed="80" @getmore="getMore"
				:text="announcement.title">
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
	import { getAnnouncement } from '@/api/announcement.js'

	export default {
		name: 'index',
		data() {
			return {
				carousels: [],
				pattern: {
					buttonColor: '#1afa29'
				},
				announcement: {},
				content: [{
					text: '发布供应',
					iconPath: '../../static/tabbarIcon/category.png'
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
			this.setAnnouncement()
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
			},
			setAnnouncement() {
				getAnnouncement().then(res => {
					// console.log(res.data)
					this.announcement = {...res.data}
					// console.log(this.announcement)
				})
			},
			getMore() {
				this.$Router.push({name: 'announcement'})
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>
