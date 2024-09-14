// 外部HTMLファイルを読み込み、指定のコンテナに挿入
fetch('hamburgerMenu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu-container').innerHTML = data;

    // メニューが読み込まれた後に、クリックイベントを追加
    const hamburgerMenu = document.querySelector('.hamburgerMenu');
    const menu = document.querySelector('.hamburgerMenuNav');

    hamburgerMenu.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  })
  .catch(error => console.error('Error loading menu:', error));