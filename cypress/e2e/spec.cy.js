import { BasePage } from "../pageObjects/basePage";

describe("CURA Healthcare Services", () => {
  context("appointment tests", () => {

      beforeEach(() => {
          BasePage.visit();
          cy.get("#btn-make-appointment").click();
          cy.get("#txt-username").type("John Doe");
          cy.get("#txt-password").type("ThisIsNotAPassword");
          cy.get("#btn-login").click();
      });
      //Scenario 1 - Make an Appointment
      it('make an appointment', () => {
        cy.get('#combo_facility').select("Seoul CURA Healthcare Center");
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_medicaid').check();
        cy.get('#txt_visit_date').click();
        cy.get('.datepicker').contains("30").click();
        cy.get('#txt_comment').type("CURA Healthcare Service");
        cy.get('#btn-book-appointment').click();

        //Validate
        cy.get('#facility').should("have.text", "Seoul CURA Healthcare Center");
        cy.get('#hospital_readmission').should("have.text", "Yes");
        cy.get('#program').should("have.text", "Medicaid");
        cy.get('#visit_date').should("contain.text", "30/");
        cy.get('#comment').should("have.text", "CURA Healthcare Service");
      })

      //Scenario 2 - Appointment history empty
      it('appointment history empty', () => {
        cy.get('#menu-toggle').click();
        //Validate that the sidebar is active
        cy.get('#sidebar-wrapper').should("have.class", "active");
        cy.get('.sidebar-nav').contains("History").click();
        //Validate that - No appointment - is visible
        cy.get('#history').should("contain.text", "No appointment");
      })
      });
});