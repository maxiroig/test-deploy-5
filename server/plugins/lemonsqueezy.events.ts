// This file is to handle the lemonsqueezy events
export default defineNitroPlugin((nitroApp: any) => {
	const { on } = useHookable()
	on('lemonsqueezy:order_created', (payload: any) => {})
	on('lemonsqueezy:subscription_created', (payload: any) => {})
})
