/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../src/utils/theme'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/work-sans/variable.css'
import '@fontsource/work-sans/800.css'
import '@fontsource/work-sans/500.css'

export const decorators = [
	(Story, { parameters }) => (
		<ThemeProvider theme={theme}>
			<span>{parameters.description}</span>
			<Story />
		</ThemeProvider>
	)
]
