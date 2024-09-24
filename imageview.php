<?php
$pdo = new PDO('mysql:host=localhost;dbname=your_database', 'root', 'b0550219');
$stmt = $pdo->prepare("SELECT image_data, image_name FROM images WHERE id = ?");
$stmt->execute([1]);  // 例: IDが1の画像を取得
$image = $stmt->fetch(PDO::FETCH_ASSOC);

header("Content-Type: image/jpeg");
echo $image['image_data'];  // 画像データを出力して表示
?>
