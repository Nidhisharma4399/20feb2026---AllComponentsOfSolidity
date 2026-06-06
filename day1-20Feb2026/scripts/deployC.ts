//import {something } from "some library";
import { network } from "hardhat";

const { viem, networkName } = await network.connect();
const client = await viem.getPublicClient();

console.log(`Deploying Contract C to ${networkName}...`);

//              object.method();
//              object.method(aa1,aa2);
//              object.method("",[]);
//              object.method("contractName",[constructorArgument]);
const C = await viem.deployContract("C", ["Nidhi Sharma"]);
console.log("Contract C address :", C.address);

const name = await C.read.name();
console.log("We are Using constructor in Contract C, name >>>>", name);
