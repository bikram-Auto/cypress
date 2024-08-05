

import { Base } from "./utils/base.ts";

const base = new Base();

const email = 'ayaan.singh@sharklasers.com';
const password = '12345678';



describe('EMR test cases', () => {
  beforeEach(() => {
    console.log('uri: ', process.env.Base_uri)
    const url = process.env.Base_uri;
    // cy.visit(url) 
    base.doctorLogin(cy, email, password)
  })

  it('Data Retention', () => {
    cy.wait(500)
    cy.get("button[type='button']").click();
    cy.wait(1000)
    elements(cy.get('.row.text-start.cursor-pointer.hover-effect.border-bottom').contains('ARADHYA')).eq(0).click();
    base.vitals(cy);
    base.ChiefComplaints(cy);
    // cy.get('button').contains('Draft').click();
    // cy.get("div[role='alert']").should('contain','Updated Successfully');
    // cy.reload();
  })
})



function elements(ele: any) {
  return ele;
}

