// 盤面の初期化

const board = document.getElementById('shogi-board');  // 将棋盤の要素を取得

// 9x9のマスを生成と四角クラスの生成
for (let i = 0; i < 81; i++) {  // 9x9の将棋盤の81個のマスを生成するループ
    const square = document.createElement('div');  // 新しいマス目（div要素）を作成
    square.className = 'square';  // マス目にクラス名 'square' を設定
    square.dataset.index = i;  // マス目にインデックス番号を設定（0から80まで）

    const row = Math.floor(i / 9);  // 現在の行番号を計算（0から8まで）
    const col = i % 9;  // 現在の列番号を計算（0から8まで）

    //　ラベルの生成 (A~I)
    if (row === 0) {  // 最初の行の場合
        const horizontalLabel = document.createElement('div');  // 水平ラベル用のdiv要素を作成
        horizontalLabel.className = 'coordinate-label horizontal-label';  // ラベルにクラスを設定
        horizontalLabel.textContent = String.fromCharCode(65 + col);  // ラベルにA〜Iの文字を設定
        square.appendChild(horizontalLabel);  // マス目に水平ラベルを追加
    }

    //　ラベルの生成 (1~9)
    if (col === 0) {  // 最初の列の場合
        const verticalLabel = document.createElement('div');  // 垂直ラベル用のdiv要素を作成
        verticalLabel.className = 'coordinate-label vertical-label';  // ラベルにクラスを設定
        verticalLabel.textContent = 1 + row;  // ラベルに1〜9の数字を設定
        square.appendChild(verticalLabel);  // マス目に垂直ラベルを追加
    }

    // 駒移動のためのイベントリスナーを追加
    square.addEventListener('dragover', handleDragOver);  // 駒がドラッグされたときの処理を追加
    square.addEventListener('drop', handleDrop);  // 駒がドロップされたときの処理を追加

    board.appendChild(square);  // 作成したマス目を将棋盤に追加
}

// 駒データの初期位置
const komaData = [
    { piece: '一般人', position: '7A'},
    { piece: '一般人', position: '7B'},
    { piece: '一般人', position: '7C'},
    { piece: '一般人', position: '7D'},
    { piece: '一般人', position: '7E'},
    { piece: '一般人', position: '7F'},
    { piece: '一般人', position: '7G'},
    { piece: '一般人', position: '7H'},
    { piece: '一般人', position: '7I'},
    { piece: '乙π侍', position: '8H'},
    { piece: 'Ama無能', position: '8B'},
    { piece: '朕', position: '9E'},
    { piece: '野珍', position: '9A'},
    { piece: '狸馬', position: '9B'},
    { piece: '訓兄', position: '9D'},
    { piece: '訓兄', position: '9F'},
    { piece: '猿短', position: '9C'},
    { piece: '猿短', position: '9G'},
    { piece: '野珍', position: '9I'},
    { piece: '狸馬', position: '9H'},
    { piece: '一般人', position: '3A'},
    { piece: '一般人', position: '3B'},
    { piece: '一般人', position: '3C'},
    { piece: '一般人', position: '3D'},
    { piece: '一般人', position: '3E'},
    { piece: '一般人', position: '3F'},
    { piece: '一般人', position: '3G'},
    { piece: '一般人', position: '3H'},
    { piece: '一般人', position: '3I'},
    { piece: '乙π侍', position: '2H'},
    { piece: 'Ama無能', position: '2B'},
    { piece: '朕', position: '1E'},
    { piece: '野珍', position: '1A'},
    { piece: '狸馬', position: '1B'},
    { piece: '訓兄', position: '1D'},
    { piece: '訓兄', position: '1F'},
    { piece: '猿短', position: '1C'},
    { piece: '猿短', position: '1G'},
    { piece: '野珍', position: '1I'},
    { piece: '狸馬', position: '1H'}
];// 駒を初期位置に配置
komaData.forEach(koma => {  // komaData配列の各駒データに対して処理を実行
    const position = convertPosition(koma.position);  // 駒の位置をインデックスに変換
    const square = board.children[position];  // インデックスに対応する盤面のマスを取得
    const pieceElement = document.createElement('div');  // 新しい駒の要素を作成
    pieceElement.className = `piece ${koma.piece}`;  // 駒のクラスを設定
    pieceElement.textContent = koma.piece;  // 駒の表示名を設定
    pieceElement.draggable = true;  // 駒をドラッグ可能に設定
    pieceElement.addEventListener('dragstart', handleDragStart);  // ドラッグ開始時のイベントを設定
    square.appendChild(pieceElement);  // 駒を盤面に追加
});

// 将棋の座標をインデックスに変換する関数
function convertPosition(position) {
    const letterToNumber = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8 };  // 列の文字を数値に変換するマッピング
    const rank = parseInt(position.charAt(0)) - 1;  // 行を数値に変換し、1を引いてインデックスに対応させる
    const file = letterToNumber[position.charAt(1)];  // 列の文字を数値に変換
    return rank * 9 + file;  // インデックスを計算して返す
}

 
 

// ドラッグ開始イベントの処理
function handleDragStart(event) {
    const square = event.target.closest('.square');  // 駒の親要素であるマスを取得
    event.dataTransfer.setData('text/plain', square.dataset.index);  // ドラッグ開始時にマスのインデックスを保存
}

// ドラッグオーバーイベントの処理
function handleDragOver(event) {
    event.preventDefault();  // ドラッグオーバー時のデフォルト動作を無効化
}

// ドロップイベントの処理
function handleDrop(event) {
    event.preventDefault();  // ドロップ時のデフォルト動作を無効化
    const oldIndex = event.dataTransfer.getData('text/plain');  // ドラッグ元のインデックスを取得
    const newSquare = event.target.closest('.square');  // ドロップ先のマスを取得
    const newIndex = newSquare.dataset.index;  // ドロップ先のインデックスを取得

    if (oldIndex === undefined || newIndex === undefined || oldIndex === newIndex) return;  // 無効な操作は無視

    // ドラッグ元とドロップ先のマスを取得
    const oldSquare = document.querySelector(`.square[data-index='${oldIndex}']`);
    if (!oldSquare || !newSquare) return;  // マスが見つからない場合は処理を中断

    // ドラッグされた駒を取得
    const pieceElement = oldSquare.querySelector('.piece');
    if (!pieceElement) return;  // 駒が見つからない場合は処理を中断

    // 駒を新しい位置に移動
    oldSquare.removeChild(pieceElement);  // 元の位置から駒を削除
    newSquare.appendChild(pieceElement);  // 新しい位置に駒を追加
}

// イベントリスナーの追加
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('dragstart', handleDragStart);
    square.addEventListener('dragover', handleDragOver);
    square.addEventListener('drop', handleDrop);
});

