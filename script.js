document.addEventListener('DOMContentLoaded', function() {
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
    }
});
