<?php
// 設定を読み込む
$settings = json_decode(file_get_contents('settings.json'), true);

// デフォルト値の設定
$theme = $settings['theme'] ?? 'light';
$notifications = $settings['notifications'] ?? 0;
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>設定画面</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        form { width: 300px; padding: 20px; border: 1px solid #ccc; }
        input, select { width: 100%; padding: 8px; margin: 10px 0; }
    </style>
</head>
<body>
    <h1>設定画面</h1>
    <form action="save_settings.php" method="POST">
        <label for="theme">テーマ:</label>
        <select id="theme" name="theme">
            <option value="light" <?= $theme == 'light' ? 'selected' : '' ?>>ライト</option>
            <option value="dark" <?= $theme == 'dark' ? 'selected' : '' ?>>ダーク</option>
        </select>

        <label for="notifications">通知を受け取る:</label>
        <input type="checkbox" id="notifications" name="notifications" value="1" <?= $notifications ? 'checked' : '' ?>>

        <button type="submit">保存</button>
    </form>
</body>
</html>