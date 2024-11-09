class ResetAppLocators{
    get hamburgerMenuButton(){
        return $("//button[@id='react-burger-menu-btn']");
    }

    get resetAppStateButton(){
        return $("//a[@id='reset_sidebar_link']");
    }
  
}

module.exports = new ResetAppLocators();