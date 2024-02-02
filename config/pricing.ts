import { getPriceId } from "../utils/checkoutLinks"

export default {
	frequencies: [
		// { value: 'once', label: 'Once', priceSuffix: '/once' },
		{ value: "monthly", label: "Monthly", priceSuffix: "/month" },
		{ value: "yearly", label: "Yearly", priceSuffix: "/year" },
	],
	defaultFrequency: "monthly",
	showOriginalPrice: true,
	specialPrice: {
		title: "Looking for a custom deal?",
		content: [
			"We offer Enterprise license for companies and teams, an educational deals. \n" +
				"Please contact us for more details.",
		],
		cta: {
			label: "Contact me",
			icon: "ic:baseline-arrow-forward",
			href: "mailto:boudydegeer@mosaiqo.com",
		},
	},
	prices: {
		"barely-broke": {
			once: { id: getPriceId("default"), coupon: "EARLYBIRD" },
			monthly: { id: getPriceId("default"), coupon: "EARLYBIRD" },
			yearly: { id: getPriceId("default"), coupon: "EARLYBIRD" },
		},
		"mid-lifer": {
			once: { id: getPriceId("default"), coupon: "LAUNCH" },
			monthly: { id: getPriceId("default"), coupon: "LAUNCH" },
			yearly: { id: getPriceId("default"), coupon: "LAUNCH" },
		},
		"all-in": {
			once: { id: getPriceId("default"), coupon: "LAUNCH" },
			monthly: { id: getPriceId("default"), coupon: "LAUNCH" },
			yearly: { id: getPriceId("default"), coupon: "LAUNCH" },
		},
	},
	plans: [
		{
			name: "Barely Broke",
			id: "barely-broke",
			mostPopular: false,
			price: {
				once: "$49",
				monthly: "$9",
				yearly: "$99",
			},
			original: {
				once: "$149",
				monthly: "$49",
				yearly: "$199",
			},
			button: {
				label: "Hop on the Savings Train!",
				icon: "ic:twotone-train",
			},
			description:
				"Perfect for those who count pennies but dream big! Embark on the Acme journey without emptying your piggy bank.",
			cta: {
				title: "Why Pay More When You Can Pay... Less?",
				hint: "Every cent counts, especially the ones you save!",
			},
			features: [
				{
					icon: "🛒",
					title: "Budget-friendly, Not Boring",
					description: "Get all the essential Acme features without the frills.",
				},
				{
					icon: "🎉",
					title: "Surprise Goodies Every Month",
					description: "Because we believe in sprinkling a little joy!",
				},
				{
					icon: "📦",
					title: "Basic Support Package",
					description: "Got questions? We might have answers!",
				},
			],
		},
		{
			name: "Mid-Lifer's Delight",
			id: "mid-lifer",
			mostPopular: true,
			price: {
				once: "$99",
				monthly: "$49",
				yearly: "$399",
			},
			original: {
				once: "$149",
				monthly: "$99",
				yearly: "$199",
			},
			button: {
				label: "Middle of the Road, Top of the Game!",
				icon: "ph:mountains-duotone",
			},
			description:
				"For those who've been around the block and know the value of a good deal. Experience more with Acme's middle-tier magic.",
			cta: {
				title: "Why Settle When You Can Soar?",
				hint: "Elevate your Acme experience without the vertigo.",
			},
			features: [
				{
					icon: "🚀",
					title: "Premium Features Galore",
					description: "All the bells, whistles, and maybe a kazoo or two.",
				},
				{
					icon: "🎩",
					title: "Priority Support",
					description: "Because you deserve the royal treatment.",
				},
				{
					icon: "🥳",
					title: "Exclusive Access to New Releases",
					description: "Be the first to try, test, and toast to our latest innovations!",
				},
			],
		},
		{
			name: "All-In Extravaganza",
			id: "all-in",
			mostPopular: false,
			price: {
				once: "$199",
				monthly: "$29",
				yearly: "$199",
			},
			original: {
				once: "$149",
				monthly: "$49",
				yearly: "$199",
			},
			button: {
				label: "Go Big or Go Home!",
				icon: "ph:crown-simple-duotone",
			},
			description:
				"For the ones who believe in sparing no expense for the best! Dive deep into the Acme ocean and discover treasures untold.",
			cta: {
				title: "All of Acme, None of the Compromises",
				hint: "Dive into limitless possibilities with Acme's ultimate offering.",
			},
			features: [
				{
					icon: "💼",
					title: "All Access Pass to Every Feature",
					description: "If Acme made it, you have it!",
				},
				{
					icon: "🛎️",
					title: "24/7 Premium Support",
					description: "Day or night, rain or shine, we're here for you!",
				},
				{
					icon: "🍾",
					title: "VIP Invites to Acme Events",
					description: "Rub shoulders with the who's who of the Acme world!",
				},
			],
		},
	],
}
