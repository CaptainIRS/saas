import { IconBolt, IconLock, IconBoxMultiple } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './features.module.css';

const mockdata = [
  {
    title: 'Lightning-fast Deployment',
    description:
      'Launch your token in record time with our optimized tools and streamlined processes, designed for speed without compromising quality.',
    icon: IconBolt,
  },
  {
    title: 'Secure by Design',
    description:
      'Your token’s security is our top priority. We use best-in-class encryption and auditing to ensure your assets remain safe.',
    icon: IconLock,
  },
  {
    title: 'Scalable Solutions',
    description:
      'Built to grow with your project. Our platform supports high scalability to handle millions of transactions effortlessly.',
    icon: IconBoxMultiple,
  },
];

export default function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke={2} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg" color="blue">
          Launch Tokens Instantly
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Create and Launch Tokens Effortlessly
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Whether you’re building for DeFi, gaming, or any blockchain project, our platform gets you up and running quickly with the tools you need.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
