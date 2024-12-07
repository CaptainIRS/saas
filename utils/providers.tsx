'use client';
 
import type { ReactNode } from 'react';
import { useComputedColorScheme } from '@mantine/core';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains'; // add baseSepolia for testing
 
export function Providers(props: { children: ReactNode }) {

  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base} // add baseSepolia for testing
      config={{
        appearance: {
          mode: computedColorScheme,
        }
      }}
    >
      {props.children}
    </OnchainKitProvider>
  );
}