const calendar = document.getElementById('calendar');
const monthSelector = document.getElementById('monthSelector');
const todoList = document.getElementById('todo-list');
const todos = {};

// 月の名前を設定
const months = ["January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"];

// 月セレクターを設定
months.forEach((month, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.text = month;
    monthSelector.appendChild(option);
});

// カレンダー生成
function generateCalendar(month, year) {
    calendar.innerHTML = '';
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let date = 1;

    // テーブルヘッダー
    const headerRow = calendar.insertRow();
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach(day => {
        const th = document.createElement('th');
        th.innerText = day;
        headerRow.appendChild(th);
    });

    // 日付生成
    for (let i = 0; i < 6; i++) {
        const row = calendar.insertRow();
        for (let j = 0; j < 7; j++) {
            const cell = row.insertCell();
            if (i === 0 && j < firstDay || date > daysInMonth) {
                cell.innerHTML = "";
            } else {
                cell.innerHTML = date;
                cell.addEventListener('click', () => showTasks(date, month, year));
                date++;
            }
        }
    }
}

// ToDo追加
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const taskDate = document.getElementById('task-date').value;
    const date = new Date(taskDate);
    const formattedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    if (!todos[formattedDate]) todos[formattedDate] = [];
    todos[formattedDate].push(todoInput.value);
    todoInput.value = '';
    displayTodos(formattedDate);
}

// ToDo表示
function displayTodos(formattedDate) {
    todoList.innerHTML = '';
    if (todos[formattedDate]) {
        todos[formattedDate].forEach(task => {
            const li = document.createElement('li');
            li.innerText = task;
            todoList.appendChild(li);
        });
    }
}

// 日付をクリックしたらその日のタスクを表示
function showTasks(date, month, year) {
    const formattedDate = `${year}-${month}-${date}`;
    displayTodos(formattedDate);
}

// 初期化
const currentDate = new Date();
generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
monthSelector.value = currentDate.getMonth();

// 月が変わったらカレンダーを更新
monthSelector.addEventListener('change', (e) => {
    const selectedMonth = e.target.value;
    generateCalendar(parseInt(selectedMonth), currentDate.getFullYear());
});

// ログリストの要素を取得
const logList = document.getElementById('log-list');

// ログを追加する関数
function addLog(message) {
    const logItem = document.createElement('li');
    logItem.innerText = message;
    logList.appendChild(logItem);
}

// ToDo追加にログを追加
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const taskDate = document.getElementById('task-date').value;
    const date = new Date(taskDate);
    const formattedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    if (!todos[formattedDate]) todos[formattedDate] = [];
    todos[formattedDate].push(todoInput.value);
    
    // ToDoリストが更新されたことをログに追加
    addLog(`Task "${todoInput.value}" added for ${formattedDate}`);
    
    todoInput.value = '';
    displayTodos(formattedDate);
}

// 日付をクリックした際にログを記録
function showTasks(date, month, year) {
    const formattedDate = `${year}-${month}-${date}`;
    displayTodos(formattedDate);
    
    // 日付をクリックしたことをログに追加
    addLog(`Viewing tasks for ${formattedDate}`);
}