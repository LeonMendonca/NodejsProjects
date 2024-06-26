import htmlWebPackPlugin from 'html-webpack-plugin';
import { join, resolve } from 'path';

export default { 
  entry: {
    file1: './views/fetch/getdelete.js',
    file2: './views/fetch/postpatchput.js',
    file3: './views/mdbootstrap/scriptLoadLink.js',
  },
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
    filename:"[name].bundle.js",
    path:resolve('./dist'),
  },
  plugins: [
    new htmlWebPackPlugin({
      filename:'idBodyInput.html',
      chunks:['file2'],
      template:'./views/idBodyInput.html',
    }),
    new htmlWebPackPlugin({
      filename:'idInput.html',
      chunks:['file1'],
      template:'./views/idInput.html'
    }),
    new htmlWebPackPlugin({
      filename:'index.html',
      chunkds:['file3'],
      template:'./views/index.html',
    })
  ],
  mode:"development"
}
