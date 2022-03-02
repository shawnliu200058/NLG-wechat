<template>
	<uni-icons :type="isSelect ? 'checkbox' : 'circle'" :size="size" :color="color"></uni-icons>
</template>

<script>
	export default {
		props: {
			isSelect: {
				type: Boolean,
				required: true
			},
			size: {
				type: Number,
				default: 26
			},
			color: {
				type: String,
				default: '#005500'
			}
		},
		beforeMount() {
			console.log(this.isSelect)
		}
	}
</script>

<style>
</style>