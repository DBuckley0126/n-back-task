import 'cypress-storybook/cypress'
import getTheme from '../../../../../libs/ui/src/utils/getTheme'

describe('LetterCard: Error', () => {
	before(() => {
		cy.visitStorybook()
	})
	beforeEach(() => {
		cy.loadStory('lettercard', 'error')
		const theme = getTheme()
		cy.wrap(theme).as('theme')
	})

	it('status change should change background color', function () {
		cy.get('[data-cy=letter-card]').should(
			'have.css',
			'background-color',
			this.theme.palette.error.main
		)
	})
})
