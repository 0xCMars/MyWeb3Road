// import { ethers } from "hardhat/ethers";
const hre = require('hardhat');

async function main() {

  const MCoinContract = await hre.ethers.getContractFactory("MCoin");
  const initialSupply = 1000;
  const MCoin = await MCoinContract.deploy(initialSupply);

  await MCoin.deployed();

  console.log(`MCoin deployed to ${MCoin.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
