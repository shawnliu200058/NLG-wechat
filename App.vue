<script>
	export default {
		onLaunch: function() {

		},
		onShow: function() {

		},
		onHide: function() {

		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	.overall {
		padding: 20rpx;
		/* background-color: #f2f2f2; */
	}
	
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.vertical-center {
		display: flex;
		align-items: center;
	}
	
	// 向左对齐
	.left-align {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	
	// 向右对齐
	.right-align {
		margin-left: auto;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
	
	// 按列排序
	.column-sort {
		display: flex;
		flex-direction: column;
	}
</style>
