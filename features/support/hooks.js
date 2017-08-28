var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Before, After}) {

    Before(function () {
        return this.driver.manage().window().setSize(1680, 1050);
    });

    After(function () {
        return this.attach('Some text Krishna','text/plain');
    });

    After(function () {
        return this.driver.quit();
    });

    After(function (scenarioResult) {
        var world = this;
        if (scenarioResult.isFailed()) {
            return this.driver.takeScreenshot().then(function(screenShot) {
                // screenShot is a base-64 encoded PNG
                //console.log(screenShot);
                return world.attach(screenShot,'image/png');
            });
        }
    });
});