<template>
	<view>
		<view class="overall">
			<carousel-list :carousels="carousels"></carousel-list>
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
		createNamespacedHelpers
	} from 'vuex'
	const {
		mapActions
	} = createNamespacedHelpers('category')

	import CarouselList from './cpns/carouselList.vue'
	import Category from './cpns/category.vue'
	import RecommendedViewList from './cpns/recommededView.vue'

	import {
		getHomeCarousels,
		getHomeCategoryIcons
	} from '../../api/home.js'

	export default {
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
		onLoad() {
			this.getCarousels()
			this.getCategoryList()
			this.getCategoryIcons()
		},
		methods: {
			...mapActions(['getCategoryList']),
			select(e) {
				console.log('选择成功', e.tempFilePaths)
					e.tempFilePaths.forEach(path => {
						uni.uploadFile({
							url: 'http://localhost:8888/upload/detailPic', //仅为示例，非真实的接口地址
							filePath: path,
							name: 'detailPic',
							formData: {
								'user': 'test'
							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data);
							}
						});
					})
					},
					success() {
						console.log('上传成功')
						console.log(this.imageValue)
					},
					trigger(e) {
						uni.navigateTo({
							url: '../publish/publish'
						})
					},
					getCarousels() {
						getHomeCarousels().then(res => {
							this.carousels = res.data.result
						})
					},
					getCategoryIcons() {
						getHomeCategoryIcons('49fa8213ffca3374fe20587c997d035c').then(res => {})
					}
			},
		}
</script>

<style lang="scss" scoped>
	/* .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
} */
</style>
