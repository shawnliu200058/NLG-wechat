<template>
	<view class="container" @click="$Router.push({name: 'logout'})">
		<image :src="avatar_url ? avatar_url
			: '../../static/avatar/mmexport02d1443711db4c6508cc18aca6ebf25f.png'" mode=""></image>
		<text>{{nick_name}}</text>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		data() {
			return {
				avatarUrl: null,
				nickName: null
			}
		},
		computed: {
			...mapGetters({
			  nick_name: 'nickName',
				avatar_url: 'avatarUrl'
			})
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		align-items: center;

		image {
			width: 200rpx;
			height: 200rpx;
			margin: 0 50rpx 0 30rpx;
			border-radius: 50%;
		}

		text {
			font-size: $uni-font-size-lg;
		}
	}
</style>
