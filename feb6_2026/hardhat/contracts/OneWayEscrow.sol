// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

contract OneWayEscrow {
    address payable public seller;

    constructor(address payable _seller) {
        seller = _seller;
    }

    // Allow contract to receive ETH
    receive() external payable {}

    function withdraw() external {
        require(msg.sender == seller, "Only the seller can withdraw the funds");

        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        (bool success, ) = seller.call{value: balance}("");
        require(success, "ETH transfer failed");
    }
}
