import { useState } from 'react'
import { Input, Box, Typography, Button } from '@mui/material'
import ChevronRight from '@mui/icons-material/ChevronRight'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const StartButton = ({ show }) => {
	return (
		<Button
			variant="outlined"
			color="primary"
			endIcon={<ChevronRight />}
			sx={{
				marginTop: 5
			}}
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
			animate={show ? 'visible' : 'hidden'}
			component={motion.div}
		>
			Start
		</Button>
	)
}

StartButton.propTypes = {
	show: PropTypes.bool.isRequired
}

export default StartButton
