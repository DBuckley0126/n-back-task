import { StrictMode } from 'react'
import { getTheme } from '@n-back-task/ui'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import * as ReactDOM from 'react-dom'
import App from './app/App'
import RootLayout from './app/layouts/RootLayout'
import store from './store'

ReactDOM.render(
	<Provider store={store}>
		<StrictMode>
			<ThemeProvider theme={getTheme()}>
				<RootLayout>
					<App />
				</RootLayout>
			</ThemeProvider>
		</StrictMode>
	</Provider>,
	document.getElementById('root')
)
