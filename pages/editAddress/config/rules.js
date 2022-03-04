export default {
	name: {
		rules: [
			// 校验 name 不能为空
			{
				required: true,
				errorMessage: '请填写姓名',
			}
		],
		validateTrigger: 'submit'
	},
	phone: {
		rules: [
			// 校验 name 不能为空
			{
				required: true,
				errorMessage: '请填写手机号',
			},
			{
				validateFunction:function(rule,value,data,callback){
					console.log(value)
					if(RegExp(/^1[34578]\d{9}$/).test(value)) return true
					else callback('手机格式错误')
			  }
			}
		],
		validateTrigger: 'submit'
	},
	address: {
		rules: [
			// 校验 name 不能为空
			{
				required: true,
				errorMessage: '请填写收货人地址',
			}
		],
		validateTrigger: 'submit'
	},
	house: {
		rules: [
			// 校验 name 不能为空
			{
				required: true,
				errorMessage: '请填写楼栋门牌',
			}
		],
		validateTrigger: 'submit'
	}
}