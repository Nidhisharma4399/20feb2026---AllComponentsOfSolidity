//import { something } from "some library";
//here library = hardhat

import { network } from "hardhat";

//returning object {}
const { viem, networkName } = await network.connect();

console.log('network >>>>',network); // connect and createServer function 
console.log('viem >>>>', viem); // 7 viem methods
console.log('networkName >>>>', networkName); //localhost

const client = await viem.getPublicClient();

console.log(`Deploying Contract A i,e.Empty Contract to ${networkName}...`);

const A = await viem.deployContract("A");

console.log("Contract A address:", A.address);
console.log("Deployment successful!");
