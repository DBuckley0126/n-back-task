import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

import { taskSelectors } from '../../task/store/task.slice'
import { appSelectors } from '../../../store/app.slice'

const ScoreDisplay = ({ color, score, title, delay }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '200px',
				marginBottom: 2
			}}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.6, delay }}
			component={motion.div}
		>
			<Typography variant="h4">{title}</Typography>
			<Typography variant="h3" color={color}>
				{score}
			</Typography>
		</Box>
	)
}

ScoreDisplay.propTypes = {
	color: PropTypes.string,
	score: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	delay: PropTypes.number
}

ScoreDisplay.defaultProps = {
	color: '',
	delay: 0
}

const ScoreboardView = () => {
	const correctInteractions = useSelector(
		taskSelectors.getCorrectInteractions
	)
	const missedCorrectInteractions = useSelector(
		taskSelectors.getMissedCorrectInteractions
	)
	const incorrectInteractions = useSelector(
		taskSelectors.getIncorrectInteractions
	)
	const userName = useSelector(appSelectors.getUserName)

	return (
		<Box
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: 'fit-content',
				height: 'auto'
			}}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.6 }}
			component={motion.div}
		>
			<Typography
				sx={{ mb: [0, 0, 5], mt: [5, 5, 0], textAlign: 'center' }}
				variant="h3"
			>{`${userName} your score is`}</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: ['column', 'column', 'row'],
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<ScoreDisplay
					color="error.main"
					score={incorrectInteractions}
					title="Errors"
					delay={0}
				/>
				<ScoreDisplay
					color="success.main"
					score={correctInteractions}
					title="Correct"
					delay={0.3}
				/>
				<ScoreDisplay
					color="error.main"
					score={missedCorrectInteractions}
					title="Missed"
					delay={0.6}
				/>
			</Box>
		</Box>
	)
}
export default ScoreboardView
