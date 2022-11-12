# Deploy the contract

首先最常用的代码是部署合约的代码，因此这里使用hardhat作为框架尝试部署ERC20的合约到goreli测试网。

## Test to deploy Contract

```(shell)
npm install
npx hardhat run ./script/deploy.ts
```

## Configure Network

Before any on chain action, u need to connect some ethereum node in order to send transaction and do something big. In hardhat, this network config is done by hardhat.config.ts:HardhatUserConfig. In the HardhatUserConfig class, there is a networks property to record all the msg that need to connect. U can check the example on th ./hardhat.config.ts

## Deploy Contract on Local Node

On one terminal
```(shell)
npx hardhat node
```

On another terminal
```(shell)
npx hardhat run .\scripts\deploy.ts --network localhost
```

## Deploy Contract on goerli
First, to deploy on testnet, it need a rpcProvider to connect and send transaction on chain. Register a account on some node rpcprovider e.g. Infura, Alchemy. Create a new project on this platform will give u a apiKey to connect to their node. The key should copy to .env which format is the same as in .env.example.

```(shell)
ALCHEMY_GOERLI_NODE=xxx
```

Second, export your privateKey from web3 wallet and copy it to .env file, KEY THE .env LOCAL, DONT PUBLIC IT!!!!!
```(shell)
PRIVATE_KEY=xxx
```

Last, make sure your account has enough goerli-ETH to deploy and run the command
```
npx hardhat run .\scripts\deploy.ts --network goerli
```
