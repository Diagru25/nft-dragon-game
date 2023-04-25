/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {},
		screens: {
			sm: { max: '639px' },
			md: { min: '640px', max: '1200px' },
			lg: { min: '1200px' },
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},

		colors: {
			transparent: 'transparent',
			light: '#fff',
			secondary: '#07090d',
			primary: '#f32508',
			'primary-light': 'rgba(255, 152, 140, 0.2)',
			gray: '#e6e6e6',
		},

		boxShadow: {
			primary: '0 0 0 1px #f32508, 0 0 2rem 0 rgba(243, 37, 8, 0.1)',
			'primary-light': '0 0 0.5625rem 0 rgba(243, 37, 8, 0.17)',
		},
	},
	plugins: [],
}
