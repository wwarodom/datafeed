## Oracle examples - Price Consumer from ChainLink
* Oracle is the way to access the real world data or events. 
* This example is based on Kovan network.
* Don't forget to configure .env.example (Change to .env and put the right URL and private key)

#### Download and Install
```shell
git clone https://github.com/wwarodom/datafeed.git
cd datafeed
npm i
```

#### PriceConsumerV3 example (Kovan or Rinkeby)
```
npx hardhat run scripts/PriceConsumerV3-deploy.ts --network kovan
```

#### PriceConsumer example
Can configure QUOTE and BASE

```shell
npx hardhat run scripts/PriceConsumer-deploy.ts --network kovan
```

#### Historical Price ConsumerV3 example
Retrieve historical price from roundId

```shell
npx hardhat run scripts/HistoricalPriceConsumerV3-deploy.ts --network kovan
```

##### DataFeed:
* https://docs.chain.link/docs/get-the-latest-price/ 

##### Feed Registry:
* https://docs.chain.link/docs/feed-registry/ 

##### On chain fetch current price:
* https://blog.chain.link/fetch-current-crypto-price-data-solidity/

##### Oracle ETH/USD price:
* https://data.chain.link/ethereum/mainnet/crypto-usd/eth-usd
