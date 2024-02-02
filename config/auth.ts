export default {
	options: {
		// oauth: { value: 'oauth', label: 'Or Continue With' },
		credentials: {
			value: "credentials",
			label: "Credenciales",
			icon: "ph:lock-key-duotone",
		},
		email: { value: "email", label: "Magic Link ", icon: "ph:magic-wand-duotone" },
	},

	social: false,

	oauth: {
		providers: () => [],
	},

	providers: () => {
		return {}
	},
}
