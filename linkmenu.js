
// 外部HTMLファイルを読み込み、指定のコンテナに挿入
fetch('module1.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('linkmenu-container').innerHTML = data;