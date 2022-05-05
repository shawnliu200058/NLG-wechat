<template>
	<view class="page">
		<!-- 菜单 -->
		<view class="menu">
			<view class="leftScroll">
				<scroll-view scroll-y :scroll-top="0" scroll-with-animation show-scrollbar style="height: 100vh;">
					<view :class="isActive==index?'itemLeftTwo':'itemLeft'" v-for="(item,index) in categoryList"
						:key="index" @click="chooseClick(index)">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			
			<view class="rightScroll" v-if="categoryGood.length">
				<view class="bigConScro" v-for="(item,index) in categoryGood" :key="index">
					<template v-if="item.status">
						<view class="good-content" @click="goGoodDetail(item.id)">
							<image :src="item.displayPicUrl" mode="aspectFill"></image>
							<view class="good-item">
								<view class="common-padding">{{item.name}}</view>
								<view class="stock common-padding">库存：{{item.stock}}</view>
								<uni-title :title="`￥${item.price.toFixed(2)}/${item.unit}`" type="h4" color="red"></uni-title>
								<uni-icons type="cart" size="24" color="red"></uni-icons>
							</view>
						</view>
					</template>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	
	export default {
		props: {
			categoryList: {
				type: Array,
				require: true
			}
		},
		data() {
			return {
				isActive: 0,
				categoryGood: []
			}
		},
		computed: {
			...mapGetters(['selectedIndex'])
		},
		// 监听首页点击分类图片传来的 index
		watch: {
			selectedIndex: {
				handler(newval, oldval) {
					// console.log(newVal, oldval)
					this.chooseClick(newval)
				},
				immediate: true
			}
		},
		beforeMount() {
			// console.log(this.categoryList)
		},
		methods: {
			chooseClick(index) {
				this.isActive = index;
				// this.categoryGood.length = 0
				// this.categoryList[index].goods.forEach(item => {
				// 	this.categoryGood.push(item)
				// })
				this.categoryGood = this.categoryList[index].goods
				console.log(this.categoryGood)
			},
			goGoodDetail(id) {
				this.$Router.push({
					name: 'goodDetail',
					params: {
						goodId: id
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		height: 100%;
		
		.menu {
			margin-top: 20rpx;
			display: flex;
			height: 100%;

			.leftScroll {
				font-size: 28rpx;
				font-weight: 400;
				background-color: #F3F3F3;
				
				.itemLeft {
					width: 186rpx;
					height: 90rpx;
					line-height: 80rpx;
					padding-left: 28rpx;
					color: #333333;
					background-color: #F3F3F3;
				}

				.itemLeftTwo {
					width: 178rpx;
					height: 80rpx;
					line-height: 80rpx;
					padding-left: 28rpx;
					background-color: #FFFFFF;
					color: #000000;
					border-left: 4px solid #0ef878;
				}
			}

			.rightScroll {
				background-color: #FFFFFF;
				width: 502rpx;
				height: 1076rpx;

				.bigConScro {
					padding: 0 0 0 30rpx;

					.good-content {
						display: grid;
						grid-template-columns: 4fr 6fr;
						grid-column-gap: 20rpx;
						padding-top: 20rpx;
						border-bottom: 2rpx solid $uni-bg-color-grey;
						
						.good-item {
							position: relative;
							
							.uni-icons {
								position: absolute;
								right: 10rpx;
								bottom: 2rpx;
							}
						}
						
						image {
							width: 200rpx;
							height: 200rpx;
						}
						
						.common-padding {
							padding-bottom: 10rpx;
						}
						
						.stock {
							font-size: 12px;
							color: $uni-text-color-grey;
						}
						
					}
				}
			}
		}
	}
</style>
