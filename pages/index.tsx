
import { Button, Group } from "@mantine/core";
import { WalletComponents } from "../components/coinbaseWallet";
import IdentityComponent from "../components/identity";

export default function IndexPage() {

  return (
    
      <Group mt={50} justify="center">
        {/* <Button size="xl" >Welcome to Mantine!</Button>
         */}
        <WalletComponents/>
        <IdentityComponent/>
      </Group>
  );
}
