import { StrictMode } from 'react'
import { getTheme } from '@n-back-task/ui'
import { ThemeProvider } from '@material-ui/core/styles'
import * as ReactDOM from 'react-dom'
import App from './app/App'
import RootLayout from './app/layouts/RootLayout'

ReactDOM.render(
	<StrictMode>
		<ThemeProvider theme={getTheme()}>
			<RootLayout>
				<App />
			</RootLayout>
		</ThemeProvider>
	</StrictMode>,
	document.getElementById('root')
)
