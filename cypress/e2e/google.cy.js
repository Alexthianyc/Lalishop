describe("Visitar google", () => {
    it("Visitar google", () => {
        cy.visit("https://google.com");
        cy.url().should("include", "google");
    });
});