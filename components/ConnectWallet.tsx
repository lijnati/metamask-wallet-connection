'use client';

import { useEffect, useState } from 'react';


export default function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
      } catch (_error) {
        console.error('User rejected wallet connection');
      }
    } else {
      alert('MetaMask is not installed');
    }
  };

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setWalletAddress(accounts[0]);
      });
    }
  }, []);

  return (
    <div className="p-4">
      {walletAddress ? (
        <div>
          ✅ Connected: <span className="font-mono">{walletAddress}</span>
        </div>
      ) : (
        <button
        onClick={connectWallet}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow"
      >
        Connect Wallet
      </button>
      
      )}
    </div>
  );
}
