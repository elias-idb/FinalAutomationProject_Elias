class ErrorMessageLocators{
    get erroMessage() {
        return $("//h3[contains(text(),'Epic sadface: Sorry, this user has been locked out.')]");
      }

}

module.exports = new ErrorMessageLocators();