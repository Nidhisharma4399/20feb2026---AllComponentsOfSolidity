import {network} from "hardhat";

const {viem , networkName} =await network.connect();
const client = await viem.getPublicClient();
console.log(`Deploying Contract F with Event Component to ${networkName}...`);


//deploying contract
const F = await viem.deployContract("F");
console.log("Contract F address :", F.address);

const owner= await F.read.owner();
console.log("Owner >>>>", owner);

const hash= await F.write.changeName(["Nidhi"]);
const receipt = await client.waitForTransactionReceipt({ hash });

//console.log(hash); //0x3497ac889b325bde981c63d9613067b7fe3b170e6aaebf22a1a22a73cd61181e

console.log("Event logs >>>>", receipt.logs);