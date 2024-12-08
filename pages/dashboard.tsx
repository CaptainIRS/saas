import { MantineProvider, AppShell, Grid, Container } from "@mantine/core";
import { MetricsCard } from "../components/metricsCard";
import { CoinChart } from "../components/coinChart";
import { TransactionList } from "../components/transactionList";
import { BuySellPanel } from "../components/buySellPanel";
import { useState } from "react";

interface Transaction {
  id: string;
  type: "buy" | "sell";
  amount: number;
  price: number;
  timestamp: Date;
}

interface ChartData {
  timestamp: string;
  value: number;
}

// Mock data - replace with real data from your API
const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "buy",
    amount: 1000,
    price: 0.05,
    timestamp: new Date("2024-03-10T10:00:00"),
  },
  {
    id: "2",
    type: "sell",
    amount: 500,
    price: 0.06,
    timestamp: new Date("2024-03-10T11:30:00"),
  },
];

const mockChartData: ChartData[] = Array.from({ length: 24 }, (_, i) => ({
  timestamp: `${i}:00`,
  value: Math.random() * 0.1,
}));

function Dashboard() {
  const [metrics] = useState({
    price: 0.069,
    marketCap: 10000,
    volume24h: 5000,
    priceChange24h: 12.5,
  });

  return (
    <MantineProvider>
      <AppShell>
        <Container size="xl">
          <Grid gutter="md">
            <Grid.Col span={{ base: 12, md: 3 }}>
              <MetricsCard
                title="Current Price"
                value={`$${metrics.price}`}
                change={metrics.priceChange24h}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <MetricsCard
                title="Market Cap"
                value={`$${metrics.marketCap.toLocaleString()}`}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <MetricsCard
                title="24h Volume"
                value={`$${metrics.volume24h.toLocaleString()}`}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <BuySellPanel />
            </Grid.Col>

            <Grid.Col span={12}>
              <CoinChart data={mockChartData} title="Price History (24h)" />
            </Grid.Col>

            <Grid.Col span={12}>
              <TransactionList transactions={mockTransactions} />
            </Grid.Col>
          </Grid>
        </Container>
      </AppShell>
    </MantineProvider>
  );
}

export default Dashboard;
