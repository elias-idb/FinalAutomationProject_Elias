const addToCartLocators = require("./addToCartLocators");

class AddToCartActions {
    async productBackpackAddtoCartButton(){
        await addToCartLocators.productBackpack.click();
    }

    async productBackLightAddtoCartButton(){
        await addToCartLocators.productBackLight.click();
    }

    async productBackTshirtAddtoCartButton(){
        await addToCartLocators.productBackTshirt.click();
    }

    async productRedShirtAddtoCartButton(){
        await addToCartLocators.productRedShirt.click();
    }

    async selectedPrdouct(num){
        return await addToCartLocators.productList(num).click();
    }

    async clickOnCart(){
        await addToCartLocators.clickOnCart.click();
    }


}

module.exports = new AddToCartActions();