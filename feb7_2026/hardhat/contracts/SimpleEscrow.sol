// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleEscrow {
    address public buyer;
    address payable public seller;
    uint256 public amount;

    bool public deposited = false;
    bool public released = false;

    event Deposited(address buyer, uint256 amount);
    event Released(address seller, uint256 amount);

    constructor(address _buyer, address payable _seller, uint256 _amount) {
        buyer = _buyer;
        seller = _seller;
        amount = _amount;
    }

    function deposit() external payable {
        require(msg.sender == buyer, "Only buyer can deposit");
        require(!deposited, "Already deposited");
        require(msg.value == amount, "Must send exact amount");

        deposited = true;
        emit Deposited(msg.sender, msg.value);
    }

    function release() external {
        require(msg.sender == buyer, "Only buyer can release");
        require(deposited, "Nothing deposited");
        require(!released, "Already released");

        released = true;
        seller.transfer(amount);
        emit Released(seller, amount);
    }
}