
// 外部HTMLファイルを読み込み、指定のコンテナに挿入
fetch('linkmenu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('link-container').innerHTML = data;