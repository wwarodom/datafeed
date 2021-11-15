// https://docs.chain.link/docs/get-the-latest-price/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    AggregatorV3Interface internal priceFeed;

    /**
     * Aggregator: ETH/USD
     * Address (Kovan)  : 0x9326BFA02ADD2366b30bacB125260Af641031331
     * Address (Rinkeby): 0x8A753747A1Fa494EC906cE90E9f37563A8AF630e
     * https://docs.chain.link/docs/ethereum-addresses/  (for Aggregator address)
     */
    constructor(address _address) {
        priceFeed = AggregatorV3Interface(_address);
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int256) {
        (
            uint80 roundID,
            int256 price,
            uint256 startedAt,
            uint256 timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return price;
    }

    function getRoundId() public view returns (uint80) {
        (
            uint80 roundID,
            int256 price,
            uint256 startedAt,
            uint256 timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return roundID;
    }

    function getansweredInRound() public view returns (uint80) {
        (
            uint80 roundID,  
            int256 price,
            uint256 startedAt,
            uint256 timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return answeredInRound;
    }
}
