// module1.js

// カレンダーの初期化関数
function initCalendar() {
    const calendar = document.getElementById('calendar');
    const monthYearDisplay = document.getElementById('month-year');
    const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

    // 現在の月と年を取得
    const now = new Date();
    const month = now.getMonth(); // 0から11までの値
    const year = now.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // 月の日数を取得

    // 月と年を表示
    monthYearDisplay.innerText = `${year}年 ${month + 1}月`;

    // 曜日を表示
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day header';
        dayElement.innerText = day;
        calendar.appendChild(dayElement);
    });

    // シンプルなカレンダーの構築
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.innerText = day;

        //