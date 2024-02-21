const hre = require("hardhat");

async function main() {
  const ExampleERC404 = await hre.ethers.getContractFactory("ExampleERC404");
  const exampleERC404 = await ExampleERC404.deploy(
    "SohailToken",
    "ST",
    18,
    10000,
    "0xcd3b766ccdd6ae721141f452c550ca635964ce71",
    "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"
  );
  

  await exampleERC404.deployed();

  console.log("ExampleERC404:", exampleERC404.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



  //In the terminal write constructor given 6 Argument: 21/02/2024


  // npx hardhat verify --network sepolia  0xe9D544639A2729789fFdaC5D226fcD9c80C1dD14 "SohailToken", "ST", "18", "10000", "0xcd3b766ccdd6ae721141f452c550ca635964ce71", "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"
