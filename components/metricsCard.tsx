import { Card, Text, Group } from '@mantine/core';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: number;
}

export function MetricsCard({ title, value, change }: MetricsCardProps) {
  const isPositive = change && change > 0;

  return (
    <Card withBorder padding="lg" radius="md">
      <Group justify="space-between" align="flex-start">
        <div>
          <Text size="sm" c="dimmed">
            {title}
          </Text>
          <Text size="xl" fw={700}>
            {value}
          </Text>
        </div>
        {change && (
          <Group gap={4}>
            {isPositive ? (
              <TrendingUp size={20} className="text-green-500" />
            ) : (
              <TrendingDown size={20} className="text-red-500" />
            )}
            <Text
              size="sm"
              fw={500}
              c={isPositive ? 'green' : 'red'}
            >
              {Math.abs(change)}%
            </Text>
          </Group>
        )}
      </Group>
    </Card>
  );
}