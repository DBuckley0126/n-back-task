import { render } from '@testing-library/react'
import LetterCard from './LetterCard'

describe('LetterCard', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<LetterCard />)
		expect(baseElement).toBeTruthy()
	})
})
