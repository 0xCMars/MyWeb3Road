// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";
import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MCoin is ERC20 {
    constructor(uint256 initalSupply) ERC20("MCoin", "MC") {
        _mint(msg.sender, initalSupply);
    }

    function mint(uint amount) external returns (bool){
        _mint(msg.sender, amount);
        return true;
    }
}