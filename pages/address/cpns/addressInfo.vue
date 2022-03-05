<template>
	<view class="container">
		<uni-card>
			<three-column>
				<template #column1>
					<cart-checkbox :isSelect="true"></cart-checkbox>
				</template>
				<template #column2>
					<view class="left-align">
						<text>123</text>
					</view>
					<view class="">
						<text>asdsa </text>
						<text>123</text>
					</view>
				</template>
				<template #column3>
					<view class="right-align">
						<uni-icons type="compose"></uni-icons>
					</view>
				</template>
			</three-column>
		</uni-card>
	</view>
</template>

<script>
	import CartCheckbox from '@/components/checkbox/cartCheckbox.vue'
	import ThreeColumn from '@/layout/three-column/three-column.vue'
	
	export default {
		components: {
			CartCheckbox,
			ThreeColumn
		}
	}
</script>

<style scoped lang="scss">
</style>
