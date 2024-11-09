const loginLocators = require("./loginLocators");

class LoginActions{
    async enterUserName(userName){
        await loginLocators.loginUserNameInput.setValue(userName);
    }

    async enterPassword(password){
        await loginLocators.loginPasswordInput.setValue(password);
    }

    async clickOnLoginButton(){
        await loginLocators.buttonLogin.click();
    }
}

module.exports = new LoginActions();
