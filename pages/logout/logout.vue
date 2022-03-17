<template>
	<view class="overall">
		<u-button type="primary" plain @click="logout"
			hairline text="退出登录"></u-button>
	</view>
</template>

<script>
	import { removeToken } from '@/utils/auth.js'
	
	export default {
		data() {
			return {
				
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
