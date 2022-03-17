export default {
	name: {
		// name 字段的校验规则
		rules: [
			// 校验 name 不能为空
			{
				required: true,
				errorMessage: '请输入用户名',
			},
			{
				minLength: 3,
				maxLength: 10,
				errorMessage: '用户名长度必须在 {minLength} 到 {maxLength} 个字符',
			}
		],
		validateTrigger: 'submit'
	},
	password: {
		// name 字段的校验规则
		rules: [
			// 校验 name 不能为空
			{
				required: true,
				errorMessage: '请填写密码',
			},
			{
				minLength: 6,
				maxLength: 15,
				errorMessage: '密码长度必须在 {minLength} 到 {maxLength} 个字符',
			}
		],
		validateTrigger: 'submit'
	},
}
