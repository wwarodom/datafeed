// https://docs.chain.link/docs/historical-price-data/
// npx hardhat run scripts/HistoricalPriceConsumerV3-deploy.ts --network kovan

import { ethers } from "hardhat"; 
 

async function main() {
  const contract = await ethers.getContractFactory("HistoricalPriceConsumerV3");
  const api = await contract.deploy();

  const [deployer] = await ethers.getSigners();
  console.log("Deployer account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

//   const roundId = BigInt("18446744073709562301")    // price: 36359000000
  const roundId = BigInt("36893488147419113040")    // price: 473473000000
  console.log('getHistoricalPrice: ' + await api.getHistoricalPrice(roundId) );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
