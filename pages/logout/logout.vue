<template>
	<view class="overall">
		<uni-card is-full="">
			<uni-list v-for="(item, index) in listItems" :key="index">
				<view>
					<uni-list-item :title="item.title" show-extra-icon
					:extraIcon="item.extraIcon" showArrow
					 link="navigateTo" :to="item.path"></uni-list-item>
				</view>
			</uni-list>
			
			<u-button type="primary" plain @click="logout"
				hairline text="退出登录"></u-button>
		</uni-card>
		
		
	</view>
</template>

<script>
	import { removeToken } from '@/utils/auth.js'
	
	export default {
		data() {
			return {
				listItems: [{
					title: '个人资料',
					extraIcon: {
						size: '20',
						type: 'person'
					}
				}, {
					title: '修改密码',
					extraIcon: {
						size: '20',
						type: 'locked-filled',
					},
					path: '/pages/changePwd/changePwd'
				}]
			}
		},
		methods: {
			logout() {
				removeToken()
				this.$Router.push({name: 'login'})
			}
		}
	}
</script>

<style>

</style>
