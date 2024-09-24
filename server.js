const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL接続設定
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // MySQLのユーザー名
    password: 'b0550219',  // MySQLのパスワード
    database: 'shirota111'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// ユーザー登録エンドポイント
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);  // パスワードをハッシュ化

    db.query('INSERT INTO Users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'User registered successfully' });
    });
});

// ログインエンドポイント
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM Users WHERE username = ?', [username], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

        const user = results[0];
        if (bcrypt.compareSync(password, user.password)) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

// サーバーの起動
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
