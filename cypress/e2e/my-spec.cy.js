describe('Test Contact App', () => {

  beforeEach(() => {
    cy.visit('./contact_app.html')
  })

  it('Test if the application loads correctly', () => {
    cy.get('h1.text-center').should('have.text', 'Contact List App');
    cy.get('table tbody tr').should('have.length', 1)
  })

  it('Test if the application adds the contact correctly.',()=>{

    // Enter contact details
    cy.get('div.form-row.justify-content-center>div:nth-child(1)>input').should('be.visible').type('Debora Wessen');
    cy.get('div.form-row.justify-content-center>div:nth-child(2)>input').should('be.visible').type('111 222 3333');
    cy.get('div.form-row.justify-content-center>div:nth-child(3)>input').should('be.visible').type('debora@test.com');

    // Click the add button
    cy.get("button[name='add']").should('be.visible').click();

    // Validate if only one row has been added to the table
    cy.get('table tbody tr').should('have.length', 2);

    // Validate if the entered data matches the table
    cy.get('table tbody>tr:nth-child(2)>td:nth-child(1)').should('have.text', 'Debora Wessen');
    cy.get('table tbody>tr:nth-child(2)>td:nth-child(2)').should('have.text', '111 222 3333');
    cy.get('table tbody>tr:nth-child(2)>td:nth-child(3)').should('have.text', 'debora@test.com');

    const nameRegex = /^[a-zA-Z\s]+$/;
    // Validate if the name matches the regex
    cy.get('table tbody>tr:nth-child(2)>td:nth-child(1)').invoke('text').should('match', nameRegex);

    const phoneRegex = /^(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    // Validate if the phone matches the regex
    cy.get('table tbody>tr:nth-child(2)>td:nth-child(2)').invoke('text').should('match', phoneRegex);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Validate if the email matches the regex
    cy.get('table tbody>tr:nth-child(2)>td:nth-child(3)').invoke('text').should('match', emailRegex);

    
    // Validate if the table contains the data
    cy.get('table tbody>tr:nth-child(2) td').should('contain', 'Debora Wessen');
    cy.get('table tbody>tr:nth-child(2) td').should('contain', '111 222 3333');
    cy.get('table tbody>tr:nth-child(2) td').should('contain', 'debora@test.com');
  })

  it('Test if the application edit the contact correctly.', ()=>{

    // Function that adds the contact
    cy.addContact()

    //Edit contact details.
    cy.get("table tbody>tr:nth-child(2) td>button[name='edit']").should('be.visible').click();

    cy.get('table tbody tr:nth-child(2)>td:nth-child(1) input').should('be.visible').clear().type('Debora Carvalho Leite Wessen');
    cy.get('table tbody tr:nth-child(2)>td:nth-child(2) input').should('be.visible').clear().type('000 000 000');
    cy.get('table tbody tr:nth-child(2)>td:nth-child(2) input').should('be.visible').clear().type(' edit@test.com');

    cy.get("table tbody tr:nth-child(2)>td:nth-child(4)>button[name='update']").click();

    // Validate if the name has changed and if the phone and email fields are empty strings.
    cy.get('table tbody>tr:nth-child(2)>td:nth-child(1)').should('have.text', 'Debora Carvalho Leite Wessen');
    cy.get('table tbody>tr:nth-child(2)>td:nth-child(2)').should('not.have.text', '000 000 000');
    cy.get('table tbody>tr:nth-child(2)>td:nth-child(3)').should('not.have.text', 'edit@test.com');

    const nameRegex = /^[a-zA-Z\s]+$/;
    // Validate if the name matches the regex
    cy.get('table tbody>tr:nth-child(2)>td:nth-child(1)').invoke('text').should('match', nameRegex);
    
  })

  it('Test if the application delete the contact correctly.',()=>{

    cy.addContact();

    cy.get("table tbody>tr:nth-child(2) td>button[name='delete']").should('be.visible').click();

    // Validate if only one row remains in the table after deletion
    cy.get('table tbody tr').should('have.length', 1);

    // Validate if the table no longer contains the deleted contact
    cy.get('table tbody tr ').should('not.contain', 'Debora Wessen');

  })
});