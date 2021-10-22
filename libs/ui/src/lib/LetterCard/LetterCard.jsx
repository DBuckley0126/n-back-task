import { useState } from 'react'
import { ButtonBase, Typography } from '@mui/material'
import { motion, useIsPresent } from 'framer-motion'
import { useTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const LetterCard = ({ children, disabled, status, ...props }) => {
	const theme = useTheme()
	const isPresent = useIsPresent()
	const [keyboardFocused, setKeyboardFocus] = useState(false)
	const cardHeights = [210, 230, 250]
	const variants = {
		initial: {
			y: -20,
			opacity: 0
		},
		animate: (mode) => ({
			y: 0,
			opacity: 1,
			backgroundColor: (() => {
				if (mode === 'success') {
					return theme.palette.success.main
				}
				if (mode === 'error') {
					return theme.palette.error.main
				}
				return theme.palette.background.paper
			})()
		}),
		exit: {
			y: 20,
			opacity: 0
		}
	}
	return (
		<ButtonBase
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: '10px',
				borderWidth: '3px',
				borderColor: keyboardFocused
					? 'accessibility.main'
					: 'text.primary',
				borderStyle: 'solid',
				height: cardHeights,
				width: cardHeights.map((height) => height * 0.7),
				boxShadow: 3
			}}
			onFocusVisible={() => {
				setKeyboardFocus(true)
			}}
			onBlur={() => {
				setKeyboardFocus(false)
			}}
			custom={status}
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
			component={motion.div}
			disabled={disabled || !isPresent}
			data-cy="letter-card"
			{...props}
		>
			<Typography variant="h2" color="text.primary">
				{children}
			</Typography>
		</ButtonBase>
	)
}

LetterCard.propTypes = {
	children: PropTypes.string,
	status: PropTypes.oneOf(['success', 'error', null]),
	disabled: PropTypes.bool
}

LetterCard.defaultProps = {
	children: '',
	status: null,
	disabled: false
}

export default LetterCard
