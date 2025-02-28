<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // フォームから送信されたユーザー名とパスワードを取得
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Pythonスクリプトを実行するためのコマンド
    $command = escapeshellcmd("python3 /home/shirota111/knowledge/php/interface.py $username $password");

    // Pythonスクリプトを実行し、その出力を取得
    $output = shell_exec($command);
    echo "<pre>$output</pre>";  // 出力を表示
}
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ログインフォーム</title>
</head>
<body>

<h2>ログイン</h2>
<form method="POST" action="">
    <label for="username">ユーザー名:</label>
    <input type="text" name="username" required><br>
    <label for="password">パスワード:</label>
    <input type="password" name="password" required><br>
    <input type="submit" value="ログイン">
</form>

</body>
</html>