const fs = require("fs");
const path = require("path");

module.exports = {
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-react",
    "@babel/preset-env",
  ],
  plugins: [
    [
      "babel-plugin-css-to-module",
      {
        sassOptions: {},
      },
    ],
  ],
};
