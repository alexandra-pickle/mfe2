const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe2",

  exposes: {
    "./Module": "./src/app/mfe2/mfe2.module.ts",
  },

  /*   shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  }, */
});
