const svg = document.getElementById('svgCanvas');

// キャンバスサイズの取得
function getCanvasSize() {
  return { width: svg.clientWidth, height: svg.clientHeight };
}

// ベクトルを描画する関数
function drawVector(x, y, color, label) {
  const { width, height } = getCanvasSize();
  const centerX = width / 2;
  const centerY = height / 2;

  // SVG座標系に変換（中心からの相対位置に設定）
  const endX = centerX + x;
  const endY = centerY - y;

  // ベクトルの線を描画
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', centerX);
  line.setAttribute('y1', centerY);
  line.setAttribute('x2', endX);
  line.setAttribute('y2', endY);
  line.setAttribute('stroke', color);
  line.setAttribute('stroke-width', 2);
  svg.appendChild(line);

  // ベクトルのラベルを描画
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('x', endX + 5);
  text.setAttribute('y', endY - 5);
  text.setAttribute('fill', color);
  text.textContent = label;
  svg.appendChild(text);
}

// ベクトルの合成を描画
function drawVectorSum(vectors) {
  let sumX = 0;
  let sumY = 0;

  // 合成ベクトルの計算
  vectors.forEach(vector => {
    sumX += vector.x;
    sumY += vector.y;
  });

  // 合成ベクトルを描画
  drawVector(sumX, sumY, 'red', 'a');
}

// ベクトルの定義
const vectorX = { x: 50, y: 0 }; // X軸方向のベクトル
const vectorY = { x: 0, y: 50 }; // Y軸方向のベクトル

// SVGをクリア
while (svg.firstChild) {
  svg.removeChild(svg.firstChild);
}

// X軸とY軸を描画
const { width, height } = getCanvasSize();
const centerX = width / 2;
const centerY = height / 2;

// X軸を描画
const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
xAxis.setAttribute('x1', 0);
xAxis.setAttribute('y1', centerY);
xAxis.setAttribute('x2', width);
xAxis.setAttribute('y2', centerY);
xAxis.setAttribute('stroke', 'black');
xAxis.setAttribute('stroke-width', 1);
svg.appendChild(xAxis);

// Y軸を描画
const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
yAxis.setAttribute('x1', centerX);
yAxis.setAttribute('y1', 0);
yAxis.setAttribute('x2', centerX);
yAxis.setAttribute('y2', height);
yAxis.setAttribute('stroke', 'black');
yAxis.setAttribute('stroke-width', 1);
svg.appendChild(yAxis);

// ベクトルを描画
drawVector(vectorX.x, vectorX.y, 'blue', 'x');
drawVector(vectorY.x, vectorY.y, 'green', 'y');

// ベクトルの合成を描画
drawVectorSum([vectorX, vectorY]);

// 合成ベクトルを描画するためにベクトル合成の線を描画
const endX = centerX + vectorX.x;
const endY = centerY - vectorX.y;
const sumEndX = centerX + (vectorX.x + vectorY.x);
const sumEndY = centerY - (vectorX.y + vectorY.y);

const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
line.setAttribute('x1', endX);
line.setAttribute('y1', endY);
line.setAttribute('x2', sumEndX);
line.setAttribute('y2', sumEndY);
line.setAttribute('stroke', 'gray');
line.setAttribute('stroke-width', 1);
svg.appendChild(line);