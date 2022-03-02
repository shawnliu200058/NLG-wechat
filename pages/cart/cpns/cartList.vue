<template>
	<view class="container">
		<list-item v-for="item in cartList" :key="item.id" :item="item"></list-item>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	
	import ListItem from './listItem.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			ListItem
		},
		computed: {
			...mapGetters(['cartList'])
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	
</style>
