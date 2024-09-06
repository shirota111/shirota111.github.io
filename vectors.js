const canvas = document.getElementById('carCanvas');
const ctx = canvas.getContext('2d');

// パースペクティブの中心とスケール
const perspectiveCenter = { x: canvas.width / 2, y: canvas.height / 2 };
const scale = 100; // 立体感を調整するスケール

// 車体を描画する関数
function drawCar() {
  // 車の前面と背面の座標を定義
  const front = [
    { x: -1 * scale, y: 1 * scale, z: 0 },
    { x: 1 * scale, y: 1 * scale, z: 0 },
    { x: 1 * scale, y: -1 * scale, z: 0 },
    { x: -1 * scale, y: -1 * scale, z: 0 }
  ];

  const back = [
    { x: -0.5 * scale, y: 0.5 * scale, z: -0.5 * scale },
    { x: 0.5 * scale, y: 0.5 * scale, z: -0.5 * scale },
    { x: 0.5 * scale, y: -0.5 * scale, z: -0.5 * scale },
    { x: -0.5 * scale, y: -0.5 * scale, z: -0.5 * scale }
  ];

  const allVertices = front.concat(back);

  // パースペクティブ変換
  function project(vertex) {
    const scaleFactor = scale / (scale + vertex.z);
    return {
      x: perspectiveCenter.x + vertex.x * scaleFactor,
      y: perspectiveCenter.y - vertex.y * scaleFactor
    };
  }

  // 描画のために線を引く関数
  function drawLine(p1, p2) {
    const start = project(p1);
    const end = project(p2);
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  }

  // 車のエッジを描画
  for (let i = 0; i < 4; i++) {
    drawLine(front[i], front[(i + 1) % 4]);
    drawLine(back[i], back[(i + 1) % 4]);
    drawLine(front[i], back[i]);
  }
}

// 車を描画する
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'black';
  drawCar();
}

draw();