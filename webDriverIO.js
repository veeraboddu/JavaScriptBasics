//Naveen AutomatioLabs
//WebDriverIO
//https://www.youtube.com/watch?v=x29B8Apt2S0&t=984s

// webDriverIO is a openscource framework for the javascript automation. Custom implementation for selenium webdriver API.  
// webDriverIO is a common framework tool for - Cucumber , Mocha and Jasmine. 
It is written in javascript and packaged into npm and runs on node js server
Automate both Web applicaiton and native mobile apps
// allure reporting, Jasmine spec reporter, junit xml reporting, Cucumber reporting
Android , IOS
synchronics exections.
page oject model
continuous integration jenkins
retrying if any failure to execute the testcases again
installation:
1.java, 2. node js, 3. npm installation (node -v, npm -v), 4. install Visual Studio code
open vsc - config the work space, go to terminal - npm init - package.json will be configured with name, version, main, desc,script,author,
license
commands
npm init
npm install webdriverio --save-dev   // webdriveio version will be added to the package.json
npm install @wdio/cli  
./node_modules/.bin/wdio config  //WDIO configuration helper // configuring config.js file will be added// wdio.config.js will be added
npm install chai --save-dev
npm install chai-webdriverio --save-dev
//install local runner
npm install local-runner --save-dev
// config below changes in - wdio.conf.js file

  beforeTest: function () {
           const chai = require('chai')
           const chaiWebdriver = require('chai-webdriverio').default
           chai.use(chaiWebdriver(browser))

           global.assert = chai.assert
           global.should = chai.should
           global.expect = chai.expect
           
       },

 example
element.js
describe("interacion with web element", function(){

    it("enter value in the field", function(){
        browser.url('/');
        const search = $('twotabsearchtextbox');
        search.setValue('Apple Mac Book');
    });
});

download standalone jar and run locally, so script will be run locally bit faster
cmd: 
java -jar selenium-server-standalone-3.141.59.jar -port 4545

example:
pageobject model  - <pagename>.js
class HomePage{

    get pageHeader() {        return $('div>h1')    }    
    get subHeading() {        return $('div.banner-text-content >p.sub-text')    }
    get customerlinke(){        return $('/html/body/header/nav/div/div/ul/li[5]/a')    }
}
module.exports = new HomePage();  // export the js file
----------------------
test - home.test.js
const homepage = require("../pages/homepage")   // import the file 
describe("interacion with web element", function(){

    it("enter value in the field", function(){
        browser.url('https://www.freshworks.com/');
        let text = homepage.pageHeader.getText();
        console.log(text);
    });
});

example 2:

const sum  = require('./add')

test('adding of two numbers',() =>{
    expect(sum(1,2)).toBe(3)
})
