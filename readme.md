# Final Automation Project - Ostad Manual and Automation Testing Course

This project automates the end-to-end purchasing journey for three different users on a demo e-commerce site. It covers key actions from login to completing a purchase, ensuring software quality by verifying essential user flows.

## Project Overview

- **Website**: [SauceDemo](https://www.saucedemo.com/)
- **Objective**: Automate login, cart management, and purchase processes for three types of users.
- **User Types**:
  - `locked_out_user`: Attempts to log in but is restricted.
  - `standard_user`: Completes a full purchase journey with three items.
  - `performance_glitch_user`: Completes a purchase journey with sorting and one item.
  
## Project Scope

1. **Locked Out User**: Attempts login; verifies the error message.
2. **Standard User**:
   - Logs in and resets app state from the hamburger menu.
   - Adds three items to the cart.
   - Proceeds to checkout, verifies product names and total price.
   - Completes purchase and verifies the order confirmation message.
   - Resets app state and logs out.
3. **Performance Glitch User**:
   - Logs in and resets app state.
   - Sorts items by name (Z to A) and adds the first item to the cart.
   - Proceeds to checkout, verifies product name and total price.
   - Completes purchase and verifies the order confirmation message.
   - Resets app state and logs out.

## Technologies Used

- **Editor**: Visual Studio Code
- **Runtime**: Node.js
- **Testing Framework**: WebdriverIO
- **Browser**: Chrome
- **Assertion Library**: Mocha (during WebdriverIO setup)
- **Report**: Allure
- **Tools**:
  - Xpath Helper (for locators)

## Project Setup and Installation

1. **Project Setup**:
   - Create a folder `AutomationProject_Elias`.
   - Initialize the project by running `npm init` and entering project details.

2. **Install WebdriverIO**:
   - Run `npm i --save-dev @wdio/cli` and `npm init wdio@latest` for setup.
   - Configure testing environment and select Mocha framework during setup.

3. **Organize Project Files**:
   - Create `test/specs` for test suites.
   - Create `test/page` for page object models.

4. **Browser and Base URL Configuration**:
    - Set `baseUrl` in `wdio.conf.js` to [SauceDemo](https://www.saucedemo.com/).
  - Use `beforeSuite` in `wdio.conf.js` to maximize the browser window and navigate to the base URL:
  
    ```javascript
    beforeSuite: async function (suite) {
        await browser.maximizeWindow();
        await browser.url(this.baseUrl);
    },
    ```

  - Use `afterSuite` in `wdio.conf.js` to close the browser after test execution:
  
    ```javascript
    afterSuite: async function (suite) {
        await browser.quit();
    },
    ```

5. **Utilities**:
   - Common utility functions like `convertTextToNumberForSubTotal`, `randomNumber`, `createRandomString`.

6. **Writing Test Cases**:
   - Use `describe()` and `it()` for structuring tests.
   - Add pauses (`await browser.pause(5000)`) for test synchronization.
   - Verify test results using assertions (`toEqual`).

7. **Git Setup**:
   - Initialize a Git repository and push to GitHub.
   - Exclude `node_modules`, `allure-results`, and `allure-report` using `.gitignore`.

## Running the Project

### Run Specific User Test
- `npm run test` - Runs the specified file in `specs` (e.g., `locked_out_user`, `standard_user`, `performance_glitch_user`).

### Run All User Tests
- `npm run allUser` - Runs all tests simultaneously.

### Generate Allure Report
- Run `npm run getReport` after tests to generate and view Allure reports.

## Allure Report Setup

1. Install Allure:
   - `npm install @wdio/allure-reporter --save-dev`
   - Configure Allure reporters in `wdio.conf.js` to output results, include WebDriver steps, and capture screenshots:

  ```javascript
  reporters: [['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false
  }]],


2. Enable Screenshots on Failure:
   - Add `afterTest` function in `wdio.conf.js` to capture screenshots on errors.

   afterTest: async function (
        test,
        context,
        { error, result, duration, passed, retries }
      ) {
        if (error) {
          const screenshot = await browser.takeScreenshot();
          allure.addAttachment(
            "Screenshot",
            Buffer.from(screenshot, "base64"),
            "failure/png"
          );
        }
    },

3. Generate Report:
   - Run `npm run getReport` to generate and view Allure reports.


## Github Journey

1. **Repository Creation**
   - Created a new repository on GitHub: `FinalAutomationProject_Elias`.
2. Use `.gitignore` to avoid pushing unnecessary files (`allure-results`, `node_modules`).

3. **Project Initialization and Initial Push**
   - Use the following commands in the terminal to initialize Git, make the first commit, and push the project to GitHub:
   
     ```bash
     git init
     git add .
     git commit -m "First commit for my final automation project"
     git remote add origin https://github.com/elias-idb/FinalAutomationProject_Elias.git
     git push -u origin main
     ```

3. **Cloning the Project**
   - To clone the project repository, use the following command:
   
     ```bash
     git clone https://github.com/elias-idb/FinalAutomationProject_Elias.git

### Acknowledgments
Special thanks to Hriody Das bhaiya for his guidance and support throughout the course, and to the entire Ostad team, including Ria Apu, for their assistance.

## Project Demo

[Watch the project run demo](https://drive.google.com/file/d/1DyV0dn9KQdaqttaOxNvsB5NsG3nlHyiy/view?usp=sharing)

### Clone Repository and Run Project

```In Terminal
git clone https://github.com/elias-idb/FinalAutomationProject_Elias.git
cd FinalAutomationProject_Elias
npm i.







