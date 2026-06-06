import { createPublicClient, http } from "viem";
import { localhost } from "viem/chains";

const client = createPublicClient({
  chain: localhost,
  transport: http()
});

async function main() {
  const code = await client.getBytecode({
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  });

  console.log("BYTECODE:", code);
}

main();