// module2.js


// ToDoリストの初期化
const todoList = [];

// module1から呼び出される関数
function handleEventInModule2(selectedDay) {
    const taskInput = document.getElementById('todo-task-input');
    const contactInput = document.getElementById('todo-contact-input');

    // タスクを追加するための確認
    const task = prompt(`タスクを追加してね day ${selectedDay}`);
    const contact = prompt(`タスクに関する連絡先を追加してね`);

    if (task && contact) {
        // タスクをToDoリストに追加
        const todoItem = {
            day: selectedDay,
            task: task,
            contact: contact
        };
        todoList.push(todoItem);
        updateTodoList();
    }
}

// ToDoリストを更新して表示
function updateTodoList() {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = '';  // 既存のリストをクリア

    todoList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Day: ${item.day}, Task: ${item.task}, Contact: ${item.contact}`;
        todoListElement.appendChild(listItem);
    });
}