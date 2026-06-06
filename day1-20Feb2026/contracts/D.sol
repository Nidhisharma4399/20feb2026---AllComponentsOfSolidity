// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.28;

contract D {
    //in this contract we are using 3rd component of contract i,e. function

    //1. state variable
    string public name ;

    //2. constructor
    constructor(string memory _name){
        name = _name;
    }

    //3. function
    function sendHello(string memory _msg) public pure returns (string memory )  {
        return _msg;
    }

}