describe("app", () => {
  it("fetch all actors", () => {
    cy.visit("/")
    cy.findByText(/get all actors/i).click()
  })
})
