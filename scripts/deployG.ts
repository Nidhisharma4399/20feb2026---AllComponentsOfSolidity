import { network } from "hardhat";

async function main() {

  const { viem, networkName } = await network.connect();
  const client = await viem.getPublicClient();

  console.log(`Deploying Contract G which conatin all 9 Components of Contract to ${networkName}...`);

  // Deploy
  const G = await viem.deployContract("G");
  console.log("Contract G address:", G.address);

  // Read owner
  const owner = await G.read.owner();
  console.log("Owner >>>>", owner);

  // Change name
  const changeHash = await G.write.changeName(["Nidhi"]);
  await client.waitForTransactionReceipt({ hash: changeHash });

  // Add user
  const addUserHash = await G.write.addUser(["Nidhi"]);
  await client.waitForTransactionReceipt({ hash: addUserHash });

  // Read mapping
  const user = await G.read.users([owner]);
  console.log("User:", user);

  // Turn on
  const turnOnHash = await G.write.turnOn();
  await client.waitForTransactionReceipt({ hash: turnOnHash });

  const status = await G.read.status();
  console.log("⚡ Status:", status); 
}

main().catch(console.error);