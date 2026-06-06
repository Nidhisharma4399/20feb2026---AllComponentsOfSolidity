import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SELLER_ADDRESS = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

export default buildModule("PaymentGatewayDemo", (m) => {
  // 1. Deploy a simple payment receiver contract
  const receiver = m.contract("PaymentReceiver");

  // 2. Send 0.5 ETH directly to the deployed receiver contract during deployment
  m.send("InitialPaymentToReceiver", receiver, 500000000000000000n); // 0.5 ETH

  // Optional: You can also send to seller later if needed
  // m.send("PaymentToSeller", SELLER_ADDRESS, 100000000000000000n);

  // Return the contract so you can get its address after deploy
  return {
    receiver,
  };
});