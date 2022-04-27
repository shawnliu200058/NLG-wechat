<template>
	<view>
		<view class="container">
			<u-subsection :list="list" :current="curNow" @change="sectionChange"></u-subsection>

			<template v-if="publishInfo.length">
				<publish-list-item v-if="curNow" v-for="good in publishInfo" :publishItem="good" :key="good.id"></publish-list-item>
				<review-list-item v-else v-for="good in publishInfo" :publishItem="good" :key="good.id"></review-list-item>
			</template>

			<u-empty v-else width="200" text-size="16" icon="http://cdn.uviewui.com/uview/empty/data.png">
			</u-empty>

		</view>
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

	import PublishListItem from './cpns/publishListItem.vue'
	import ReviewListItem from './cpns/reviewListItem.vue'

	export default {
		data() {
			return {
				list: ['待审核', '审核通过'],
				curNow: 0
			}
		},
		components: {
			PublishListItem,
			ReviewListItem
		},
		onLoad() {
			this.getPublishList()
			// console.log(this.publishInfo)
		},
		computed: {
			...mapGetters(['publishInfo'])
		},
		methods: {
			...mapActions(['getPublishList']),
			sectionChange(index) {
				this.curNow = index;
			}
		}
	}
</script>

<style>

</style>
