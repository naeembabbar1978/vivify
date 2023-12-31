describe('Vivify Tests', () => {
  it('Verify Vivify flow', () => {
    cy.on("uncaught:exception", (e, runnable) => {
      console.log("error" + e);
      return false;
    })
    cy.visit('https://www.vivifyvenues.com/')
    cy.get("#postcode").type("LA3 1AB").type('{enter}')
    cy.get('#results > li:nth-child(4) > a > h4').should('contain.text','Lancaster Royal Grammar School')
    cy.get('#results > li:nth-child(4) > a > h4').contains('Lancaster Royal Grammar School').click();
    cy.get('[alt="Facility Preview"]')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
  })
})