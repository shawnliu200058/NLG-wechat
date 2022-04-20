<template>
	<view class="overall">
		<top></top>
		<!-- <middle></middle> -->
		<bottom style="margin-top: 20rpx;"></bottom>
	</view>
</template>

<script>
	import Top from './cpns/top.vue'
	import Middle from './cpns/midddle.vue'
	import Bottom from './cpns/bottom.vue'

	export default {
		data() {
			return {

			}
		},
		components: {
			Top,
			Middle,
			Bottom
		},
		methods: {
		
		}
	}
</script>

<style>

</style>
