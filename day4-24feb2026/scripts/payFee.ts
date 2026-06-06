import hre from "hardhat";

async function main() {
  const { viem } = await hre.network.connect();

  const [student] = await viem.getWalletClients();

  const escrowAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const escrow = await viem.getContractAt("AdmissionEscrow", escrowAddress);

  await escrow.write.payFee({
    account: student.account,
    value: 10n ** 18n,   // 1 ETH
    });

  console.log("✅ Fee paid");
}

main();