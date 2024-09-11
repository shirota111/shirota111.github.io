// ページ読み込み時にアクセス数をカウント
    window.onload = function () {
      let visits = localStorage.getItem('page_visits') || 0;
      visits++;
      localStorage.setItem('page_visits', visits);
      document.getElementById('counter').textContent = `This page has been visited ${visits} times.`;
    };