// モーダルを取得
var modal = document.getElementById("myModal");

// 閉じるボタンを取得
var span = document.getElementsByClassName("close")[0];

// ページが読み込まれたときにモーダルを表示する
window.onload = function() {
    modal.style.display = "block";
}

// 閉じるボタンクリックでモーダルを閉じる
span.onclick = function() {
    modal.style.display = "none";
}

// モーダルの外側をクリックでモーダルを閉じる
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}