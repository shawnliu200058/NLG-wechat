<template>
	<view>
		<view class="container">
			<template v-if="publishInfo.length">
				<publish-list-item v-for="good in publishInfo" 
					:publishItem="good" :key="good.id"></publish-list-item>
			</template>
				
				<u-empty v-else
					 width="200" text-size="16"
					icon="http://cdn.uviewui.com/uview/empty/data.png">
				</u-empty>
			
		</view>
	</view>
</template>

<script>
	import { createNamespacedHelpers, mapGetters  } from 'vuex'
	const { mapActions} = createNamespacedHelpers('publish')
	
	import PublishListItem from './cpns/publishListItem.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		components: {PublishListItem},
		onLoad() {
			this.getPublishList()
			// console.log(this.publishInfo)
		},
		computed: {
			...mapGetters(['publishInfo'])
		},
		methods: {
			...mapActions(['getPublishList'])
		}
	}
</script>

<style>

</style>
