const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/download', async (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    // Replace with a real free API
    const apiUrl = `https://instagram-media-downloader.p.rapidapi.com/rapid/post.php?url=${encodeURIComponent(url)}`;

    const options = {
      method: 'GET',
      url: apiUrl,
      headers: {
        'X-RapidAPI-Key': 'process.env.RAPIDAPI_KEY',
        'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    const downloadLink = response.data?.media || null;

    if (!downloadLink) throw new Error("Media not found");

    res.json({ downloadLink });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch media' });
  }
});

app.listen(5000, () => console.log('Server started on http://localhost:5000'));
