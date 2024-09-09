// script.js
function generateRandomPanels() {
    const container = document.getElementById('comic-container');
    container.innerHTML = ''; // 既存のコマをクリア

    const numberOfPanels = Math.floor(Math.random() * 6) + 3; // 3〜8コマの範囲でランダム

    container.style.gridTemplateColumns = `repeat(${Math.ceil(Math.sqrt(numberOfPanels))}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${Math.ceil(numberOfPanels / Math.ceil(Math.sqrt(numberOfPanels)))}, 1fr)`;

    for (let i = 0; i < numberOfPanels; i++) {
        const panel = document.createElement('div');
        panel.className = 'comic-panel';

        // ランダムなサイズ設定
        const width = Math.random() * 150 + 100; // 100px〜250px
        const height = Math.random() * 150 + 100; // 100px〜250px
        panel.style.width = `${width}px`;
        panel.style.height = `${height}px`;

        // 各コマに画像を追加（例として同じ画像を使用）
        const img = document.createElement('img');
        img.src = 'https://via.placeholder.com/150'; // プレースホルダー画像
        img.alt = 'コマ画像';
        panel.appendChild(img);

        // 吹き出しの追加
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const textarea = document.createElement('textarea');
        textarea.placeholder = 'ここに文字を入力';
        bubble.appendChild(textarea);
        panel.appendChild(bubble);

        container.appendChild(panel);
    }
}