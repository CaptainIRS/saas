import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { MetricsCard } from '../components/MetricsCard';
import { CoinChart } from '../components/CoinChart';
import { TransactionList } from '../components/TransactionList';
import { BuySellPanel } from '../components/BuySellPanel';
import { useState } from 'react';
import type { Transaction, ChartData } from './types/dashboard';
import Layout from '../components/layout'


const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'buy',
    amount: 1000,
    price: 0.05,
    timestamp: new Date('2024-03-10T10:00:00'),
  },
  {
    id: '2',
    type: 'sell',
    amount: 500,
    price: 0.06,
    timestamp: new Date('2024-03-10T11:30:00'),
  },
];

const mockChartData: ChartData[] = Array.from({ length: 24 }, (_, i) => ({
  timestamp: `${i}:00`,
  value: Math.random() * 0.1,
}));

function App() {
  const [metrics] = useState({
    price: 0.069,
    marketCap: 1000000,
    volume24h: 500000,
    priceChange24h: 12.5,
  });

export default function App({ Component, pageProps }: any) {

  return (

    <MantineProvider theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        
      </Layout>
    </MantineProvider>
  );
}

/**
 * import { MantineProvider, AppShell, Grid, Container } from '@mantine/core';
import { MetricsCard } from './components/MetricsCard';
import { CoinChart } from './components/CoinChart';
import { TransactionList } from './components/TransactionList';
import { BuySellPanel } from './components/BuySellPanel';
import { useState } from 'react';
import type { Transaction, ChartData } from './types/dashboard';

// Mock data - replace with real data from your API
const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'buy',
    amount: 1000,
    price: 0.05,
    timestamp: new Date('2024-03-10T10:00:00'),
  },
  {
    id: '2',
    type: 'sell',
    amount: 500,
    price: 0.06,
    timestamp: new Date('2024-03-10T11:30:00'),
  },
];

const mockChartData: ChartData[] = Array.from({ length: 24 }, (_, i) => ({
  timestamp: `${i}:00`,
  value: Math.random() * 0.1,
}));

function App() {
  const [metrics] = useState({
    price: 0.069,
    marketCap: 1000000,
    volume24h: 500000,
    priceChange24h: 12.5,
  });

  return (
    <MantineProvider>
      <AppShell>
        <Container size="xl" py="xl">
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
              <CoinChart
                data={mockChartData}
                title="Price History (24h)"
              />
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

export default App;
 */

  
