describe('frontend: Home', () => {
	beforeEach(() => cy.visit('/'))
	it('Should be able to enter name', () => {
		const dummyName = 'Danny Buckley'
		cy.get('[data-cy=name-input] > input')
			.type('Danny Buckley')
			.should('have.attr', 'value', dummyName)
	})

	it('Should not be able to enter name with invalid characters', () => {
		const validationMessage = 'Name can only contain letters'
		cy.get('[data-cy=name-input-validation-message]').should(
			'not.contain',
			validationMessage
		)
		cy.get('[data-cy=name-input]').type('Danny Buckley12')
		cy.get('[data-cy=name-input-validation-message]').should(
			'contain',
			validationMessage
		)
	})

	it('Start button should be clickable on valid name', () => {
		cy.get('[data-cy=start-button]').should('have.class', 'Mui-disabled')
		cy.get('[data-cy=name-input]').type('Danny Buckley')
		cy.get('[data-cy=start-button]').should(
			'not.have.class',
			'Mui-disabled'
		)
		cy.get('[data-cy=start-button]').click()
		cy.get('[data-cy=letter-card]')
	})
})
