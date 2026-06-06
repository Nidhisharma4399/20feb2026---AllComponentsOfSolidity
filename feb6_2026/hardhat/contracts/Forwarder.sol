// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Forwarder {
    address payable public immutable seller;

    constructor(address payable _seller) {
        seller = _seller;
    }

    // Anyone can send ETH to this contract → it goes straight to seller
    receive() external payable {
        seller.transfer(msg.value);
    }

    // Optional: view function to check balance (should always be ~0)
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}