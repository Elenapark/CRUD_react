import path from 'path';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const __dirname = path.resolve();

const config = {
  name: 'TravelFlan assignment',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    // 바벨이 처리할 확장자 목록
    extensions: ['.js', '.jsx'],
  },
  // 입력
  entry: {
    app: './src/Index',
  },
  module: {
    rules: [
      {
        // js, jsx파일에 룰 적용
        test: /\.jsx?/,
        // 최신 문법을 구 브라우저 호환 문법으로 변환
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          // async,await 문법 적용 플러그인
          plugins: ['@babel/plugin-transform-runtime'],
          // 핫 리로딩 적용
          env: {
            development: {
              plugins: ['react-refresh/babel'],
            },
          },
        },
        exclude: path.join(__dirname, 'node_module'),
      },
      {
        // css파일을 js파일로 변환
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // 핫 리로딩 플러그인
  plugins: [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  output: {
    // 출력
    // 현재 폴더 내에 dist폴더를 만들어줌
    path: path.join(__dirname, 'dist'), //travelflan-assignment/dist
    filename: '[name].js', // 입력에 작성한 app.js
    publicPath: '/dist/',
  },
  // webpack dev server적용
  devServer: {
    historyApiFallback: true,
    port: 3090,
    devMiddleware: { publicPath: '/dist/' },
    static: { directory: path.resolve(__dirname, 'public') },
  },
};

export default config;
