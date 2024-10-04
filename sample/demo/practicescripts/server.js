const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MongoDBに接続
mongoose.connect('mongodb://localhost:27017/knowledgebase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Knowledgeスキーマとモデルの定義
const knowledgeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Knowledge = mongoose.model('Knowledge', knowledgeSchema);

// JSONリクエストの処理
app.use(bodyParser.json());

// 新しいナレッジの追加 (Create)
app.post('/knowledge', async (req, res) => {
  try {
    const knowledge = new Knowledge(req.body);
    const savedKnowledge = await knowledge.save();
    res.status(201).json(savedKnowledge);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ナレッジの全てを取得 (Read - All)
app.get('/knowledge', async (req, res) => {
  try {
    const knowledgeList = await Knowledge.find();
    res.json(knowledgeList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 特定のナレッジを取得 (Read - One)
app.get('/knowledge/:id', async (req, res) => {
  try {
    const knowledge = await Knowledge.findById(req.params.id);
    if (!knowledge) return res.status(404).json({ message: 'Knowledge not found' });
    res.json(knowledge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ナレッジの更新 (Update)
app.put('/knowledge/:id', async (req, res) => {
  try {
    const updatedKnowledge = await Knowledge.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedKnowledge) return res.status(404).json({ message: 'Knowledge not found' });
    res.json(updatedKnowledge);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ナレッジの削除 (Delete)
app.delete('/knowledge/:id', async (req, res) => {
  try {
    const deletedKnowledge = await Knowledge.findByIdAndDelete(req.params.id);
    if (!deletedKnowledge) return res.status(404).json({ message: 'Knowledge not found' });
    res.json({ message: 'Knowledge deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// サーバー起動
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});