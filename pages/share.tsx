import React, { useState } from 'react';
import { Container, TextInput, Button, Loader, Notification, Text, Group } from '@mantine/core';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { generateCaptions } from '../components/textGen'; // Import the API function
import { platform } from 'os';

function Share() {
  const [coinName, setCoinName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Handle input change and save to localStorage
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCoinName(value);
    localStorage.setItem('coinName', value);
  };

  // Function to create a shareable URL
  const handleShare = async (platform: 'twitter' | 'linkedin') => {
    const tokenName = localStorage.getItem('coinName') || 'defaultToken';
    const shareUrl = `https://coin.new/${tokenName}`;

    try {
      setLoading(true);
      const prompt = `Create a catchy social media post to promote the cryptocurrency token "${tokenName}" with a sharing link: ${shareUrl}.`;
      const message = await generateCaptions(prompt);
      const encodedMessage = encodeURIComponent(message || 'Check out this cool token!');

      let platformUrl = '';

      switch (platform) {
        case 'twitter':
          platformUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}`;
          break;
        case 'linkedin':
          platformUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodedMessage}`;
          break;
        default:
          alert('Platform not supported!');
          return;
      }

      window.open(platformUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      alert('Failed to generate message. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000); // Hide after 5 seconds
  };

  return (
    <Container style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Text size="xl" weight={700} mb="md">
        Your Coin Matters!
      </Text>

      <Text size="sm" color="dimmed" mb="xl" style={{ maxWidth: '600px' }}>
        Sharing your coin with friends helps expand its value and awareness. Use the power of social media to spread the word!
      </Text>

      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ width: '100%', maxWidth: '400px', marginBottom: '1rem' }}
      >
        <TextInput
          placeholder="Enter your coin name"
          value={coinName}
          onChange={handleInputChange}
          mb="md"
        />
        <Button
          variant="filled"
          color="blue"
          fullWidth
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <Loader size="sm" /> : 'Submit'}
        </Button>
      </form>

      <Group spacing="lg" mb="lg">
        <FaTwitter
          size={40}
          color="#1DA1F2"
          style={{ cursor: 'pointer' }}
          onClick={() => handleShare('twitter')}
        />
        <FaLinkedin
          size={40}
          color="#0077B5"
          style={{ cursor: 'pointer' }}
          onClick={() => handleShare('linkedin')}
        />
      </Group>

      {showNotification && (
        <Notification color="blue" title="Sharing Notification" onClose={() => setShowNotification(false)}>
          Click on the social media icons to share your coin!
        </Notification>
      )}
    </Container>
  );
}

export default Share;
