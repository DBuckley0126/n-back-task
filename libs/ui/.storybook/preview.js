/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
import { ThemeProvider } from '@material-ui/core/styles'
import { Box } from '@mui/material'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-storybook/react'

import getTheme from '../src/utils/getTheme'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/work-sans/variable.css'
import '@fontsource/work-sans/800.css'
import '@fontsource/work-sans/500.css'

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'light',
		toolbar: {
			icon: 'circlehollow',
			items: ['light', 'dark'],
			showName: true
		}
	}
}

export const parameters = {
	layout: 'fullscreen'
}

export const decorators = [
	(Story, { globals, viewMode }) => {
		const theme = getTheme(globals.theme)

		return (
			<ThemeProvider theme={theme}>
				<Box
					sx={{
						backgroundColor: theme.palette.background.paper,
						width: '100%',
						height: viewMode === 'docs' ? '100%' : '100vh',
						p: '30px'
					}}
				>
					<Story />
				</Box>
			</ThemeProvider>
		)
	}
]
