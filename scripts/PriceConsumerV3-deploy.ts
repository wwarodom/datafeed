// https://docs.chain.link/docs/get-the-latest-price/
// npx hardhat run scripts/PriceConsumerV3-deploy.ts --network kovan

import { ethers } from "hardhat"; 

const AGGREGATOR = {
  KOVAN: "0x9326BFA02ADD2366b30bacB125260Af641031331",
  RINKEBY: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
};

async function main() {
  const contract = await ethers.getContractFactory("PriceConsumerV3");
  const api = await contract.deploy(AGGREGATOR.KOVAN);
  // const api = await contract.deploy(AGGREGATOR.RINKEBY);

  const [deployer] = await ethers.getSigners();
  console.log("Deployer account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  console.log('Latest ETHUSD price: ' + await api.getLatestPrice());
  console.log('RoundIdprice: ' + await api.getRoundId());
  console.log('Answer in Round price: ' + await api.getansweredInRound());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
