console.log("ENV:",process.env)
console.log("NODE_ENV:",process.env.NODE_ENV)

// const ENV = 'dev'

/**
 * 环境变量，测试环境: dev 正式环境: prod
 * 上传正式包前请先修改环境变量值
 */
const ENV_CONFIG = {
	VUE_APP_ENV: 'dev',
	IS_OPEN_MOCK: true
}


/**
 * 小程序相关配置
 * @param {string} base_url 接口前缀
 * @param {string} web_domain 外链域名
 */
const MINI_CONFIG = {
	dev: {
		base_url: '', // 测试服接口前缀
		web_domain: '' // 测试
	},
	prod: {
		base_url: '', // 生产环境
		web_domain: '' // 正式
	}
}

const  config = {
	// env: ENV,
	appId: 'wxa06ee55b90059bcf',
	...ENV_CONFIG,
	...MINI_CONFIG[ENV_CONFIG['VUE_APP_ENV']]
}

console.log("config_111:",config)

export default config 