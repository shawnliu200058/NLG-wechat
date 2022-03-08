<template>
		<view class="container" :style="styleVars">
			<view class="column1">
				<slot name="column1"></slot>
			</view>
			<view class="column2">
				<slot name="column2"></slot>
			</view>
			<view class="column3">
				<slot name="column3"></slot>
			</view>
		</view>
</template>

<script>
	export default {
		props: {
			gridPartition: {
				type: Array,
				default: () => {
					return [1, 3, 6]
				}
			}
		},
		data() {
			return {

			}
		},
		computed: {
			styleVars() {
				let str = ''
				this.gridPartition.forEach(item => {
					str += `${item}fr `
				})
				return {
					'--division': str
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		display: grid;
		grid-template-columns: var(--division);
		grid-column-gap: 20rpx;
		align-items: center;
		width: 600rpx;
	}
</style>
