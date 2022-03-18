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
			<view>
				<circle-btn v-if="showDelBtn" text="删除" @click.native="deleteAddress"></circle-btn>
			</view>
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
	import rules from './config/rules.js'
	import { showToastBack } from './hook.js'
	
	export default {
		data() {
			return {
				formData: {
					realName: '',
					phone: '',
					address: '',
					house: '',
					isDefault: 0
				},
				showDelBtn: false
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
		onLoad() {
			this.getEchoData()
			this.showDelBtn = this.$Route.query.type == 0 ? true : false
		},
		methods: {
			...mapActions(['addAddress', 'modifyAddress', 'delAddress']),
			getEchoData() {
				if(this.$Route.query.addressId) {
					// 找到该 id 对应的地址
					const addressData = this.addressInfo.find(item => item.id == this.$Route.query.addressId)
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
					// this.formData.user_id = 6
					// 新增
					console.log(this.$Route.query.type)
					if(!this.showDelBtn) {
						this.addAddress({
							addressInfo: this.formData,
							userId: this.userId
						}).then(res => {
							showToastBack(uni, '新建成功', this)
						})
					} else { // 编辑
						this.modifyAddress({
							addressInfo: this.formData,
							addressId: this.$Route.query.addressId
						}).then(res => {
							showToastBack(uni, '编辑成功', this)
						})	
					}
				})
			},
			chooseLocation() {
				uni.chooseLocation({
					success: (res) => {
						console.log(res)
						this.formData.address = res.address
					}
				})
			},
			deleteAddress() {
				const { addressId } = this.$Route.query
				
				uni.showModal({
					content: '是否删除',
					success: res => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.delAddress(addressId).then(res => {
								showToastBack(uni, '删除成功', this)
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
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
