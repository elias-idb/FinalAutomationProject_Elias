class LogoutLocators{  
    get buttonLogout(){
        return  $("//a[@id='logout_sidebar_link']");
    }
}

module.exports = new LogoutLocators();