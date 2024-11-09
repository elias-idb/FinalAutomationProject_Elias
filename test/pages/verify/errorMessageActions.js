const errorMessageLocators = require("./errorMessageLocators");

class ErrorMessageActions{

    async getErrorMessage(){
       const loginErrorMessage =  await errorMessageLocators.erroMessage.getText();
       return loginErrorMessage;    
    }

}

module.exports = new ErrorMessageActions();

