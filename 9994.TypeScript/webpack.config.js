const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 1. 웹팩 설정파일
module.exports = {
  // 2. 웹팩이 읽어올 파일(엔트리 포인트)
  entry: "./src/index.ts",
  // 3. 웹팩이 읽어올 파일에 적용할 로더
  module: {
    rules: [
      {
        // 4. 타입스크립트 파일을 ts-loader를 사용하여 컴파일
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // 5. 웹팩이 읽어올 파일의 확장자
  resolve: {
    extensions: [".ts", ".js"],
  },
  // 6. 웹팩이 컴파일한 파일을 저장할 경로
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // 7. 웹팩의 플러그인
  plugins: [
    new HtmlWebpackPlugin({
      // 8. 웹팩이 생성할 HTML 파일의 템플릿
      template: "./public/index.html",
    }),
  ],
  // 9. 웹팩의 모드(production, development)
  mode: "development",
  // 10. 웹팩의 디버깅 도구
  devtool: "source-map",
};

