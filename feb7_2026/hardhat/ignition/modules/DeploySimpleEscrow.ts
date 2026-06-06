// ignition/modules/DeploySimpleEscrow.ts

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SimpleEscrowModule", (m) => {
  // Use fully lowercase – ethers accepts this without checksum check
  const buyerAddress  = m.getParameter("buyer",  "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
  const sellerAddress = m.getParameter("seller", "0x70997970c51812dc3a010c7d01b50e0d17dc79c8");
  const amountWei     = m.getParameter("amountWei", BigInt(5e17)); // 0.5 ETH in wei

  const escrow = m.contract("SimpleEscrow", [buyerAddress, sellerAddress, amountWei]);
  console.log("Deployed My First Ignition Module: SimpleEscrowModule");
  return { escrow };

});