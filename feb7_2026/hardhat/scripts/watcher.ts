import { createPublicClient, http } from "viem"
import { localhost } from "viem/chains"

const client = createPublicClient({
    chain: localhost,
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