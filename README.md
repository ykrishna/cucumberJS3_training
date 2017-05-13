**How to run Gherkin feature files using CucumberJS and Selenium Webdriver**

_Pre-requisite:_

npm install cucumber --save-dev
npm install selenium-webdriver --save-dev

_Create Project in following style:_

features
   -step_definitions
       --step_definitions.js
   -support
       --hooks.js
       --world.js
    documentation.feature

`add geckodriver and chromedriver to path variable`
       
run feature files using local cucumberjs or cucumber-js (in windows cucumber.js will open .js instead of running, cucumber.js will work in MAC and linux with out any issues)

node_modules\.bin\cucumberjs features\documentation.feature
       
       
   