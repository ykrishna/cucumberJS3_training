//require('chromedriver')
//require('geckodriver')

var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var firefox = require('selenium-webdriver/firefox');
//var chrome = require('selenium-webdriver/chrome');

function CustomWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('firefox')
        .build();
}

defineSupportCode(function ({setDefaultTimeout,setWorldConstructor}) {
    setWorldConstructor(CustomWorld);
    setDefaultTimeout(60*1000);
})

module.exports = defineSupportCode;