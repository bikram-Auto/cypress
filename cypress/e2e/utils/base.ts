const { Random } = require('./random.ts');


const rand = new Random();

export class Base{


    vitals(cy) {
    cy.get("input[name='height']").clear().type(rand.getRandomInt(10, 99))
    cy.get("input[name='weight']").clear().type(rand.getRandomInt(10, 99))
    cy.get("input[name='hc']").clear().type(rand.getRandomInt(10, 99))
    cy.get("input[name='temperature']").clear().type(rand.getRandomInt(10, 99))
    cy.get("input[name='systolic']").clear().type(rand.getRandomInt(10, 99))
    cy.get("input[name='diastolic']").clear().type(rand.getRandomInt(10, 99))
    cy.get("input[name='spo2']").clear().type(rand.getRandomInt(10, 99))
    cy.get("input[name='pulse']").clear().type(rand.getRandomInt(10, 99))
    }

    doctorLogin(cy, email, password) {   
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

    login(cy, email, password) {   
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get("button[type='button']").click()
    cy.get("input#react-select-2-input").type('AKHIL-TEST')
    cy.get("div[class='d-flex gap-2 align-items-center']").click()
    cy.get("input#react-select-3-input").type('Akhil Demo2 Delhi')
    cy.get("div[class='d-flex gap-2 align-items-center']").click()
    }
}