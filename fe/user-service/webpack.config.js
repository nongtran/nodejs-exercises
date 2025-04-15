const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  // ...existing webpack config...
  plugins: [
    new ModuleFederationPlugin({
      name: "userService",
      filename: "remoteEntry.js",
      exposes: {
        "./UserModule": "./src/index",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
