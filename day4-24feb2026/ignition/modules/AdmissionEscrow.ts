import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AdmissionEscrowModule = buildModule("AdmissionEscrowModule", (m) => {
  // teacher address param
  const teacher = m.getParameter("teacher");
  // deploy contract
  const escrow = m.contract("AdmissionEscrow", [teacher]);

  return { escrow };
});

export default AdmissionEscrowModule;