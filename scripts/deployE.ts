import { network } from "hardhat";

const { viem, networkName } = await network.connect();
console.log(`Deploying Contract E with Modifier Component to ${networkName}...`);

const E = await viem.deployContract("E");
console.log("Contract E address :", E.address);

// Read owner
const owner = await E.read.owner();
console.log("Owner >>>>", owner);

//here is our modifier checks access 
await E.write.changeName(["Nidhi"]);
const name = await E.read.name();
console.log("Name >>>>", name);
