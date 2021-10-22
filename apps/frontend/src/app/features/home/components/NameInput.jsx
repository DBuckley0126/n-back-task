import { Input, Box, Typography } from '@mui/material'

import PropTypes from 'prop-types'

const NameInput = ({ value, setValue, error }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}
		>
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
				error={error}
			/>
			<Typography variant="helperText" sx={{ marginTop: 2, height: 20 }}>
				{error && 'Name can only contain letters'}
			</Typography>
		</Box>
	)
}

NameInput.propTypes = {
	value: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
	error: PropTypes.bool
}

NameInput.defaultProps = {
	error: false
}
export default NameInput
