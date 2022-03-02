<template>
	<view class="container">
		<image 
			src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00207-3477.jpg" 
			mode="aspectFill">
		</image>
		
		<view class="login-container">
			<button class="center" @click="auth">
				<uni-icons type="weixin" size="28"></uni-icons>
				<text>微信授权登录</text>
			</button>
			
		<other-login></other-login>
		</view>
	</view>
</template>

<script>
	import { createNamespacedHelpers } from 'vuex'
	const { mapActions } = createNamespacedHelpers('user')
	
	import OtherLogin from './cpns/otherLogin.vue'
	
	export default {
		components: {
			OtherLogin
		},
		data() {
			return {

			}
		},
		methods: {
			...mapActions(['login']),
			auth() {
				let that = this
				uni.getUserProfile({
					desc: '获取你的头像、昵称',
					success: (res) => {
						// console.log(res)
						const { userInfo } = res

						uni.login({
							provider: 'weixin',
							success: function(res) {
								const {
									APP_ID,
									APP_SECRET
								} = process.uniEnv

								let url =
									`https://api.weixin.qq.com/sns/jscode2session?
										appid=${APP_ID}
										&secret=${APP_SECRET}
										&js_code=${res.code}
										&grant_type=authorization_code`
								uni.request({
									url, // 请求路径
									success: result => {
										const { openid } = result.data

										that.login({userInfo, openid}).then(res => {
											console.log(res)
											that.$Router.back(1, {
											  success:(...arg)=>{
											    console.log(arg)
											  }
											})
											uni.showToast({
												title: '登录成功'
											})
										})
									},
								});
							}
						});

					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
 .container {
	 image {
		 width: 100%;
	 }
	 .login-container {
		 
		 button {
		 		 width: 50%;
		 		 height: 100rpx;
				 margin-bottom: 40rpx;
		 		 font-size: $uni-font-size-base;
		 		 .uni-icons {
		 			 padding-right: 10rpx;
		 		 }
		 }
	 }
 }
</style>
