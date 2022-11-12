import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import { mnemonicToEntropy } from "ethers/lib/utils";

import 'dotenv/config';

function mnemonic() {
  return [process.env.PRIVATE_KEY]
}

const config: HardhatUserConfig = {
  solidity: {
    version:"0.8.9",
    settings: {
      optimizer : {
        enabled: true,
        runs: 200,
      }
    }
  },
  networks : {
    localhost: {
      url: 'http://localhost:8545',
    },
    mainnet: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/' + process.env.ALCHEMY_MAIN_NODE,
      accounts: mnemonic()
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/' + process.env.ALCHEMY_GOERLI_NODE,
      accounts: mnemonic()
    }
  }
};

export default config;
