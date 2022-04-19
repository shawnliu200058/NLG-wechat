<template>
	<view class="overall">
		<uni-forms ref="form" :modelValue="formData" label-position="top" :labelWidth="150">
			<uni-forms-item required label="名称" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入商品名称" />
			</uni-forms-item>
			<uni-forms-item required name="categoryId" label="类别">
				<uni-data-picker :localdata="categoryData" v-model="formData.categoryId" placeholder="请选择商品类别"
					popup-title="商品类别"></uni-data-picker>
			</uni-forms-item>
			<uni-forms-item label="商品详情" name="detail">
				<uni-easyinput type="textarea" v-model="formData.detail" placeholder="请输入商品详情" trim></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item required name="price" label="价格(单位:元)">
				<uni-easyinput type="number" v-model="formData.price" placeholder="请输入价格"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item required name="unit" label="计量单位">
				<uni-easyinput placeholder="请输入计量单位" v-model="formData.unit"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item required name="specification" label="规格">
				<uni-easyinput placeholder="请输入规格" v-model="formData.specification"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item required name="stock" label="库存">
				<uni-number-box :min="1" :max="99999" v-model="formData.stock"></uni-number-box>
			</uni-forms-item>
			<uni-forms-item required name="address" label="发货地址">
				<uni-easyinput placeholder="请输入发货地址" v-model="formData.address"></uni-easyinput>
				<view @click="getLocation" class="position">
					<uni-icons type="location-filled" size="22"></uni-icons>
					<text>定位</text>
				</view>
			</uni-forms-item>
			<uni-forms-item required name="imgCount" label="展示图">
				<u--image class="u-image" :showLoading="true" :src="showDisplayPicUrl" width="224rpx" height="224rpx">
				</u--image>
				<uni-file-picker fileMediatype="image" :limit="1" v-model="displayPicUrl" @select="selectDisplayPic"
					@delete="deleteFile" />
			</uni-forms-item>
			<uni-forms-item label="详情图">
				<view class="u-image-container">
					<template v-for="item in showDetailPic">
						<u--image class="u-image" :showLoading="true" :key="item.url" :src="item.url" width="224rpx"
							height="224rpx"></u--image>
					</template>
				</view>
				<uni-file-picker fileMediatype="image" mode="grid" v-model="detailPicUrl" @select="selectDetailPic" />
			</uni-forms-item>
			<text v-model="formData.imgCount"></text>
		</uni-forms>

		<button type="primary" size="mini" @click="submit">提交</button>
	</view>
</template>

<script>
	import {
		createNamespacedHelpers,
		mapGetters
	} from 'vuex'
	const {
		mapActions
	} = createNamespacedHelpers('publish')

	import rules from './config/rules.js'
	import {
		createGood
	} from '../../api/publish.js'
	import {
		showToastBack
	} from '@/hook/index.js'
	import QQMapWX from '@/common/qqmap-wx-jssdk.min.js'

	export default {
		data() {
			return {
				categoryData: [],
				rules: {},
				formData: {
					name: '',
					categoryId: '',
					detail: '',
					price: null,
					unit: '',
					stock: 1,
					specification: '',
					address: '',
					imageValue: [],
					imgCount: 0
				},
				showDisplayPicUrl: '',
				// showDisplayPic: [],
				showDetailPic: [],
				displayPicUrl: {},
				detailPicUrl: []
			}
		},
		computed: {
			...mapGetters(['categoryList', 'userId', 'publishInfo']),
		},
		onReady() {
			this.$refs.form.setRules(rules)
		},
		onLoad() {
			this.getCategory()
			console.log(this.$Route.query)
			this.setDefaultInfo()
		},
		methods: {
			...mapActions(['updatePublishInfo', 'getPublishList']),
			setDefaultInfo() {
				if (this.$Route.query.id) {
					const goodId = this.$Route.query.id
					for (const good of this.publishInfo) {
						if (good.id === goodId) {
							console.log(good)
							this.formData.name = good.name
							this.formData.categoryId = good.category_id
							this.formData.detail = good.detail
							this.formData.price = good.price
							this.formData.unit = good.unit
							this.formData.stock = good.stock
							this.formData.specification = good.specification
							this.formData.address = good.good_address
							// console.log(good.displayPicUrl)
							this.showDisplayPicUrl = good.displayPicUrl
							// this.showDisplayPic.push(good.displayPicUrl)
							// console.log(good.detailPic)
							good.detailPic.forEach(item => {
								this.showDetailPic.push({
									url: item.url
								})
							})
							// console.log(this.detailPicUrl)
							break
						}
					}
				}
			},
			getCategory() {
				this.categoryList.forEach(item => {
					const {
						name: text,
						id: value
					} = item
					this.categoryData.push({
						text,
						value
					})
				})
			},
			getLocation() {
				uni.chooseLocation({
					success: (res) => {
						console.log(res.address)
						this.formData.address = res.address
					}
				})
			},
			selectDisplayPic(e) {
				this.formData.imgCount++
				// console.log('选择成功', e.tempFilePaths)
				// this.displayPicUrl = {
				// 	path: e.tempFilePaths[0]
				// }
				this.displayPicUrl = {
					url: e.tempFilePaths[0]
				}
				// console.log(this.displayPicUrl.url)
			},
			selectDetailPic(e) {
				// console.log(e.tempFilePaths[0])
				this.detailPicUrl.push({
					url: e.tempFilePaths[0]
				})
				console.log(this.detailPicUrl)
			},
			submit(form) {
				if (this.$Route.query.id) return this.updatePublish()

				let that = this

				uni.showModal({
					title: '提示',
					content: '是否发布商品信息',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							that.$refs.form.validate().then(res => {
								// console.log('表单数据信息：', res);
								that.formData.userId = that.userId
								createGood(that.formData).then(res => {
									console.log(res.data[0].insertId)
									const goodId = res.data[0].insertId

									that.uploadPic(goodId)

									uni.showToast({
										title: '提交成功'
									})
									that.$Router.push({
										name: 'index'
									})
								})

							}).catch(err => {
								console.log('表单错误信息：', err);
							})

						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			updatePublish() {
				// console.log(this.formData)
				const goodId = this.$Route.query.id
				const goodForm = {
					form: this.formData,
					goodId
				}
				// console.log(goodForm)
				this.updatePublishInfo(goodForm).then(res => {
					this.uploadPic(goodId)
				})
			},
			uploadPic(goodId) {
				// console.log(this.displayPicUrl.url)
				// console.log(this.detailPicUrl)
				let that = this
				// 上传商品展示图
				if (this.displayPicUrl.url) {
					console.log(this.detailPicUrl.length)
					uni.uploadFile({
						url: `http://localhost:8888/upload/displayPic/${goodId}?isDelDetailPic=${this.detailPicUrl.length}`, //仅为示例，非真实的接口地址
						filePath: this.displayPicUrl.url,
						name: 'displayPic',
						// formData: {
						// 	isDelDetailPic: this.detailPicUrl.length
						// },
						success: (uploadFileRes) => {
							// console.log(uploadFileRes.data);

							// 不更新详情图的情况
							if (!this.detailPicUrl.length) {
								this.getPublishList().then(res => {
									showToastBack(uni, '保存成功', that, 200)
								})
								// this.$Router.replaceAll('/pages/myPublish/myPublish')
							}

							// 上传商品详情图
							// console.log(this.detailPicUrl.length)
							else {
								this.detailPicUrl.forEach(item => {
									// console.log(item.path)
									uni.uploadFile({
										url: `http://localhost:8888/upload/detailPic/${goodId}`, //仅为示例，非真实的接口地址
										filePath: item.path,
										name: 'detailPic',
										success: (uploadFileRes) => {
											// console.log(uploadFileRes.data);
											this.getPublishList().then(res => {
												showToastBack(uni, '保存成功', that,
													200)
												// uni.redirectTo({
												// 	name: 'myPublish'
												// })
											})
										}
									});
								})
							}
						}
					});
				} else if (this.detailPicUrl.length) { // 只更新详情图
					this.detailPicUrl.forEach(item => {
						console.log(item.path)
						uni.uploadFile({
							url: `http://localhost:8888/upload/detailPic/${goodId}`, //仅为示例，非真实的接口地址
							filePath: item.path,
							name: 'detailPic',
							success: (uploadFileRes) => {
								this.getPublishList().then(res => {
									showToastBack(uni, '保存成功', that, 200)
								})
							}
						});
					})
				} else { // 更新除图片以外的信息
					this.getPublishList().then(res => {
						showToastBack(uni, '保存成功', that, 200)
					})
				}
			},
			deleteFile(e) {
				// console.log(e)
				this.formData.imgCount--
			},
			// getNowAddressInfo(curLoc) {
			// 	const qqMapSdk = new QQMapWX({
			// 		key: 'MS6BZ-MCUWX-EO346-7R6FM-SYV37-CUB5O',
			// 	})
			// 	qqMapSdk.reverseGeocoder({
			// 		location: {
			// 			longitude: curLoc.longitude,
			// 			latitude: curLoc.latitude
			// 		},
			// 		success: res => {
			// 			console.log(res.result.address)
			// 		}
			// 	})
			// }
		}
	}
</script>

<style scoped lang="scss">
	.position {
		display: flex;
		align-items: center;
		margin-top: 10rpx;

		.uni-icons {
			margin-right: 8rpx;
		}
	}

	.u-image-container {
		display: flex;
	}

	.u-image {
		padding: 0 20rpx 20rpx 0;
	}
</style>
