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
				<uni-forms-item required label="姓名" name="realName">
					<uni-easyinput type="text" v-model="formData.realName" placeholder="请输入收货人姓名"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item required label="电话" name="phone">
					<uni-easyinput v-model="formData.phone" placeholder="请输入收货人联系电话" :maxlength="11"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item required label="地址" name="address">
					<uni-easyinput v-model="formData.address" placeholder="请输入收货人地址" 
					suffixIcon="location-filled" @iconClick="chooseLocation"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item required label="楼栋门牌" name="house">
					<uni-easyinput v-model="formData.house" placeholder="请输入楼栋门牌号"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="默认地址" name="isDefault">
					<switch @change="chooseDefault" :checked="formData.isDefault === 1 ? true : false"></switch>
				</uni-forms-item>
			</uni-forms> 
		</view>
		
		<view class="saveAndUse">
			<circle-btn text="保存" @click.native="submit"></circle-btn>
			<circle-btn v-if="!$Route.query.type" text="删除"></circle-btn>
		</view>
	</view>
</template>

<script>
	import {
		createNamespacedHelpers, mapGetters
	} from 'vuex'
	const {
		mapActions
	} = createNamespacedHelpers('address')
	
	import InputBox from '@/components/input-box/input-box.vue'
	import CircleBtn from '@/components/circle-btn/circle-btn.vue'
	import rules from '../config/rules.js'
	
	export default {
		// props: {
		// 	addressData: {
		// 		type: Object,
		// 		required: true
		// 	}
		// },
		data() {
			return {
				formData: {
					realName: '',
					phone: '',
					address: '',
					house: '',
					isDefault: 0
				}
			}
		},
		components: {
			CircleBtn
		},
		computed: {
			...mapGetters(['userId', 'addressInfo'])
		},
		onReady() {
			this.$refs.form.setRules(rules)
		},
		beforeMount() {
			this.getEchoData()
		},
		methods: {
			...mapActions(['addAddress', 'modifyAddress']),
			getEchoData() {
				const addressData = this.addressInfo.find(item => item.id === this.$Route.query.addressId)
				if(this.$Route.query.addressId) {
					for(const key in this.formData) this.formData[key] = addressData[key]
				}
			},
			chooseDefault(e) {
				if(e.target.value) this.formData.isDefault = 1
				else this.formData.isDefault = 0
			},
			submit() {
				this.$refs.form.validate().then(res => {
					// console.log(res)
					// this.formData.user_id = this.userId
					if(this.$Route.query.type) {
						this.addAddress({
							addressInfo: this.formData,
							userId: 6
						}).then(res => {
							console.log(res)
							uni.showToast({
								title: '保存成功',
								icon: 'success'
							})
							this.$Router.push({
								name: 'address'
							})
						})
					}
				})
			},
			chooseLocation() {
				uni.chooseLocation({
					success: (res) => {
						// console.log(res)
						this.formData.address = res.address
					}
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
