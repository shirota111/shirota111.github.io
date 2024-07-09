document.addEventListener('DOMContentLoaded', function() {
    const bookContainer = document.getElementById('book-container');
    
    const links = [
        { text: 'To DO LIST', href: 'https://shirota111.github.io/todolist/todo.html' },
        { text: 'github', href: 'https://github.com/shirota111' },
        { text: 'CHATGPT', href: 'https://chatgpt.com/g/g-PGPnMa4Ph-ri-ben-yu-rokuin' },
        { text: 'twitter', href: 'https://x.com/nikothewall/status/1808267371725181330' },
        { text: 'リンク5', href: 'https://example.com/5' },
        { text: 'リンク6', href: 'https://example.com/6' },
        { text: 'リンク7', href: 'https://example.com/7' },
        { text: 'リンク8', href: 'https://example.com/8' },
        { text: 'リンク9', href: 'https://example.com/9' },
        { text: 'リンク10', href: 'https://example.com/10' },
    ];
    
    for (let i = 0; i < 5; i++) {
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
        (function(index) {
            bookLink.addEventListener('click', function(event) {
                event.preventDefault();
                alert(`リンク ${index + 1} がクリックされました。リンク先: ${bookLink.href}`);
                window.location.href = bookLink.href;  // アラートの後にリンク先に移動
            });
        })(i);
    }
});
