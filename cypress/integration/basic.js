const getSelector = (selector) => `#filter-${selector}`;

const testSelectors = {
  camilo: getSelector("Camilo"),
  manuela: getSelector("Manuela"),
  anaLucia: getSelector("AnaLucia"),
  ruben: getSelector("Ruben"),
  lucia: getSelector("Lucia"),
  macarena: getSelector("Macarena"),
  muneco: getSelector("Muñeco"),
  lupita: getSelector("Lupita"),
  dogs: getSelector("dogs"),
  cats: getSelector("cats"),
  humans: getSelector("humans"),
  resetFilter: "#reset-filter",
};

describe("When accesing the app", () => {
  const humans = ["camilo", "manuela", "anaLucia", "ruben", "lucia"];
  const dogs = ["macarena", "muneco"];
  const cats = ["lupita"];

  const assertTags = (assertion, tags) => {
    tags.forEach((tag) => {
      console.log(tag, testSelectors[tag]);
      cy.get(testSelectors[tag]).should(assertion);
    });
  };

  const filterBy = (tag) => {
    cy.get(testSelectors[tag]).click();
  };

  it("Should see the family together", () => {
    cy.visit("");
    assertTags("exist", humans);
    assertTags("exist", dogs);
    assertTags("exist", cats);
  });

  it("Should filter by race correctly", () => {
    filterBy("dogs");
    assertTags("not.exist", humans);
    assertTags("not.exist", cats);
    assertTags("exist", dogs);

    filterBy("cats");
    assertTags("not.exist", humans);
    assertTags("not.exist", dogs);
    assertTags("exist", cats);

    filterBy("humans");
    assertTags("exist", humans);
    assertTags("not.exist", dogs);
    assertTags("not.exist", cats);
  });

  it("Should show all family members when resetting the filter", () => {
    filterBy("resetFilter");
    assertTags("exist", humans);
    assertTags("exist", dogs);
    assertTags("exist", cats);
  });
});
