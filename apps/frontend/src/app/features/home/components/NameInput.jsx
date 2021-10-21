import { useState } from 'react'
import { Input, Box, Typography, Button } from '@mui/material'
import ChevronRight from '@mui/icons-material/ChevronRight'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const NameInput = ({ value, setValue }) => {
	return (
		<Input
			placeholder="Enter name"
			value={value}
			inputProps={{
				'aria-label': 'name',
				sx: {
					textAlign: 'center',
					fontSize: ['2.6rem', '3rem', '3.6rem']
				}
			}}
			sx={{ maxWidth: ['80vw', 350, 450] }}
			onChange={(event) => setValue(event.target.value)}
			error={/[^a-z]/i.test(value)}
			helperText="Name can only contain letters"
		/>
	)
}

NameInput.propTypes = {
	value: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired
}
export default NameInput
