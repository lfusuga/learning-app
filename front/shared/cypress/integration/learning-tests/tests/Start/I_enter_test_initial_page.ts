import { Given } from "cypress-cucumber-preprocessor/steps";

Given(`I enter the test home page URL`, () => {
  cy.visit("root-config/dist/");
});
