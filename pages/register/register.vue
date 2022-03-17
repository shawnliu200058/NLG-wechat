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
			<u-button type="primary" text="提交" @click="submit"></u-button>
		</view>
	</view>
</template>

<script>
	import rules from './config/rules.js'
	import {registerUser} from '@/api/login.js'
	
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
		// beforeMount() {
		// 	console.log(rules)
		// 	this.rules = rules
		// },
		methods: {
			submit() {
				this.$refs.form.validate().then(res => {
					console.log(this.formData)
					this.register()
				}).catch(err => {
					console.log(err)
				})
			},
			register() {
				registerUser(this.formData).then(res => {
					if(res.data.errMsg) {
						return uni.showToast({
							title: '当前用户名已存在',
							duration: 2000,
							icon: 'error'
						})
					}
					uni.showToast({
						title: '注册成功',
						duration: 2000,
						icon: 'success'
					})
					this.$Router.push({ name: 'login' })
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		padding: 30rpx
	}
</style>
