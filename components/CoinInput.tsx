import React from 'react';
import { TextInput, Button, Stack } from '@mantine/core';
import { Coins } from 'lucide-react';

interface CoinInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export const CoinInput: React.FC<CoinInputProps> = ({ value, onChange, onSubmit }) => {
  return (
    <Stack gap="md">
      <TextInput
        size="xl"
        radius="md"
        placeholder="Enter your coin name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        leftSection={<Coins className="w-5 h-5 text-pink-500" />}
        styles={{
          input: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:focus': {
              borderColor: '#ec4899',
            },
          },
        }}
      />
      <Button
        size="lg"
        variant="gradient"
        gradient={{ from: '#ec4899', to: '#8b5cf6', deg: 45 }}
        onClick={onSubmit}
        radius="md"
      >
        Create Coin
      </Button>
    </Stack>
  );
};