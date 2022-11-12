import { BigNumber } from "ethers";
import deployAddress from "./DeployContract.json";

const hre = require("hardhat");
async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(deployer.address);
    const artifact = hre.artifacts.readArtifactSync("MCoin");

    const MCoin = new hre.ethers.Contract(
        deployAddress.MCoinAddress,
        artifact.abi,
        deployer
    );

    let balance = await MCoin.connect(deployer).balanceOf(deployer.address);
    console.log(`Address ${deployer.address} Balance is ${balance}`);
    let mintAmount = BigNumber.from(1000);
    let mint = await MCoin.connect(deployer).mint(mintAmount);
    balance = await MCoin.balanceOf(deployer.address);
    console.log(`Address ${deployer.address} Balance is ${balance}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });