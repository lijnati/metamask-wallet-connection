import ConnectWallet from '@/components/ConnectWallet';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="text-center bg-white p-6 rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">🚀 Welcome to your dApp</h1>
        <p className="text-gray-700 mb-6">
          Connect your wallet to interact with the Ethereum blockchain.
        </p>
        <ConnectWallet />
      </div>
    </main>
  );
}
