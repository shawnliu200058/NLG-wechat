<template>
	<view class="container">
		<template v-if="cartList.length">
			<list-item v-for="item in cartList" :key="item.id" :item="item"></list-item>
		</template>
		<u-empty v-else mode="car" icon="http://cdn.uviewui.com/uview/empty/car.png">
		</u-empty>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'

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
			...mapGetters(['cartList']),
			list() {
				return this.cartList
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">

</style>
