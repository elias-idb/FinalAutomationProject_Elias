class LoginLocators{
    get loginUserNameInput(){
        return  $("//input[@id='user-name']");
    }

    get loginPasswordInput(){
        return  $("//input[@id='password']");
    }

    get buttonLogin(){
        return  $("//input[@id='login-button']");
    }
}

module.exports = new LoginLocators();