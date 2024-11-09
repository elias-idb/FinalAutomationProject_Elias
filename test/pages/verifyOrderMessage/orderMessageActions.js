const orderMessageLocators = require("./orderMessageLocators");

class OrderMessageActions{

    async clickOnFinishButton(){
        await orderMessageLocators.buttonFinish.click();
    }

    async getOrderMessage(){
       const purchaseOrderMessage =  await orderMessageLocators.orderMessage.getText();
       return purchaseOrderMessage;    
    }

}

module.exports = new OrderMessageActions();

