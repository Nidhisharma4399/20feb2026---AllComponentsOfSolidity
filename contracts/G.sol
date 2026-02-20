// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.28;

contract G {
    //1. state variable 
    string public name;
    address public owner ;

    //2. constructor 
    constructor(){
        owner= msg.sender;
        status = Status.Off;
    }

    //3. function
    function changeName(string memory _newName) public onlyOwner {
        name = _newName;

        //4. Events
        emit NameChanged(msg.sender, _newName);
    }
    function turnOn() public onlyOwner {
        status = Status.Off;
    }
    function addUser(string memory _newName) public {
        users[msg.sender] = User(_newName);
    }
    
     //4.event
    event NameChanged (address indexed caller, string newName);

    //5.modifier
    modifier onlyOwner(){
        //require (msg.sender==owner,"Not Owner");
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    //6.struct
    struct User {
        string userName;
    }

    //7. mappings 
    mapping (address=> User) public users;
    
    //8. enum
    enum Status { Off, On }
    Status public status;

    //9. errors
    error NotOwner();
    error UserAlreadyExists();
    error InvalidName();
    error AlreadyOn();


}