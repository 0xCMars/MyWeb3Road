// import { ethers } from "hardhat/ethers";
const hre = require("hardhat");
const fs = require("fs");

async function main() {

  const MCoinContract = await hre.ethers.getContractFactory("MCoin");
  const initialSupply = 1000;
  const [deployer] = await hre.ethers.getSigners();
  console.log("deployer is:", deployer.address);
  const MCoin = await MCoinContract.deploy(initialSupply);

  await MCoin.deployed();

  console.log(`MCoin deployed to ${MCoin.address}`);

  let contractAddressFile = __dirname + "/DeployContract.json";
  fs.writeFileSync(
    contractAddressFile,
    JSON.stringify({MCoinAddress: MCoin.address}, undefined, 2)
  );

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
