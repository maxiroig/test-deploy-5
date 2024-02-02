// This file is to handle the stripe events
export default defineNitroPlugin((nitroApp: any) => {
	const { on } = useHookable()
	on('stripe:checkout.session.completed', (payload: any) => {})

	on('stripe:customer.created', (payload: any) => {})

	on('stripe:customer.updated', (payload: any) => {})

	on('stripe:checkout.session.expired', (payload: any) => {})

	on('stripe:invoice.paid', (payload: any) => {})

	on('stripe:invoice.payment_failed', (payload: any) => {})

	on('stripe:customer.subscription.deleted', (payload: any) => {})

	on('stripe:customer.subscription.updated', (payload: any) => {})
})
