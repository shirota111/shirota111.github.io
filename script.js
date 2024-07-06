document.addEventListener('DOMContentLoaded', function() {
    // BGMコンテナの初期位置を設定
    const bgmContainer = document.getElementById('bgm-container');
    bgmContainer.style.position = 'absolute';
    bgmContainer.style.top = '20px';
    bgmContainer.style.left = '20px';

    // ドラッグ可能にするための設定
    let isDragging = false;
    let initialX;
    let initialY;

    // マウスが押されたときの処理
    bgmContainer.addEventListener('mousedown', function(e) {
        isDragging = true;
        initialX = e.clientX - bgmContainer.offsetLeft;
        initialY = e.clientY - bgmContainer.offsetTop;
    });

    // マウスが離されたときの処理
    bgmContainer.addEventListener('mouseup', function() {
        isDragging = false;
    });

    // マウスが動いたときの処理
    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            e.preventDefault();
            const newX = e.clientX - initialX;
            const newY = e.clientY - initialY;
            bgmContainer.style.left = `${newX}px`;
            bgmContainer.style.top = `${newY}px`;
        }
    });
});
