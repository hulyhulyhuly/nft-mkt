require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  networks: {
    hardhat: {
      accounts: {
        mnemonic: 'insane fall near cliff swear physical giggle margin source picture village cushion',
      },
      chainId: 1337,
    },
  },
  solidity: '0.8.19',
};
