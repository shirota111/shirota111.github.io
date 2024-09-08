// 月のプルダウンメニューを作成する関数
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

// カレンダーを生成する関数
function generateCalendar(month) {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = ''; // 既存のカレンダーをクリア

    // 月の日数を取得
    const year = new Date().getFullYear(); // 現在の年
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // 月の日数を取得

    // カレンダーの日付を生成
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.innerText = day;
        
        // クリックイベントリスナーを追加
        dayElement.addEventListener('click', () => {
            alert(`You clicked day ${day}`);
            // module2.js にイベント情報を渡す
            handleEventInModule2(day);
        });

        calendar.appendChild(dayElement);
    }
}

// 月のプルダウン変更時にカレンダーを更新
document.getElementById('monthSelector').addEventListener('change', function() {
    const selectedMonth = parseInt(this.value);
    generateCalendar(selectedMonth);
});

// 初期化関数
function initCalendar() {
    createMonthDropdown(); // 月のプルダウンを生成
    const currentMonth = new Date().getMonth(); // 現在の月を取得
    generateCalendar(currentMonth); // 初期カレンダーの表示
}

// 初期化関数の呼び出し
initCalendar();