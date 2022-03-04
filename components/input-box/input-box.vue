<template>
	<view class="container">
		<uni-card :isFull="isFull">
			<view class="input">
				<text>{{leftText}}</text>
				<slot>
					<uni-easyinput :placeholder="placeholder" :suffixIcon="suffixIcon" v-model="inputValue"></uni-easyinput>
				</slot>
			</view>
		</uni-card>
	</view>
</template>

<script>
	export default {
		props: {
			isFull: {
				type: Boolean,
				default: true
			},
			leftText: {
				type: String,
				required: true
			},
			placeholder: {
				type: String,
				default: ''
			},
			suffixIcon: {
				type: String,
				default: ''
			},
			inputValue: {
				default: null
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		.input {
			display: grid;
			grid-template-columns: 2fr 8fr;
			// grid-column-gap: 10rpx;
			align-items: center;
		}
	}
</style>
