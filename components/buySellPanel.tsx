import { Card, Button, NumberInput, Group } from '@mantine/core';
import { useState } from 'react';

export function BuySellPanel() {
  const [amount, setAmount] = useState<number | string>(0);

  const handleBuy = () => {
    // Implement buy logic
    console.log('Buy:', amount);
  };

  const handleSell = () => {
    // Implement sell logic
    console.log('Sell:', amount);
  };

  return (
    <Card withBorder padding="lg" radius="md">
      <NumberInput
        label="Amount"
        value={amount}
        onChange={(value) => setAmount(value)}
        min={0}
        placeholder="Enter amount"
        mb="md"
      />
      <Group justify="space-between">
        <Button
          color="green"
          onClick={handleBuy}
          disabled={!amount}
          fullWidth
        >
          Buy
        </Button>
        <Button
          color="red"
          onClick={handleSell}
          disabled={!amount}
          fullWidth
        >
          Sell
        </Button>
      </Group>
    </Card>
  );
}