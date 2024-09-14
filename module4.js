// module4.js


// 外部HTMLファイルを読み込み、指定のコンテナに挿入
fetch('4.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu-container').innerHTML = data;

// CSV形式でToDoリストをダウンロードする関数
function downloadTodoListAsCSV() {
    const csvRows = [];
    // CSVのヘッダーを作成
    csvRows.push('Day,Task,Contact');

    // ToDoリストの内容をCSV形式で追加
    todoList.forEach(item => {
        csvRows.push(`${item.day},${item.task},${item.contact}`);
    });

    // CSVデータを文字列に変換
    const csvString = csvRows.join('\n');

    // Blobオブジェクトを作成し、CSVファイルとしてダウンロード
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    // ダウンロード用のリンクを作成
    const a = document.createElement('a');
    a.href = url;
    a.download = 'todo-list.csv';
    document.body.appendChild(a);
    a.click();

    // リンクを削除
    document.body.removeChild(a);
}

// ダウンロードボタンをクリックしたときに呼び出す関数
document.getElementById('download-csv-button').addEventListener('click', downloadTodoListAsCSV);