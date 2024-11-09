const resetAppLocators = require("./resetAppLocators");

class ResetAppActions{  
    async clickOnHamburgerMenuButton(){
        await resetAppLocators.hamburgerMenuButton.click();
    }

    async clickOnresetAppStateButton(){
        await resetAppLocators.resetAppStateButton.click();
    }
}

module.exports = new ResetAppActions();
