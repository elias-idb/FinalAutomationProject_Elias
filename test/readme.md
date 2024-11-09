===============================*************=================================================
                      Setup and Installation

1.Create a folder AutomationProject_Elias
2.Open this folder in vs code
3.open terminal in vs code
4.Take node package by using npm init
5.Then input prject information step by setp
package name: (automationproject_elias)
version: (1.0.0)                                                                                                                                                                                                               
description: Automation test projcet for Ostad Manual and Automation Test Course SQA: Batch:07
entry point: (index.js)                                                                                                                                                                                                        
test command:                                                                                                                                                                                                                  
git repository:                                                                                                                                                                                                                
keywords: WDIO, POM, Chromedriver, Xpath, Allur Report
author: Md. Elias                                                                                                                                                                                                              
license: (ISC)
About to write to D:\AutomationProject_Elias\package.json:

{
  "name": "automationproject_elias",
  "version": "1.0.0",
  "description": "Automation test projcet for Ostad Manual and Automation Test Course SQA: Batch:07",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "WDIO",
    "POM",
    "Chromedriver",
    "Xpath",
    "Allur",
    "Report"
  ],
  "author": "Md. Elias",
  "license": "ISC"
}


Is this OK? (yes) yes
PS D:\AutomationProject_Elias>

6.After completeing this step package.json file saved in directory folder
and we can see this information
{
  "name": "automationproject_elias",
  "version": "1.0.0",
  "description": "Automation test projcet for Ostad Manual and Automation Test Course SQA: Batch:07",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "WDIO",
    "POM",
    "Chromedriver",
    "Xpath",
    "Allur",
    "Report"
  ],
  "author": "Md. Elias",
  "license": "ISC"
}

7.=> Go to this link: https://webdriver.io/docs/gettingstarted/
for wdio documentation

Copy and run this code in code for package installation.
npm i --save-dev @wdio/cli

After install wdio, package.json file add this dependency code
"devDependencies": {
    "@wdio/cli": "^9.1.3"
  }

And node_modules and package-lock.json file will create in your project folder.  
8.Now use and run this code in terminal
npm init wdio@latest

If face any error remove node_module and package-json file then re-install npm i and npm init wdio.
9.choose this 
✔ A project named "automationproject_elias" was detected at "D:\AutomationProject_Elias", correct? yes
✔ What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
✔ Where is your automation backend located? On my local machine
✔ Which environment you would like to automate? Web - web applications in the browser
✔ With which browser should we start?
✔ Which framework do you want to use? Mocha (https://mochajs.org/)
✔ Do you want to use Typescript to write tests? no
✔ Do you want WebdriverIO to autogenerate some test files? yes
✔ What should be the location of your spec files? D:\AutomationProject_Elias\test\specs\**\*.js
✔ Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? yes
✔ Where are your page objects located? D:\AutomationProject_Elias\test\pageobjects\**\*.js
✔ Which reporter do you want to use?
✔ Do you want to add a plugin to your test setup?
✔ Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! yes
? Do you want to add a service to your test setup? (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
❯◯ visual
 ◯ vite
 ◯ nuxt
 ◯ firefox-profile
 ◯ gmail
 ◯ sauce
 ◯ testingbot

9.after installation completion some file create in folder test, specs etc, use this code for run demo project
npx wdio run ./wdio.conf.js

Note: Page object model a locator abong action alada kore use kora hoi
object ar reusability ar jonno
specs ar maddome run hoi, describe hossche ak akta suite, it hosche test case

===================================*************************=================================
                        Q1:LocedOutUser
1.Take login folder in pages folder
2.Take loginLocator.js file in login folder
write this code in loginLocator.js
   a. create a class name Login
    class LoginLocators{
        
    }
    b. to export LoginLocators class 
    module.exports = new LoginLocators();

    c.write this 3 get method in LoginLocators class
     get loginUserNameInput(){
        return  $("//input[@id='user-name']");
    }

    get loginPasswordInput(){
        return  $("//input[@id='password']");
    }

    get buttonLogin(){
        return  $("//input[@id='login-button']");
    }

3.Take loginActions.js file in login folder
write this code in loginActions.js 

    a.To import loginlocators 
        const loginLocators = require("./loginLocators");
    b.Create a class LoginAction
        class LoginActions{
    
        }
    c.To export LoginActions class
        module.exports = new LoginActions();
    d. add some functions
        async enterUserName(userName){
        await loginLocators.loginUserNameInput.setValue(userName);
        }

        async enterPassword(password){
        await loginLocators.loginPasswordInput.setValue(password);
        }

        async clickOnLoginButton(){
        await loginLocators.buttonLogin.click();
        }
4. create lockedOutUser.spec.js file in specs folder
    const loginActions = require("../pages/login/loginActions");
    a.To import searchAction.js ile in lockedOutUser.spec.js file 
        const loginActions = require("../pages/login/loginActions");
    b.Create describe function
        describe("Demo ecommerce site automation", () => {
    
        })

    b.it function use in describe function as test suite
        it("Should able to successfully login", async() => {

        })
    c.This is use in it function
        await loginActions.enterUserName(userName);
        await loginActions.enterPassword(password);
        await loginActions.clickOnLoginButton();
        await browser.pause(5000);

5.open wdio.config.js file
    a.use site link in baseurl 
        baseUrl: ' https://www.saucedemo.com/',

    b.Create a variable locked_out_user, and store path of lockedOutUser.spec.js file
        const locked_out_user = "./test/specs/lockedOutUser.spec.js"
    c.Use it in specs as a path
    change specs :
        specs: [locked_out_user],

    d.Now use beforesuite for maximize window
        beforeSuite: async function (suite) {
            await browser.maximizeWindow();
            await browser.url(this.baseUrl);
        },
    e.To close browser after running all suite use this function    

        afterSuite: async function (suite) {
            await browser.quit();
        },  


6.In package.json 
    "scripts": {
    "test": "wdio run ./wdio.conf.js"
    }, 

7.Then run project in terminal use this code
     npm run test  

8.To verify message create verify folder in test folder

9.Create errorMessageLocators.js file in verify folder and write this code
    class ErrorMessageLocators{
    get erroMessage() {
        return $("//h3[contains(text(),'Epic sadface: Sorry, this user has been locked out.')]");
      }

    }

    module.exports = new ErrorMessageLocators(); 

 10.Create errorMessageActionss.js file in verify folder and write this code        
    const errorMessageLocators = require("./errorMessageLocators");

    class ErrorMessageActions{

    async getErrorMessage(){
       const loginErrorMessage =  await errorMessageLocators.erroMessage.getText();
       return loginErrorMessage;
      
    }

    }

    module.exports = new ErrorMessageActions();

 11.open lockedOutUser.spec.js file 
    a. use it function for new suit for verify error message
        it("Should verify expected and actual error message for lockedout user", async() => {
        
            const expectedErrorMessage = "Epic sadface: Sorry, this user has been locked out.";
            const actualErrorMessage = await errorMessageActions.getErrorMessage();

            expect(expectedErrorMessage).toEqual(actualErrorMessage);

            await browser.pause(5000);
        
        })

12.Now run again to check all suit, use this code in terminal   
    npm run test 
=================================================****************========================================================================================
1.Take standard_user.spec.js file in specs folder use this code in standard_user.spec.js
    const loginActions = require("../pages/login/loginActions");

    const userName = "standard_user";
    const password = "secret_sauce";

    describe("Demo ecommerce site automation", () => {
        it("Should able to successfully login", async() => {
            await loginActions.enterUserName(userName);
            await loginActions.enterPassword(password);
            await loginActions.clickOnLoginButton();
            await browser.pause(5000);
        
        })

    })

2.open wdio.conf.js file 
    a.write this code for finding path standard_user.spec.js file
        const standard_user = "./test/specs/standard_user.spec.js"
    b.use standard_user variable in specs 
        specs: [
            standard_user
        ],
3.Then run project in terminal use this code
    npm run test  
4.Create reset folder in pages folder
5.create resetAppLocators.js file in reset folder
    a.writ this code in errorMessageLocators.js
        class ResetAppLocators{
            get hamburgerMenuButton(){
                return $("//button[@id='react-burger-menu-btn']");
            }

            get resetAppStateButton(){
                return $("//a[@id='reset_sidebar_link']");
            }

    
        }

module.exports = new ResetAppLocators();


6.create resetAppActions.js file in reset folder 
    a.writ this code in errorMessageLocators.js 
        const resetAppLocators = require("./resetAppLocators");

            class ResetAppActions{  
                async clickOnHamburgerMenuButton(){
                    await resetAppLocators.hamburgerMenuButton.click();
                }

                async clickOnresetAppStateButton(){
                    await resetAppLocators.resetAppStateButton.click();
                }
            }

        module.exports = new ResetAppActions();
       
7.create new it function in describe function for reset appp state
    it("Should able to click reset app state button", async() => {
        await resetAppActions.clickOnHamburgerMenuButton();
        await resetAppActions.clickOnresetAppStateButton();
        await browser.pause(5000);    
    })

8.Then run project in terminal use this code
    npm run test 
    
9.Create addToCart folder in pages folder          
=================================================*************===========================================================================================