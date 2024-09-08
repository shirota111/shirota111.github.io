// module1.js

// カレンダーの初期化関数
function initCalendar() {
    const calendar = document.getElementById('calendar');

    // シンプルなカレンダーの構築
    for (let day = 1; day <= 30; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.innerText = day;
        
        // クリックイベントリスナーを追加
        dayElement.addEventListener('click', () => {
            // module2.js にイベント情報を渡す
            handleEventInModule2(day);
        });

        calendar.appendChild(dayElement);
    }
}

// 初期化関数の呼び出し
initCalendar();