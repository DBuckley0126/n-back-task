import 'cypress-storybook/cypress'
import getTheme from '../../../../../libs/ui/src/utils/getTheme'

describe('LetterCard: Success', () => {
	before(() => {
		cy.visitStorybook()
	})
	beforeEach(() => {
		cy.loadStory('lettercard', 'success')
		const theme = getTheme()
		cy.wrap(theme).as('theme')
	})

	it('status change should change background color', function () {
		cy.get('[data-cy=letter-card]').should(
			'have.css',
			'background-color',
			this.theme.palette.success.main
		)
	})
})
