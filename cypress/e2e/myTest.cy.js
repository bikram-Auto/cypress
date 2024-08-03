const{ Base } = require('./utils/base.ts');


const base = new Base();
const email = 'ayaan.singh@sharklasers.com';
const password = '12345678';

describe('Data save issue', () => {
  it('Open EMR', () => {
    cy.visit("https://akhilhistest.squbix.com/")
    base.doctorLogin(cy, email, password)
    cy.wait(500)
    cy.get("button[type='button']").click()
    cy.wait(1000)
    elements(cy.get('.row.text-start.cursor-pointer.hover-effect.border-bottom').contains('ARADHYA')).eq(0).click();
    base.vitals(cy)
    // cy.get('button').contains('Draft').click();
    // cy.get("div[role='alert']").should('contain','Updated Successfully');
    // cy.reload();
  })
})


function elements(ele) {
  return ele;
}


  