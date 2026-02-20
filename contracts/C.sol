// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.28;

contract C {
    
    string public name;
    //Here we are defining our 2nd component of solidity contract
    //2. Constructor - its is a special function called once during deployment
    // used for initializatiom 
    constructor(string memory _name) {
        name = _name;
    }
}