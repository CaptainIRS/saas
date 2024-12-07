import React, { useState } from 'react';
import { Container, Title, Text } from '@mantine/core';
import { HeroBackground } from './HeroBackground';
import { CoinInput } from './CoinInput';

export const Hero: React.FC = () => {
  const [coinName, setCoinName] = useState('');

  const handleSubmit = () => {
    if (coinName.trim()) {
      console.log('Creating coin:', coinName);
      // Handle coin creation logic here
    }
  };

  return (
    <HeroBackground>
      <Container size="md">
        <div className="text-center space-y-8">
          <Title
            className="text-white font-bold"
            style={{
              fontSize: '3.5rem',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Create Your Own Crypto Token
          </Title>
          <Text
            size="xl"
            className="text-white/90"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
          >
            Launch your cryptocurrency with just one click. Enter your coin name below to begin.
          </Text>
          <div className="max-w-md mx-auto">
            <CoinInput
              value={coinName}
              onChange={setCoinName}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </Container>
    </HeroBackground>
  );
};