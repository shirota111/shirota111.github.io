const path = require('path');

module.exports = {
  // エントリーポイントの指定
  entry: './src/2.js', // このファイルがアプリケーションの起点です

  // 出力先の指定
  output: {
    filename: 'bundle.js', // バンドルされたファイル名
    path: path.resolve(__dirname, 'docs') // 出力先のフォルダ（GitHub Pages用）
  },

  // 開発サーバーの設定（ローカルでのテスト用）
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'), // サーバーが公開するフォルダ
    port: 9000, // サーバーのポート番号
    open: true // サーバー起動時にブラウザを自動で開く
  },

  // モードの設定
  mode: 'development' // 開発中の設定。ビルドの最適化を行わない
};