const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("PaypalModule", (m) => {

  const paypal = m.contract("Paypal");

  return { paypal };
});
