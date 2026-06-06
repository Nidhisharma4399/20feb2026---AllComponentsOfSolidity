import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SELLER_ADDRESS = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"; // ← same as your script

export default buildModule("SendPaymentModule", (m) => {
  // Send 0.5 ETH to seller
  m.send("PaymentToSeller", SELLER_ADDRESS, 500000000000000000n); // 0.5 ETH in wei

  // You can add more sends if needed
  // m.send("AnotherPayment", "0xAnotherAddress", 100000000000000000n);

  return {};
});