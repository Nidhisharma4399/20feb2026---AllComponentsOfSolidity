import hre from "hardhat";

async function main() {
  const { viem } = await hre.network.connect("localhost");

  const publicClient = await viem.getPublicClient();
  const wallets = await viem.getWalletClients();

  const teacher = wallets[1]; // teacher wallet

  const escrow = await viem.getContractAt(
    "AdmissionEscrow",
    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    {
      client: {
        wallet: teacher,
        public: publicClient,
      },
    }
  );

  const tx = await escrow.write.requestWithdrawal();
  await publicClient.waitForTransactionReceipt({ hash: tx });

  console.log("✅ Withdrawal requested");
}

main();