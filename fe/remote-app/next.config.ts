import withModuleFederation from '@module-federation/nextjs-mf';

module.exports = new withModuleFederation({
  name: 'remoteApp',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './HelloWorld': './src/components/HelloWorld', // path to your component
  },
  shared: {
    react: { singleton: true, requiredVersion: false },
    'react-dom': { singleton: true, requiredVersion: false },
  },
  extraOptions: {},
});
