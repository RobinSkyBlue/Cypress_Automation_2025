//describe suite represents what module/functionality is being tested
describe('Brave Search Functionality', () => {

    const keywords = [
        'Javascript',
        'Typescript',
        'Cypress Testing Framework'
    ]

    //it here represents the test case @test
    it('Search for a keyword and verify the search url contains the keyword', () => {
        // Iterate keywords with Cypress-friendly pattern
        keywords.forEach((keyValue) => {
            // Visit Brave Search homepage for each keyword
            cy.visit('https://search.brave.com/');
            // Type the keyword and press enter
            cy.get('#searchbox').type(`${keyValue}{enter}`);
            // Verify the URL contains the encoded keyword
            cy.url().should('contain', `${keyValue.replace(/ /g, '+')}`);
        })
    })

})