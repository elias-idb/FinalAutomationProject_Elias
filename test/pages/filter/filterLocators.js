class FilterLocators{
    get filterByNameDropdown(){
        return $("//select[@class='product_sort_container']");
    }

    get chooseZtoA_Option(){
        return $("//option[@value='za']");
    }
  
}

module.exports = new FilterLocators();