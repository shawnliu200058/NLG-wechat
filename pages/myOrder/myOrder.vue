<template>
	<view>
		<uni-collapse>
			<uni-collapse-item title="折叠内容">
				<text>折叠内容</text>
				<uni-icons type="checkbox"></uni-icons>
			</uni-collapse-item>
			<uni-collapse-item title="禁用状态" disabled>
				<text>折叠内容</text>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onBackPress(e) {
			console.log(e)
			return true
		},
		methods: {

		}
	}
</script>

<style>

</style>
