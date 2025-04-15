import NextFederationPlugin from '@module-federation/nextjs-mf';

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'hostApp',
        remotes: {
          remoteApp: 'remoteApp@http://localhost:3001/_next/static/chunks/remoteEntry.js',
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          'react-dom': { singleton: true, requiredVersion: false },
        },
        extraOptions: {},
      })
    );
    return config;
  },
};
