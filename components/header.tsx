import { useState } from "react";
import { Burger, Container, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { WalletComponents } from "../components/coinbaseWallet";
import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import IdentityComponent from "../components/identity";
import { IconCoins } from "@tabler/icons-react";
import classes from "./header.module.css";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";

const links = [{ link: "/features", label: "Features" }];

export default function Header() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Group>
          <IconCoins size={28} />
          <Text size="xl" style={{ marginLeft: 10 }}>
            coin.new
          </Text>
        </Group>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Group>
          <ActionIcon
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
            variant="default"
            size="xl"
            aria-label="Toggle color scheme"
          >
            <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
          </ActionIcon>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <WalletComponents />
          {/* <IdentityComponent /> */}
        </Group>
      </Container>
    </header>
  );
}
