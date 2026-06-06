import { network } from "hardhat";

async function main() {
  // ✅ connect to network (same pattern as your OP example)
  const { viem } = await network.connect();

  console.log("🔗 Connected to network");

  // ✅ clients
  const publicClient = await viem.getPublicClient();

  // ⭐ IMPORTANT — replace with deployed address
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  // ✅ sanity check → verify contract exists
  const bytecode = await publicClient.getBytecode({
    address: contractAddress,
  });

  if (!bytecode || bytecode === "0x") {
    console.log("❌ No contract deployed at this address");
    return;
  }

  console.log("✅ Contract found at", contractAddress);

  // ✅ get contract instance
  const escrow = await viem.getContractAt("AdmissionEscrow", contractAddress);

  // ✅ read values
  const status = await escrow.read.status();
  const student = await escrow.read.student();
  const teacher = await escrow.read.teacher();
  const fee = await escrow.read.fee();

  // ✅ enum decode (very important for readability)
  const statusMap = ["Created", "Paid", "Confirmed", "Rejected"];

  console.log("\n📊 Admission Escrow State");
  console.log("--------------------------");
  console.log("Status:", statusMap[Number(status)]);
  console.log("Student:", student);
  console.log("Teacher:", teacher);
  console.log("Fee:", fee.toString());
}

main();