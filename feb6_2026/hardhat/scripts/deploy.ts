import { network } from "hardhat";

const { viem } = await network.connect({
  network: "localhost"
});

async function main(){
    console.log("Deploying Empty contract On Mainnet...");

    const contract = await viem.deployContract("MyContract");

    console.log("Contract deployed at:", contract.address);
    
}
main().catch(console.error)