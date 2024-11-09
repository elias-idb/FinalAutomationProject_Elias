class ReturnHomeLocators{
    get buttonBackToHome(){
      return  $("//button[@class='btn btn_primary btn_small' and @id='back-to-products']");
    }
}

module.exports = new ReturnHomeLocators();