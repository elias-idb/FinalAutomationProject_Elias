const loginActions = require("../pages/login/loginActions");
const errorMessageActions = require("../pages/verify/errorMessageActions");

const userName = "locked_out_user";
const password = "secret_sauce";


describe("Automation of purchase journey for locked out user", () => {
    it("Should able to successfully login", async() => {
        await loginActions.enterUserName(userName);
        await loginActions.enterPassword(password);
        await loginActions.clickOnLoginButton();
        
    })

    it("Should verify expected and actual error message for lockedout user", async() => {
        
        const expectedErrorMessage = "Epic sadface: Sorry, this user has been locked out.";
        const actualErrorMessage = await errorMessageActions.getErrorMessage();

        expect(expectedErrorMessage).toEqual(actualErrorMessage);

        await browser.pause(5000);
        
    })

})