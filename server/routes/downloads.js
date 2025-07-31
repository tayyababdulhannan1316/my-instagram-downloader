const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: 'No URL provided' });

  // For now, return dummy data
  res.json({
    message: 'Download request received!',
    url,
    downloadLink: 'https://example.com/fake-video.mp4',
  });
});

module.exports = router;
