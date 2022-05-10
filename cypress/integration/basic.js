describe("When accesing the app", () => {
  it("Should see the family together", () => {
    cy.visit("");
    cy.get("#filter-Camilo").should("exist").should("be.visible");
    cy.get("#filter-Manuela").should("exist").should("be.visible");
    cy.get("#filter-AnaLucia").should("exist").should("be.visible");
    cy.get("#filter-Ruben").should("exist").should("be.visible");
    cy.get("#filter-Lucia").should("exist").should("be.visible");

    cy.get("#filter-Macarena").should("exist").should("be.visible");
    cy.get("#filter-Muñeco").should("exist").should("be.visible");

    cy.get("#filter-Lupita").should("exist").should("be.visible");
  });

  it("Should filter by race correctly", () => {
    cy.get("#filter-dogs").click();
    cy.get("#filter-Camilo").should("not.exist");
    cy.get("#filter-Lupita").should("not.exist");
    cy.get("#filter-Macarena").should("exist").should("be.visible");
    cy.get("#filter-Muñeco").should("exist").should("be.visible");

    cy.get("#filter-cats").click();
    cy.get("#filter-Macarena").should("not.exist");
    cy.get("#filter-Lupita").should("exist").should("be.visible");

    cy.get("#filter-humans").click();
    cy.get("#filter-Macarena").should("not.exist");
    cy.get("#filter-Lupita").should("not.exist");

    cy.get("#filter-Camilo").should("exist").should("be.visible");
    cy.get("#filter-Manuela").should("exist").should("be.visible");
    cy.get("#filter-AnaLucia").should("exist").should("be.visible");
    cy.get("#filter-Ruben").should("exist").should("be.visible");
    cy.get("#filter-Lucia").should("exist").should("be.visible");
  });

  it("Should show all family members when resetting the filter", () => {
    // https://github.com/indigo-ag/acorn/pull/3848/files#r868233454
    cy.get("#reset-filter").click();
    cy.get("#filter-Camilo").should("exist").should("be.visible");
    cy.get("#filter-Manuela").should("exist").should("be.visible");
    cy.get("#filter-AnaLucia").should("exist").should("be.visible");
    cy.get("#filter-Ruben").should("exist").should("be.visible");
    cy.get("#filter-Lucia").should("exist").should("be.visible");

    cy.get("#filter-Macarena").should("exist").should("be.visible");
    cy.get("#filter-Muñeco").should("exist").should("be.visible");

    cy.get("#filter-Lupita").should("exist").should("be.visible");
  });
});
