<?php
// 設定内容をファイルに保存する例

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // POSTデータを取得
    $theme = $_POST['theme'];
    $notifications = isset($_POST['notifications']) ? 1 : 0;

    // 設定を配列にまとめる
    $settings = [
        'theme' => $theme,
        'notifications' => $notifications
    ];

    // 設定をJSONファイルに保存
    file_put_contents('settings.json', json_encode($settings));

    // 保存完了メッセージとリダイレクト
    echo "設定が保存されました。<br>";
    echo "<a href='index.php'>戻る</a>";
}
?>