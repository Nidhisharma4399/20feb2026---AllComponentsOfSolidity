//import { something } from "some libarary";
import { network } from "hardhat";

//returning {}
const {viem ,networkName} = await network.connect();
const client = await viem.getPublicClient();
console.log(`Deploying Contract B  to ${networkName}...`);

const B = await viem.deployContract("B");
console.log("Contract B address :", B.address);

const name = await B.read.name();
console.log("State Variable from Contract B , name  >>>>>>",name);

