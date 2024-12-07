import { useState } from "react";
import { Burger, Container, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { WalletComponents } from "../components/coinbaseWallet";
import IdentityComponent from "../components/identity";
import { IconCoins } from "@tabler/icons-react";
import classes from "./header.module.css";

const links = [{ link: "/about", label: "Features" }];

export default function Header() {
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
            ABCToken
          </Text>
        </Group>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <WalletComponents />
          <IdentityComponent />
        </Group>
      </Container>
    </header>
  );
}
