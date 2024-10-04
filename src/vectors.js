// 座標表示機能
document.addEventListener("mousemove", function(event) {
    document.getElementById('coord-x').textContent = event.clientX;
    document.getElementById('coord-y').textContent = event.clientY;
});

// カレンダー初期化
function initCalendar() {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = ''; // カレンダーをリセット

    // 7x6グリッド作成 (日曜日〜土曜日)
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let row = document.createElement('tr');
    daysOfWeek.forEach(day => {
        let th = document.createElement('th');
        th.textContent = day;
        row.appendChild(th);
    });
    calendar.appendChild(row);

    // 仮のカレンダーデータ (日数)
    for (let i = 0; i < 6; i++) {
        row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            let td = document.createElement('td');
            td.textContent = i * 7 + j + 1;
            row.appendChild(td);
        }
        calendar.appendChild(row);
    }
}

initCalendar();

// ToDoリスト機能
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const logList = document.getElementById('log-list');

    const task = todoInput.value;
    if (task === '') return; // 空の場合は何もしない

    // ToDoアイテムを追加
    const li = document.createElement('li');
    li.textContent = task;
    todoList.appendChild(li);

    // ログに追加
    const logItem = document.createElement('li');
    logItem.textContent = `Added ToDo: ${task}`;
    logList.appendChild(logItem);

    // 入力をクリア
    todoInput.value = '';
}