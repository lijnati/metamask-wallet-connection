import { ethers } from 'ethers';

// Replace with your contract's ABI and address
import ABI from '../abis/Counter.json';

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

export const getContract = () => {
  if (!window.ethereum) throw new Error('No wallet found');

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
  return contract;
};
