import test from "node:test";
import assert from "node:assert/strict";
import hre from "hardhat";

test("AdmissionEscrow full flow", async (t) => {
  const { viem } = await hre.network.connect();

  // accounts
  const [student, teacher, other] = await viem.getWalletClients();

  // deploy
  const escrow = await viem.deployContract("AdmissionEscrow", [teacher.account.address], {
    account: student.account,
  });

  const publicClient = await viem.getPublicClient();

  // ✅ check student
  const studentAddr = await escrow.read.student();
  assert.equal(studentAddr.toLowerCase(), student.account.address.toLowerCase());

  // ✅ student pays fee
  await escrow.write.payFee({
    account: student.account,
    value: 10n ** 18n,
  });

  const statusPaid = await escrow.read.status();
  assert.equal(statusPaid, 1);

  // ❌ other cannot release
  await assert.rejects(async () => {
    await escrow.write.confirmAdmission({
      account: other.account,
    });
  });

  // ✅ teacher releases
  await escrow.write.confirmAdmission({
    account: teacher.account,
  });

  const statusReleased = await escrow.read.status();
  assert.equal(statusReleased, 2);
});*/