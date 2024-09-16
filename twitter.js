const axios = require('axios');

// Bearer Token (セキュリティ上、環境変数から取得するのが推奨されます)
const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAAOmvwEAAAAA8rOpAos4IwHfvpuYLlWO0G%2FHhX0%3DktYwVDdEnO1xoSNv7SqpP3WqKdyTsO7P4WZcPbhqstxZLAqBqD';

async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.twitter.com/2/users/by/username/${username}`, {
      headers: {
        'Authorization': `Bearer ${bearerToken}`
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching user data:', error.response ? error.response.data : error.message);
  }
}

// ユーザー名を指定してデータを取得
fetchUserData('jack');