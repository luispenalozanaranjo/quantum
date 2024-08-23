const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  devServer: {
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      // ... otras cabeceras si es necesario
    },
    client: {
      webSocketURL: 'auto://quantum.pjud.cl:0/ws'
    },
    port: 80,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
