import { createPublicClient, http } from "viem"
import { mainnet } from "viem/chains"

const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  });

  console.log("⛓️ Watching blocks in real time...");

  //object.method({onEvent() {...}})
  //object.watchBlocks({onBlock() {...}})
  
client.watchBlocks({
  onBlock(block) {
    console.log(
      `🧱 New block #${block.number} | hash: ${block.hash}`
    );
    console.log("block number:", block.number)
  },
});