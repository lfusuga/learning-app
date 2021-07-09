import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see a welcome page`, () => {
  cy.get("section").contains("@lfusuga/learning-tests");
});
