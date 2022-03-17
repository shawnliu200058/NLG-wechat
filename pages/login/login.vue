<template>
	<view class="container">
		<image 
			src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00207-3477.jpg" 
			mode="aspectFill">
		</image>
			
		<login-form></login-form>
	</view>
</template>

<script>
	import { createNamespacedHelpers } from 'vuex'
	const { mapActions } = createNamespacedHelpers('user')
	
	import LoginForm from './cpns/loginForm.vue'
	
	export default {
		components: {
			LoginForm
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
										
								// 这里用校园网请求会出错
								uni.request({
									url, // 请求路径
									success: result => {
										const { openid } = result.data
										
										console.log(openid)
										
										that.login({userInfo, openid}).then(res => {
											console.log(res)
											that.$Router.back(1, {
											  success:(...arg)=>{
													
											  }
											})
											uni.showToast({
												title: '登录成功'
											})
										})
									},
									fail: (err) => {
										console.log(err)
									}
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
		 
	 }
 }
</style>
