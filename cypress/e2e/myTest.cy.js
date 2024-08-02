const { Random } = require('./utils/random.ts');

const rand = new Random();
const email = 'ayaan.singh@sharklasers.com';
const password = '12345678';

describe('Data save issue', () => {
    it('Open EMR', () => {
        cy.visit("https://akhilhistest.squbix.com/")
        doctorLogin(cy, email, password)
        cy.wait(500)
        cy.get("button[type='button']").click()
        cy.wait(1000)
        elements(cy.get('.row.text-start.cursor-pointer.hover-effect.border-bottom').contains('ARADHYA')).eq(0).click();
        vitals(cy)
        cy.get('button').contains('Draft').click();
        cy.get("div[role='alert']").should('contain','Updated Successfully');
        cy.reload();
    })
})

  function vitals(cy) {
    cy.get("input[name='height']").clear().type(rand.getRandomInt(10, 99))
    cy.get("input[name='weight']").clear().type(rand.getRandomInt(10, 99))
    cy.get("input[name='hc']").clear().type(rand.getRandomInt(10, 99))
    cy.get("input[name='temperature']").clear().type(rand.getRandomInt(10, 99))
    cy.get("input[name='systolic']").clear().type(rand.getRandomInt(10, 99))
    cy.get("input[name='diastolic']").clear().type(rand.getRandomInt(10, 99))
    cy.get("input[name='spo2']").clear().type(rand.getRandomInt(10, 99))
    cy.get("input[name='pulse']").clear().type(rand.getRandomInt(10, 99))
  }

  function elements(ele) {
    return ele;
  }


  function doctorLogin(cy, email, password) {   
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get("button[type='button']").click()
    cy.get("input#react-select-2-input").type('AKHIL-TEST')
    cy.get("div[class='d-flex gap-2 align-items-center']").click()
    cy.get("input#react-select-3-input").type('Akhil Demo2 Delhi')
    cy.get("div[class='d-flex gap-2 align-items-center']").click()
    cy.get("input#react-select-4-input").type('Doctor')
    cy.get("div[class=' css-155t6xd-option']").click()
  }

  function login(cy, email, password) {   
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get("button[type='button']").click()
    cy.get("input#react-select-2-input").type('AKHIL-TEST')
    cy.get("div[class='d-flex gap-2 align-items-center']").click()
    cy.get("input#react-select-3-input").type('Akhil Demo2 Delhi')
    cy.get("div[class='d-flex gap-2 align-items-center']").click()
  }