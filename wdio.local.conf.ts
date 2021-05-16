import wdioBaseConfig from './wdio.base.conf';

export const config: WebdriverIO.Config = Object.assign(wdioBaseConfig, {
  services: ['chromedriver'],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      acceptInsecureCerts: true,
    },
  ],
});
