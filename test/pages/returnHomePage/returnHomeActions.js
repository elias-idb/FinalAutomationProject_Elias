const returnHomeLocators = require("./returnHomeLocators");

class ReturnHomeActions{

    async clickOnBackHomeButton(){
        await returnHomeLocators.buttonBackToHome.click();
    }
}

module.exports = new ReturnHomeActions();

