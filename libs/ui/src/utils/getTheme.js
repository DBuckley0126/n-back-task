import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const getTheme = (mode = 'light') => {
	const colorTheme = createTheme({
		palette: {
			mode,
			accessibility: {
				main: '#0d15ff'
			},
			success: { main: 'rgb(141, 253, 146)' },
			error: { main: 'rgb(253, 141, 141)' }
		}
	})

	const unResponsiveTheme = createTheme(colorTheme, {
		typography: {
			h1: {
				fontFamily: 'Roboto, Arial, Sans-Serif',
				fontWeight: 500,
				fontSize: '5.5rem'
			},
			h2: {
				fontFamily: 'Work SansVariable, Work Sans, Arial, Sans-Serif',
				fontWeight: 800,
				fontSize: '6rem'
			},
			subtitle1: {
				fontFamily: 'Roboto, Arial, Sans-Serif',
				fontWeight: 500,
				fontSize: '1.5rem'
			},
			body1: {
				fontFamily: 'Roboto, Arial, Sans-Serif'
			},
			fontFamily: 'Roboto, Arial, Sans-Serif'
		},
		breakpoints: {
			values: {
				mobile: 0,
				tablet: 640,
				laptop: 1024,
				desktop: 1200
			}
		}
	})

	return responsiveFontSizes(unResponsiveTheme, {
		breakpoints: ['mobile', 'tablet', 'laptop', 'desktop'],
		factor: 1.2
	})
}

export default getTheme
