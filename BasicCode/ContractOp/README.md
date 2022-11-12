# Interact with Contract

## How to config custom account

First, in your hardhat config file, you should set the network config as the same as current hardhat.config.ts, which use `hardhat` instead of `localhost`, because localhost is an arbitrary name, which just set the url the same as hardhat default(http://127.0.0.1:8545/). But using the `hardhat` name, it means u just want to config the default porperty of hardhat network, which have a lot of [Supported Fields](https://hardhat.org/hardhat-network/docs/reference#supported-fields).

To test if the accounts is setting to u own account, run 
```
npx hardhat node
```

which will show some account and eth amount u set in config.

To deploy or test in the actual local hardhat network, use `--network localhost` which will connect to the network that `hardhat node` run, using `--network hardhat` will not connect to local node, the contract only exists for as long as the program is running, and not deploy to the running local node.

Run `npx hardhat run .\scripts\deploy.ts --network localhost` and try to run `npx hardhat run .\scripts\interaction.ts --network localhost` to see how to interact with an exist contract.

## Tips

`hre.artifacts.readArtifactSync(xxx)` wiil get bytecode and abi of the contract Named xxx, when u did have the contract sol file.

