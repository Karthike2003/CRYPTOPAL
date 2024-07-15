require("@nomicfoundation/hardhat-toolbox");
const configDotenv = require("dotenv");


configDotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: process.env.CHAINSTACK_SEPOLIA,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  }
};
