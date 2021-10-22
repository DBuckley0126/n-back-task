import { useState } from 'react'
import { Input, Box, Typography, Button } from '@mui/material'
import ChevronRight from '@mui/icons-material/ChevronRight'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const StartButton = ({ show, ...props }) => {
	return (
		<Button
			variant="outlined"
			color="primary"
			endIcon={<ChevronRight />}
			variants={{
				hidden: {
					y: 20,
					opacity: 0
				},
				visible: {
					y: 0,
					opacity: 1
				}
			}}
			initial="hidden"
			animate={show ? 'visible' : 'hidden'}
			exit="hidden"
			component={motion.div}
			transition={{ duration: 0.4, type: 'spring', bounce: 0.5 }}
			{...props}
		>
			Start
		</Button>
	)
}

StartButton.propTypes = {
	show: PropTypes.bool.isRequired
}

export default StartButton
