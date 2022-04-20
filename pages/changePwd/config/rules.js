export default {
	originalPwd: {
		rules: [
			// 校验 name 不能为空
			{
				required: true,
				errorMessage: '请输入原密码',
			},
			{
				minLength: 6,
				maxLength: 15,
				errorMessage: '密码长度必须在 {minLength} 到 {maxLength} 个字符',
			}
		],
		validateTrigger: 'submit'
	},
	newPwd: {
		rules: [
			// 校验 name 不能为空
			{
				required: true,
				errorMessage: '请输入新密码',
			},
			{
				minLength: 6,
				maxLength: 15,
				errorMessage: '密码长度必须在 {minLength} 到 {maxLength} 个字符',
			}
		],
		validateTrigger: 'submit'
	},
	confirmPwd: {
		rules: [
			// 校验 name 不能为空
			{
				required: true,
				errorMessage: '请输入确认密码',
			},
			{
				minLength: 6,
				maxLength: 15,
				errorMessage: '密码长度必须在 {minLength} 到 {maxLength} 个字符',
			},
			{
				validateFunction:function(rule,value,data,callback){
					// console.log(value, data)
					if (value !== data.newPwd) {
						callback('确认密码与新密码必须一致')
				  }
				return true
			  }
			}
		],
		validateTrigger: 'submit'
	}
}