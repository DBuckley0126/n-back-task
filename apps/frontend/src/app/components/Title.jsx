import { useState } from 'react'
import { Input, Box, Typography, Button } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import ChevronRight from '@mui/icons-material/ChevronRight'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { appSelectors } from '../store/app.slice'

const Title = () => {
	const stage = useSelector(appSelectors.getStage)
	return (
		<Box
			sx={{
				position: 'absolute',
				top: '20%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				width: 'fit-content',
				height: 'auto',
				textAlign: 'center'
			}}
			variants={{
				initial: {
					top: '15%',
					opacity: 0
				},
				home: {
					top: '20%',
					opacity: 1
				},
				scoreboard: {
					top: '20%',
					opacity: 1
				},
				task: {
					top: '10%',
					opacity: 1
				}
			}}
			animate={stage}
			component={motion.div}
			transition={{ duration: 1, delay: 0.5 }}
		>
			<Typography variant="h1">N back task</Typography>
		</Box>
	)
}

export default Title
