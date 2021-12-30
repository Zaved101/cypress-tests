/// <reference types='cypress' />
/// <reference types="Cypress-iframe" />
//import 'cypress-iframe'
import '@4tw/cypress-drag-drop'

describe('cypress tests', () => {
  it('TC01_VerifyPageTitle', () => {
  	cy.visit('https://bookshopbd.com/')
    cy.title().should('eq','Buy Books Online at Best Price in Bangladesh - BookShopBD.com - বুকশপবিডি')
  })

  it('TC02_CheckboxRadioButton', () => {
    //Radiobutton
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.get('input[value="Male"]').check().should('be.visible')

    //Checkbox
    cy.get('#checkbox1').check().should('be.checked').should('have.value', 'Cricket')
    cy.get('#checkbox2').check().should('be.checked').should('have.value', 'Movies')

    cy.get('#checkbox1').uncheck().should('not.be.checked')
    cy.get('#checkbox2').uncheck().should('not.be.checked')

    cy.get('input[type="checkbox"]').check(['Cricket','Movies'])
 
})

it ('TC03_DropDownandRefresh',()=>
{
  cy.visit('http://demo.automationtesting.in/Register.html')
  cy.get('#Skills').select('Android').should('be.have', 'Android')
  cy.reload()
})
it ('TC04_Scroll',()=>
{
  cy.visit('https://www.cypress.io/')
  cy.contains('What sets Cypress apart?').scrollIntoView()
})

it ('TC05_DoubleClickRightClick',()=>
{
  //Right Click

  cy.visit('https://www.cypress.io/')
  cy.contains('What sets Cypress apart?').rightclick().wait(3000).type('{esc}')

  //Double click
  cy.contains('What sets Cypress apart?').dblclick().wait(3000)

})

it ('TC06_DragandDrop',()=>
{
  cy.visit("http://demo.guru99.com/test/drag_drop.html");
      cy.get('section.g-wrapper:nth-child(23) div.g-grid div.g-block.size-75 div.g-grid div.g-block.size-100 div.g-content div.platform-content.row-fluid div.span12 div.item-page div:nth-child(5) div.ui-widget-content ul:nth-child(1) li.block13.ui-draggable:nth-child(2) > a.button.button-orange').drag('section.g-wrapper:nth-child(23) div.g-grid div.g-block.size-75 div.g-grid div.g-block.size-100 div.g-content div.platform-content.row-fluid div.span12 div.item-page td:nth-child(2) div.shoppingCart div.ui-widget-content ol.field13.ui-droppable.ui-sortable > li:nth-child(1)')

})

it ('TC07_Slider',()=>
{
  cy.visit('https://the-internet.herokuapp.com/horizontal_slider');
  cy.get('[type="range"]')
      .invoke('val', 2.5)
      .trigger("change")
      .click();
  cy.get('#range').then($x => {
      expect($x.text()).to.equal('2.5')
  })

})

it ('TC08_KeyboardEvent',()=>
  {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('#search_query_top').type('tedtalk').wait(3000)
    cy.get('[name="submit_search"]').trigger('{enter}')

  })

  it('TC09_AlertHandling',()=>
  {
    cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");
    
    cy.get('input[type="submit"]').click();
    // firing window: alert event with on() method
    cy.on('window:alert',(txt)=>{
       //Mocha assertions
       expect(txt).to.contains('Your full name cannot be blank.');
    })
 })

})
