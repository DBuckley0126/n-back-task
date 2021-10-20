import 'cypress-storybook/cypress'
import getTheme from '../../../../../libs/ui/src/utils/getTheme'

describe('LetterCard: Primary', () => {
	before(() => {
		cy.visitStorybook()
	})
	beforeEach(() => {
		cy.loadStory('lettercard', 'primary')
		const theme = getTheme()
		cy.wrap(theme).as('theme')
	})

	it('should show letter passed in as child', function () {
		;['D', 'G'].forEach((letter) => {
			cy.changeArg('children', letter)
			cy.get('[data-cy=letter-card]').contains(letter)
		})
	})

	const spyFunctions = {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		onClick: () => {}
	}

	it('should be able to pass onClick prop and be called when button clicked', function () {
		const onClickSpy = cy.spy(spyFunctions, 'onClick').as('onClick')

		cy.changeArg('onClick', onClickSpy)

		cy.get('[data-cy=letter-card]')
			.click()
			.then(() => expect(onClickSpy).to.be.called)
	})

	it('should be focusable by keyboard', function () {
		cy.get('body').tab()

		cy.get('[data-cy=letter-card]').should('be.focused')
	})
})
