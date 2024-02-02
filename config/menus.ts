export default {
	header: {
		changelog: false,
		portal: true,

		navigation: {
			links: [
				{ name: "Features", href: "/#features" },
				{ name: "Pricing", href: "/#pricing" },
				{ name: "FAQ's", href: "/#faqs" },
			],
		},
	},
	footer: {
		promolink: {
			affiliateId: "",
		},
		navigation: {
			links: [
				{ name: "Top", href: "/#top" },
				{ name: "Features", href: "/#features" },
				{ name: "CTA", href: "/#cta" },
				{ name: "Testimonials", href: "/#testimonials" },
				{ name: "Pricing", href: "/#pricing" },
				{ name: "FAQ's", href: "/#faqs" },
				{
					name: "Affiliates",
					href: "/",
				},
			],
			legal: [
				{ name: "Privacy Policy", href: "/" },
				{ name: "Terms & Conditions", href: "/" },
			],
			social: [
				{
					name: "Twitter",
					href: "",
					icon: "simple-icons:x",
				},
				{
					name: "Github",
					href: "",
					icon: "simple-icons:github",
				},
			],
		},
	},

	user: {
		navigation: {
			links: [
				{ name: "Dashboard", href: "/dashboard" },
				{ name: "Your Profile", href: "/dashboard/profile" },
				{ name: "Settings", href: "/dashboard/settings" },
			],
		},
	},

	dashboard: {
		settings: {
			name: "Settings",
			href: "/dashboard/settings",
			icon: "ph:gear-fine-duotone",
		},
		navigation: {
			links: [{ name: "Dashboard", href: "/dashboard" }],
		},
	},

	auth: {
		logout: { name: "Logout" },
		login: { name: "Login", href: "/auth/login" },
		register: { name: "Register", href: '/auth/register' },
	},
}
