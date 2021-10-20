import { Box } from '@mui/material'
import PropTypes from 'prop-types'

const RootLayout = ({ children }) => {
	return (
		<Box width="100vw" height="100vh" position="relative">
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
