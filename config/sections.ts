
/*
* This file contains the configuration for each section of the landing page.
*
*/
export default {
	hero: {
		title: "Acme Company",
		subtitle: "Solutions for a Nonexistent World",
		content:
			"Welcome to Acme Company, where we specialize in solving problems that don't exist! With over a century of imaginary expertise, we're the leaders in addressing non-existent challenges with unparalleled dedication. Join us in the whimsical world of innovation where we create solutions for problems you didn't even know you didn't have!",
		media: {
			type: "video",
			attrs: {
				src: "/videos/hero-video.mp4",
				type: "video/mp4",
				autoplay: "autoplay",
				muted: "muted",
				controls: true,
				alt: "Hero Video",
			},
		},
		cta: {
		
			label: "Join Us Now!",
			icon: "ic:twotone-rocket-launch",
		},
	},

	story: {
		title: "Our Story",
		subtitle: "A Century of Imaginary Innovation",
		content: [
			"Acme Company was founded in 1920 by Wile E. Coyote, a visionary entrepreneur with a passion for solving problems that don't exist. Since then, we've been at the forefront of innovation, creating solutions for challenges that haven't even occurred yet.",
			"Our team of experts is committed to delivering the finest products and services, ensuring your success in a world that doesn't exist. Join us in our journey to redefine limits and transform the future!",
		],
		media: {
			type: "image", // 'video' | 'image' | 'iframe'
			attrs: {
				src: "/images/features-image.png",
				alt: "Acme Company Story Image",
				caption: "Acme Company Story Image Caption",
			},
		},
	},
	features: {
		title: "Fictitious Features",
		subtitle: "Revolutionary Solutions for Imaginary Problems",
		content:
			"At Acme Company, we take pride in offering groundbreaking features that address the most fictitious of challenges. Dive into our world of innovation, where we provide solutions you never knew you needed. From our Quantum Oscillation Engine to our Virtual Unicorn Wrangler, explore the endless possibilities of non-existent solutions!",
		media: {
			type: "image", // 'video' | 'image' | 'iframe'
			attrs: {
				// src: '/images/features-image.png',
				alt: "Acme Company Story Image",
				caption: "Acme Company Story Image Caption",
			},
		},
	},
	cta: {
		title: "Unlock Infinite Possibilities",
		subtitle: "Join the Acme Revolution Today!",
		content:
			"Why wait for tomorrow when the future is at your fingertips now? Dive into a world where innovation meets practicality. Click below to embark on a journey with Acme Company, where every step forward is a leap towards unparalleled success. Let's redefine limits together. Ready to transform your world?",
		cta: {
		
			label: "Begin Your Acme Adventure",
			icon: "ic:twotone-rocket-launch",
		},
	},
	testimonials: {
		title: "Voices of Satisfaction",
		subtitle: "Discover What Our Customers Have to Say About Us",
		content: ["Discover What Our Customers Have to Say About Us"],
		cta: {
			icon: "material-symbols:heart-plus",
		
			label: "Leave a Testimonial",
		},
	},
	affiliates: {
		title: "Affiliate Program",
		subtitle: "Join the Acme Affiliate Program and Earn up to 20%!",
		content:
			"Unlock a world of opportunities with the Acme Affiliate Program! Share the power of Acme with others and earn up to 1000% in commissions for every successful referral. Join us in shaping the future of project launches and get rewarded for helping others launch their dreams.",
		cta: {
		
			label: "Join Our Affiliate Program now",
			icon: "ph:hand-coins-duotone",
		},
	},
	pricing: {
		title: "This is an example pricing!",
		subtitle: "This is an example pricing !",
		content: [
			"Why pay an arm and a leg when you can get top-notch Acme magic for just a pinky toe's worth? Dive into our laughably affordable pricing plans, carefully crafted for everyone from penny pinchers to big spenders.",
			"Remember, it's not about the money, but the giggles you earn along the way!",
		],
	},
	faqs: {
		title: "Acme Queries Unraveled",
		subtitle: "Dive Deep into Acme's Most Common Inquiries",
		content:
			"Navigating the world of Acme's innovations can spark questions. Here, we've compiled answers to the most frequently asked queries from our community. From product details to account management, uncover the insights you seek.",
	},
}


