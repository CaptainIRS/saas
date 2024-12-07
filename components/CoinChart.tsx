import { Card, Text } from '@mantine/core';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import type { ChartData } from '../types/dashboard';

interface CoinChartProps {
  data: ChartData[];
  title: string;
}

export function CoinChart({ data, title }: CoinChartProps) {
  return (
    <Card withBorder padding="lg" radius="md">
      <Text size="lg" fw={500} mb="md">
        {title}
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}