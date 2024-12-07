import React, { useState, useEffect } from 'react';
import { Button, Group } from "@mantine/core";

interface MetaMaskConnectButtonProps {
  onConnect?: (address: string) => void;
  onDisconnect?: () => void;
}

const MetaMaskConnectButton: React.FC<MetaMaskConnectButtonProps> = ({ 
  onConnect, 
  onDisconnect 
}) => {
  const [account, setAccount] = useState<string | null>(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  useEffect(() => {
    // Check if MetaMask is installed
    const checkMetaMaskAvailability = () => {
      const { ethereum } = window as any;
      setIsMetaMaskInstalled(Boolean(ethereum && ethereum.isMetaMask));
    };

    checkMetaMaskAvailability();
  }, []);

  const connectWallet = async () => {
    // Ensure we're in a browser environment and MetaMask is installed
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      try {
        // Request account access
        const accounts = await (window as any).ethereum.request({ 
          method: 'eth_requestAccounts' 
        });

        // Get the first account
        const selectedAccount = accounts[0];
        setAccount(selectedAccount);

        // Call the onConnect callback if provided
        if (onConnect) {
          onConnect(selectedAccount);
        }

        // Listen for account changes
        (window as any).ethereum.on('accountsChanged', (newAccounts: string[]) => {
          if (newAccounts.length === 0) {
            // Disconnected
            disconnectWallet();
          } else {
            // Account changed
            setAccount(newAccounts[0]);
            if (onConnect) {
              onConnect(newAccounts[0]);
            }
          }
        });

      } catch (error) {
        console.error('Failed to connect wallet', error);
        alert('Failed to connect wallet. Make sure MetaMask is installed and unlocked.');
      }
    } else {
      alert('MetaMask is not installed. Please install MetaMask from https://metamask.io/');
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    if (onDisconnect) {
      onDisconnect();
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {!account ? (
        <Button 
          onClick={connectWallet} 
          disabled={!isMetaMaskInstalled}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          {isMetaMaskInstalled ? 'Connect MetaMask' : 'MetaMask Not Installed'}
        </Button>
      ) : (
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline"
            className="text-sm text-gray-700"
          >
            {`${account.slice(0, 6)}...${account.slice(-4)}`}
          </Button>
          <Button 
            variant="destructive"
            onClick={disconnectWallet}
          >
            Disconnect
          </Button>
        </div>
      )}
    </div>
  );
};

export default MetaMaskConnectButton;