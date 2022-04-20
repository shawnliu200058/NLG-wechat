<template>
	<view class="overall">
			<uni-forms ref="form" style="margin-top: 20rpx;" :modelValue="formData">
				<uni-forms-item label="原密码" name="originalPwd" required>
					<uni-easyinput type="password"v-model="formData.originalPwd" 
						placeholder="请输入原密码" />
				</uni-forms-item>
				<uni-forms-item label="新密码" name="newPwd" required>
					<uni-easyinput type="password" v-model="formData.newPwd" 
						placeholder="请输入新密码" />
				</uni-forms-item>
				<uni-forms-item label="确认密码" name="confirmPwd" required>
					<uni-easyinput type="password" v-model="formData.confirmPwd" 
						placeholder="请输入确认密码" />
				</uni-forms-item>
			</uni-forms>
			<circle-btn text="保存" @click.native="submit"></circle-btn>
		</view>
</template>

<script> 
	import CircleBtn from '@/components/circle-btn/circle-btn.vue'
	
	import rules from './config/rules.js' 
	
	import { changePwd } from '@/api/my.js'
	
	export default {
		components: { CircleBtn },
		data() {
			return {
				formData: {
					originalPwd: '',
					newPwd: '',
					confirmPwd: ''
				}
			};
		},
		onReady() {
			this.$refs.form.setRules(rules) 
		},
		methods: {
			submit() {
				this.$refs.form.validate().then(res => {
					// console.log(res)
					console.log(this.formData)
					changePwd(this.formData).then(res => {
						console.log(res.data)
						if(res.data.errMsg) {
							uni.showToast({
								icon: 'error',
								title: '原密码错误，请重新输入'
							})
						} else {
							uni.showToast({
								icon: 'success',
								title: '修改密码成功'
							})
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
