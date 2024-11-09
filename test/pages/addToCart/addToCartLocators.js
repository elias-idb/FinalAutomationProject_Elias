class AddToCartLocators{
    get productBackpack() {
        return  $("//button[@id='add-to-cart-sauce-labs-backpack']");
    }

    get productBackLight() {
        return  $("//button[@id='add-to-cart-sauce-labs-bike-light']");
    }

    get productBackTshirt() {
        return  $("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']");
    }

    get productBackJacket() {
        return  $("//button[@id='add-to-cart-sauce-labs-fleece-jacket']");
    }

    get productOnsie() {
        return  $("//button[@id='add-to-cart-sauce-labs-onesie']");
    }

    get productRedShirt() {
        return  $("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']");
    }

    productList(number){
    
        return $(`(//button[contains(@class, 'btn btn_primary btn_small btn_inventory')])[${number}]`);
        
    }

    get clickOnCart() {
        return  $("//a[@class='shopping_cart_link']");
    }
   
}

module.exports = new AddToCartLocators();
