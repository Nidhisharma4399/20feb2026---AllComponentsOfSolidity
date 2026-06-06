// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract AdmissionEscrow {

    address public student;
    address public teacher;
    uint256 public fee;

    enum Status {
        Created,
        Paid,
        WithdrawalRequested,
        Released,
        Refunded
    }

    Status public status;

    constructor(address _teacher) {
        student = msg.sender;
        teacher = _teacher;
        status = Status.Created;
    }

    /// ⭐ Student pays fee
    function payFee() external payable {
        require(msg.sender == student, "Only student");
        require(status == Status.Created, "Invalid state");
        require(msg.value > 0, "No fee");

        fee = msg.value;
        status = Status.Paid;
    }

    /// ⭐ Teacher requests withdrawal
    function requestWithdrawal() external {
        require(msg.sender == teacher, "Only teacher");
        require(status == Status.Paid, "Invalid state");

        status = Status.WithdrawalRequested;
    }

    /// ⭐ Student approves and releases
    function approveRelease() external {
        require(msg.sender == student, "Only student");
        require(status == Status.WithdrawalRequested, "No request");

        status = Status.Released;
        (bool sent, ) = teacher.call{value: fee}("");
        require(sent, "Transfer failed");
    }

    /// ⭐ Student refund (optional safety)
    function refund() external {
        require(msg.sender == student, "Only student");
        require(status == Status.Paid, "Invalid state");

        status = Status.Refunded;
        (bool sent, ) = student.call{value: fee}("");
        require(sent, "Refund failed");
    }
}