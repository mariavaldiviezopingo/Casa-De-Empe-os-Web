/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
			  customAzul1:'#0A274A',
			  customAzul2:'#185DB0',
			  customDorado:'#D9AA46',
			  customRojo:'#AC0002'
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
