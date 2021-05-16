
 # WebdriverIO 7 Demo

 Building a Selenium test suite using WebdriverIO 7 with TypeScript.

 * [WebdriverIO Docs](https://webdriver.io/docs/gettingstarted)
 * [Selenium Grid 4](https://www.selenium.dev/documentation/en/grid/grid_4/)
 * [ESLint Setup](https://thefrugal.dev/blog/setup-typescript-eslint-5-steps/)
 * [Dependencies](https://nodejs.dev/learn/npm-dependencies-and-devdependencies)

## Setup

Install Node dependencies:
```bash
npm install
```

## ChromeDriver

Running tests using ChromeDriver:
```bash
npm test
```
## Selenium Grid

Running tests in a local Selenium Grid with Chrome and Firefox:
```bash
npm run test:grid
```

## Selenium Grid 4

Download [ChromeDriver](https://chromedriver.chromium.org/downloads) and put the `*.exe` file in your `PATH`.

Download [GeckoDriver](https://github.com/mozilla/geckodriver/releases) and put the `*.exe` file in your `PATH`.

Download [Selenium 4 Beta 3](https://selenium-release.storage.googleapis.com/4.0-beta-3/selenium-server-4.0.0-beta-3.jar) and open your CLI in the that directory.

Running Selenium in standalone mode:
```bash
java -jar selenium-server-4.0.0-beta-3.jar standalone
```
