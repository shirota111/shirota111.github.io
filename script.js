document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
    const bookContainer = document.getElementById('book-container');
    
    const links = [
        { text: 'リンク1', href: 'https://example.com/1' },
        { text: 'リンク2', href: 'https://example.com/2' },
        { text: 'リンク3', href: 'https://example.com/3' },
        { text: 'リンク4', href: 'https://example.com/4' },
        { text: 'リンク5', href: 'https://example.com/5' },
        { text: 'リンク6', href: 'https://example.com/6' },
        { text: 'リンク7', href: 'https://example.com/7' },
        { text: 'リンク8', href: 'https://example.com/8' },
        { text: 'リンク9', href: 'https://example.com/9' },
        { text: 'リンク10', href: 'https://example.com/10' },
    ];
    
    for (let i = 0; i < 4; i++) {
        const bookWrap = document.createElement('div');
        bookWrap.className = 'book-wrap';
        
        const bookInput = document.createElement('input');
        bookInput.id = 'book-simple-open-' + i;
        bookInput.type = 'checkbox';
        bookInput.name = 'book-simple-switch';
        bookInput.value = 'action';

        const bookSimple = document.createElement('div');
        bookSimple.className = 'book-simple';
        bookSimple.id = 'book-simple-contents-' + i;

        const bookInbox = document.createElement('div');
        bookInbox.className = 'book-inbox';

        const bookList = document.createElement('ul');

        const bookItem1 = document.createElement('li');
        const bookLink = document.createElement('a');
        bookLink.href = links[i].href;  // 各リンクに個別のURLを設定
        bookLink.textContent = links[i].text;
        bookItem1.appendChild(bookLink);
        bookItem1.append('←リンクも使えます。');

        const bookItem2 = document.createElement('li');
        bookItem2.textContent = 'この本はCSSで作成されています。';

        const bookItem3 = document.createElement('li');
        bookItem3.textContent = 'カーソルがホバーしている間は開いたままです。';

        bookList.appendChild(bookItem1);
        bookList.appendChild(bookItem2);
        bookList.appendChild(bookItem3);

        bookInbox.appendChild(bookList);
        bookSimple.appendChild(bookInbox);

        const bookLabel = document.createElement('label');
        bookLabel.className = 'book-simple-switch';
        bookLabel.htmlFor = 'book-simple-open-' + i;
        bookLabel.setAttribute('data-book-simple-open', '開く');
        bookLabel.setAttribute('data-book-simple-shut', '閉じる');
        bookLabel.textContent = '本を';

        bookWrap.appendChild(bookInput);
        bookWrap.appendChild(bookSimple);
        bookWrap.appendChild(bookLabel);

        bookContainer.appendChild(bookWrap);

        // 各リンクにイベントリスナーを追加
        bookLink.addEventListener('click', function(event) {
            event.preventDefault();
            // ここでリンクごとに異なる動作を実行できます
            alert(`リンク ${i + 1} がクリックされました。リンク先: ${bookLink.href}`);
            // 必要に応じてwindow.location.href = bookLink.href;を使用してリダイレクトすることもできます
        });
=======
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
>>>>>>> 40d005d3b2921c069bdbd9c2591e7ce9f4f9b46b
    }
});
