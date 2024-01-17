require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/64d5a638c6834dddb6a59aa830e93f09",
      chainId: 11155111,
      accounts: [
        `here is your Metamask account Private key put here`,
      ], 
    },
  },

  // 1:Etherscan Explore
  etherscan: {
    apiKey: {
      sepolia: "Your Etherescan Explore key",
    },
  },


  mocha: {
    timeout: 20000,
  },
};
