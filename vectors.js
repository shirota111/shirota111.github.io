const svg = document.getElementById('svgCanvas');
const centerX = 300;
const centerY = 300;
const scale = 100;

// ベクトルを描画する関数
function drawVector(x, y, color, label) {
  const endX = centerX + x * scale;
  const endY = centerY - y * scale;

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
  text.setAttribute('x', endX + 10);
  text.setAttribute('y', endY - 10);
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
const vectorX = { x: 2, y: 0 }; // x軸方向のベクトル
const vectorY = { x: 0, y: 1 }; // y軸方向のベクトル

// SVGをクリア
while (svg.firstChild) {
  svg.removeChild(svg.firstChild);
}

// ベクトルを描画
drawVector(vectorX.x, vectorX.y, 'blue', 'x');
drawVector(vectorY.x, vectorY.y, 'green', 'y');

// ベクトルの合成を描画
drawVectorSum([vectorX, vectorY]);

// 合成ベクトルを描画するためにベクトル合成の線を描画
const endX = centerX + vectorX.x * scale;
const endY = centerY - vectorX.y * scale;
const sumEndX = centerX + (vectorX.x + vectorY.x) * scale;
const sumEndY = centerY - (vectorX.y + vectorY.y) * scale;

const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
line.setAttribute('x1', endX);
line.setAttribute('y1', endY);
line.setAttribute('x2', sumEndX);
line.setAttribute('y2', sumEndY);
line.setAttribute('stroke', 'gray');
line.setAttribute('stroke-width', 1);
svg.appendChild(line);