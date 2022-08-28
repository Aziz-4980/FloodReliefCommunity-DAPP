require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/rtNQHmtmrLrs7dIwb7NgoGyuuO7q1aWT',
      accounts: ['2743a850968330eed6fcdea7e239d421ed664e3bd9fb47008e75e36468d605f4'],
    },
  },
};