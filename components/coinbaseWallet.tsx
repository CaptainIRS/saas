'use client'
import { ReactNode, useState } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

import { 
    ConnectWallet, 
    Wallet, 
    WalletDropdown, 
    WalletDropdownDisconnect, 
  } from '@coinbase/onchainkit/wallet';

  import {
    Address,
    Avatar,
    Name,
    Identity,
  } from '@coinbase/onchainkit/identity';

  import { color } from '@coinbase/onchainkit/theme';
 
 
const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: 'onchainkit',
    }),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});
 
function App({ children }: { children: ReactNode }) {
  return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
}

export function WalletComponents() {
    return (
      <div className="flex justify-end">
        <Wallet >
          <ConnectWallet>
            <Avatar className="h-6 w-6"/>
            <Name />
          </ConnectWallet>
          <WalletDropdown>
            <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
              <Avatar />
              <Name />
              <Address className={color.foregroundMuted} />
            </Identity>
            <WalletDropdownDisconnect />
          </WalletDropdown>
        </Wallet>
      </div>
    );
  }