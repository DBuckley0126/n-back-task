import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { Global } from '@emotion/react'
import { useTheme } from '@material-ui/core/styles'

const RootLayout = ({ children }) => {
	const theme = useTheme()

	return (
		<Box
			width="100vw"
			height="100vh"
			position="relative"
			sx={{ backgroundColor: theme.palette.background.paper }}
		>
			<Global
				styles={{
					body: {
						margin: '0px'
					}
				}}
			/>
			{children}
		</Box>
	)
}

RootLayout.defaultProps = {
	children: []
}

RootLayout.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element)
}

export default RootLayout
