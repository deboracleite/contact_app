// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/// <reference types="Cypress"/>

Cypress.Commands.add('addContact',()=>{
    cy.get('div.form-row.justify-content-center>div:nth-child(1)>input').type('Debora Wessen');
    cy.get('div.form-row.justify-content-center>div:nth-child(2)>input').type('111 222 3333');
    cy.get('div.form-row.justify-content-center>div:nth-child(3)>input').type('debora@test.com');

    cy.get("button[name='add']").click();
})