class CheckOutLocators{
    get buttonCheckOut(){
        return  $("//button[@id='checkout']")
    }

    get buyerFirstNameInput(){
        return  $("//input[@class = 'input_error form_input' and @id='first-name']");
    }

    get buyerLastNameInput(){
        return  $("//input[@class = 'input_error form_input' and @id='last-name']");
    }

    get buyerPostalCodeInput(){
        return  $("//input[@class = 'input_error form_input' and @id='postal-code']");
    }

    get buttonContiniue(){
        return  $("//input[@class='submit-button btn btn_primary cart_button btn_action' and @id='continue']");
    }

    get productBackpack() {
        return $("//div[@class='inventory_item_name' and contains(text(),'Sauce Labs Backpack')]");
    }

    get productBackLight() {
        return  $("//div[@class='inventory_item_name' and contains(text(),'Sauce Labs Bike Light')]");
    }

    get productBackTshirt() {
        return  $("//div[@class='inventory_item_name' and contains(text(),'Sauce Labs Bolt T-Shirt')]");
    }

    get productRedTshirt() {
        return  $("//div[@class='inventory_item_name' and contains(text(), 'Test.allTheThings() T-Shirt (Red)')]");
    }

    // price varification
    get priceFromProductPage(){
        return $("//div[@class='summary_subtotal_label']");
    }

    get taxFromProductPage(){
        return $("//div[@class='summary_tax_label']");
    }

    get TotalPriceFromProductPage(){
        return $("//div[@class='summary_total_label']");
    }

}

module.exports = new CheckOutLocators();