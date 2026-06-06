// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PaymentReceiver {
    address public owner;
    event PaymentReceived(address sender, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {
        emit PaymentReceived(msg.sender, msg.value);
    }

    // Optional: anyone can send ETH directly to this contract
    fallback() external payable {
        emit PaymentReceived(msg.sender, msg.value);
    }

    // For demo: withdraw all to owner
    function withdraw() external {
        require(msg.sender == owner, "Only owner");
        payable(owner).transfer(address(this).balance);
    }
}