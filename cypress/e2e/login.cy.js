import { LoginPage } from "../pom/login_pom";
describe('Going to test login for OrangeHRM.',()=>{
const login = new LoginPage();

beforeEach('', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})
it('Should able to launch application and land to login page.', () => {

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input');

})

it('Login to system and verify landing page.', () => {
    login.enterUsername();
    login.enterPassword();
    login.clickLogin();

    cy.contains('Dashboard').should('be.visible');

    // cy.wait(5000);
})
})