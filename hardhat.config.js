require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.27", // Adjust this to match your contract's version
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545", // Ganache default RPC URL
      accounts: ["0x447332557055b676f443aff859f41de934426562a5e98533a528a5573d1e41a2",
      ], // Your provided private key
    },
  },
};