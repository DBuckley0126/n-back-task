import { useState } from 'react'
import { Input, Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

import NameInput from '../components/NameInput'
import StartButton from '../components/StartButton'

const HomeView = () => {
	const [nameInputValue, setNameInputValue] = useState('')
	return (
		<>
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
					height: 'auto'
				}}
			>
				<Typography variant="h1">N back task</Typography>
			</Box>
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
			>
				<NameInput
					value={nameInputValue}
					setValue={setNameInputValue}
				/>
				<StartButton
					show={
						nameInputValue && !/[^a-z]/i.test(nameInputValue)
							? 'visible'
							: 'hidden'
					}
				/>
			</Box>
		</>
	)
}
export default HomeView
