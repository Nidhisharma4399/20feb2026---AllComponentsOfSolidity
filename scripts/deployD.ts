//import {something } from "some library";
import { network } from "hardhat";

const {viem , networkName} = await network.connect();
const client = await viem.getPublicClient();
console.log(`Deploying Contract D to ${networkName}...`);
 
//              object.method();
//              object.method(aa1,aa2);
//              object.method("",[]);
//              object.method("contractName",[constructorArgument]);
const D = await viem.deployContract("D",["Nidhi Sharma"]);
console.log("Contract D address :", D.address);

//calling constructor here
const name = await D.read.name();
console.log("We are Using function in Contract D, name >>>>", name);

//calling function here
const message = await D.read.sendHello(["Hello Everyone"]);
console.log("sendHello output >>>>", message)
