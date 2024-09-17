const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // 音声ファイルの保存先ディレクトリ
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // 音声ファイルの名前
    }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

// Endpoint for file upload
app.post('/upload', upload.single('audio'), (req, res) => {
    res.send('File uploaded successfully');
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});