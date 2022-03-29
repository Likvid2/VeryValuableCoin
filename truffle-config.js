const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require("fs");
const private_keys = [
    '7396de60e0ed1ed51c3a14fd6e2341a31612267058cd1a1ccaf4a6a27b5c8800',
    'baffefc9fbffcdddd5780ee2ec24a211a97f5981ab1f804398e0c696c7166137'
]
const mnemonic = "drama glide imitate reunion spoon bag ankle price flush abandon coast pyramid priority system vault"

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        //  development: {
        //     host: "127.0.0.1", // Localhost (default: none)
        //     port: 7545, // Standard Ethereum port (default: none)
        //     network_id: "5777" // Any network (default: none)
        //  },

        rinkeby: {
            provider: () => new HDWalletProvider(private_keys, "https://rinkeby.infura.io/3f400e9caddc4cc2be3601b61b0c191d", 0, 2),
            network_id: 4,
            gas: 5500000,
            gasPrice: 10000000,
          }
    },
    compilers: {
        solc: {
            version: "0.8.0"
        }
    }
};
