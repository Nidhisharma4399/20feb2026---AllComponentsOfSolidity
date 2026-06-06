// example check-balance.ts
import { createPublicClient, http } from "viem";
import { hardhat } from "viem/chains"; // or your custom chain

const publicClient = createPublicClient({
  chain: hardhat,
  transport: http("http://127.0.0.1:8545"),
});

async function main() {
  const sellerBal = await publicClient.getBalance({
    address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  });
  console.log("Seller balance:", Number(sellerBal) / 1e18, "ETH");

  const buyerBal = await publicClient.getBalance({
    address: "0xf39Fd6e51aad88F6F4ce6ab8827279cFfFb92266",
  });
  console.log("Buyer balance:", Number(buyerBal) / 1e18, "ETH");
}

main();