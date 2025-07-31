import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // Load variables from .env

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/instagram", async (req, res) => {
  const { url } = req.query;
    console.log("🔍 Requested URL:", url);

  try {
    const response = await axios.get(
      "https://instagram-media-downloader.p.rapidapi.com/rapid/post.php",
      {
        params: { url },
        headers: {
          "x-rapidapi-host": "instagram-media-downloader.p.rapidapi.com",
          "x-rapidapi-key": "process.env.RAPIDAPI_KEY", // Replace this
        },
      }
    );
    console.log("✅ API Response:", response.data);
    res.json(response.data);
  } catch (err) {
    console.error("❌ Error from RapidAPI:", err.response?.data || err.message);
    res.status(500).json({ error: "API error. Try again later." });
  }
});

app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
