// src/components/VideoInputForm.jsx
import React, { useState } from "react";
import { Input, Button, Spin, Alert, Typography, Image } from "antd";
import axios from "axios";

const { Paragraph } = Typography;

export default function VideoInputForm() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url) return;

    setLoading(true);
    setError("");
    setVideoData(null);

    try {
      const response = await axios.get("http://localhost:5000/api/instagram",
        {
          params: { url },
          headers: {
            "x-rapidapi-host": "instagram-media-downloader.p.rapidapi.com",
            "x-rapidapi-key": "ecc5850a81msh5ff21464e4b3876p107e91jsn8e6df4366e9a", // Replace with your actual key
          },
        }
      );

     if (response.data?.medias?.length > 0) {
  setVideoData({
    url: response.data.medias[0].url,
    thumbnail: response.data.thumbnail,
    title: response.data.title,
    author: response.data.author,
  });
} else {
        setError("Media not found or URL is private.");
      }
    } catch (err) {
      setError("Something went wrong. Check your API key or URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Input
        placeholder="Paste Instagram Reel URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <Button type="primary" block onClick={handleDownload} disabled={!url}>
        Fetch Video
      </Button>

      {loading && (
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <Spin />
        </div>
      )}

      {error && (
        <Alert
          style={{ marginTop: "1rem" }}
          message="Error"
          description={error}
          type="error"
          showIcon
        />
      )}

      {videoData && (
        <div style={{ marginTop: "2rem" }}>
          <Image src={videoData.thumbnail} alt="Thumbnail" width="100%" />
          <Paragraph>
            <strong>Title:</strong> {videoData.title}
          </Paragraph>
          <Paragraph>
            <strong>Author:</strong> {videoData.author}
          </Paragraph>
          <Button
            type="primary"
            href={videoData.url}
            target="_blank"
            block
            style={{ marginTop: "1rem" }}
          >
            Download Reel 🎬
          </Button>
        </div>
      )}
    </>
  );
}
