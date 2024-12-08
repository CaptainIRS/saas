import { Table, Card, Text, Badge } from '@mantine/core';

interface Transaction {
    id: string;
    type: 'buy' | 'sell';
    amount: number;
    price: number;
    timestamp: Date;
  }

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <Card withBorder padding="lg" radius="md">
      <Text size="lg" fw={500} mb="md">
        Recent Transactions
      </Text>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Type</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Time</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {transactions.map((tx) => (
            <Table.Tr key={tx.id}>
              <Table.Td>
                <Badge color={tx.type === 'buy' ? 'green' : 'red'}>
                  {tx.type.toUpperCase()}
                </Badge>
              </Table.Td>
              <Table.Td>{tx.amount}</Table.Td>
              <Table.Td>${tx.price.toFixed(2)}</Table.Td>
              <Table.Td suppressHydrationWarning>
                {new Date(tx.timestamp).toLocaleString()}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Card>
  );
}