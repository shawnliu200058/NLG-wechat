export default {
	// 对name字段进行必填验证
	name: {
		// name 字段的校验规则
		rules: [
			// 校验 name 不能为空
			{
				required: true,
				errorMessage: '请填写商品名称',
			}
		],
		validateTrigger: 'submit'
	},
	categoryId: {
		rules: [
			{
				required: true,
				errorMessage: '请选择商品类别'
			}
		],
		validateTrigger: 'submit'
	},
	detail: {
		rules: [
			{
				maxLength: 50,
				errorMessage: '商品详情最大字数不得超过 50'
			}
		]
	},
	price: {
		rules: [
			{
				required: true,
				errorMessage: '请输入商品价格'  
			},
			{
				format: 'number',
				errorMessage: '商品价格必须为数字'
			},
			{
				validateFunction:function(rule,value,data,callback){
					console.log(value)
					if (value < 1) {
						callback('商品价格必须大于 1')
				  }
				return true
			  }
			}
		],
		validateTrigger: 'submit'
	},
	unit: {
		rules: [
			{
				required: true,
				errorMessage: '请输入计量单位',
			}
		],
		validateTrigger: 'submit'
	},
	specification: {
		rules: [
			{
				required: true,
				errorMessage: '请输入规格',
			}
		],
		validateTrigger: 'submit'
	},
	address: {
		rules: [
			{
				required: true,
				errorMessage: '请输入发货地址',
			}
		],
		validateTrigger: 'submit'
	},
	imgCount: {
		rules: [
			{
				validateFunction:function(rule,value,data,callback){
					if (value < 1) {
							callback('请至少选择一张图片')
				  }
				return true
			  }
			}
		],
		validateTrigger: 'submit'
	}
}
