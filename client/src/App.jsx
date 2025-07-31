import React, { useState } from 'react';
import { Typography, Layout, message } from 'antd';
import axios from 'axios';
import VideoInputForm from './components/VideoInputForm';
import VideoDetails from './components/VideoDetails';

const { Title } = Typography;
const { Content } = Layout;

function App() {
  const [videoData, setVideoData] = useState(null);

  const fetchVideoData = async (inputUrl) => {
    const encodedUrl = encodeURIComponent(inputUrl);
    const options = {
      method: 'GET',
      url: `https://instagram-api-media-downloader.p.rapidapi.com/download?url=${encodedUrl}`,
      headers: {
        'x-rapidapi-host': 'instagram-api-media-downloader.p.rapidapi.com',
        'x-rapidapi-key': 'your_api_key_here', // <-- Replace this with your actual key
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data?.data;

      if (data && !data.error) {
        setVideoData(data);
      } else {
        setVideoData(null);
        message.error(data?.message || 'Failed to fetch video.');
      }
    } catch (err) {
      console.error(err);
      setVideoData(null);
      message.error('API request failed.');
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
          width: '100%',
          maxWidth: '480px',
        }}>
          <Title level={3} style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#1677ff' }}>
            📥 Insta Reels Downloader
          </Title>
          <VideoInputForm onSubmit={fetchVideoData} />
          {videoData && <VideoDetails videoData={videoData} />}
        </div>
      </Content>
    </Layout>
  );
}

export default App;
