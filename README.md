# 🧮 Metamask wallet connection

A mini decentralized app (dApp) using MetaMask and Ethers.js.

## ⚙️ Features

- 🔗 Connect your MetaMask wallet
- 🧼 Clean UI with TailwindCSS

## 🛠 Tech Stack

- **Next.js 15 (App Router)**
- **Ethers.js**
- **TailwindCSS**
- **Solidity (via Remix)**

## 🧪 Smart Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Counter {
    uint public count;

    function increment() public {
        count++;
    }

    function getCount() public view returns (uint) {
        return count;
    }
}
```


🧑‍💻 Setup Locally

```
git clone https://github.com/lijnati/metamask-wallet-connection.git
cd metamask-wallet-connection
npm install
```

Create .env.local:

```
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourContractAddress
```

Run locally:

```
npm run dev
```

## ✨ Author
Built with 💙 by Yegetaneh Firew
