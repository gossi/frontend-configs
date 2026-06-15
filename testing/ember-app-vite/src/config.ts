type Config = Record<string, unknown> & {
  modulePrefix: string;
  locationType: string;
  rootURL: string;
  APP: Record<string, unknown>;
};

const ENV: Config = {
  modulePrefix: 'ember-app-vite',
  environment: import.meta.env.DEV ? 'development' : 'production',
  rootURL: '/',
  locationType: 'history',
  APP: {
    // Here you can pass flags/options to your app instance
    // when it is created
  }
};

export default ENV;

export function enterTestMode() {
  ENV.locationType = 'none';
  ENV.APP.rootElement = '#ember-testing';
  ENV.APP.autoboot = false;
}
