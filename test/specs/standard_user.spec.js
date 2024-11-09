const loginActions = require("../pages/login/loginActions");
const resetAppActions = require("../pages/reset/resetAppActions");
const addToCartActions = require("../pages/addToCart/addToCartActions");
const checkOutActions = require("../pages/checkOut/checkOutActions");
const returnHomeActions = require("../pages/returnHomePage/returnHomeActions");
const logoutActions = require("../pages/logut/logoutActions");
const orderMessageActions = require("../pages/verifyOrderMessage/orderMessageActions");


const userName = "standard_user";
const password = "secret_sauce";

const firstName = "Md.";
const lastName = "Elias";
const postalCode = "3228";

describe("Automation of purchase journey for stadard user", () => {
    it("Should able to successfully login", async() => {
        await loginActions.enterUserName(userName);
        await loginActions.enterPassword(password);
        await loginActions.clickOnLoginButton();       
    })

    it("Should able to click reset app state button", async() => {
        await resetAppActions.clickOnHamburgerMenuButton();
        await resetAppActions.clickOnresetAppStateButton();
        await browser.pause(5000);    
    })

    it("Should able to successfully add product in the cart", async () => { 
        await addToCartActions.productBackpackAddtoCartButton();
        await addToCartActions.productBackLightAddtoCartButton();
        await addToCartActions.productBackTshirtAddtoCartButton();
        await addToCartActions.clickOnCart();
        await browser.pause(5000);
   
    });

    it("Should able to click checkout button", async() => {
        await checkOutActions.clickOnCheckOutButton();
        await checkOutActions.enterBuyerFirstName(firstName);
        await checkOutActions.enterBuyerLastName(lastName);
        await checkOutActions.enterBuyerPostalCode(postalCode);
        await checkOutActions.clickOnContiniueButton();
         
        await browser.pause(5000); 

    })

    it("Should able to verify product name", async () => { 
        const expectedproductBackPack = "Sauce Labs Backpack";
        const expectedBikeLight = "Sauce Labs Bike Light";
        const expectedproductBoltTShirt = "Sauce Labs Bolt T-Shirt";
    
        var actualproductBackPack = await checkOutActions.selectedProductBackPack();
        var actualproductBikeLight = await checkOutActions.selectedProductBackLight();
        var actualproductBoltTShirt = await checkOutActions.selectedProductBackTshirtt();

        expect(expectedproductBackPack).toEqual(actualproductBackPack);    
        expect(expectedBikeLight).toEqual(actualproductBikeLight);   
        expect(expectedproductBoltTShirt).toEqual(actualproductBoltTShirt);
          
        await browser.pause(5000); 

    });

    it("Should able to verify Item price", async () => { 
        const expectedItemTotal = 55.97;
        const expectedItemTax = 4.48;
        const expectedGrandTotal = expectedItemTotal + expectedItemTax;
    
        var actualItemTotal = await checkOutActions.getItemPrice();
        var actualItemTax = await checkOutActions.getTaxProductPrice();
        var actualGrandTotal = await checkOutActions.getTotalPrice();
        
        expect(expectedItemTotal).toEqual(actualItemTotal);   
        expect(expectedItemTax).toEqual(actualItemTax); 
        expect(expectedGrandTotal).toEqual(actualGrandTotal);
         
        await browser.pause(5000); 

    });

   
    it("Should able to finish purchase and verify order confirmation message", async () => {         
        await orderMessageActions.clickOnFinishButton(); 

        const expectedOrderMessage = "Thank you for your order!";
        const actualOrderMessage = await orderMessageActions.getOrderMessage();
        expect(expectedOrderMessage).toEqual(actualOrderMessage);

        await browser.pause(5000); 

    });

    it("Should able to return home page, resetp app state", async () => {        
        await returnHomeActions.clickOnBackHomeButton(); 
        await resetAppActions.clickOnHamburgerMenuButton();
        await resetAppActions.clickOnresetAppStateButton();
        await browser.pause(5000); 

    });

    it("Should able to successfully logout", async () => {        
        await logoutActions.clickOnLogoutButton(); 
        
        await browser.pause(5000); 

    });

})