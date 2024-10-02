<?php
$pdo = new PDO('mysql:host=localhost;dbname=your_database', 'root', 'b0550219');
$imageFile = file_get_contents('C:\Users\PC\shirota111.github.io\4oxbrj7a.png');  // 画像ファイルを読み込む
$imageName = '4oxbrj7a.png';

$stmt = $pdo->prepare("INSERT INTO images (image_data, image_name) VALUES (?, ?)");
$stmt->bindParam(1, $imageFile, PDO::PARAM_LOB);
$stmt->bindParam(2, $imageName, PDO::PARAM_STR);
$stmt->execute();
?>
