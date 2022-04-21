export default {
	nickName: {
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
	email: {
		rules: [
			// 校验 name 不能为空
			{
				format: 'email',
				errorMessage: '邮箱格式错误',
			}
		],
		validateTrigger: 'submit'
	}
}