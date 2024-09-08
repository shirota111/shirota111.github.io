// module1.js


// 月のプルダウンを生成する関数
function createMonthDropdown() {
    const monthSelector = document.getElementById('monthSelector');
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // 月のオプションを動的に追加
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index; // 月のインデックスを値として設定 (0: January, 11: December)
        option.textContent = month; // 月の名前を表示
        monthSelector.appendChild(option);
    });
    
    // デフォルトで現在の月を選択
    const currentMonth = new Date().getMonth(); // 現在の月 (0-11)
    monthSelector.value = currentMonth;
}

// カレンダーを生成する関数 (例として簡単なもの)
function generateCalendar(month) {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = ''; // 既存のカレンダーをクリア

    // 簡単なカレンダーの生成 (月の日数に基づいて生成)
    const daysInMonth = new Date(2024, month + 1, 0).getDate(); // 月の日数を取得

    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('div');
        cell.classList.add('calendar-day');
        cell.textContent = day;
        calendar.appendChild(cell);
    }
}

// プルダウン変更時にカレンダーを更新
document.getElementById('monthSelector').addEventListener('change', function() {
    const selectedMonth = parseInt(this.value);
    generateCalendar(selectedMonth);
});

// 初期化
window.onload = function() {
    createMonthDropdown(); // 月のプルダウンを生成
    generateCalendar(new Date().getMonth()); // 初期カレンダー表示
};