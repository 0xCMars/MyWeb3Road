import { HardhatUserConfig,task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import { mnemonicToEntropy } from "ethers/lib/utils";

import 'dotenv/config';

function mnemonic() {
  let pk = process.env.PRIVATE_KEY;
  return [pk, ];
};

function *deriveAccounts(pk: string, n: number = 1) {
  for (let i = 0; i < n; i++)
    yield (BigInt('0x' + pk) + BigInt(i)).toString(16);
}

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  for (const account of await hre.ethers.getSigners()) console.log(account.address);
});

const config: HardhatUserConfig = {
  solidity: {
    version:"0.8.17",
    settings: {
      optimizer : {
        enabled: true,
        runs: 200,
      }
    }
  },
  networks : {
    hardhat: {
      chainId: 1337,
      loggingEnabled: !!process.env['LOGGING'],
      accounts: [...deriveAccounts(process.env.PRIVATE_KEY)].map(privateKey => ({ privateKey, balance: (10n ** 36n).toString() })),
    },
    mainnet: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/' + process.env.ALCHEMY_MAIN_NODE,
      accounts: mnemonic(),
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/' + process.env.ALCHEMY_GOERLI_NODE,
      accounts: mnemonic(),
    }
  }
};

export default config;
