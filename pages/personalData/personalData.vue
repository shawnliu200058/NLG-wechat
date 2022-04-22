<template>
	<view>
		<uni-card is-full>
			<view class="center">
				<u-avatar :src="curAvatar ? curAvatar : defaultAvatar" size="150" style="margin-top: 20rpx;"></u-avatar>
			</view>
			<view>
				<uni-file-picker :auto-upload="false" fileMediatype="image" mode="list" limit="1" 
					@select="selectFile" @delete="delFile" />
			</view>
		</uni-card>

		<view class="overall">
			<uni-forms ref="form" style="margin-top: 20rpx;" :modelValue="formData">
				<uni-forms-item label="用户名" name="nickName" required>
					<uni-easyinput v-model="formData.nickName" placeholder="请输入用户名" />
				</uni-forms-item>
				<uni-forms-item label="性别" name="gender">
					<radio-group name="sex" @change="radioChange" class="radio-group">
						<label v-for="item in radio" :key="item.value">
							<radio :value="item.value.toString()" :checked="item.isChecked" /><text
								class="text">{{item.name}}</text>
							<!-- <radio value="1" /><text class="text">女</text>
							<radio value="2" :checked="true" /><text>未知</text> -->
						</label>
					</radio-group>
				</uni-forms-item>
				<uni-forms-item label="生日" name="birthday">
					<uni-datetime-picker type="date" :clear-icon="false" v-model="formData.birthday"
						@change="dateChange" />
				</uni-forms-item>
				<uni-forms-item label="邮箱" name="email">
					<uni-easyinput v-model="formData.email" placeholder="请输入邮箱" />
				</uni-forms-item>
			</uni-forms>
			<circle-btn text="保存" @click.native="submit"></circle-btn>
		</view>
	</view>
</template>

<script>
	import {
		createNamespacedHelpers
	} from 'vuex'
	const {
		mapState,
		mapActions
	} = createNamespacedHelpers('user')

	import CircleBtn from '@/components/circle-btn/circle-btn.vue'

	import rules from './config/rules.js'
	import { getCache } from '@/utils/auth.js'

	import {
		updateUserInfo
	} from '@/api/my.js'

	export default {
		components: {
			CircleBtn
		},
		data() {
			return {
				defaultAvatar: '../../static/avatar/mmexport02d1443711db4c6508cc18aca6ebf25f.png',
				curAvatar: null,
				formData: {
					ninkName: '',
					gender: 2,
					birthday: '',
					email: ''
				},
				radio: [{
						name: '男',
						value: 0,
						isChecked: false
					},
					{
						name: '女',
						value: 1,
						isChecked: false
					},
					{
						name: '未知',
						value: 2,
						isChecked: false
					},
				]
			};
		},
		computed: {
			...mapState({
				userData: state => state
			})
		},
		onReady() {
			this.$refs.form.setRules(rules)
		},
		onLoad() {
			// console.log(this.userData)
			this.setDefaultInfo()
		},
		methods: {
			...mapActions(['retriveUserInfo']),
			selectFile(e) {
				// console.log(e.tempFilePaths[0])
				this.curAvatar = e.tempFilePaths[0]
			},
			delFile() {
				this.curAvatar = this.userData.avatarUrl
			},
			setDefaultInfo() {
				this.curAvatar = this.userData.avatarUrl
				this.formData = {
					...this.userData
				}
				for (let item of this.radio) {
					if (item.value == this.userData.gender) {
						item.isChecked = true
						break;
					}
				}
			},
			dateChange(e) {
				// console.log(e)
			},
			radioChange(e) {
				// console.log(e.target.value)
				this.formData.gender = e.target.value
			},
			submit() {
				this.$refs.form.validate().then(res => {
					// console.log(res)
					// console.log(this.formData)
					updateUserInfo(this.formData).then(res => {
						console.log(res.data)
						if(res.data.errMsg) {
							return uni.showToast({
								icon: 'error',
								title: '该用户名已存在'
							})
						}
						if(this.curAvatar && this.curAvatar !== this.defaultAvatar
							&& this.curAvatar !== this.userData.avatarUrl) this.uploadAvatar()
						uni.showToast({
							icon: 'success',
							title: '修改资料成功',
							success: () => {
								this.retriveUserInfo()
							}
						})
					})
				})
			},
			uploadAvatar() {
				console.log(this.curAvatar)
				uni.uploadFile({
					url: `http://localhost:8888/upload/avatar/${getCache('user').id}`, //仅为示例，非真实的接口地址
					filePath: this.curAvatar,
					name: 'avatar',
					success: (uploadFileRes) => {
						console.log(uploadFileRes.data);
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.radio-group {
		margin-top: 12rpx;

		.text {
			margin-right: 20rpx;
		}
	}
</style>
