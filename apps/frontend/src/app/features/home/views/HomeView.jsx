import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

import NameInput from '../components/NameInput'
import StartButton from '../components/StartButton'
import { appActions, appSelectors } from '../../../store/app.slice'

const HomeView = () => {
	const [nameInputValue, setNameInputValue] = useState('')
	const dispatch = useDispatch()
	const invalidInput = /[^a-z]/i.test(nameInputValue)
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
			<NameInput
				value={nameInputValue}
				setValue={setNameInputValue}
				error={invalidInput}
			/>
			<StartButton
				show={nameInputValue && !invalidInput}
				onClick={() => dispatch(appActions.startTask(nameInputValue))}
			/>
		</Box>
	)
}
export default HomeView
