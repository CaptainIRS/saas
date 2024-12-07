'use client';
 
import { ReactNode, createContext, useState } from 'react';
import { OnchainKitContextType, OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains'; // add baseSepolia for testing

export const IdentityContext = createContext<OnchainKitContextType>({
  address: '0x123',
  chain: base,apiKey: '', rpcUrl: '', schemaId: '0x', projectId: ''
});
 
export function Providers(props: { children: ReactNode }) {

  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base} // add baseSepolia for testing
    >
      {props.children}
    </OnchainKitProvider>
  );
}

