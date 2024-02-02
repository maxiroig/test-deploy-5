const priceIds: Record<string, Record<string, string>> = {
	development: {
		'early-bird': '',
		'starter': '',
		'premium': '',
		'default': '',
	},
	staging: {
		'early-bird': '',
		'starter': '',
		'premium': '',
		'default': '',
	},
	production: {
		'early-bird': '',
		'starter': '',
		'premium': '',
		'default': '',
	},
}

const getEnv = () => {
	let env = process.env.NODE_ENV || process.env.VERCEL_ENV || 'development'
	// @ts-ignore
	if (env === 'prerender') { env = 'production' }
	return env
}

export const getCheckoutLink = (planId = 'default', coupon? : string) => {
	const env = getEnv()
	const priceId = priceIds[env][planId] || priceIds[env]['default']
	let link = `/checkout?price_id=${priceId}`
	if(coupon) link += `&coupon_id=${coupon}`
	return link
}

export const getPriceId = (planId = 'default') => {
	const env = getEnv()

	return priceIds[env][planId] || priceIds[env]['default']
}
