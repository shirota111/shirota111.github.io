<<<<<<< HEAD
//HTML CSS JS Result Skip Results Iframe
=======
HTML CSS JS Result Skip Results Iframe
>>>>>>> 6a79bd1 (Commit message here)
var canvas; // canvas要素(HTMLCanvasElement)
var ctx; // 2Dコンテキスト(CanvasRenderingContext2D)
var canvasW = 395; // canvas要素の横幅(px)
var canvasH = 350; // canvas要素の縦幅(px)
var oX; // 中心Ｏのx座標
var oY; // 中心Ｏのy座標
var mouseX; // 最後にクリックされた位置のx座標
var mouseY; // 最後にクリックされた位置のy座標

window.onload = function() {
  // canvas要素を取得し、サイズ設定
  canvas = document.getElementById('axisCanvas');
  canvas.width = canvasW;
  canvas.height = canvasH;
  oX = Math.ceil(canvasW / 2);
  oY = Math.ceil(canvasH / 2);

  // 描画のために2Dコンテキスト取得
  ctx = canvas.getContext('2d');

  // 座標軸の初期化
  drawInit();

  // クリックイベントの登録
  canvas.onclick = function(e) {
    // 座標軸の初期化
    drawInit();

    // クリック位置の座標計算（canvasの左上を基準。-2ずつしているのはborderの分）
    var rect = e.target.getBoundingClientRect();
    mouseX = e.clientX - Math.floor(rect.left) - 2;
    mouseY = e.clientY - Math.floor(rect.top) - 2;

    ctx.fillStyle = "#000";

    // クリック位置を中心に円を描画
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 5, 0, Math.PI * 2, false);
    ctx.fill();

    // 2次元座標系での座標値を計算（y座標は上方向を正とするため正負を逆にする）
    var x = mouseX - oX;
    var y = -(mouseY - oY);
    // 座標の表示テキストを描画
    var maxWidth = 100;
    ctx.textAlign = 'right';
    ctx.fillText('( ' + x + ', ' + y + ' )', canvasW - 20, canvasH - 20, maxWidth);
  }
};

function drawInit() {
  // 一度描画をクリア
  ctx.clearRect(0, 0, canvasW, canvasH);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#999";
  ctx.fillStyle = "#999";

  // x座標軸を描画
  ctx.beginPath();
  ctx.moveTo(0, oY);
  ctx.lineTo(canvasW, oY);
  ctx.stroke();
  // x座標軸の矢印を描画
  ctx.beginPath();
  ctx.moveTo(canvasW, oY);
  ctx.lineTo(canvasW - 10, oY - 7);
  ctx.lineTo(canvasW - 10, oY + 7);
  ctx.fill();

  // y座標軸を描画
  ctx.beginPath();
  ctx.moveTo(oX, 0);
  ctx.lineTo(oX, canvasH);
  ctx.stroke();
  // y座標軸の矢印を描画
  ctx.beginPath();
  ctx.moveTo(oX, 0);
  ctx.lineTo(oX - 7, 10);
  ctx.lineTo(oX + 7, 10);
  ctx.fill();

  // 原点を表す文字「Ｏ」を描画
  ctx.beginPath();
  var maxWidth = 100;
  ctx.font = "12px 'Verdana'";
  ctx.textAlign = 'right';
  ctx.fillText('Ｏ', oX - 5, oY + 15, maxWidth);
}