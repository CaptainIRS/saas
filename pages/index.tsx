
import { Button, Group } from "@mantine/core";
import { Hero } from "../components/HeroPage";

 


export default function IndexPage() {
  return (
    
      // <Group mt={50} justify="center">
      <Group mt={50} justify="center">
        {/* <Button size="xl" >Welcome to Mantine!</Button>
         */}
        {/* <WalletComponents/>
        <IdentityComponent /> */}
        <Hero/>
      </Group>
  );
}
