// script.js
function generateRandomPanels() {
    const container = document.getElementById('comic-container');
    container.innerHTML = ''; // 既存のコマをクリア

    const numberOfPanels = 4; // コマの数を4つに固定

    // グリッドレイアウトを設定
    container.style.gridTemplateColumns = `repeat(2, 1fr)`;
    container.style.gridTemplateRows = `repeat(2, 1fr)`;

    for (let i = 0; i < numberOfPanels; i++) {
        const panel = document.createElement('div');
        panel.className = 'comic-panel';

        // ランダムな画像を挿入（例としてプレースホルダー画像を使用）
        const img = document.createElement('img');
        img.src = 'https://via.placeholder.com/400x200'; // プレースホルダー画像
        img.alt = 'コマ画像';
        panel.appendChild(img);

        // 吹き出しの追加
        const bubble = document.createElement('div');
        bubble.className = 'bubble';

        // 吹き出しの形状をランダムに決定
        const shape = Math.random() > 0.5 ? 'circle' : 'star';
        bubble.classList.add(shape);

        // 吹き出し内の文字入力欄と文字サイズ変更用のセレクトボックス
        const textarea = document.createElement('textarea');
        textarea.placeholder = 'ここに文字を入力';
        bubble.appendChild(textarea);

        const fontSizeSelect = document.createElement('select');
        const fontSizes = [12, 16, 20, 24, 28, 32];
        fontSizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = `${size}px`;
            fontSizeSelect.appendChild(option);
        });
        fontSizeSelect.addEventListener('change', () => {
            textarea.style.fontSize = fontSizeSelect.value + 'px';
        });
        bubble.appendChild(fontSizeSelect);

        panel.appendChild(bubble);
        container.appendChild(panel);
    }
}