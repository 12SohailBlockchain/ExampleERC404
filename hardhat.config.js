require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/64d5a638c6834dddb6a59aa830e93f09",
      chainId: 11155111,
      accounts: [`Your Metamask wallet Private key here`],
    },
  },

  // 1:Etherscan Explore
  etherscan: {
    apiKey: {
      sepolia: "Your Metamask wallet api key",
    },
  },

  mocha: {
    timeout: 20000,
  },
};
