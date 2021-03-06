import wdioBaseConfig from './wdio.base.conf';

export const config: WebdriverIO.Config = Object.assign(wdioBaseConfig, {
  hostname: 'localhost',
  port: 4444,
  path: '/',
  maxInstances: 2,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      acceptInsecureCerts: true,
    },
    {
      maxInstances: 5,
      browserName: 'firefox',
      acceptInsecureCerts: true,
    },
  ],
});
