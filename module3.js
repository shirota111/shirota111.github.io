// 月のプルダウンメニューのイベントリスナーを設定する関数
function setupMonthDropdown() {
    const monthSelector = document.getElementById('monthSelector');
    
    // 月のオプションを追加
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index; // 月のインデックス (0: January, 11: December)
        option.textContent = month; // 月の名前
        monthSelector.appendChild(option);
    });

    // 現在の月を選択する
    const currentMonth = new Date().getMonth(); // 現在の月 (0-11)
    monthSelector.value = currentMonth;

    // プルダウン変更時にカレンダーを更新
    monthSelector.addEventListener('change', function() {
        const selectedMonth = parseInt(this.value);
        updateCalendar(selectedMonth);
    });
}

// カレンダーを更新する関数
function updateCalendar(month) {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = ''; // 既存のカレンダーをクリア

    // 月の日数を取得
    const year = new Date().getFullYear(); // 現在の年
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // 月の日数

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

// 初期化関数の呼び出し
setupMonthDropdown();