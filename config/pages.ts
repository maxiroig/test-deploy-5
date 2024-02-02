/*
* This file contains the page configuration for the application.
* Here you can set the sections that will be displayed on each page.
* This sections will be displayed in the order they are defined.
*/

export default {
	// The sections that will be displayed on the index page.
	index: {
		_sections: [
			{ id: 'header', component: 'PageHeader' },
			{ id: 'hero', component: 'SectionHero' },
			{ id: 'story', component: 'SectionContent' },
			{ id: 'features', component: 'SectionFeatures' },
			{ id: 'testimonials', component: 'SectionTestimonials' },
			{ id: 'cta', component: 'SectionCta' },
			{ id: 'pricing', component: 'SectionPricing' },
			{ id: 'faqs', component: 'SectionFaq' },
			{ id: 'footer', component: 'PageFooter' }
		]
	}
}
