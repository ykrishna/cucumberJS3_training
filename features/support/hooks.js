var {defineSupportCode} = require('cucumber');
var seleniumWebdriver = require('selenium-webdriver');

defineSupportCode(function ({Before, After}) {

    Before(function () {
        return this.driver.manage().window().setSize(1680, 1050);
    });

    After(function () {
        return this.driver.quit();
    });
});