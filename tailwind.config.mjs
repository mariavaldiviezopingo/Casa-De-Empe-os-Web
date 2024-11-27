/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
			  customAzul1:'#0A274A',
			  customAzul2:'#185DB0',
			  customDorado:'#D9AA46',
			  customAzul3: {
			    DEFAULT: '#0A274A',
				50: 'rgba(10, 39, 74, 0.5)', // Para bg-opacity-50
				100: '#0A274A', // Para bg-opacity-100
			  },
			},
			flexGrow:{
			  Grow2:'2',
			  Grow3:'3'
			},
			fontSize:{
			  vwUno:'1vw',
			  vwDos:'2vw',
			  vwTres:'3vw',
			  vwCuatro:'4vw',
			  vwCinco:'5vw'
	  
			},
			screens:{
			  sm2: '480px'
			},
			fontSize:{
			  xs2:['0.5rem', { lineHeight: '0.75rem' }]
			},
	  
			gridTemplateColumns:{
			  autofit1:' repeat(auto-fit,minmax(250px,1fr))'
			}
		   
		  }
	},
	plugins: [],
}
