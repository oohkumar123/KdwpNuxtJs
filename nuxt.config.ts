// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
    modules: ['@pinia/nuxt'],
    app: {
		head: {
			title: "KDWP Web Development",
			meta: [
				{ name: "description", content: "Bay Area Web Development Services" },
			],
			script: [
				{ hid: 'jquery', src: './assets/js/jquery.min.js', defer: true },
				{ hid: 'fontawesome', src: 'https://kit.fontawesome.com/2e8e6ec7d5.js', defer: true },
				{ hid: 'scripts', src: './assets/js/scripts.js', defer: true },
				{ hid: 'tagcloud', src: './assets/js/jquery.tagcloud.js', defer: true },
				{ hid: 'parallax', src: './assets/js/jquery.parallax-1.1.3.js', defer: true },
				{ hid: 'appear', src: './assets/js/jquery.appear.min.js', defer: true },
				{ hid: 'timer', src: './assets/js/jquery.timer.js', defer: true },
				{ hid: 'flexisel', src: './assets/js/jquery.flexisel.js', defer: true },
				{ hid: 'isotope', src: './assets/js/jquery.isotope.min.js', defer: true },
				{ hid: 'responsiveslides', src: './assets/js/jquery.responsiveslides.min.js', defer: true }
			],
			link: [
				{
					rel: "stylesheet",
					href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap",
				},
				{
					rel: "stylesheet",
					href: "./assets/js/jquery.tagcloud.css",
				},
			]
		},
	},
	vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./assets/scss/reset.scss";@import "./assets/scss/variables.scss";@import "./assets/scss/mixins.scss";@import "./assets/scss/styles.scss";'
                }
            },
        },
    }
});