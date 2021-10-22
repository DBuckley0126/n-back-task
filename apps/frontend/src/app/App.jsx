import { useState } from 'react'
import { Input, Box, Typography, Button } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'

import { appSelectors } from './store/app.slice'
import HomeView from './features/home/views/HomeView'
import TaskView from './features/task/views/CardView'
import Title from './components/Title'

const App = () => {
	const stage = useSelector(appSelectors.getStage)
	return (
		<>
			<Title />
			<AnimatePresence>
				{stage === 'home' && <HomeView />}
				{stage === 'task' && <TaskView />}
			</AnimatePresence>
		</>
	)
}
export default App
