

describe('UPS tracking error', () => {


    it('Verify tracking error message for invalid tracking number', () => {
        // Visit USPS tracking page
        cy.visit('https://www.ups.com/us/en/home');
    
        //click on tracking tab (use contains to click by visible text)
        cy.get('[class="subsection"]').eq(1).click();
        //click on track a package
        cy.contains('Track a Package').click();
        //verify the url contains the word track 
        cy.url().should('contain', 'track');
        //type an invalid tracking number
        cy.get('[id="stApp_trackingNumber"]').type('123456789{enter}');
        //verify the error message is displayed
        cy.get('[id="stApp_error_alert_list0"]').invoke('text').then((errorMessage) => {
            expect(errorMessage).to.contain('Currently, we are not able to provide the tracking details.');
        })
    
    
    
    })//end of test case
})//end of describe suite