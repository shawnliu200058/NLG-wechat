<template>
	<view class="container">
		<!-- <input-box leftText="姓名" placeholder="请输入收货人姓名"></input-box>
		<input-box leftText="电话" placeholder="请输入收货人联系电话"></input-box>
		<input-box leftText="地址" placeholder="请输入收货人地址" suffixIcon="location-filled"></input-box>
		<input-box leftText="楼栋门牌" placeholder="请输入楼栋门牌号"></input-box>
		<input-box leftText="默认地址">
			<template #default>
				<switch></switch>
			</template>
		</input-box> -->
		

		<view class="form">
			<uni-forms :modelValue="formData" labelWidth="70" ref="form">
				<uni-forms-item required label="姓名" name="name">
					<uni-easyinput type="text" v-model="formData.name" placeholder="请输入收货人姓名"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item required label="电话" name="phone">
					<uni-easyinput v-model="formData.phone" placeholder="请输入收货人联系电话"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item required label="地址" name="address">
					<uni-easyinput v-model="formData.address" placeholder="请输入收货人地址" suffixIcon="location-filled"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item required label="楼栋门牌" name="house">
					<uni-easyinput v-model="formData.house" placeholder="请输入楼栋门牌号"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="默认地址" name="default">
					<switch @change="chooseDefault"></switch>
				</uni-forms-item>
			</uni-forms> 
		</view>

		
		<view class="center saveAndUse" @click="submit">
			<circle-btn text="保存并使用"></circle-btn>
		</view>
	</view>
</template>

<script>
	import InputBox from '@/components/input-box/input-box.vue'
	import CircleBtn from '@/components/circle-btn/circle-btn.vue'
	import rules from './config/rules.js'
	
	export default {
		data() {
			return {
				formData: {
					name: '',
					phone: '',
					address: '',
					house: '',
					default: false
				},
			}
		},
		components: {
			InputBox,
			CircleBtn
		},
		onReady() {
			this.$refs.form.setRules(rules)
		},
		methods: {
			chooseDefault(e) {
				this.formData.default = e.target.value
			},
			submit() {
				this.$refs.form.validate().then(res => {
					console.log(res)
				})
			}
		},
		
	}
</script>

<style scoped lang="scss">
	.container {
		padding: 20rpx 0;
		
		.form {
			padding: 40rpx;
		}
	}
</style>
