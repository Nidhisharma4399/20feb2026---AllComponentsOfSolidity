import hre from "hardhat";

async function main() {
  const { viem } = await hre.network.connect("localhost");

  const [student] = await viem.getWalletClients();

  const escrow = await viem.getContractAt(
    "AdmissionEscrow",
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );

  await escrow.write.approveRelease({
    account: student.account,
  });

  console.log("✅ Payment released");
}

main();