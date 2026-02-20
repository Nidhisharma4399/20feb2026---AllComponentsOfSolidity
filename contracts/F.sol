// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.28;

contract F {
    //1. state variable 
    string public name;
    address public owner ;

    //2. constructor 
    constructor(){
        owner= msg.sender;
    }

    //3. function
    function changeName(string memory _newName) public onlyOwner {
        name = _newName;

        emit NameChanged(msg.sender, _newName);
    }
    
    //4.modifier
    modifier onlyOwner(){
        require (msg.sender==owner,"Not Owner");
        _;

    }

    //5.event
    event NameChanged (address indexed caller, string newName);

}