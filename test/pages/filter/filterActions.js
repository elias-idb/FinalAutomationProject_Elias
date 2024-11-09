const filterLocators = require("./filterLocators");

class FilterActions{  
    async clickOnFilterByNameDropdown(){
       await filterLocators.filterByNameDropdown.click();
    }

    async clickOnZtoA_Option(){
        await filterLocators.chooseZtoA_Option.click();
     }

}

module.exports = new FilterActions();
