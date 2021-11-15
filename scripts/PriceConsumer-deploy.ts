// Run on Kovan only since there is no FEED registry on other testnets.
// https://docs.chain.link/docs/feed-registry/
// npx hardhat run scripts/PriceConsumer-deploy.ts --network kovan

import { ethers  } from "hardhat";  

const FEED_REGISTRY = "0xAa7F6f7f507457a1EE157fE97F6c7DB2BEec5cD0"; //Kovan
const ETH = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
const BTC = "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"; 
const LINK = "0xa36085F69e2889c224210F603D836748e7dC0088";

// Convert from demical to hex (@chainlink/contracts/src/v0.8/Denominations.sol)
const USD = "0x0000000000000000000000000000000000000348"; // 840 
 
async function main() {
  const contract = await ethers.getContractFactory("PriceConsumer");
  const api = await contract.deploy(FEED_REGISTRY);
  const [deployer] = await ethers.getSigners();
  console.log("Deployer account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());  
  console.log('get EthUsd price: ' + await api.getEthUsdPrice()); 
  
  console.log('get price (ETHUSD): ' + await api.getPrice(ETH,USD)); 
  console.log('get price (BTCUSD): ' + await api.getPrice(BTC,USD));  
  console.log('get price (BTCETH): ' + await api.getPrice(BTC,ETH));  
  console.log('get price (LINKUSD): ' + await api.getPrice(LINK,USD));  
}
 
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 
