import htmlWebPackPlugin from 'html-webpack-plugin';
import { join, resolve } from 'path';

export default { 
  entry:"./index.js",
  module: {
    rules : [
      {
        test:/\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    path:resolve('./dist'),
    filename:"bundle.js",
  },
  plugins: [new htmlWebPackPlugin()],
  mode:"development"
}
