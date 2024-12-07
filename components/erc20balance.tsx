import { useMoralis, useERC20Balances } from "react-moralis";
import { Skeleton, Table, ScrollArea, Title } from "@mantine/core";
import { FC } from "react";

// Define the structure of the token balance data
// interface TokenBalance {
//   logo: string | null;
//   name: string;
//   symbol: string;
//   balance: string;
//   token_address: string;
//   decimals: number;
// }

interface TokenBalance {
    token_address: string;
    name: string;
    symbol: string;
    logo?: string | undefined;
    thumbnail?: string | undefined;
    decimals: number;
    balance: string;
}

interface ERC20BalanceProps {
  address: string; // Example of expected prop (update based on actual usage)
}

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: 700,
  },
};

const ERC20Balance: FC<ERC20BalanceProps> = (props) => {
  const { data: assets } = useERC20Balances(props);
  const { Moralis } = useMoralis();

  const rows = assets?.map((item: TokenBalance) => (
    <tr key={item.token_address}>
      <td>
        <img
          src={
            item.logo ||
            "https://etherscan.io/images/main/empty-token.png"
          }
          alt="nologo"
          width="28px"
          height="28px"
        />
      </td>
      <td>{item.name}</td>
      <td>{item.symbol}</td>
      <td>
        {parseFloat(
          Moralis.Units.FromWei(item.balance, item.decimals)
        )}
      </td>
      <td>{item.token_address}</td>
    </tr>
  ));

  return (
    <div style={{ width: "65vw", padding: "15px" }}>
      <Title style={styles.title}>💰Token Balances</Title>
      <Skeleton visible={!assets}>
        <ScrollArea>
          <Table highlightOnHover>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Balance</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </ScrollArea>
      </Skeleton>
    </div>
  );
};

export default ERC20Balance;
