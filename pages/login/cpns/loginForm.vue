<template>
	<view class="overall container">
		<uni-forms ref="form" :modelValue="formData" :rules="rules" label-position="left" :labelWidth="60">
			<uni-forms-item required label="用户名" name="name">
				<uni-easyinput v-model="formData.name" type="text" placeholder="请输入用户名" />
			</uni-forms-item>
			<uni-forms-item required label="密码" name="password">
				<uni-easyinput v-model="formData.password" type="password" placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms>
		
		<view style="padding: 20rpx 0;">
			<u-button type="primary" text="登录" @click="submit"></u-button>
		</view>
		
		<view @click="goRegister">
			<text class="register">注册</text>
		</view>
	</view>
</template>

<script>
	import { createNamespacedHelpers } from 'vuex'
	const { mapActions } = createNamespacedHelpers('user')
	
	import rules from '../config/rules.js'

	export default {
		data() {
			return {
				formData: {
					name: '',
					password: ''
				},
				rules: {}
			}
		},
		beforeMount() {
			this.rules = rules
		},
		methods: {
			...mapActions(['login']),
			submit() {
				this.$refs.form.validate().then(res => {
					// console.log(res)
					this.handleLogin()
				}).catch(err => {
					console.log(err)
				})
			},
			handleLogin() {
				this.login(this.formData).then(res => {
					console.log(res)
					if(res.data.errMsg) {
						return uni.showToast({
							title: '用户名或密码错误',
							duration: 2000,
							icon: 'error'
						})
					}
					uni.showToast({
						title: '登录成功',
						duration: 2000,
						icon: 'success'
					})
					this.$Router.push({ name: 'index' })
				})
			},
			goRegister() {
				this.$Router.push({
					name: 'register'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		padding: 30rpx;
		
		.register {
			color: rgb(41, 121, 255);
			font-size: 30rpx;
			line-height: 34rpx;
			text-decoration: underline;
		}
	}
</style>
