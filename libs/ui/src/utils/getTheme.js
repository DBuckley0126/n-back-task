import { createTheme } from '@mui/material/styles'

const getTheme = (mode = 'light') => {
	const theme = createTheme({
		palette: {
			mode,
			accessibility: {
				main: '#0d15ff'
			},
			primary: {
				main: 'rgba(0, 0, 0, 0.87)'
			},

			success: { main: 'rgb(141, 253, 146)' },
			error: { main: 'rgb(253, 141, 141)' }
		},

		breakpoints: {
			values: {
				mobile: 0,
				tablet: 640,
				desktop: 1200
			}
		}
	})

	return createTheme(theme, {
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						borderWidth: '3px',
						color: theme.palette.primary.main,
						borderColor: theme.palette.primary.main,
						'&:hover': {
							borderWidth: '3px'
						}
					}
				}
			}
		},
		typography: {
			h1: {
				fontFamily: 'Roboto, Arial, Sans-Serif',
				fontWeight: 500,
				color: theme.palette.text.primary,

				fontSize: '3.8rem',
				[theme.breakpoints.up('tablet')]: {
					fontSize: '5.5rem'
				},
				[theme.breakpoints.up('desktop')]: {
					fontSize: '6rem'
				}
			},
			h2: {
				fontFamily: 'Work SansVariable, Work Sans, Arial, Sans-Serif',
				fontWeight: 800,
				color: theme.palette.text.primary,
				fontSize: '5rem',
				[theme.breakpoints.up('tablet')]: {
					fontSize: '5.5rem'
				},
				[theme.breakpoints.up('desktop')]: {
					fontSize: '6rem'
				}
			},
			h3: {
				fontFamily: 'Roboto, Arial, Sans-Serif',
				fontWeight: 500,
				color: theme.palette.text.primary,
				fontSize: '3rem',
				[theme.breakpoints.up('tablet')]: {
					fontSize: '3.5rem'
				},
				[theme.breakpoints.up('desktop')]: {
					fontSize: '4rem'
				}
			},
			h4: {
				fontFamily: 'Roboto, Arial, Sans-Serif',
				fontWeight: 500,
				color: theme.palette.text.primary,
				fontSize: '2.2rem',
				[theme.breakpoints.up('tablet')]: {
					fontSize: '2.6rem'
				},
				[theme.breakpoints.up('desktop')]: {
					fontSize: '3rem'
				}
			},
			body1: {
				color: theme.palette.text.primary,
				fontFamily: 'Roboto, Arial, Sans-Serif'
			},
			helperText: {
				color: theme.palette.error.main,
				fontFamily: 'Roboto, Arial, Sans-Serif'
			},
			fontFamily: 'Roboto, Arial, Sans-Serif'
		}
	})
}

export default getTheme
