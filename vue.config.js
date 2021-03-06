const path = require('path');
module.exports = {
  outputDir: path.resolve(__dirname, '../com.animiru.net/public'),
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000"
      }
    }
  }
};
