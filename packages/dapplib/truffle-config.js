require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn pumpkin gesture glimpse furnace sell'; 
let testAccounts = [
"0x2713f21e149812d78d6317c1e4a3d6526df5f6e698bdc5adedf6a2504e7c86f0",
"0x8e3094be1f6719ccdf6556a44e1c6977e7d628fd71cf8cef3970b4d4d9b9b7af",
"0xcf4a9e83f514af7fe853afcaac32c2d48f1e3053dd9fdc5cb3da6af1899ee994",
"0x4e4526a7ce59a7066a5af205a6db33abd82e2df1a972fceb64bbd807ce92b999",
"0x60ce832376f5c0007a84f648b17467344f903574f3ea7d1f0154f7a3c6520e9d",
"0xadef8a804cefb590e88fb3cb0a8d1c242f138dd120b42791d652188c20eea358",
"0xa2ca14b81f84b139cd95f780edda36edf48bf553fdaddeba6eb90be57c020c66",
"0xc7150c07fd40c915c0830eec473150ca39278e2afa17b446ff58c3da019d7d9a",
"0xfe2036f8267d347c27ad2e45be656a7f0a3ff8123fb09351a52b322941f5831d",
"0xa16143e072092c3f4335f7c0c92e6dc0c0752b15c2201fd83ff0726eb616ee0d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


