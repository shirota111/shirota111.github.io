document.addEventListener('DOMContentLoaded', function() {
    const squareContainer = document.getElementById('square-container');
    const numberOfSquares = 10; // 表示する正方形の数

    // 指定された数の正方形を生成
    for (let i = 1; i <= numberOfSquares; i++) {
        const square = createSquare(i); // 正方形を生成する関数を呼び出し
        squareContainer.appendChild(square); // 正方形をコンテナに追加
    }

    // 正方形を生成する関数
    function createSquare(index) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = `Square ${index}`; // 正方形にテキストを追加

        square.addEventListener('click', function() {
            toggleSize(square); // クリック時の処理を追加
        });

        return square;
    }

    // 正方形のサイズ変更と他の正方形の元に戻す関数
    function toggleSize(clickedSquare) {
        // クリックされた正方形を拡大表示する
        if (clickedSquare.style.transform !== 'scale(5)') {
            document.querySelectorAll('.square').forEach(function (square) {
                square.style.transform = 'scale(1)';
                square.style.zIndex = '1';
                square.style.color = 'white';
            });

            clickedSquare.style.transform = 'scale(5)';
            clickedSquare.style.zIndex = '10';
            clickedSquare.style.color = 'black';
        } else {
            // クリックされた正方形がすでに拡大表示されている場合は元に戻す
            clickedSquare.style.transform = 'scale(1)';
            clickedSquare.style.zIndex = '1';
            clickedSquare.style.color = 'white';
        }
    }
});
