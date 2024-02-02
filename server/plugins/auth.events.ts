// This file is to handle the app auth events
export default defineNitroPlugin((nitroApp: any) => {
	const { on } = useHookable()
	on('auth:user:created', async (payload: any) => {
		// This here will be triggered when a user is created
	})
	on('auth:account:linked', async (payload: any) => {
		// This here will be triggered when an account is linked to a user
	})
})
