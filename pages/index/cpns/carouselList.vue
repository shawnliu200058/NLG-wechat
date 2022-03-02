<template>
	<view class="home">
		<swiper indicator-dots circular autoplay :interval="3000">
			<swiper-item v-for="item in carousels" :key="item.id">
				<image :src="item.picSrc"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: ['carousels'],
		onLoad() {},
		methods: {

		},
	}
</script>


<style lang="scss" scoped>
	.home {
		swiper {
			width: 100%;
			height: 380rpx;

			image {
				height: 100%;
				width: 100%;
				border-radius: 1%;
			}
		}
	}
</style>
