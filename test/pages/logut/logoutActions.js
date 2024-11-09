const logoutLocators = require("./logutLocators");

class LogoutActions{
    async clickOnLogoutButton(){
        await logoutLocators.buttonLogout.click();
    }
}

module.exports = new LogoutActions();
