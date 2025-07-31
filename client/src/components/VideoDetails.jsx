import React from 'react';
import { Card, Typography, Image } from 'antd';

const { Title, Paragraph, Text } = Typography;

const VideoDetails = ({ videoData }) => {
  return (
    <Card
      hoverable
      cover={<Image alt="thumbnail" src={videoData.thumbnail} style={{ maxHeight: 300, objectFit: 'cover' }} />}
      style={{ marginTop: '1rem' }}
    >
      <Title level={4}>{videoData.title || 'Instagram Reel'}</Title>
      <Paragraph>
        <Text strong>Username:</Text> @{videoData.username} <br />
        <Text strong>Views:</Text> {videoData.view_count} <br />
        <Text strong>Likes:</Text> {videoData.like_count}
      </Paragraph>
      <a href={videoData.url} target="_blank" rel="noopener noreferrer">
        View on Instagram
      </a>
    </Card>
  );
};

export default VideoDetails;
