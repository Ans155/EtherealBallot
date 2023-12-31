/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "localhost",
   networks: {
      hardhat: {},
      localhost: {
         url: "http://127.0.0.1:8545",
      }
   },
}