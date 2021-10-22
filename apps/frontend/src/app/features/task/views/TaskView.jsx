import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Box, Typography } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { LetterCard } from '@n-back-task/ui'
import PropTypes from 'prop-types'

import { taskActions, taskSelectors } from '../store/task.slice'

const TaskView = () => {
	const dispatch = useDispatch()
	const currentLetterObject = useSelector(
		taskSelectors.getCurrentLetterObject
	)
	const interactionStatus = useSelector(taskSelectors.getInteractionStatus)

	useEffect(() => {
		dispatch(taskActions.startTaskProcess())
	}, [])
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
			transition={{ duration: 0.6, delay: 2 }}
			component={motion.div}
		>
			<AnimatePresence exitBeforeEnter>
				{currentLetterObject && (
					<LetterCard
						key={
							currentLetterObject.letter +
							currentLetterObject.index
						}
						onClick={() =>
							dispatch(
								taskActions.interactionCheck(
									currentLetterObject.letter
								)
							)
						}
						status={interactionStatus}
						disabled={currentLetterObject.index < 2}
					>
						{currentLetterObject.letter}
					</LetterCard>
				)}
			</AnimatePresence>
		</Box>
	)
}
export default TaskView
