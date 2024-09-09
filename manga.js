// script.js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const layers = [];
let layerIndex = 0;

// 初期キャンバスサイズ
canvas.width = 800;
canvas.height = 600;

// レイヤーを追加する関数
function addLayer() {
    const fileInput = document.getElementById('upload');
    const files = fileInput.files;

    if (files.length === 0) {
        alert('画像を選択してください');
        return;
    }

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.src = event.target.result;
            img.onload = function() {
                // 新しいレイヤーの作成
                const layer = {
                    image: img,
                    x: 0,
                    y: 0,
                    width: img.width,
                    height: img.height
                };
                layers.push(layer);
                drawLayers();
            };
        };
        reader.readAsDataURL(file);
    }
}

// キャンバスにレイヤーを描画する関数
function drawLayers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // キャンバスをクリア

    for (const layer of layers) {
        ctx.drawImage(layer.image, layer.x, layer.y, layer.width, layer.height);
    }
}

// レイヤーをクリアする関数
function clearLayers() {
    layers.length = 0; // レイヤーの配列を空にする
    drawLayers(); // キャンバスを再描画
}