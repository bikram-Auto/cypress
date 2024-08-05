import { Random } from './random.ts';
import * as dotenv from 'dotenv';

dotenv.config();
const rand = new Random();

export class Base{

    // uri: process.env.Base_uri; 
    // constructor(){
    //     this.uri = process.env.Base_uri || '';
    //     if(!this.uri){
    //         throw new Error('Base_uri environment variable is not defined.');
    //     }
    // };

    ChiefComplaints(cy: any){
        cy.get("div").contains('Cold').click();
        cy.get("div").contains('Rapid Breathing').click();
        cy.get("div").contains('Ibrufen').click();
        cy.get("div").contains('Paracetamol').click();
        cy.get("div").contains('Zerodol (Acelofenac+Tizanamide)').click();
        cy.get("div").contains('Typhoid meningitis').click();
        cy.get("div").contains('Benzos').click();
        cy.get("div").contains('Vaccine name').click();
        cy.get("textarea#field-0").eq(0).clear().type('test: Examination');
        cy.get("textarea#field-0").eq(1).clear().type('test: Notes');
        cy.get("input[name='pregnant']").eq(2).click();
        cy.get("input[name='follow_up']").eq(1).click();
        cy.xpath("//div[text()='Automation Test Webpart']/../..//input[@type='number']").type(rand.getRandomInt(10000, 99999));
        cy.xpath("//div[text()='Automation Test Webpart']/../..//input[@type='text']").type(rand.getRandomString(9))
      }
      
    vitals(cy: any) {
        cy.get("input[name='height']").clear().type(rand.getRandomInt(10, 99))
        cy.get("input[name='weight']").clear().type(rand.getRandomInt(10, 99))
        cy.get("input[name='hc']").clear().type(rand.getRandomInt(10, 99))
        cy.get("input[name='temperature']").clear().type(rand.getRandomInt(10, 99))
        cy.get("input[name='systolic']").clear().type(rand.getRandomInt(10, 99))
        cy.get("input[name='diastolic']").clear().type(rand.getRandomInt(10, 99))
        cy.get("input[name='spo2']").clear().type(rand.getRandomInt(10, 99))
        cy.get("input[name='pulse']").clear().type(rand.getRandomInt(10, 99))
      }

    doctorLogin(cy: any, email: any, password: any) {   
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
      
    private login(cy: any, email: any, password: any) {   
        cy.get('#username').type(email)
        cy.get('#password').type(password)
        cy.get("button[type='button']").click()
        cy.get("input#react-select-2-input").type('AKHIL-TEST')
        cy.get("div[class='d-flex gap-2 align-items-center']").click()
        cy.get("input#react-select-3-input").type('Akhil Demo2 Delhi')
        cy.get("div[class='d-flex gap-2 align-items-center']").click()
    }
}