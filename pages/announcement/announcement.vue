<template>
	<view class="overall">
		<u-parse :content="content"></u-parse>
	</view>
</template>

<script>
	import {getAnnouncement} from '@/api/announcement.js'
	
	export default {
		data() {
			return {
				content: ''
			}
		},
		onLoad() {
			this.setContent()
		},
		methods: {
			setContent() {
				getAnnouncement().then(res => {
					// console.log(res.data)
					this.content = res.data.content
				})
			}
		}
	}
</script>

<style>

</style>
