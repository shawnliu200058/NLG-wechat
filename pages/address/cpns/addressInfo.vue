<template>
	<view class="container">
		<template v-if="info.length">
			<uni-card v-for="item in info" :key="item.id">
				<three-column :gridPartition="[1, 8, 1]">
					<template #column1>
						<uni-icons v-if="item.isDefault" type="home-filled"></uni-icons>
					</template>
					<template #column2>
						<view @click="chooseAddress(item.id)">
							<view class="left-align">
								<text>{{item.realName}} {{item.phone}}</text>
							</view>
							<view>
								<text>{{item.address}} {{item.house}}</text>
							</view>
						</view>
					</template>
					<template #column3>
						<view class="right-align">
							<uni-icons type="compose" @click="goToPage(0, item.id)"></uni-icons>
						</view>
					</template>
				</three-column>
			</uni-card>
		</template>
		
		<u-empty v-else
			mode="address" width="200" text-size="16"
			icon="http://cdn.uviewui.com/uview/empty/address.png">
		</u-empty>
		
		<view class="center btn">
			<circle-btn text="新增地址" @click.native="goToPage(1)"></circle-btn>
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
	
	import CartCheckbox from '@/components/checkbox/cartCheckbox.vue'
	import ThreeColumn from '@/layout/three-column/three-column.vue'
	
	export default {
		props: {
			entrance: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			}
		},
		components: {
			CartCheckbox,
			ThreeColumn
		},
		computed: {
			...mapGetters(['addressInfo']),
			info() {
				// 默认地址放在第一位
				for(let i in this.addressInfo) {
					if(this.addressInfo[i].isDefault && i != 0) {
						let temp = this.addressInfo[i]
						this.addressInfo[i] = this.addressInfo[0]
						this.addressInfo[0] = temp
						break
					}
				}
				return this.addressInfo
			}
		},
		beforeMount() {
			// this.getAddress()
			// console.log(this.$Route.query)
		},
		methods: {
			...mapActions(['getAddress', 'selectAddress']),
			chooseAddress(addressId) {
				// 如果不是从我的页面进入收货地址页面
				if(this.entrance != 'my') {
					this.selectAddress(addressId)
					this.$Router.back(1)
				}
			},
			goToPage(type, addressId) {
				this.$Router.push({
					path: '/pages/editAddress/editAddress',
					query: {
						type,
						addressId
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		.btn {
			width: 100%;
			position: fixed;
			bottom: 30rpx;
		}
	}
</style>
